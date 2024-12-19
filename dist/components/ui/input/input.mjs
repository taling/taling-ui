// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/input/input.tsx
import { useEffect, useState } from "react";
function Input({
  value,
  valueType = "string",
  placeholder = "\uC785\uB825\uD574\uC8FC\uC138\uC694",
  minLength,
  maxLength,
  disabled,
  type = "text",
  className,
  displayModifier,
  charFilter,
  onChange,
  onValueLength
}) {
  const [displayValue, setDisplayValue] = useState(
    (value == null ? void 0 : value.toString()) || ""
  );
  const getInputType = () => {
    if (displayModifier) {
      return "text";
    }
    if (valueType === "string") {
      return type;
    }
    if (valueType === "int" || valueType === "float") {
      return "number";
    }
    return type;
  };
  const inputType = getInputType();
  const step = valueType === "float" ? "any" : "1";
  const handleKeyDown = (e) => {
    if (valueType === "int" || valueType === "float") {
      if (["e", "E", "+", "-"].includes(e.key)) {
        e.preventDefault();
      }
    }
    if (valueType === "int" && e.key === ".") {
      e.preventDefault();
    }
  };
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
    if (displayModifier) {
      const unwrappedValue = displayModifier.unwrap(newValue);
      setDisplayValue(displayModifier.wrap(unwrappedValue));
      onValueLength == null ? void 0 : onValueLength(unwrappedValue.length);
      const modifiedEvent = {
        ...e,
        target: {
          ...e.target,
          value: unwrappedValue
        }
      };
      onChange == null ? void 0 : onChange(modifiedEvent);
    } else {
      setDisplayValue(newValue);
      onValueLength == null ? void 0 : onValueLength(newValue.length);
      onChange == null ? void 0 : onChange({
        ...e,
        target: {
          ...e.target,
          value: newValue
        }
      });
    }
  };
  useEffect(() => {
    if (displayModifier) {
      setDisplayValue(displayModifier.wrap((value == null ? void 0 : value.toString()) || ""));
      return;
    }
    setDisplayValue((value == null ? void 0 : value.toString()) || "");
  }, [value, displayModifier]);
  return /* @__PURE__ */ React.createElement(
    "input",
    {
      type: inputType,
      step,
      onKeyDown: handleKeyDown,
      pattern: valueType === "int" ? "[0-9]*" : void 0,
      className: classNames(
        `h-10 min-w-[16.5rem] appearance-none rounded-md border border-taling-gray-300
        bg-taling-white px-3 py-2.5 text-label1normal-regular text-strong
        placeholder:text-label1normal-regular placeholder:text-low-emphasis
        focus:border-primary focus:ring-1 focus:ring-inset focus:ring-primary
        disabled:bg-taling-gray-200 disabled:text-disabled`,
        className
      ),
      value: displayValue,
      placeholder,
      minLength,
      maxLength,
      disabled,
      onChange: handleChange
    }
  );
}
export {
  Input as default
};
//# sourceMappingURL=input.mjs.map