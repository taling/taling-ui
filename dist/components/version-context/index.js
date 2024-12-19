"use strict";
"use client";
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

// src/components/version-context/index.tsx
var version_context_exports = {};
__export(version_context_exports, {
  TalingAppIsPreviewVersionContext: () => TalingAppIsPreviewVersionContext
});
module.exports = __toCommonJS(version_context_exports);
var import_react = require("react");
var TalingAppIsPreviewVersionContext = (0, import_react.createContext)({
  isPreviewVersion: false
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TalingAppIsPreviewVersionContext
});
//# sourceMappingURL=index.js.map