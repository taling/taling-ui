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

// src/components/ui/input/label.tsx
var label_exports = {};
__export(label_exports, {
  default: () => InputLabel
});
module.exports = __toCommonJS(label_exports);

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/input/label.tsx
function InputLabel({
  label = "label",
  option,
  className
}) {
  return /* @__PURE__ */ React.createElement("div", { className: classNames("inline-flex items-center gap-0.5", className) }, /* @__PURE__ */ React.createElement("span", { className: "inline-block text-label1normal-regular text-neutral" }, label), option && /* @__PURE__ */ React.createElement(
    "span",
    {
      className: classNames(
        "inline-block text-caption1-regular",
        option === "\uC120\uD0DD" ? "text-high-emphasis" : "text-danger"
      )
    },
    `(${option})`
  ));
}
//# sourceMappingURL=label.js.map