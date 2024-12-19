// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/radio-button.tsx
var sizeMap = {
  normal: {
    radio: "w-5 h-5",
    label: "text-label1normal-regular"
  },
  small: {
    radio: "w-4 h-4",
    label: "text-label2-regular"
  }
};
function RadioButton({
  size = "normal",
  name,
  className,
  checked,
  value,
  disabled = false,
  label,
  onChange
}) {
  const radio = /* @__PURE__ */ React.createElement(
    "input",
    {
      name,
      checked,
      value,
      onChange: (e) => onChange == null ? void 0 : onChange(e.target.checked),
      disabled,
      className: classNames(
        sizeMap[size].radio,
        "cursor-pointer border-taling-gray-300 text-primary",
        "active:ring-2 active:ring-primary active:ring-offset-1",
        `disabled:cursor-default disabled:opacity-30 disabled:ring-0
        disabled:ring-offset-0`,
        "focus:outline-none focus:ring-0 focus:ring-offset-0",
        "focus-visible:ring-0 focus-visible:ring-offset-0",
        "checked:focus:ring-0 checked:focus:ring-offset-0",
        "appearance-none",
        className
      ),
      type: "radio"
    }
  );
  if (!label) {
    return radio;
  }
  return /* @__PURE__ */ React.createElement(
    "label",
    {
      className: classNames(
        "inline-flex h-fit w-fit items-center gap-2",
        disabled ? "cursor-default" : "cursor-pointer"
      )
    },
    radio,
    /* @__PURE__ */ React.createElement(
      "span",
      {
        className: classNames(
          sizeMap[size].label,
          "text-taling-black",
          disabled ? "opacity-30" : ""
        )
      },
      label
    )
  );
}
export {
  RadioButton as default
};
//# sourceMappingURL=radio-button.mjs.map