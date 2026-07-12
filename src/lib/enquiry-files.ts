import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import ExcelJS from "exceljs";

/**
 * Turns a contact-form enquiry into downloadable files: a nicely laid-out
 * PDF and an Excel workbook, both attached to the notification email.
 */

export type EnquiryField = { label: string; value: string };

const PLUM = rgb(0.35, 0.2, 0.36);
const INK = rgb(0.16, 0.13, 0.18);
const MUTED = rgb(0.45, 0.42, 0.48);
const LINE = rgb(0.88, 0.85, 0.89);

function wrapText(
  text: string,
  font: { widthOfTextAtSize: (t: string, s: number) => number },
  size: number,
  maxWidth: number,
): string[] {
  const lines: string[] = [];
  for (const paragraph of text.split(/\r?\n/)) {
    let current = "";
    for (const word of paragraph.split(/\s+/)) {
      const candidate = current ? `${current} ${word}` : word;
      if (font.widthOfTextAtSize(candidate, size) <= maxWidth || !current) {
        current = candidate;
      } else {
        lines.push(current);
        current = word;
      }
    }
    lines.push(current);
  }
  return lines;
}

export async function buildEnquiryPdf(
  fields: EnquiryField[],
  submittedAt: Date,
): Promise<Buffer> {
  const doc = await PDFDocument.create();
  const regular = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);

  const pageWidth = 595; // A4
  const pageHeight = 842;
  const margin = 56;
  const contentWidth = pageWidth - margin * 2;
  const labelWidth = 170;
  const valueWidth = contentWidth - labelWidth - 12;

  let page = doc.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin;

  const ensureRoom = (needed: number) => {
    if (y - needed < margin) {
      page = doc.addPage([pageWidth, pageHeight]);
      y = pageHeight - margin;
    }
  };

  // Header
  page.drawText("Watch The Baby LLC", {
    x: margin,
    y,
    size: 20,
    font: bold,
    color: PLUM,
  });
  y -= 26;
  page.drawText("New enquiry — contact form", {
    x: margin,
    y,
    size: 12,
    font: regular,
    color: MUTED,
  });
  y -= 16;
  page.drawText(
    `Received ${submittedAt.toLocaleString("en-US", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "America/New_York",
    })} (ET)`,
    { x: margin, y, size: 10, font: regular, color: MUTED },
  );
  y -= 14;
  page.drawLine({
    start: { x: margin, y },
    end: { x: pageWidth - margin, y },
    thickness: 1,
    color: LINE,
  });
  y -= 24;

  for (const { label, value } of fields) {
    const valueLines = wrapText(value || "—", regular, 11, valueWidth);
    const rowHeight = Math.max(valueLines.length, 1) * 15 + 12;
    ensureRoom(rowHeight);

    page.drawText(label, {
      x: margin,
      y,
      size: 11,
      font: bold,
      color: INK,
    });
    let lineY = y;
    for (const line of valueLines) {
      page.drawText(line, {
        x: margin + labelWidth + 12,
        y: lineY,
        size: 11,
        font: regular,
        color: INK,
      });
      lineY -= 15;
    }
    y = lineY - 12;
  }

  return Buffer.from(await doc.save());
}

export async function buildEnquiryXlsx(
  fields: EnquiryField[],
  submittedAt: Date,
): Promise<Buffer> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "Watch The Baby LLC";
  workbook.created = submittedAt;

  const sheet = workbook.addWorksheet("Enquiry");
  sheet.columns = [
    { header: "Field", key: "label", width: 28 },
    { header: "Value", key: "value", width: 70 },
  ];

  const header = sheet.getRow(1);
  header.font = { bold: true, color: { argb: "FFFFFFFF" } };
  header.fill = {
    type: "pattern",
    pattern: "solid",
    fgColor: { argb: "FF59335C" }, // plum
  };

  sheet.addRow({
    label: "Received",
    value: submittedAt.toLocaleString("en-US", {
      dateStyle: "long",
      timeStyle: "short",
      timeZone: "America/New_York",
    }),
  });
  for (const { label, value } of fields) {
    sheet.addRow({ label, value: value || "—" });
  }

  sheet.eachRow((row) => {
    row.getCell(2).alignment = { wrapText: true, vertical: "top" };
  });

  return Buffer.from(await workbook.xlsx.writeBuffer());
}
