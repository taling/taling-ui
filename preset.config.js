const preset = require("./lib/tailwind/preset");

module.exports = {
  ...preset,
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./playground/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
