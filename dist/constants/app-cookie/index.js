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

// src/constants/app-cookie/index.ts
var app_cookie_exports = {};
__export(app_cookie_exports, {
  default: () => app_cookie_default
});
module.exports = __toCommonJS(app_cookie_exports);
var AppCookieConstants = {
  isApp: "taling-app",
  // true / false
  appVersion: "taling-app-version",
  // eg. 4.0.40
  appBuildNum: "taling-app-build-num",
  // eg. 436
  // iOS: "iOS" on newer iOS devices "iPhone OS" on older devices (including older iPad models), "iPadOS" for iPads using iPadOS 15.0 or higher.
  // Android: "Android"
  appPlatform: "taling-app-platform",
  appUserAuth: "taling-app-user-auth",
  crossDomainUserAuth: "taling-crossdomain-user-auth",
  crossDomainTalingPixelSessionId: "taling-pixel:sessionId"
};
var app_cookie_default = AppCookieConstants;
//# sourceMappingURL=index.js.map