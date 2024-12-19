// src/constants/app-cookie/index.ts
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
export {
  app_cookie_default as default
};
//# sourceMappingURL=index.mjs.map