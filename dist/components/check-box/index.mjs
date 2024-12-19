// src/components/check-box/index.tsx
function CheckBox({
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
      className: "flex items-center cursor-pointer text-taling-gray-800 gap-2 py-2 focus:bg-taling-gray-100",
      onClick: (e) => {
        toggleChecked();
      }
    },
    /* @__PURE__ */ React.createElement(
      "input",
      {
        id: label,
        name: label,
        type: "checkbox",
        checked,
        readOnly: true,
        className: "h-4 w-4 rounded border-gray-300 text-taling-pink focus:ring-transparent focus:ring-0 focus:outline-none "
      }
    ),
    /* @__PURE__ */ React.createElement("label", { className: "min-w-fit cursor-pointer" }, label)
  );
}
export {
  CheckBox as default
};
//# sourceMappingURL=index.mjs.map