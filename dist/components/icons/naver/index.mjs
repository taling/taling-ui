// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/icons/naver/index.tsx
function NaverIcon(props) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      className: classNames("text-[#2DB400]", props.className),
      viewBox: "0 0 128 128",
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M81.5802 13H114V114H82.8272L45.4198 61.0062V114H13V13H44.1728L80.9568 65.9938L81.5802 13Z",
        fill: "currentColor"
      }
    )
  );
}
export {
  NaverIcon as default
};
//# sourceMappingURL=index.mjs.map