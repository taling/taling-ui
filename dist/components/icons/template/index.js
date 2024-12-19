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

// src/components/icons/template/index.tsx
var template_exports = {};
__export(template_exports, {
  TemplateIconSolid: () => TemplateIconSolid,
  default: () => TemplateIconOutline
});
module.exports = __toCommonJS(template_exports);
function TemplateIconOutline(props) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      className: props.className,
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M0.796875 2.40005C0.796875 1.51639 1.51322 0.800049 2.39688 0.800049H21.5969C22.4805 0.800049 23.1969 1.51639 23.1969 2.40005V5.60005C23.1969 6.4837 22.4805 7.20005 21.5969 7.20005H2.39688C1.51322 7.20005 0.796875 6.4837 0.796875 5.60005V2.40005Z",
        fill: "transparent",
        stroke: "currentColor"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M0.796875 12C0.796875 11.1164 1.51322 10.4 2.39688 10.4H11.9969C12.8805 10.4 13.5969 11.1164 13.5969 12V21.6001C13.5969 22.4837 12.8805 23.2001 11.9969 23.2001H2.39688C1.51322 23.2001 0.796875 22.4837 0.796875 21.6001V12Z",
        fill: "transparent",
        stroke: "currentColor"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M18.3969 10.4C17.5132 10.4 16.7969 11.1164 16.7969 12V21.6001C16.7969 22.4837 17.5132 23.2001 18.3969 23.2001H21.5969C22.4805 23.2001 23.1969 22.4837 23.1969 21.6001V12C23.1969 11.1164 22.4805 10.4 21.5969 10.4H18.3969Z",
        fill: "transparent",
        stroke: "currentColor"
      }
    )
  );
}
function TemplateIconSolid(props) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      className: props.className,
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M0.796875 2.40005C0.796875 1.51639 1.51322 0.800049 2.39688 0.800049H21.5969C22.4805 0.800049 23.1969 1.51639 23.1969 2.40005V5.60005C23.1969 6.4837 22.4805 7.20005 21.5969 7.20005H2.39688C1.51322 7.20005 0.796875 6.4837 0.796875 5.60005V2.40005Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M0.796875 12C0.796875 11.1164 1.51322 10.4 2.39688 10.4H11.9969C12.8805 10.4 13.5969 11.1164 13.5969 12V21.6001C13.5969 22.4837 12.8805 23.2001 11.9969 23.2001H2.39688C1.51322 23.2001 0.796875 22.4837 0.796875 21.6001V12Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M18.3969 10.4C17.5132 10.4 16.7969 11.1164 16.7969 12V21.6001C16.7969 22.4837 17.5132 23.2001 18.3969 23.2001H21.5969C22.4805 23.2001 23.1969 22.4837 23.1969 21.6001V12C23.1969 11.1164 22.4805 10.4 21.5969 10.4H18.3969Z",
        fill: "currentColor"
      }
    )
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TemplateIconSolid
});
//# sourceMappingURL=index.js.map