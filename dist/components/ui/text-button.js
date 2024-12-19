"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/ui/text-button.tsx
var text_button_exports = {};
__export(text_button_exports, {
  TextButton: () => TextButton,
  textButtonVariants: () => textButtonVariants
});
module.exports = __toCommonJS(text_button_exports);
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var React = __toESM(require("react"));

// src/util/tailwind-util/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/text-button.tsx
var iconContainerVariants = (0, import_class_variance_authority.cva)("inline-flex items-center justify-center", {
  variants: {
    size: {
      xs: "h-4 w-4",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-6 w-6"
    }
  },
  defaultVariants: {
    size: "lg"
  }
});
var textButtonVariants = (0, import_class_variance_authority.cva)(
  [
    "inline-flex items-center justify-center gap-1 rounded-lg transition-colors",
    "disabled:pointer-events-none"
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-taling-white text-primary [&]:text-primary",
          "disabled:text-disabled",
          "hover:bg-taling-gray-900/5",
          "active:bg-taling-gray-900/10"
        ],
        secondary: [
          "bg-taling-white text-high-emphasis [&]:text-high-emphasis",
          "disabled:text-disabled",
          "hover:bg-taling-gray-900/5",
          "active:bg-taling-gray-900/10"
        ],
        underlined: [
          "bg-taling-white text-high-emphasis [&]:text-high-emphasis underline underline-offset-1",
          "disabled:text-disabled",
          "hover:bg-taling-gray-900/5",
          "active:bg-taling-gray-900/10"
        ]
      },
      size: {
        xs: "h-6 min-w-[2.5rem] rounded-lg px-1 py-1 text-caption1-semibold",
        sm: "h-7 min-w-[2.5rem] rounded-lg px-1 py-1 text-label1normal-semibold",
        md: "h-8 min-w-[2.5rem] rounded-lg px-1 py-1 text-body2normal-semibold",
        lg: "h-8 min-w-[2.5rem] rounded-lg px-1 py-1 text-body2normal-regular"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "lg"
    }
  }
);
var TextButton = React.forwardRef(
  ({
    className,
    variant,
    size,
    asChild = false,
    leftIcon,
    rightIcon,
    children,
    ...props
  }, ref) => {
    const Comp = asChild ? import_react_slot.Slot : "button";
    return /* @__PURE__ */ React.createElement(
      Comp,
      {
        className: cn(textButtonVariants({ variant, size, className })),
        ref,
        ...props
      },
      leftIcon && /* @__PURE__ */ React.createElement("div", { className: cn(iconContainerVariants({ size })) }, leftIcon),
      children,
      rightIcon && /* @__PURE__ */ React.createElement("div", { className: cn(iconContainerVariants({ size })) }, rightIcon)
    );
  }
);
TextButton.displayName = "TextButton";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TextButton,
  textButtonVariants
});
//# sourceMappingURL=text-button.js.map