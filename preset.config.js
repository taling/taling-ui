/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
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
        "taling-pink": {
          DEFAULT: "rgb(var(--taling-pink-500) / <alpha-value>)",
          50: "rgb(var(--taling-pink-50) / <alpha-value>)",
          100: "rgb(var(--taling-pink-100) / <alpha-value>)",
          200: "rgb(var(--taling-pink-200) / <alpha-value>)",
          300: "rgb(var(--taling-pink-300) / <alpha-value>)",
          400: "rgb(var(--taling-pink-400) / <alpha-value>)",
          500: "rgb(var(--taling-pink-500) / <alpha-value>)",
          600: "rgb(var(--taling-pink-600) / <alpha-value>)",
          700: "rgb(var(--taling-pink-700) / <alpha-value>)",
          800: "rgb(var(--taling-pink-800) / <alpha-value>)",
          900: "rgb(var(--taling-pink-900) / <alpha-value>)",
        },
        "taling-green": {
          50: "rgb(var(--taling-green-50) / <alpha-value>)",
          100: "rgb(var(--taling-green-100) / <alpha-value>)",
          200: "rgb(var(--taling-green-200) / <alpha-value>)",
          300: "rgb(var(--taling-green-300) / <alpha-value>)",
          400: "rgb(var(--taling-green-400) / <alpha-value>)",
          500: "rgb(var(--taling-green-500) / <alpha-value>)",
          600: "rgb(var(--taling-green-600) / <alpha-value>)",
          700: "rgb(var(--taling-green-700) / <alpha-value>)",
          800: "rgb(var(--taling-green-800) / <alpha-value>)",
          900: "rgb(var(--taling-green-900) / <alpha-value>)",
        },
        "taling-orange": {
          50: "rgb(var(--taling-orange-50) / <alpha-value>)",
          100: "rgb(var(--taling-orange-100) / <alpha-value>)",
          200: "rgb(var(--taling-orange-200) / <alpha-value>)",
          300: "rgb(var(--taling-orange-300) / <alpha-value>)",
          400: "rgb(var(--taling-orange-400) / <alpha-value>)",
          500: "rgb(var(--taling-orange-500) / <alpha-value>)",
          600: "rgb(var(--taling-orange-600) / <alpha-value>)",
          700: "rgb(var(--taling-orange-700) / <alpha-value>)",
          800: "rgb(var(--taling-orange-800) / <alpha-value>)",
          900: "rgb(var(--taling-orange-900) / <alpha-value>)",
        },
        "taling-red": {
          50: "rgb(var(--taling-red-50) / <alpha-value>)",
          100: "rgb(var(--taling-red-100) / <alpha-value>)",
          200: "rgb(var(--taling-red-200) / <alpha-value>)",
          300: "rgb(var(--taling-red-300) / <alpha-value>)",
          400: "rgb(var(--taling-red-400) / <alpha-value>)",
          500: "rgb(var(--taling-red-500) / <alpha-value>)",
          600: "rgb(var(--taling-red-600) / <alpha-value>)",
          700: "rgb(var(--taling-red-700) / <alpha-value>)",
          800: "rgb(var(--taling-red-800) / <alpha-value>)",
          900: "rgb(var(--taling-red-900) / <alpha-value>)",
        },
        "taling-black": "rgb(var(--taling-black) / <alpha-value>)",
        "taling-white": "rgb(var(--taling-white) / <alpha-value>)",
        "taling-gray": {
          50: "rgb(var(--taling-gray-50) / <alpha-value>)",
          100: "rgb(var(--taling-gray-100) / <alpha-value>)",
          200: "rgb(var(--taling-gray-200) / <alpha-value>)",
          300: "rgb(var(--taling-gray-300) / <alpha-value>)",
          400: "rgb(var(--taling-gray-400) / <alpha-value>)",
          500: "rgb(var(--taling-gray-500) / <alpha-value>)",
          600: "rgb(var(--taling-gray-600) / <alpha-value>)",
          700: "rgb(var(--taling-gray-700) / <alpha-value>)",
          800: "rgb(var(--taling-gray-800) / <alpha-value>)",
          900: "rgb(var(--taling-gray-900) / <alpha-value>)",
        },
        "taling-light-blue": {
          50: "rgb(var(--taling-light-blue-50) / <alpha-value>)",
          100: "rgb(var(--taling-light-blue-100) / <alpha-value>)",
          200: "rgb(var(--taling-light-blue-200) / <alpha-value>)",
          300: "rgb(var(--taling-light-blue-300) / <alpha-value>)",
          400: "rgb(var(--taling-light-blue-400) / <alpha-value>)",
          500: "rgb(var(--taling-light-blue-500) / <alpha-value>)",
          600: "rgb(var(--taling-light-blue-600) / <alpha-value>)",
          700: "rgb(var(--taling-light-blue-700) / <alpha-value>)",
          800: "rgb(var(--taling-light-blue-800) / <alpha-value>)",
          900: "rgb(var(--taling-light-blue-900) / <alpha-value>)",
        },
        "taling-violet": {
          50: "rgb(var(--taling-violet-50) / <alpha-value>)",
          100: "rgb(var(--taling-violet-100) / <alpha-value>)",
          200: "rgb(var(--taling-violet-200) / <alpha-value>)",
          300: "rgb(var(--taling-violet-300) / <alpha-value>)",
          400: "rgb(var(--taling-violet-400) / <alpha-value>)",
          500: "rgb(var(--taling-violet-500) / <alpha-value>)",
          600: "rgb(var(--taling-violet-600) / <alpha-value>)",
          700: "rgb(var(--taling-violet-700) / <alpha-value>)",
          800: "rgb(var(--taling-violet-800) / <alpha-value>)",
          900: "rgb(var(--taling-violet-900) / <alpha-value>)",
        },
        "taling-purple": {
          50: "rgb(var(--taling-purple-50) / <alpha-value>)",
          100: "rgb(var(--taling-purple-100) / <alpha-value>)",
          200: "rgb(var(--taling-purple-200) / <alpha-value>)",
          300: "rgb(var(--taling-purple-300) / <alpha-value>)",
          400: "rgb(var(--taling-purple-400) / <alpha-value>)",
          500: "rgb(var(--taling-purple-500) / <alpha-value>)",
          600: "rgb(var(--taling-purple-600) / <alpha-value>)",
          700: "rgb(var(--taling-purple-700) / <alpha-value>)",
          800: "rgb(var(--taling-purple-800) / <alpha-value>)",
          900: "rgb(var(--taling-purple-900) / <alpha-value>)",
        },
        // border: "#CCCCCC",
        // input: "#CCCCCC",
        // ring: "hsl(var(--ring))",
        // background: "white",
        // foreground: "#111111",
        // pink: {
        //   DEFAULT: "#FF1058",
        //   foreground: "white",
        // },
        // secondary: {
        //   DEFAULT: "#EEF0F4",
        //   foreground: "#111111",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // muted: {
        //   DEFAULT: "#666666",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "#F2F2F2",
        //   foreground: "#111111",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
      },
      textColor: {
        "taling-strong": "rgb(var(--taling-black) / <alpha-value>)",
        "taling-normal": "rgb(var(--taling-gray-900) / <alpha-value>)",
        "taling-neutral": "rgb(var(--taling-gray-800) / <alpha-value>)",
        "taling-high-emphasis": "rgb(var(--taling-gray-600) / <alpha-value>)",
        "taling-low-emphasis": "rgb(var(--taling-gray-400) / <alpha-value>)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        "display1-bold": [
          "2.5rem",
          {
            lineHeight: "3.25rem",
            fontWeight: 700,
          },
        ],
        "display1-regular": [
          "2.5rem",
          {
            lineHeight: "3.25rem",
            fontWeight: 400,
          },
        ],
        "display2-bold": [
          "2.25rem",
          {
            lineHeight: "3rem",
            fontWeight: 700,
          },
        ],
        "display2-regular": [
          "2.25rem",
          {
            lineHeight: "3rem",
            fontWeight: 400,
          },
        ],
        "display3-bold": [
          "1.75rem",
          {
            lineHeight: "2.375rem",
            fontWeight: 700,
          },
        ],
        "display3-regular": [
          "1.75rem",
          {
            lineHeight: "2.375rem",
            fontWeight: 400,
          },
        ],
        "heading1-bold": [
          "1.5rem",
          {
            lineHeight: "2.125rem",
            fontWeight: 700,
          },
        ],
        "heading1-regular": [
          "1.5rem",
          {
            lineHeight: "2.125rem",
            fontWeight: 400,
          },
        ],
        "heading2-semibold": [
          "1.375rem",
          {
            lineHeight: "1.875rem",
            fontWeight: 600,
          },
        ],
        "heading2-regular": [
          "1.375rem",
          {
            lineHeight: "1.875rem",
            fontWeight: 400,
          },
        ],
        "heading3-semibold": [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            fontWeight: 600,
          },
        ],
        "heading3-regular": [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            fontWeight: 400,
          },
        ],
        "headline1-bold": [
          "1.125rem",
          {
            lineHeight: "1.625rem",
            fontWeight: 700,
          },
        ],
        "headline1-regular": [
          "1.125rem",
          {
            lineHeight: "1.625rem",
            fontWeight: 400,
          },
        ],
        "headline2-semibold": [
          "1.063rem",
          {
            lineHeight: "1.5rem",
            fontWeight: 600,
          },
        ],
        "headline2-regular": [
          "1.063rem",
          {
            lineHeight: "1.5rem",
            fontWeight: 400,
          },
        ],
        "body1normal-regular": [
          "1rem",
          {
            lineHeight: "1.25rem",
            fontWeight: 400,
          },
        ],
        "body1normal-bold": [
          "1rem",
          {
            lineHeight: "1.25rem",
            fontWeight: 700,
          },
        ],
        "body1reading-regular": [
          "1rem",
          {
            lineHeight: "1.625rem",
            fontWeight: 400,
          },
        ],
        "body1reading-semibold": [
          "1rem",
          {
            lineHeight: "1.625rem",
            fontWeight: 600,
          },
        ],
        "body2normal-regular": [
          "0.9375rem",
          {
            lineHeight: "1.375rem",
            fontWeight: 400,
          },
        ],
        "body2normal-semibold": [
          "0.9375rem",
          {
            lineHeight: "1.375rem",
            fontWeight: 600,
          },
        ],
        "body2reading-regular": [
          "0.9375rem",
          {
            lineHeight: "1.5rem",
            fontWeight: 400,
          },
        ],
        "body2reading-semibold": [
          "0.9375rem",
          {
            lineHeight: "1.5rem",
            fontWeight: 600,
          },
        ],
        "label1normal-semibold": [
          "0.875rem",
          {
            lineHeight: "1.125rem",
            fontWeight: 600,
          },
        ],
        "label1normal-regular": [
          "0.875rem",
          {
            lineHeight: "1.125rem",
            fontWeight: 400,
          },
        ],
        "label1normal-bold": [
          "0.875rem",
          {
            lineHeight: "1.125rem",
            fontWeight: 700,
          },
        ],
        "label1reading-regular": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: 400,
          },
        ],
        "label1reading-semibold": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: 600,
          },
        ],
        "label2-regular": [
          "0.8125rem",
          {
            lineHeight: "1.125rem",
            fontWeight: 400,
          },
        ],
        "label2-semibold": [
          "0.8125rem",
          {
            lineHeight: "1.125rem",
            fontWeight: 600,
          },
        ],
        "caption1-regular": [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: 400,
          },
        ],
        "caption1-semibold": [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: 600,
          },
        ],
        "caption2-regular": [
          "0.6875rem",
          {
            lineHeight: "0.875rem",
            fontWeight: 400,
          },
        ],
        "caption2-semibold": [
          "0.6875rem",
          {
            lineHeight: "0.875rem",
            fontWeight: 600,
          },
        ],
        // deprecated - 위의 토큰을 사용하세요. 아래 토큰들은 삭제될 예정입니다.
        "headline-1": [
          "2.5rem",
          {
            lineHeight: "3.75rem",
            fontWeight: 700,
          },
        ],
        "headline-2": [
          "2rem",
          {
            lineHeight: "3.125rem",
            fontWeight: 700,
          },
        ],
        "headline-3": [
          "1.5rem",
          {
            lineHeight: "2.25rem",
            fontWeight: 700,
          },
        ],
        "subtitle-1": [
          "1.25rem",
          {
            lineHeight: "2rem",
            fontWeight: 700,
          },
        ],
        "subtitle-2": [
          "1rem",
          {
            lineHeight: "1.75rem",
            fontWeight: 700,
          },
        ],
        "subtitle-3": [
          "0.875rem",
          {
            lineHeight: "1.5rem",
            fontWeight: 700,
          },
        ],
        "body-1": [
          "1rem",
          {
            lineHeight: "1.75rem",
            fontWeight: 400,
          },
        ],
        "body-2": [
          "0.875rem",
          {
            lineHeight: "1.5rem",
            fontWeight: 400,
          },
        ],
        "caption-title": [
          "0.75rem",
          {
            lineHeight: "1.25rem",
            fontWeight: 700,
          },
        ],
        "caption-body": [
          "0.75rem",
          {
            lineHeight: "1.25rem",
            fontWeight: 400,
          },
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
