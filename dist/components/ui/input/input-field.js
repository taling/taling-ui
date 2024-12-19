"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/ui/input/input-field.tsx
var input_field_exports = {};
__export(input_field_exports, {
  default: () => InputField
});
module.exports = __toCommonJS(input_field_exports);

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/input/input-field.tsx
var import_react2 = require("react");

// src/components/ui/input/description.tsx
function InputDescription({
  description = "description",
  option,
  className
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classNames(
        "inline-flex items-center gap-1 text-caption1-regular text-neutral",
        className
      )
    },
    option && /* @__PURE__ */ React.createElement("span", { className: "inline-block" }, option),
    /* @__PURE__ */ React.createElement("span", { className: "inline-block" }, description)
  );
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

// src/components/ui/input/input.tsx
var import_react = require("react");
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
  const [displayValue, setDisplayValue] = (0, import_react.useState)(
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
  (0, import_react.useEffect)(() => {
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

// src/components/ui/input/input-field.tsx
function InputField({
  label,
  labelOption,
  type,
  value,
  valueType,
  placeholder,
  minLength,
  maxLength,
  disabled,
  description,
  errorMessage,
  displayModifier,
  className,
  inputClassName,
  charFilter,
  onChange
}) {
  const [filteredLength, setFilteredLength] = (0, import_react2.useState)(0);
  const lengthInfo = maxLength ? `(${filteredLength}/${maxLength})` : void 0;
  return /* @__PURE__ */ React.createElement("div", { className: classNames("inline-flex flex-col gap-1", className) }, /* @__PURE__ */ React.createElement(InputLabel, { label, option: labelOption }), /* @__PURE__ */ React.createElement(
    Input,
    {
      type,
      value,
      valueType,
      placeholder,
      minLength,
      maxLength,
      disabled,
      displayModifier,
      charFilter,
      onChange,
      onValueLength: setFilteredLength,
      className: inputClassName
    }
  ), !errorMessage && description && /* @__PURE__ */ React.createElement(InputDescription, { description, option: lengthInfo }), errorMessage && /* @__PURE__ */ React.createElement(InputErrorMessage, { errorMessage, option: lengthInfo }));
}
//# sourceMappingURL=input-field.js.map