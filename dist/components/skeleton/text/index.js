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

// src/components/skeleton/text/index.tsx
var text_exports = {};
__export(text_exports, {
  TextSkeletonComponent: () => TextSkeletonComponent
});
module.exports = __toCommonJS(text_exports);
function TextSkeletonComponent({
  isLoading,
  expectedWidth,
  className,
  text,
  isOverflowMode
}) {
  const loadingClass = isLoading ? "animate-pulse bg-taling-gray-100 text-transparent rounded-lg" : "";
  const overflowClass = isOverflowMode ? "overflow-y-scroll " : "";
  return /* @__PURE__ */ React.createElement(
    "p",
    {
      className: `${loadingClass} ${overflowClass} ${className != null ? className : ""}`,
      style: {
        width: isLoading ? expectedWidth : "auto"
      }
    },
    text != null ? text : isLoading ? "." : ""
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TextSkeletonComponent
});
//# sourceMappingURL=index.js.map