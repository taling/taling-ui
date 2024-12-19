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

// src/components/radio-button/index.tsx
var radio_button_exports = {};
__export(radio_button_exports, {
  default: () => RadioButton
});
module.exports = __toCommonJS(radio_button_exports);
function RadioButton({
  label,
  checked,
  onChange
}) {
  const toggleChecked = () => {
    onChange(!checked);
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "flex items-center cursor-pointer gap-1 py-2 md:py-0 focus:bg-taling-gray-100 ",
      onClick: (e) => {
        toggleChecked();
      }
    },
    /* @__PURE__ */ React.createElement(
      "input",
      {
        id: label,
        name: label,
        type: "radio",
        className: "form-radio h-3 w-3 text-taling-pink focus:ring-transparent focus:ring-0 focus:outline-none focus:ring-transparent",
        checked,
        readOnly: true
      }
    ),
    /* @__PURE__ */ React.createElement("label", { className: "text-taling-gray-800 cursor-pointer " }, label)
  );
}
//# sourceMappingURL=index.js.map