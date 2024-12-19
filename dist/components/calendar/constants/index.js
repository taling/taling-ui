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

// src/components/calendar/constants/index.ts
var constants_exports = {};
__export(constants_exports, {
  colorPresets: () => colorPresets
});
module.exports = __toCommonJS(constants_exports);
var colorPresets = {
  pink: {
    bg: "bg-taling-pink",
    hoverBg: "hover:bg-taling-pink-600",
    focusVisible: "focus-visible:outline-taling-pink-600"
  },
  purple: {
    bg: "bg-taling-purple-500",
    hoverBg: "hover:bg-taling-purple-600",
    focusVisible: "focus-visible:outline-taling-purple-700"
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colorPresets
});
//# sourceMappingURL=index.js.map