"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/chip/index.tsx
var chip_exports = {};
__export(chip_exports, {
  default: () => Chip
});
module.exports = __toCommonJS(chip_exports);

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/chip/index.tsx
function Chip({ className, caption, color, icon }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classNames(
        className,
        generateChipColor(color),
        "flex px-1 items-center justify-between gap-0.5 rounded text-label2-semibold"
      )
    },
    caption,
    icon && /* @__PURE__ */ React.createElement("div", { className: "w-4 h-4" }, icon)
  );
}
function generateChipColor(color) {
  const chipColorsObject = {
    red: "bg-taling-pink-50 text-taling-pink",
    blue: "bg-taling-light-blue-50 text-taling-light-blue-600",
    violet: "bg-taling-violet-50 text-taling-violet-400",
    gray: "bg-taling-gray-200 text-taling-gray-600"
  };
  return chipColorsObject[color];
}
//# sourceMappingURL=index.js.map