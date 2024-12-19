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

// src/components/not-found/index.tsx
var not_found_exports = {};
__export(not_found_exports, {
  default: () => NotFoundComponent
});
module.exports = __toCommonJS(not_found_exports);
function NotFoundComponent() {
  return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-2 items-center justify-center py-12 sm:py-24 text-sm min-h-screen -mt-16" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-extralight py-4" }, "\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"), /* @__PURE__ */ React.createElement("p", null, "\uC694\uCCAD\uD558\uC2E0 \uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", null, "\uC785\uB825\uD558\uC2E0 \uC8FC\uC18C\uAC00 \uC815\uD655\uD55C\uC9C0 \uB2E4\uC2DC \uD55C\uBC88 \uD655\uC778\uD574 \uC8FC\uC138\uC694."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", { href: "/", className: "text-taling-pink underline" }, "\uD648\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30")));
}
//# sourceMappingURL=index.js.map