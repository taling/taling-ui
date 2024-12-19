// src/hooks/cross-domain-cookies/index.ts
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

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
    const expireDate = dayjs().add(30, "day").toDate().toUTCString();
    const key = app_cookie_default.crossDomainTalingPixelSessionId;
    const cookie = findCookie(key);
    if (!cookie) {
      const sessionId = uuidv4();
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
export {
  useCrossDomainCookies as default
};
//# sourceMappingURL=index.mjs.map