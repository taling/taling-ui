// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/chip/index.tsx
function Chip({ className, caption, color, icon }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classNames(
        className,
        generateChipColor(color),
        "flex px-1 items-center justify-between gap-0.5 rounded text-label2-semibold"
      )
    },
    caption,
    icon && /* @__PURE__ */ React.createElement("div", { className: "w-4 h-4" }, icon)
  );
}
function generateChipColor(color) {
  const chipColorsObject = {
    red: "bg-taling-pink-50 text-taling-pink",
    blue: "bg-taling-light-blue-50 text-taling-light-blue-600",
    violet: "bg-taling-violet-50 text-taling-violet-400",
    gray: "bg-taling-gray-200 text-taling-gray-600"
  };
  return chipColorsObject[color];
}
export {
  Chip as default
};
//# sourceMappingURL=index.mjs.map