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

// src/components/icons/naver/index.tsx
var naver_exports = {};
__export(naver_exports, {
  default: () => NaverIcon
});
module.exports = __toCommonJS(naver_exports);

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/icons/naver/index.tsx
function NaverIcon(props) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      className: classNames("text-[#2DB400]", props.className),
      viewBox: "0 0 128 128",
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M81.5802 13H114V114H82.8272L45.4198 61.0062V114H13V13H44.1728L80.9568 65.9938L81.5802 13Z",
        fill: "currentColor"
      }
    )
  );
}
//# sourceMappingURL=index.js.map