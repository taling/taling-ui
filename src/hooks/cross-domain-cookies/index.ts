import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import AppCookieConstants from "../../constants/app-cookie";
import { assertRunningAsClient } from "../../util/check-is-client";

// 도메인은 taling.me에서 변할 예정 없으므로 상수 선언해서 사용
const DOMAIN = "taling.me";

export default function useCrossDomainCookies() {
  /**
   * 쿠키찾기
   * @param key 쿠키 키
   * @returns
   */
  function findCookie(key: string) {
    assertRunningAsClient();
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find((cookie) => cookie.startsWith(key));
    return cookie;
  }

  const setCrossDomainAuthCookie = (accessToken: string) => {
    assertRunningAsClient();
    const key = AppCookieConstants.crossDomainUserAuth;
    document.cookie = `${key}=${accessToken}; path=/; domain=${DOMAIN};`;
  };

  const clearCrossDomainAuthCookie = () => {
    assertRunningAsClient();
    const key = AppCookieConstants.crossDomainUserAuth;
    document.cookie = `${key}=; path=/; domain=${DOMAIN}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  };

  const getCrossDomainAuthCookie = () => {
    assertRunningAsClient();
    const cookie = findCookie(AppCookieConstants.crossDomainUserAuth);
    if (!cookie) return null;
    const [, value] = cookie.split("=");
    return value;
  };

  const getOrCreateTalingPixelSessionId = () => {
    assertRunningAsClient();
    const expireDate = dayjs().add(30, "day").toDate().toUTCString();
    const key = AppCookieConstants.crossDomainTalingPixelSessionId;
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
    getOrCreateTalingPixelSessionId,
  };
}
