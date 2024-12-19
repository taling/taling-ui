// src/components/tracking-loaders/naver/index.tsx
import Script from "next/script";
var _a;
var NAVER_PIXEL_ID = (_a = process.env.NEXT_PUBLIC_NAVER_PIXEL_ID) != null ? _a : "s_568925707495";
var NAVER_INFLOW_DOMAIN = "taling.me";

// src/hooks/naver-pixel/index.ts
var NaverPixelConversionType = /* @__PURE__ */ ((NaverPixelConversionType2) => {
  NaverPixelConversionType2["PURCHASE"] = "1";
  NaverPixelConversionType2["SIGNUP"] = "2";
  NaverPixelConversionType2["ADD_TO_CART"] = "3";
  NaverPixelConversionType2["APPLY"] = "4";
  NaverPixelConversionType2["OTHER"] = "5";
  return NaverPixelConversionType2;
})(NaverPixelConversionType || {});
function useNaverPixel() {
  function sendConversion(value) {
    const w = window;
    const _nasa = {};
    const wcs = w.wcs;
    const wcs_add = w.wcs_add;
    const wcs_do = w.wcs_do;
    if (wcs) {
      _nasa["cnv"] = wcs.cnv(
        "1" /* PURCHASE */.valueOf(),
        `${value}`
      );
      if (wcs_add) {
        wcs_add["wa"] = NAVER_PIXEL_ID;
      }
      wcs.inflow(NAVER_INFLOW_DOMAIN);
      wcs_do == null ? void 0 : wcs_do(_nasa);
      console.log(`\u{1F340} naverPixelStore: sendConversion(${value})`);
    }
  }
  function sendSignUpFinished() {
    const w = window;
    const _nasa = {};
    const wcs = w.wcs;
    const wcs_add = w.wcs_add;
    const wcs_do = w.wcs_do;
    if (wcs) {
      _nasa["cnv"] = wcs.cnv("2" /* SIGNUP */.valueOf(), "0");
      if (wcs_add) {
        wcs_add["wa"] = NAVER_PIXEL_ID;
      }
      wcs.inflow(NAVER_INFLOW_DOMAIN);
      wcs_do == null ? void 0 : wcs_do(_nasa);
      console.log(`\u{1F340} naverPixelStore: sendSignUp()`);
    }
  }
  function sendPageView() {
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
      console.log(`\u{1F340} naverPixelStore: sendPageView()`);
    }
  }
  return {
    sendConversion,
    sendSignUpFinished,
    sendPageView
  };
}
export {
  NaverPixelConversionType,
  useNaverPixel as default
};
//# sourceMappingURL=index.mjs.map