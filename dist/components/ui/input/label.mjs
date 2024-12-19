// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/input/label.tsx
function InputLabel({
  label = "label",
  option,
  className
}) {
  return /* @__PURE__ */ React.createElement("div", { className: classNames("inline-flex items-center gap-0.5", className) }, /* @__PURE__ */ React.createElement("span", { className: "inline-block text-label1normal-regular text-neutral" }, label), option && /* @__PURE__ */ React.createElement(
    "span",
    {
      className: classNames(
        "inline-block text-caption1-regular",
        option === "\uC120\uD0DD" ? "text-high-emphasis" : "text-danger"
      )
    },
    `(${option})`
  ));
}
export {
  InputLabel as default
};
//# sourceMappingURL=label.mjs.map