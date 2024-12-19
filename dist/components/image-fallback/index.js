"use strict";
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

// src/components/image-fallback/index.tsx
var image_fallback_exports = {};
__export(image_fallback_exports, {
  default: () => ImageFallback
});
module.exports = __toCommonJS(image_fallback_exports);
var import_image = __toESM(require("next/image"));
var import_react = require("react");
function ImageFallback({
  src,
  alt,
  className = "",
  fallback = /* @__PURE__ */ React.createElement("div", { className: "h-full bg-taling-gray-300 blur-sm " }),
  loading = "lazy",
  nextImageOption,
  useDefaultImg,
  onClick
}) {
  const [showFallback, setShowFallback] = (0, import_react.useState)(false);
  if (showFallback || !src) {
    if (useDefaultImg) {
      const defaultSrc = "//img.taling.me/Content/Images/placeholders/profile-default.jpg";
      return nextImageOption ? /* @__PURE__ */ React.createElement(
        import_image.default,
        {
          src: defaultSrc,
          alt,
          className,
          width: nextImageOption.width,
          height: nextImageOption.height,
          fill: nextImageOption.fill,
          loading,
          onClick
        }
      ) : /* @__PURE__ */ React.createElement(
        "img",
        {
          src: defaultSrc,
          alt,
          className,
          loading,
          onClick
        }
      );
    }
    return /* @__PURE__ */ React.createElement("div", { className }, fallback);
  }
  const protocolCheck = (src2) => {
    if (src2.startsWith("//")) {
      return "https:" + src2;
    }
    if (!src2.startsWith("http://") && !src2.startsWith("https://")) {
      return "https://" + src2;
    }
    return src2;
  };
  const domainCheck = (src2) => {
    if (!src2) return false;
    if (src2.includes("taling.me")) {
      return true;
    }
  };
  return nextImageOption && domainCheck(src) ? /* @__PURE__ */ React.createElement(
    import_image.default,
    {
      src: protocolCheck(src),
      alt,
      className,
      width: nextImageOption.width,
      height: nextImageOption.height,
      fill: nextImageOption.fill,
      placeholder: "blur",
      blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8Ww8AAj8BXkQ+xPEAAAAASUVORK5CYII=",
      loading,
      onError: () => {
        setShowFallback(true);
      },
      onClick
    }
  ) : /* @__PURE__ */ React.createElement(
    "img",
    {
      src,
      alt,
      className,
      loading,
      onError: () => {
        setShowFallback(true);
      },
      onClick
    }
  );
}
//# sourceMappingURL=index.js.map