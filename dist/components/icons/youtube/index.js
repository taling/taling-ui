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

// src/components/icons/youtube/index.tsx
var youtube_exports = {};
__export(youtube_exports, {
  default: () => YoutubeIcon
});
module.exports = __toCommonJS(youtube_exports);

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/icons/youtube/index.tsx
function YoutubeIcon(props) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      className: classNames("text-[#ff0000]", props.className)
    },
    /* @__PURE__ */ React.createElement("g", { transform: "translate(-851 -334)" }, /* @__PURE__ */ React.createElement(
      "rect",
      {
        width: "100",
        height: "100",
        transform: "translate(851 334)",
        fill: "transparent"
      }
    ), /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M97.911,87.731A12.522,12.522,0,0,0,89.07,78.89C81.271,76.8,50,76.8,50,76.8s-31.271,0-39.07,2.09a12.523,12.523,0,0,0-8.841,8.841C0,95.529,0,111.8,0,111.8s0,16.271,2.089,24.069a12.524,12.524,0,0,0,8.841,8.842C18.729,146.8,50,146.8,50,146.8s31.271,0,39.07-2.089a12.523,12.523,0,0,0,8.841-8.842C100,128.072,100,111.8,100,111.8S100,95.529,97.911,87.731ZM40,126.8v-30l25.98,15L40,126.8Z",
        transform: "translate(851 272.2)",
        fill: "currentColor"
      }
    ))
  );
}
//# sourceMappingURL=index.js.map