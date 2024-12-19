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

// src/components/ui/input/error-message.tsx
var error_message_exports = {};
__export(error_message_exports, {
  default: () => InputErrorMessage
});
module.exports = __toCommonJS(error_message_exports);

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/input/error-message.tsx
function InputErrorMessage({
  errorMessage = "error",
  option,
  className
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classNames(
        "inline-flex items-center gap-1 text-caption1-regular text-danger",
        className
      )
    },
    option && /* @__PURE__ */ React.createElement("span", { className: "inline-block" }, option),
    /* @__PURE__ */ React.createElement("span", { className: "inline-block" }, errorMessage)
  );
}
//# sourceMappingURL=error-message.js.map