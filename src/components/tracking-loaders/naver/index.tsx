"use client";

import Script from "next/script";

export const NAVER_PIXEL_ID =
  process.env.NEXT_PUBLIC_NAVER_PIXEL_ID ?? "s_568925707495";
export const NAVER_INFLOW_DOMAIN = "taling.me";

export default function NaverTrackingLoader() {
  return (
    <Script
      id={`naver-pixel-${Math.random().toFixed(5)}`}
      type="text/javascript"
      src="//wcs.naver.net/wcslog.js"
      onLoad={() => {
        console.log(`🍀 NaverTrackingLoader loaded.`);
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
        }
      }}
    ></Script>
  );
}
