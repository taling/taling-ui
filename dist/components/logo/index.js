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

// src/components/logo/index.tsx
var logo_exports = {};
__export(logo_exports, {
  default: () => logo_default
});
module.exports = __toCommonJS(logo_exports);
var LogoComponent = ({ size = "sm", color = "black" }) => {
  const sizeMap = {
    xs: "h-4 w-8 sm:h-4 sm:w-8",
    sm: "h-6 w-12 sm:h-8 sm:w-12",
    md: "h-10 w-16 sm:h-10 sm:w-16",
    lg: "h-12 w-20 sm:h-12 sm:w-20"
  };
  const colorMap = {
    black: "#090304",
    white: "#ffffff"
  };
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      className: sizeMap[size],
      viewBox: "0 0 46 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M12.2923 15.1316L11.6006 19.2996H14.5961L14.3283 20.9033H11.4836H5.64868H5.64599L3.95312 31.0851H9.79069H17.6845L18.4071 26.7409H10.5133L10.7838 25.1143H13.6272H18.0734H18.5888L19.5576 19.2996H19.559L20.2507 15.1316H15.2891H12.2923Z",
        fill: colorMap[color]
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M9.51667 19.2995L10.2057 15.1315H5.97886L6.24935 13.505H10.46L10.8906 10.9931L11.184 9.28044H11.1732H7.24111L7.50756 7.66867H11.4396L12.1031 3.66211H8.16964V3.66077L2.5864 3.66211L0 19.2995H1.99161H9.51667Z",
        fill: colorMap[color]
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M20.2829 0H14.7576L12.5547 13.505H18.0814L18.9776 8.00639H22.7536L23.4641 3.66214H19.6868L20.2829 0Z",
        fill: colorMap[color]
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M37.8906 15.1598H43.4039L45.6377 1.63194H40.1231L37.8906 15.1598Z",
        fill: colorMap[color]
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M30.3896 15.1598C33.7189 15.1598 36.4277 12.4959 36.4277 9.22127C36.4277 5.9466 33.7189 3.28274 30.3896 3.28274C27.0604 3.28274 24.3516 5.9466 24.3516 9.22127C24.3516 12.4959 27.0604 15.1598 30.3896 15.1598ZM30.3896 7.35118C31.4379 7.35118 32.2911 8.1907 32.2911 9.22127C32.2911 10.2518 31.4379 11.0914 30.3896 11.0914C29.3414 11.0914 28.4882 10.2518 28.4882 9.22127C28.4882 8.1907 29.3414 7.35118 30.3896 7.35118Z",
        fill: colorMap[color]
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M38.9172 18.6793C37.3993 17.2223 35.3848 16.4191 33.2465 16.4191C31.1082 16.4191 29.0938 17.2223 27.5758 18.6793C26.8317 19.3937 26.2476 20.2265 25.8386 21.1562C25.412 22.1235 25.1953 23.1514 25.1953 24.2089C25.1953 25.2663 25.412 26.2942 25.8386 27.2629C26.2476 28.1926 26.833 29.0253 27.5758 29.7397C29.0938 31.1968 31.1082 32 33.2465 32C35.3848 32 37.3993 31.1968 38.9172 29.7397C39.6614 29.0253 40.2454 28.1926 40.6545 27.2629C41.0811 26.2942 41.2977 25.2677 41.2977 24.2089C41.2977 23.1501 41.0811 22.1235 40.6545 21.1562C40.2454 20.2265 39.66 19.3937 38.9172 18.6793ZM33.2465 26.8902C31.6721 26.8902 30.391 25.6874 30.391 24.2102C30.391 22.733 31.6721 21.5302 33.2465 21.5302C34.821 21.5302 36.1021 22.733 36.1021 24.2102C36.1021 25.6874 34.821 26.8902 33.2465 26.8902Z",
        fill: colorMap[color]
      }
    )
  );
};
var logo_default = LogoComponent;
//# sourceMappingURL=index.js.map