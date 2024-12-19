const preset = require("./src/lib/tailwind/preset");

module.exports = {
  ...preset,
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
};
