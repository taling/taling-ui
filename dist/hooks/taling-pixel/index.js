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

// src/hooks/taling-pixel/index.ts
var taling_pixel_exports = {};
__export(taling_pixel_exports, {
  default: () => useTalingPixel
});
module.exports = __toCommonJS(taling_pixel_exports);
var import_qs = __toESM(require("qs"));

// src/hooks/cross-domain-cookies/index.ts
var import_dayjs = __toESM(require("dayjs"));
var import_uuid = require("uuid");

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

// src/util/check-is-client/index.ts
function assertRunningAsClient() {
  if (typeof document === "undefined") {
    throw new Error("\u{1F6D1} document is not defined! \uC11C\uBC84\uC0AC\uC774\uB4DC\uC5D0\uC11C \uD638\uCD9C?");
  }
}

// src/hooks/cross-domain-cookies/index.ts
var DOMAIN = "taling.me";
function useCrossDomainCookies() {
  function findCookie(key) {
    assertRunningAsClient();
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find((cookie2) => cookie2.startsWith(key));
    return cookie;
  }
  const setCrossDomainAuthCookie = (accessToken) => {
    assertRunningAsClient();
    const key = app_cookie_default.crossDomainUserAuth;
    document.cookie = `${key}=${accessToken}; path=/; domain=${DOMAIN};`;
  };
  const clearCrossDomainAuthCookie = () => {
    assertRunningAsClient();
    const key = app_cookie_default.crossDomainUserAuth;
    document.cookie = `${key}=; path=/; domain=${DOMAIN}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  };
  const getCrossDomainAuthCookie = () => {
    assertRunningAsClient();
    const cookie = findCookie(app_cookie_default.crossDomainUserAuth);
    if (!cookie) return null;
    const [, value] = cookie.split("=");
    return value;
  };
  const getOrCreateTalingPixelSessionId = () => {
    assertRunningAsClient();
    const expireDate = (0, import_dayjs.default)().add(30, "day").toDate().toUTCString();
    const key = app_cookie_default.crossDomainTalingPixelSessionId;
    const cookie = findCookie(key);
    if (!cookie) {
      const sessionId = (0, import_uuid.v4)();
      document.cookie = `${key}=${sessionId}; path=/; domain=${DOMAIN}; expires=${expireDate};`;
      return sessionId;
    }
    const [, value] = cookie.split("=");
    return value;
  };
  return {
    /**
     * 크로스 도메인 인증 용 쿠키 설정
     * @param accessToken
     */
    setCrossDomainAuthCookie,
    /**
     * 크로스 도메인 인증 용 쿠키 삭제
     */
    clearCrossDomainAuthCookie,
    /**
     * 크로스 도메인 인증 용 쿠키 조회
     */
    getCrossDomainAuthCookie,
    /**
     * 탈잉 픽셀용 세션 쿠키 가져오기. 없다면 생성합니다.
     * @returns string
     */
    getOrCreateTalingPixelSessionId
  };
}

// src/hooks/taling-pixel/index.ts
function useTalingPixel() {
  const talingPixelUrl = process.env.NEXT_PUBLIC_TALING_PIXEL_URL;
  const { getOrCreateTalingPixelSessionId } = useCrossDomainCookies();
  function track({
    eventName,
    talentId,
    userId,
    pathname,
    mktUtm
  }) {
    try {
      const sessionId = getOrCreateTalingPixelSessionId();
      const queryStr = import_qs.default.stringify(
        {
          ev: eventName,
          tId: talentId,
          uId: userId,
          sId: sessionId,
          p: pathname,
          mu: mktUtm
        },
        {
          skipNulls: true
        }
      );
      const trackingUrl = `${talingPixelUrl}/pixel.gif?${queryStr}`;
      const img = new Image(1, 1);
      img.src = trackingUrl;
      img.alt = "Taling Pixel";
      img.style.display = "none";
      document.body.appendChild(img);
    } catch (error) {
      console.log("[TALING][PIXEL] error:", error);
      return;
    }
  }
  return {
    /**
     * 탈잉 픽셀 이벤트 트래킹
     */
    track
  };
}
//# sourceMappingURL=index.js.map