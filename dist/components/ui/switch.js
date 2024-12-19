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

// src/components/ui/switch.tsx
var switch_exports = {};
__export(switch_exports, {
  default: () => Switch
});
module.exports = __toCommonJS(switch_exports);

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/switch.tsx
var import_react = require("react");
var sizeMap = {
  normal: {
    wrapper: "w-[2.8125rem] h-[1.625rem]",
    thumb: {
      size: "w-5 h-5",
      spacing: "top-[0.2rem] left-1",
      translation: "translate-x-[1.1rem]"
    }
  },
  small: {
    wrapper: "w-[2.25rem] h-[1.375rem]",
    thumb: {
      size: "w-4 h-4",
      spacing: "top-[0.2rem] left-[0.2rem]",
      translation: "translate-x-[0.9rem]"
    }
  }
};
function Switch({
  size = "normal",
  disabled = false,
  className,
  onChange
}) {
  const [isActive, setIsActive] = (0, import_react.useState)(false);
  const handleToggle = () => {
    setIsActive(!isActive);
    if (onChange) {
      onChange(!isActive);
    }
  };
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      disabled,
      onClick: handleToggle,
      className: classNames(
        "relative rounded-full",
        "transition-colors duration-200 ease-in-out",
        isActive ? "bg-primary" : "bg-taling-gray-400",
        sizeMap[size].wrapper,
        "disabled:opacity-40",
        className
      )
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classNames(
          "absolute bg-white rounded-full shadow-normal",
          "transition-transform duration-200 ease-in-out",
          sizeMap[size].thumb.size,
          sizeMap[size].thumb.spacing,
          isActive ? sizeMap[size].thumb.translation : "translate-x-0"
        )
      }
    )
  );
}
//# sourceMappingURL=switch.js.map