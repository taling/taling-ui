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

// src/components/ui/modal/index.tsx
var modal_exports = {};
__export(modal_exports, {
  default: () => Modal
});
module.exports = __toCommonJS(modal_exports);
var import_react2 = require("@headlessui/react");

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/buttons/waiting-button/index.tsx
var import_react = require("react");
function WaitingButton({
  render: { normal, waiting, failed },
  passData,
  className,
  onClick
}) {
  const [currentRender, setCurrentRender] = (0, import_react.useState)(normal);
  const [isLoading, setIsLoading] = (0, import_react.useState)(false);
  const _internalOnClick = (0, import_react.useCallback)(async () => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentRender(waiting);
    const result = await onClick(passData);
    setIsLoading(false);
    setCurrentRender(result ? normal : failed || normal);
  }, [failed, isLoading, normal, onClick, passData, waiting]);
  const updateNormalButton = (0, import_react.useCallback)(() => {
    if (!isLoading) {
      setCurrentRender(normal);
    }
  }, [isLoading, normal]);
  (0, import_react.useEffect)(() => {
    updateNormalButton();
  }, [normal, updateNormalButton]);
  const element = currentRender;
  return (0, import_react.cloneElement)(element, {
    onClick: _internalOnClick,
    className: classNames(element.props.className || "", className || "")
  });
}

// src/components/loading/spinner/index.tsx
function LoadingSpinner({ className }) {
  return /* @__PURE__ */ React.createElement("div", { className }, /* @__PURE__ */ React.createElement(
    "svg",
    {
      "aria-hidden": "true",
      className: "text-taling-gray-300 animate-spin fill-taling-pink",
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
        fill: "currentFill"
      }
    )
  ));
}

// src/components/ui/button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var React2 = __toESM(require("react"));

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
var Button = React2.forwardRef(
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
    return /* @__PURE__ */ React2.createElement(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      },
      leftIcon && /* @__PURE__ */ React2.createElement("div", { className: cn(iconContainerVariants({ size })) }, leftIcon),
      children,
      rightIcon && /* @__PURE__ */ React2.createElement("div", { className: cn(iconContainerVariants({ size })) }, rightIcon)
    );
  }
);
Button.displayName = "Button";

// src/components/ui/text-button.tsx
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var React3 = __toESM(require("react"));
var iconContainerVariants2 = (0, import_class_variance_authority2.cva)("inline-flex items-center justify-center", {
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
var textButtonVariants = (0, import_class_variance_authority2.cva)(
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
var TextButton = React3.forwardRef(
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
    const Comp = asChild ? import_react_slot2.Slot : "button";
    return /* @__PURE__ */ React3.createElement(
      Comp,
      {
        className: cn(textButtonVariants({ variant, size, className })),
        ref,
        ...props
      },
      leftIcon && /* @__PURE__ */ React3.createElement("div", { className: cn(iconContainerVariants2({ size })) }, leftIcon),
      children,
      rightIcon && /* @__PURE__ */ React3.createElement("div", { className: cn(iconContainerVariants2({ size })) }, rightIcon)
    );
  }
);
TextButton.displayName = "TextButton";

// src/components/ui/modal/modal-buttons.tsx
function ModalButtons({
  cancelLabel,
  confirmLabel,
  modalType,
  leftIcon,
  rightIcon,
  onCancel,
  onConfirm,
  onPromiseCancel,
  onPromiseConfirm
}) {
  if (modalType === "oneButton") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, !onPromiseConfirm && /* @__PURE__ */ React.createElement(
      Button,
      {
        size: "lg",
        variant: "solidPrimary",
        className: "w-full",
        onClick: () => {
          onConfirm == null ? void 0 : onConfirm();
        }
      },
      confirmLabel
    ), onPromiseConfirm && /* @__PURE__ */ React.createElement(
      WaitingButton,
      {
        className: "w-full",
        render: {
          normal: /* @__PURE__ */ React.createElement(Button, { size: "lg", variant: "solidPrimary", className: "w-full" }, confirmLabel),
          waiting: /* @__PURE__ */ React.createElement(Button, { size: "lg", variant: "solidPrimary", className: "w-full" }, /* @__PURE__ */ React.createElement(LoadingSpinner, { className: "w-4 h-4 animate-spin" }))
        },
        onClick: async () => {
          await onPromiseConfirm();
          return false;
        }
      }
    ));
  }
  if (modalType === "secondary") {
    return /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 self-end" }, !onPromiseCancel && /* @__PURE__ */ React.createElement(
      TextButton,
      {
        size: "lg",
        variant: "secondary",
        leftIcon,
        rightIcon,
        onClick: () => {
          onCancel == null ? void 0 : onCancel();
        }
      },
      cancelLabel
    ), onPromiseCancel && /* @__PURE__ */ React.createElement(
      WaitingButton,
      {
        render: {
          normal: /* @__PURE__ */ React.createElement(
            TextButton,
            {
              size: "lg",
              variant: "secondary",
              leftIcon,
              rightIcon
            },
            cancelLabel
          ),
          waiting: /* @__PURE__ */ React.createElement(TextButton, { size: "lg", variant: "secondary" }, /* @__PURE__ */ React.createElement(LoadingSpinner, { className: "w-4 h-4 animate-spin" }))
        },
        onClick: async () => {
          await onPromiseCancel();
          return false;
        }
      }
    ), !onPromiseConfirm && /* @__PURE__ */ React.createElement(
      Button,
      {
        size: "sm",
        variant: "solidPrimary",
        onClick: () => {
          onConfirm == null ? void 0 : onConfirm();
        }
      },
      confirmLabel
    ), onPromiseConfirm && /* @__PURE__ */ React.createElement(
      WaitingButton,
      {
        render: {
          normal: /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "solidPrimary" }, confirmLabel),
          waiting: /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "solidPrimary" }, /* @__PURE__ */ React.createElement(LoadingSpinner, { className: "w-4 h-4 animate-spin" }))
        },
        onClick: async () => {
          await onPromiseConfirm();
          return false;
        }
      }
    ));
  }
  return /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, !onPromiseCancel && /* @__PURE__ */ React.createElement(
    Button,
    {
      size: "lg",
      variant: "outlinedSecondary",
      className: "w-full",
      onClick: () => {
        onCancel == null ? void 0 : onCancel();
      }
    },
    cancelLabel
  ), onPromiseCancel && /* @__PURE__ */ React.createElement(
    WaitingButton,
    {
      className: "w-full",
      render: {
        normal: /* @__PURE__ */ React.createElement(
          Button,
          {
            size: "lg",
            variant: "outlinedSecondary",
            className: "w-full"
          },
          cancelLabel
        ),
        waiting: /* @__PURE__ */ React.createElement(
          Button,
          {
            size: "lg",
            variant: "outlinedSecondary",
            className: "w-full"
          },
          /* @__PURE__ */ React.createElement(LoadingSpinner, { className: "w-4 h-4 animate-spin" })
        )
      },
      onClick: async () => {
        await onPromiseCancel();
        return false;
      }
    }
  ), !onPromiseConfirm && /* @__PURE__ */ React.createElement(
    Button,
    {
      size: "lg",
      variant: "solidPrimary",
      className: "w-full",
      onClick: () => {
        onConfirm == null ? void 0 : onConfirm();
      }
    },
    confirmLabel
  ), onPromiseConfirm && /* @__PURE__ */ React.createElement(
    WaitingButton,
    {
      className: "w-full",
      render: {
        normal: /* @__PURE__ */ React.createElement(Button, { size: "lg", variant: "solidPrimary", className: "w-full" }, confirmLabel),
        waiting: /* @__PURE__ */ React.createElement(Button, { size: "lg", variant: "solidPrimary", className: "w-full" }, /* @__PURE__ */ React.createElement(LoadingSpinner, { className: "w-4 h-4 animate-spin" }))
      },
      onClick: async () => {
        await onPromiseConfirm();
        return false;
      }
    }
  ));
}

