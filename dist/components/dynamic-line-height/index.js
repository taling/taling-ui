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

// src/components/dynamic-line-height/index.tsx
var dynamic_line_height_exports = {};
__export(dynamic_line_height_exports, {
  default: () => dynamic_line_height_default
});
module.exports = __toCommonJS(dynamic_line_height_exports);
var import_react = require("react");
var DynamicLineHeightText = ({
  text,
  singleLineHeight = 16,
  multiLineHeight = 20,
  className = "",
  ...props
}) => {
  const textRef = (0, import_react.useRef)(null);
  const [isSingleLine, setIsSingleLine] = (0, import_react.useState)(true);
  (0, import_react.useLayoutEffect)(() => {
    if (textRef.current) {
      setIsSingleLine(textRef.current.scrollHeight <= singleLineHeight * 2);
    }
  }, [text, singleLineHeight]);
  return /* @__PURE__ */ React.createElement(
    "p",
    {
      ref: textRef,
      className: `transition-all duration-200 ${isSingleLine ? `leading-[${singleLineHeight}px]` : `leading-[${multiLineHeight}px]`} ${className}`,
      ...props
    },
    text
  );
};
var dynamic_line_height_default = DynamicLineHeightText;
//# sourceMappingURL=index.js.map