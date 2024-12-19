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

// src/components/ui/button.tsx
var button_exports = {};
__export(button_exports, {
  Button: () => Button,
  buttonVariants: () => buttonVariants
});
module.exports = __toCommonJS(button_exports);
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var React = __toESM(require("react"));

// src/util/tailwind-util/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/button.tsx
var iconContainerVariants = (0, import_class_variance_authority.cva)("inline-flex items-center justify-center", {
  variants: {
    size: {
      xs: "h-4 w-4",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-6 w-6",
      // deprecated - default는 추후 사라질 예정.
      xl: "h-6 w-6",
      default: "h-6 w-6"
    }
  },
  defaultVariants: {
    size: "lg"
  }
});
var buttonVariants = (0, import_class_variance_authority.cva)(
  [
    "inline-flex items-center justify-center gap-1 rounded-lg transition-colors",
    "disabled:pointer-events-none"
  ],
  {
    variants: {
      variant: {
        solidPrimary: [
          "bg-primary text-taling-white [&]:text-taling-white",
          "disabled:bg-taling-gray-400 disabled:text-interaction-disabled/50",
          "hover:bg-taling-pink-600",
          "active:bg-taling-pink-700"
        ],
        solidSecondary: [
          "bg-taling-gray-100 text-strong [&]:text-strong",
          "disabled:bg-taling-gray-400 disabled:text-interaction-disabled/50",
          "hover:bg-taling-gray-200",
          "active:bg-taling-gray-300"
        ],
        outlinedPrimary: [
          "bg-taling-white border border-primary text-primary [&]:text-primary",
          "disabled:border-interaction-inactive disabled:text-disabled/80",
          "hover:bg-primary/5",
          "active:bg-primary/15"
        ],
        outlinedSecondary: [
          "bg-taling-white border border-taling-gray-300 text-normal [&]:text-normal",
          "disabled:border-interaction-inactive disabled:text-disabled/80",
          "hover:bg-taling-gray-50",
          "active:bg-taling-gray-100"
        ],
        // deprecated - 추후 사라질 속성
        default: "bg-taling-pink text-taling-white [&]:text-taling-white shadow hover:bg-taling-pink/80 disabled:bg-taling-gray-400 disabled:opacity-50 whitespace-nowrap",
        outline: "border border-taling-gray-300 bg-transparent shadow-sm hover:bg-taling-gray-100 hover:text-taling-gray-900 disabled:opacity-50 whitespace-nowrap",
        secondary: "bg-taling-gray-100 text-taling-gray-900 shadow-sm hover:bg-taling-gray-100/70 disabled:opacity-50 whitespace-nowrap",
        ghost: "hover:bg-taling-gray-100 hover:text-taling-gray-900 disabled:opacity-50 whitespace-nowrap",
        underline: "underline hover:text-taling-gray-900 text-taling-gray-600 disabled:opacity-50 whitespace-nowrap"
      },
      size: {
        xs: "h-7 min-w-[3rem] rounded-lg px-2.5 py-1.5 text-caption1-semibold",
        sm: "h-[2.125rem] min-w-[3.5rem] rounded-lg px-3 py-2 text-label2-semibold",
        md: "h-10 min-w-[4.25rem] rounded-lg px-3.5 py-2 text-body2normal-semibold",
        lg: "h-12 min-w-[5.25rem] rounded-lg px-4 py-3 text-body2normal-semibold",
        // deprecated - default는 추후 사라질 예정.
        xl: "h-12 rounded-md px-8 text-sm font-medium",
        default: "h-9 px-4 py-2 text-sm font-medium"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
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
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      },
      leftIcon && /* @__PURE__ */ React.createElement("div", { className: cn(iconContainerVariants({ size })) }, leftIcon),
      children,
      rightIcon && /* @__PURE__ */ React.createElement("div", { className: cn(iconContainerVariants({ size })) }, rightIcon)
    );
  }
);
Button.displayName = "Button";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  buttonVariants
});
//# sourceMappingURL=button.js.map