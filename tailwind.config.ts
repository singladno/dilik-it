import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: "#FAFAFB",
          subtle: "#F4F4F7",
        },
        ink: {
          DEFAULT: "#0B0B14",
          muted: "#5A5A6E",
          subtle: "#8A8A9E",
        },
        accent: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
          soft: "#EEF2FF",
          ring: "#A5B4FC",
        },
        border: {
          DEFAULT: "#E6E6EE",
          strong: "#D2D2DD",
        },
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",
      },
      fontFamily: {
        sans: [
          "Manrope",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace",
        ],
      },
      fontSize: {
        "display-xl": [
          "clamp(2rem, 3.6vw, 3.25rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(1.75rem, 3vw, 2.75rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        display: [
          "clamp(1.5rem, 2.4vw, 2.125rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
      },
      borderRadius: {
        sm: "0.5rem",
        DEFAULT: "0.75rem",
        md: "0.875rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px 0 rgba(11, 11, 20, 0.04), 0 1px 4px 0 rgba(11, 11, 20, 0.03)",
        card: "0 2px 8px 0 rgba(11, 11, 20, 0.04), 0 8px 24px -4px rgba(11, 11, 20, 0.06)",
        glow: "0 0 0 1px rgba(79, 70, 229, 0.18), 0 8px 32px -8px rgba(79, 70, 229, 0.35)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        grid: "linear-gradient(to right, rgba(11,11,20,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,11,20,0.06) 1px, transparent 1px)",
        "accent-soft": "linear-gradient(135deg, #EEF2FF 0%, #FAFAFB 100%)",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 60% 0%, rgba(79, 70, 229, 0.18), transparent 70%)",
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.4s ease-out both",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
