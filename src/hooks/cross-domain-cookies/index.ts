import AppCookieConstants from "../../constants/app-cookie";

export default function useCrossDomainCookies() {
  const setCrossDomainAuthCookie = (accessToken: string) => {
    const domain = process.env.NEXT_PUBLIC_SELF;
    // remove subdomain (.co.kr, .co .com ...)
    const domainWithoutSubdomain = domain?.split(".").slice(-2).join(".");
    const cookieDomain = domainWithoutSubdomain || domain;
    const key = AppCookieConstants.crossDoaminUserAuth;
    document.cookie = `${key}=${accessToken}; path=/; domain=${cookieDomain};`;
  };

  const clearCrossDomainAuthCookie = () => {
    const domain = process.env.NEXT_PUBLIC_SELF;
    // remove subdomain (.co.kr, .co .com ...)
    const domainWithoutSubdomain = domain?.split(".").slice(-2).join(".");
    const cookieDomain = domainWithoutSubdomain || domain;
    const key = AppCookieConstants.crossDoaminUserAuth;
    document.cookie = `${key}=; path=/; domain=${cookieDomain}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  };

  const getCrossDomainAuthCookie = () => {
    const key = AppCookieConstants.crossDoaminUserAuth;
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find((cookie) => cookie.startsWith(key));
    if (!cookie) return null;
    const [, value] = cookie.split("=");
    return value;
  };

  return {
    setCrossDomainAuthCookie,
    clearCrossDomainAuthCookie,
    getCrossDomainAuthCookie,
  };
}
