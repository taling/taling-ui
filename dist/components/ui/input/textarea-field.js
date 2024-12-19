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

// src/components/ui/input/textarea-field.tsx
var textarea_field_exports = {};
__export(textarea_field_exports, {
  default: () => TextareaField
});
module.exports = __toCommonJS(textarea_field_exports);
var import_react = require("react");

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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

// src/components/ui/input/textarea-field.tsx
function TextareaField({
  label,
  labelOption,
  value,
  placeholder,
  minLength,
  maxLength,
  disabled,
  description,
  errorMessage,
  className,
  onChange
}) {
  const [filteredLength, setFilteredLength] = (0, import_react.useState)(0);
  const lengthInfo = maxLength ? `(${filteredLength}/${maxLength})` : void 0;
  return /* @__PURE__ */ React.createElement("div", { className: "inline-flex w-fit flex-col gap-1" }, /* @__PURE__ */ React.createElement(InputLabel, { label, option: labelOption }), /* @__PURE__ */ React.createElement(
    Textarea,
    {
      value,
      placeholder,
      minLength,
      maxLength,
      disabled,
      onChange,
      onValueLength: setFilteredLength,
      className
    }
  ), !errorMessage && description && /* @__PURE__ */ React.createElement(InputDescription, { description, option: lengthInfo }), errorMessage && /* @__PURE__ */ React.createElement(InputErrorMessage, { errorMessage, option: lengthInfo }));
}
//# sourceMappingURL=textarea-field.js.map