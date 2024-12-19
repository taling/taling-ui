// src/components/skeleton/text/index.tsx
function TextSkeletonComponent({
  isLoading,
  expectedWidth,
  className,
  text,
  isOverflowMode
}) {
  const loadingClass = isLoading ? "animate-pulse bg-taling-gray-100 text-transparent rounded-lg" : "";
  const overflowClass = isOverflowMode ? "overflow-y-scroll " : "";
  return /* @__PURE__ */ React.createElement(
    "p",
    {
      className: `${loadingClass} ${overflowClass} ${className != null ? className : ""}`,
      style: {
        width: isLoading ? expectedWidth : "auto"
      }
    },
    text != null ? text : isLoading ? "." : ""
  );
}
export {
  TextSkeletonComponent
};
//# sourceMappingURL=index.mjs.map