// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/buttons/PrimaryButton.tsx
var PrimaryButton = ({
  children,
  size = "md",
  showLoadingState = false,
  isEnabled = true
}) => {
  const pad = function() {
    switch (size) {
      case "sm":
        return "px-2 py-1.5 h-8";
      case "md":
        return "px-4 py-2 h-10";
      case "lg":
        return "px-6 py-3 h-12";
    }
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classNames(
        " text-white text-center px-2 py-1.5 rounded-md drop-shadow-sm cursor-pointer",
        isEnabled ? "bg-taling-pink" : "bg-taling-gray-400 cursor-not-allowed",
        pad()
      )
    },
    showLoadingState ? /* @__PURE__ */ React.createElement("div", { className: "flex w-full h-full justify-center items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-1.5 h-1.5 bg-white rounded-full animate-ping" }), /* @__PURE__ */ React.createElement("div", { className: "w-1.5 h-1.5 bg-white rounded-full animate-ping transition-transform delay-300" }), /* @__PURE__ */ React.createElement("div", { className: "w-1.5 h-1.5 bg-white rounded-full animate-ping transition-transform delay-600" })) : children
  );
};
var PrimaryButton_default = PrimaryButton;
export {
  PrimaryButton_default as default
};
//# sourceMappingURL=PrimaryButton.mjs.map