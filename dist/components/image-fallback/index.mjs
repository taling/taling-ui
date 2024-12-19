// src/components/image-fallback/index.tsx
import Image from "next/image";
import { useState } from "react";
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
  const [showFallback, setShowFallback] = useState(false);
  if (showFallback || !src) {
    if (useDefaultImg) {
      const defaultSrc = "//img.taling.me/Content/Images/placeholders/profile-default.jpg";
      return nextImageOption ? /* @__PURE__ */ React.createElement(
        Image,
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
    Image,
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
export {
  ImageFallback as default
};
//# sourceMappingURL=index.mjs.map