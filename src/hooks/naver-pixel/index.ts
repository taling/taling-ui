import {
  NAVER_INFLOW_DOMAIN,
  NAVER_PIXEL_ID,
} from "../../components/tracking-loaders/naver";

export enum NaverPixelConversionType {
  PURCHASE = "1",
  SIGNUP = "2",
  ADD_TO_CART = "3",
  APPLY = "4",
  OTHER = "5",
}

export default function useNaverPixel() {
  function sendConversion(value: string | number) {
    const w = window as any;
    const _nasa = {} as any;
    const wcs = w.wcs;
    const wcs_add = w.wcs_add;
    const wcs_do = w.wcs_do;
    if (wcs) {
      _nasa["cnv"] = wcs.cnv(
        NaverPixelConversionType.PURCHASE.valueOf(),
        `${value}`
      );
      if (wcs_add) {
        wcs_add["wa"] = NAVER_PIXEL_ID;
      }
      wcs.inflow(NAVER_INFLOW_DOMAIN);
      wcs_do?.(_nasa);
      console.log(`🍀 naverPixelStore: sendConversion(${value})`);
    }
  }
  function sendSignUpFinished() {
    const w = window as any;
    const _nasa = {} as any;
    const wcs = w.wcs;
    const wcs_add = w.wcs_add;
    const wcs_do = w.wcs_do;
    if (wcs) {
      _nasa["cnv"] = wcs.cnv(NaverPixelConversionType.SIGNUP.valueOf(), "0");
      if (wcs_add) {
        wcs_add["wa"] = NAVER_PIXEL_ID;
      }
      wcs.inflow(NAVER_INFLOW_DOMAIN);
      wcs_do?.(_nasa);
      console.log(`🍀 naverPixelStore: sendSignUp()`);
    }
  }
  function sendPageView() {
    const w = window as any;
    const _nasa = {} as any;
    const wcs = w.wcs;
    const wcs_add = w.wcs_add;
    const wcs_do = w.wcs_do;
    if (wcs) {
      if (wcs_add) {
        wcs_add["wa"] = NAVER_PIXEL_ID;
      }
      wcs.inflow(NAVER_INFLOW_DOMAIN);
      wcs_do?.(_nasa);
      console.log(`🍀 naverPixelStore: sendPageView()`);
    }
  }

  return {
    sendConversion,
    sendSignUpFinished,
    sendPageView,
  };
}
