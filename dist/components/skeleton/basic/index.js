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

// src/components/skeleton/basic/index.tsx
var basic_exports = {};
__export(basic_exports, {
  default: () => BasicSkeletonComponent
});
module.exports = __toCommonJS(basic_exports);
function BasicSkeletonComponent({
  height = "h-44"
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `w-full ${height} bg-taling-gray-100 rounded-md animate-pulse`
    }
  );
}
//# sourceMappingURL=index.js.map