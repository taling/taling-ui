// src/components/skeleton/basic/index.tsx
function BasicSkeletonComponent({
  height = "h-44"
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `w-full ${height} bg-taling-gray-100 rounded-md animate-pulse`
    }
  );
}
export {
  BasicSkeletonComponent as default
};
//# sourceMappingURL=index.mjs.map