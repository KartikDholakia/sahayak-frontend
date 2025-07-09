import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Sahayak Brand Colors
        teal: {
          DEFAULT: "#2D5A5A",
          50: "#E8F4F4",
          100: "#D1E9E9",
          500: "#2D5A5A",
          600: "#1F4444",
          700: "#173434",
          800: "#0F2424",
          900: "#071212",
        },
        orange: {
          DEFAULT: "#FF8C42",
          50: "#FFF3ED",
          100: "#FFE7DB",
          400: "#FFB885",
          500: "#FF8C42",
          600: "#E6732A",
          700: "#CC5A12",
          800: "#B34100",
          900: "#994100",
        },
        sage: {
          DEFAULT: "#7FB069",
          50: "#F4F8F2",
          100: "#E9F1E5",
          400: "#94C285",
          500: "#7FB069",
          600: "#6B9E51",
          700: "#578C39",
          800: "#437A21",
          900: "#2F6809",
        },
        cream: {
          DEFAULT: "#F7F3E9",
          50: "#FEFCF7",
          100: "#F7F3E9",
          200: "#F0EBDB",
          300: "#E9E3CD",
          400: "#E2DBBF",
          500: "#DBD3B1",
        },
        charcoal: {
          DEFAULT: "#2C3E50",
          400: "#34495E",
          500: "#2C3E50",
          600: "#243442",
          700: "#1C2A34",
          800: "#142026",
          900: "#0C1618",
        },
        skyblue: {
          DEFAULT: "#B8D4E3",
          50: "#F7FAFB",
          100: "#EFF5F7",
          200: "#E7F0F3",
          300: "#DFEBEF",
          400: "#D7E6EB",
          500: "#B8D4E3",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
