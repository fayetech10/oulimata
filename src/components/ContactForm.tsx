"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "./Icons";
import { services } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const fieldClass =
  "w-full rounded-2xl border border-line bg-cream/60 px-4 py-3 text-ink placeholder:text-ink-muted transition-colors focus:border-plum focus:bg-surface focus:outline-none focus:ring-2 focus:ring-plum/30 aria-[invalid=true]:border-rose aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-rose/30";
const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function validate(data: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name?.trim()) errors.name = "Please tell us your name.";
  if (!data.email?.trim()) {
    errors.email = "Please add your email so we can reply.";
  } else if (!isEmail(data.email.trim())) {
    errors.email = "That email doesn't look right — please double-check it.";
  }
  if (!data.message?.trim())
    errors.message = "Please tell us a little about what you need.";
  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm font-medium text-rose-deep">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [attempted, setAttempted] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  // Move screen-reader & keyboard focus to the confirmation panel.
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function revalidate(form: HTMLFormElement) {
    if (!attempted) return;
    const data = Object.fromEntries(
      new FormData(form).entries(),
    ) as Record<string, string>;
    setFieldErrors(validate(data));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(
      new FormData(form).entries(),
    ) as Record<string, string>;

    setAttempted(true);
    const errors = validate(data);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      const first = (["name", "email", "message"] as const).find(
        (k) => errors[k],
      );
      const el = first && form.elements.namedItem(first);
      if (el instanceof HTMLElement) el.focus();
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(body?.error || "Request failed");
      }
      setStatus("success");
      setAttempted(false);
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error && err.message !== "Request failed"
          ? `${err.message} You can also email us directly and we'll reply right away.`
          : "Something went wrong sending your message. Please email us directly and we'll reply right away.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="flex flex-col items-center justify-center rounded-4xl border border-plum/30 bg-plum-tint/70 p-10 text-center focus:outline-none"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-plum text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold text-ink">
          Thank you — message received!
        </h3>
        <p className="mt-3 max-w-sm leading-relaxed text-ink-soft">
          We&apos;ll be in touch within one business day to arrange your free
          consultation. Talk soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-plum-deep underline underline-offset-4 hover:text-plum"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onBlurCapture={(e) => revalidate(e.currentTarget)}
      className="surface-card relative p-7 sm:p-9"
      noValidate
    >
      {/* Honeypot — invisible to humans, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="company">Company (leave blank)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name <span className="text-rose">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jasmine Carter"
            className={fieldClass}
            aria-invalid={fieldErrors.name ? true : undefined}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          <FieldError id="name-error" message={fieldErrors.name} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-rose">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={fieldClass}
            aria-invalid={fieldErrors.email ? true : undefined}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          <FieldError id="email-error" message={fieldErrors.email} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+1 (301) …"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            I&apos;m interested in
          </label>
          <select id="service" name="service" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Choose a service…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet — help me choose</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="timing" className={labelClass}>
          Due date or baby&apos;s age
        </label>
        <input
          id="timing"
          name="timing"
          type="text"
          placeholder="e.g. due in March, or baby is 3 weeks old"
          className={fieldClass}
        />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="dateOfBirth" className={labelClass}>
            Baby&apos;s date of birth
          </label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="feedingPreference" className={labelClass}>
            Feeding preference
          </label>
          <select
            id="feedingPreference"
            name="feedingPreference"
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Choose an option…
            </option>
            <option value="Breastfeeding">Breastfeeding</option>
            <option value="Formula">Formula</option>
            <option value="Combination">Combination (breast & formula)</option>
            <option value="Pumping / expressed milk">
              Pumping / expressed milk
            </option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="address" className={labelClass}>
          Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          placeholder="Street, city & ZIP"
          className={fieldClass}
        />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="parking" className={labelClass}>
            Parking
          </label>
          <input
            id="parking"
            name="parking"
            type="text"
            placeholder="e.g. driveway, street parking, garage"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="pets" className={labelClass}>
            Pets
          </label>
          <input
            id="pets"
            name="pets"
            type="text"
            placeholder="e.g. one friendly dog — or none"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="allergies" className={labelClass}>
          Allergies
        </label>
        <input
          id="allergies"
          name="allergies"
          type="text"
          placeholder="Anything we should know about — or none"
          className={fieldClass}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          How can we help? <span className="text-rose">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about what you're looking for…"
          className={`${fieldClass} resize-y`}
          aria-invalid={fieldErrors.message ? true : undefined}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
        />
        <FieldError id="message-error" message={fieldErrors.message} />
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <p
            role="alert"
            className="mt-5 rounded-2xl border border-rose/40 bg-rose-tint px-4 py-3 text-sm text-ink"
          >
            {error}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group/btn mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-plum px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-200 touch-manipulation hover:-translate-y-0.5 hover:bg-plum-deep hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <svg
              className="h-4 w-4 animate-spin motion-reduce:animate-none"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeOpacity="0.3"
                strokeWidth="3"
              />
              <path
                d="M22 12a10 10 0 0 0-10-10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send message
            <Icon
              name="arrow-right"
              className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
            />
          </>
        )}
      </button>

      <p className="mt-4 text-xs leading-relaxed text-ink-muted">
        By sending this message you agree to be contacted about your enquiry.
        We&apos;ll never share your details.
      </p>
    </form>
  );
}
