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

// src/components/check-box/index.tsx
var check_box_exports = {};
__export(check_box_exports, {
  default: () => CheckBox
});
module.exports = __toCommonJS(check_box_exports);
function CheckBox({
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
      className: "flex items-center cursor-pointer text-taling-gray-800 gap-2 py-2 focus:bg-taling-gray-100",
      onClick: (e) => {
        toggleChecked();
      }
    },
    /* @__PURE__ */ React.createElement(
      "input",
      {
        id: label,
        name: label,
        type: "checkbox",
        checked,
        readOnly: true,
        className: "h-4 w-4 rounded border-gray-300 text-taling-pink focus:ring-transparent focus:ring-0 focus:outline-none "
      }
    ),
    /* @__PURE__ */ React.createElement("label", { className: "min-w-fit cursor-pointer" }, label)
  );
}
//# sourceMappingURL=index.js.map