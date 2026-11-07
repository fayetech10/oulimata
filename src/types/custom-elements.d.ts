import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "review-widget": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          "widget-id"?: string;
        },
        HTMLElement
      >;
    }
  }

  namespace React.JSX {
    interface IntrinsicElements {
      "review-widget": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          "widget-id"?: string;
        },
        HTMLElement
      >;
    }
  }
}
