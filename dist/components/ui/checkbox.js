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

// src/components/ui/checkbox.tsx
var checkbox_exports = {};
__export(checkbox_exports, {
  default: () => Checkbox
});
module.exports = __toCommonJS(checkbox_exports);

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/checkbox.tsx
var sizeMap = {
  normal: {
    checkbox: "w-5 h-5 rounded-md",
    label: "text-label1normal-regular"
  },
  small: { checkbox: "w-4 h-4 rounded", label: "text-label2-regular" }
};
function Checkbox({
  size = "normal",
  disabled = false,
  className,
  checked,
  label,
  onChange
}) {
  const checkbox = /* @__PURE__ */ React.createElement(
    "input",
    {
      checked,
      onChange: (e) => onChange == null ? void 0 : onChange(e.target.checked),
      disabled,
      className: classNames(
        sizeMap[size].checkbox,
        "border-1 cursor-pointer border-taling-gray-300 text-primary",
        `disabled:cursor-default disabled:opacity-30 disabled:ring-0
        disabled:ring-offset-0`,
        "active:ring-2 active:ring-primary active:ring-offset-1",
        "focus:outline-none focus:ring-0 focus:ring-offset-0",
        "focus-visible:ring-0 focus-visible:ring-offset-0",
        "checked:focus:ring-0 checked:focus:ring-offset-0",
        "appearance-none",
        className
      ),
      type: "checkbox"
    }
  );
  if (!label) {
    return checkbox;
  }
  return /* @__PURE__ */ React.createElement(
    "label",
    {
      className: classNames(
        "inline-flex h-fit w-fit items-center gap-2",
        disabled ? "cursor-default" : "cursor-pointer"
      )
    },
    checkbox,
    /* @__PURE__ */ React.createElement(
      "span",
      {
        className: classNames(
          sizeMap[size].label,
          "text-taling-black",
          disabled ? "opacity-30" : ""
        )
      },
      label
    )
  );
}
//# sourceMappingURL=checkbox.js.map