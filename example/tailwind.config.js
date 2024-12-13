/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../src/**/*.{js,ts,jsx,tsx}", // UI 라이브러리 소스도 포함
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
