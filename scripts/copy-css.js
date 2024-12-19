const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../dist/styles");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.copyFileSync(
  path.join(__dirname, "../css/global.css"),
  path.join(dir, "global.css"),
);
