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

// src/constants/app-download-url/index.ts
var app_download_url_exports = {};
__export(app_download_url_exports, {
  APP_DOWNLOAD_URLS: () => APP_DOWNLOAD_URLS
});
module.exports = __toCommonJS(app_download_url_exports);
var APP_DOWNLOAD_URLS = {
  Android: "https://play.google.com/store/apps/details?id=com.taling",
  iOS: "https://apps.apple.com/kr/app/%ED%83%88%EC%9E%89-%EB%B0%B0%EC%9B%80%EC%9D%84-%EC%9E%AC%EB%B0%8C%EA%B2%8C/id1153218962"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  APP_DOWNLOAD_URLS
});
//# sourceMappingURL=index.js.map