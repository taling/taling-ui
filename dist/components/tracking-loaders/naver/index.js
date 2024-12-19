"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/tracking-loaders/naver/index.tsx
var naver_exports = {};
__export(naver_exports, {
  NAVER_INFLOW_DOMAIN: () => NAVER_INFLOW_DOMAIN,
  NAVER_PIXEL_ID: () => NAVER_PIXEL_ID,
  default: () => NaverTrackingLoader
});
module.exports = __toCommonJS(naver_exports);
var import_script = __toESM(require("next/script"));
var _a;
var NAVER_PIXEL_ID = (_a = process.env.NEXT_PUBLIC_NAVER_PIXEL_ID) != null ? _a : "s_568925707495";
var NAVER_INFLOW_DOMAIN = "taling.me";
function NaverTrackingLoader() {
  return /* @__PURE__ */ React.createElement(
    import_script.default,
    {
      id: `naver-pixel-${Math.random().toFixed(5)}`,
      type: "text/javascript",
      src: "//wcs.naver.net/wcslog.js",
      onLoad: () => {
        console.log(`\u{1F340} NaverTrackingLoader loaded.`);
        const w = window;
        const _nasa = {};
        const wcs = w.wcs;
        const wcs_add = w.wcs_add;
        const wcs_do = w.wcs_do;
        if (wcs) {
          if (wcs_add) {
            wcs_add["wa"] = NAVER_PIXEL_ID;
          }
          wcs.inflow(NAVER_INFLOW_DOMAIN);
          wcs_do == null ? void 0 : wcs_do(_nasa);
        }
      }
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NAVER_INFLOW_DOMAIN,
  NAVER_PIXEL_ID
});
//# sourceMappingURL=index.js.map