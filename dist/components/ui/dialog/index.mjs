// src/components/ui/dialog/index.tsx
import {
  DialogPanel,
  DialogTitle,
  Dialog as HeadlessUiDialog
} from "@headlessui/react";

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/buttons/waiting-button/index.tsx
import { cloneElement, useCallback, useEffect, useState } from "react";
function WaitingButton({
  render: { normal, waiting, failed },
  passData,
  className,
  onClick
}) {
  const [currentRender, setCurrentRender] = useState(normal);
  const [isLoading, setIsLoading] = useState(false);
  const _internalOnClick = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentRender(waiting);
    const result = await onClick(passData);
    setIsLoading(false);
    setCurrentRender(result ? normal : failed || normal);
  }, [failed, isLoading, normal, onClick, passData, waiting]);
  const updateNormalButton = useCallback(() => {
    if (!isLoading) {
      setCurrentRender(normal);
    }
  }, [isLoading, normal]);
  useEffect(() => {
    updateNormalButton();
  }, [normal, updateNormalButton]);
  const element = currentRender;
  return cloneElement(element, {
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
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React2 from "react";

// src/util/tailwind-util/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/button.tsx
var iconContainerVariants = cva("inline-flex items-center justify-center", {
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
var buttonVariants = cva(
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
    const Comp = asChild ? Slot : "button";
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

// src/components/ui/dialog/dialog-buttons.tsx
function DialogButtons({
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
  onPromiseCancel,
  onPromiseConfirm,
  setIsOpen
}) {
  return /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, !onPromiseCancel && /* @__PURE__ */ React.createElement(
    Button,
    {
      size: "md",
      variant: "outlinedSecondary",
      className: "w-full",
      onClick: () => {
        onCancel == null ? void 0 : onCancel();
        setIsOpen == null ? void 0 : setIsOpen(false);
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
            size: "md",
            variant: "outlinedSecondary",
            className: "w-full"
          },
          cancelLabel
        ),
        waiting: /* @__PURE__ */ React.createElement(
          Button,
          {
            size: "md",
            variant: "outlinedSecondary",
            className: "w-full"
          },
          /* @__PURE__ */ React.createElement(LoadingSpinner, { className: "w-4 h-4 animate-spin" })
        )
      },
      onClick: async () => {
        await onPromiseCancel();
        setIsOpen == null ? void 0 : setIsOpen(false);
        return false;
      }
    }
  ), !onPromiseConfirm && /* @__PURE__ */ React.createElement(
    Button,
    {
      size: "md",
      variant: "solidPrimary",
      className: "w-full",
      onClick: () => {
        onConfirm == null ? void 0 : onConfirm();
        setIsOpen == null ? void 0 : setIsOpen(false);
      }
    },
    confirmLabel
  ), onPromiseConfirm && /* @__PURE__ */ React.createElement(
    WaitingButton,
    {
      className: "w-full",
      render: {
        normal: /* @__PURE__ */ React.createElement(Button, { size: "md", variant: "solidPrimary", className: "w-full" }, confirmLabel),
        waiting: /* @__PURE__ */ React.createElement(Button, { size: "md", variant: "solidPrimary", className: "w-full" }, /* @__PURE__ */ React.createElement(LoadingSpinner, { className: "w-4 h-4 animate-spin" }))
      },
      onClick: async () => {
        await onPromiseConfirm();
        setIsOpen == null ? void 0 : setIsOpen(false);
        return false;
      }
    }
  ));
}

// src/components/ui/dialog/index.tsx
function Dialog({
  title,
  subTitle,
  children,
  cancelLabel = "\uCDE8\uC18C",
  confirmLabel = "\uD655\uC778",
  isBackDropClickable = true,
  isOpen,
  onPromiseCancel,
  onPromiseConfirm,
  onCancel,
  onConfirm,
  setIsOpen
}) {
  return /* @__PURE__ */ React.createElement(
    HeadlessUiDialog,
    {
      open: isOpen,
      onClose: () => {
        isBackDropClickable && (setIsOpen == null ? void 0 : setIsOpen(false));
      },
      transition: true,
      className: classNames(
        "z-[999] fixed inset-0 flex w-screen items-center justify-center bg-taling-gray-900/70",
        "transition duration-300 ease-out",
        "data-[closed]:opacity-0"
      )
    },
    /* @__PURE__ */ React.createElement(DialogPanel, { className: "flex flex-col gap-6 w-[18.4375rem] bg-taling-white p-5 rounded-xl shadow-strong" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-5" }, /* @__PURE__ */ React.createElement(DialogTitle, { className: "flex flex-col gap-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-body1normal-bold text-strong" }, title), /* @__PURE__ */ React.createElement("span", { className: "text-label1reading-regular text-neutral" }, subTitle)), children && /* @__PURE__ */ React.createElement("section", null, children)), /* @__PURE__ */ React.createElement(
      DialogButtons,
      {
        cancelLabel,
        confirmLabel,
        onCancel,
        onConfirm,
        onPromiseCancel,
        onPromiseConfirm,
        setIsOpen
      }
    ))
  );
}
export {
  Dialog as default
};
//# sourceMappingURL=index.mjs.map