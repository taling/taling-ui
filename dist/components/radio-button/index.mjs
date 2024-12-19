// src/components/radio-button/index.tsx
function RadioButton({
  label,
  checked,
  onChange
}) {
  const toggleChecked = () => {
    onChange(!checked);
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "flex items-center cursor-pointer gap-1 py-2 md:py-0 focus:bg-taling-gray-100 ",
      onClick: (e) => {
        toggleChecked();
      }
    },
    /* @__PURE__ */ React.createElement(
      "input",
      {
        id: label,
        name: label,
        type: "radio",
        className: "form-radio h-3 w-3 text-taling-pink focus:ring-transparent focus:ring-0 focus:outline-none focus:ring-transparent",
        checked,
        readOnly: true
      }
    ),
    /* @__PURE__ */ React.createElement("label", { className: "text-taling-gray-800 cursor-pointer " }, label)
  );
}
export {
  RadioButton as default
};
//# sourceMappingURL=index.mjs.map