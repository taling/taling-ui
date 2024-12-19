"use client";

// src/components/tracking-loaders/naver/index.tsx
import Script from "next/script";
var _a;
var NAVER_PIXEL_ID = (_a = process.env.NEXT_PUBLIC_NAVER_PIXEL_ID) != null ? _a : "s_568925707495";
var NAVER_INFLOW_DOMAIN = "taling.me";
function NaverTrackingLoader() {
  return /* @__PURE__ */ React.createElement(
    Script,
    {
      id: `naver-pixel-${Math.random().toFixed(5)}`,
      type: "text/javascript",
      src: "//wcs.naver.net/wcslog.js",
      onLoad: () => {
        console.log(`\u{1F340} NaverTrackingLoader loaded.`);
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
        }
      }
    }
  );
}
export {
  NAVER_INFLOW_DOMAIN,
  NAVER_PIXEL_ID,
  NaverTrackingLoader as default
};
//# sourceMappingURL=index.mjs.map