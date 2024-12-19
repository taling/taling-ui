// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/input/textarea.tsx
function Textarea({
  value,
  placeholder = "\uC785\uB825\uD574\uC8FC\uC138\uC694",
  minLength,
  maxLength,
  disabled,
  className,
  charFilter,
  onChange,
  onValueLength
}) {
  const filterValue = (value2) => {
    if (!charFilter) return value2;
    if (typeof charFilter === "function") {
      return charFilter(value2);
    }
    if (charFilter instanceof RegExp) {
      return value2.replace(charFilter, "");
    }
    return value2.replace(new RegExp(charFilter, "g"), "");
  };
  const handleChange = (e) => {
    let newValue = e.target.value;
    newValue = filterValue(newValue);
    onValueLength == null ? void 0 : onValueLength(newValue.length);
    onChange == null ? void 0 : onChange({ ...e, target: { ...e.target, value: newValue } });
  };
  return /* @__PURE__ */ React.createElement(
    "textarea",
    {
      className: classNames(
        `min-h-[9.125rem] min-w-[16.5rem] appearance-none rounded-md border
        border-taling-gray-300 bg-taling-white px-3 py-2.5 text-label1normal-regular
        text-strong placeholder:text-label1normal-regular placeholder:text-low-emphasis
        focus:border-primary focus:ring-1 focus:ring-inset focus:ring-primary
        disabled:bg-taling-gray-200 disabled:text-disabled`,
        className
      ),
      value,
      placeholder,
      minLength,
      maxLength,
      disabled,
      onChange: handleChange
    }
  );
}
export {
  Textarea as default
};
//# sourceMappingURL=textarea.mjs.map