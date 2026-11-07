import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Warm, faintly pink ivory — the page background
        cream: "#FBF6F4",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#372339",
          soft: "#5D4A60",
          muted: "#6E5D72",
        },
        // Deep plum — the brand's signature purple
        plum: {
          DEFAULT: "#4A2650",
          deep: "#381C3D",
          soft: "#EDE3F0",
          tint: "#F7F2F8",
        },
        // Dusty rose / berry — the secondary brand colour
        rose: {
          DEFAULT: "#B05E6D",
          deep: "#9A4C5B",
          soft: "#F6E0E4",
          tint: "#FBF1F3",
        },
        // Champagne gold — the logo's accent
        gold: {
          DEFAULT: "#C79E66",
          deep: "#A67F4B",
          soft: "#F5EBDB",
        },
        line: "#EFE2E7",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(55, 35, 61, 0.05), 0 12px 32px -12px rgba(55, 35, 61, 0.14)",
        lift: "0 2px 4px rgba(55, 35, 61, 0.06), 0 24px 48px -20px rgba(55, 35, 61, 0.26)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
        "zoom-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        "pulse-soft": "pulse-soft 5s ease-in-out infinite",
        "zoom-in": "zoom-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
