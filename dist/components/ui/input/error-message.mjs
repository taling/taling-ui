// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/input/error-message.tsx
function InputErrorMessage({
  errorMessage = "error",
  option,
  className
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classNames(
        "inline-flex items-center gap-1 text-caption1-regular text-danger",
        className
      )
    },
    option && /* @__PURE__ */ React.createElement("span", { className: "inline-block" }, option),
    /* @__PURE__ */ React.createElement("span", { className: "inline-block" }, errorMessage)
  );
}
export {
  InputErrorMessage as default
};
//# sourceMappingURL=error-message.mjs.map