// src/components/ui/modal/index.tsx
var getMaxWidthClass = (maxWidth) => {
  switch (maxWidth) {
    case "sm":
      return "max-w-sm";
    case "md":
      return "max-w-md";
    case "lg":
      return "max-w-lg";
    case "xl":
      return "max-w-xl";
    case "2xl":
      return "max-w-2xl";
    case "full":
      return "max-w-full";
    default:
      return "";
  }
};
function Modal({
  title,
  subTitle,
  children,
  cancelLabel = "\uCDE8\uC18C",
  confirmLabel = "\uD655\uC778",
  leftIcon,
  rightIcon,
  isBackDropClickable = true,
  isOpen,
  modalType = "twoButton",
  maxWidth = null,
  onPromiseCancel,
  onPromiseConfirm,
  onCancel,
  onConfirm,
  setIsOpen
}) {
  return /* @__PURE__ */ React.createElement(
    import_react2.Dialog,
    {
      open: isOpen,
      onClose: () => {
        isBackDropClickable && (setIsOpen == null ? void 0 : setIsOpen(false));
      },
      transition: true,
      className: classNames(
        `fixed inset-0 z-[999] flex w-screen items-center justify-center
        bg-taling-gray-900/70`,
        "transition duration-300 ease-out",
        "data-[closed]:opacity-0"
      )
    },
    /* @__PURE__ */ React.createElement(
      import_react2.DialogPanel,
      {
        className: classNames(
          `flex min-w-[18.4375rem] flex-col gap-5 rounded-2xl bg-taling-white px-8 py-7
          shadow-strong`,
          getMaxWidthClass(maxWidth)
        )
      },
      /* @__PURE__ */ React.createElement(import_react2.DialogTitle, { className: "flex flex-col gap-1" }, /* @__PURE__ */ React.createElement("span", { className: "text-heading3-semibold text-neutral" }, title), /* @__PURE__ */ React.createElement("span", { className: "text-label1reading-regular text-neutral" }, subTitle)),
      children && /* @__PURE__ */ React.createElement("section", null, children),
      /* @__PURE__ */ React.createElement(
        ModalButtons,
        {
          cancelLabel,
          confirmLabel,
          modalType,
          leftIcon,
          rightIcon,
          onCancel,
          onConfirm,
          onPromiseCancel,
          onPromiseConfirm
        }
      )
    )
  );
}
//# sourceMappingURL=index.js.map