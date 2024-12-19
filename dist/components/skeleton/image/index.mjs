// src/components/skeleton/image/index.tsx
function ImageSkeletonComponent({
  isLoading = true,
  className,
  imageUrl,
  imageAlt,
  placeholder
}) {
  if (isLoading) {
    return /* @__PURE__ */ React.createElement("div", { className }, placeholder);
  }
  return /* @__PURE__ */ React.createElement("div", { className }, imageUrl ? /* @__PURE__ */ React.createElement(
    "img",
    {
      className: "w-full h-full object-cover",
      src: imageUrl,
      alt: imageAlt
    }
  ) : placeholder);
}
export {
  ImageSkeletonComponent
};
//# sourceMappingURL=index.mjs.map