// src/components/ui/toast.tsx
import { Cross2Icon } from "@radix-ui/react-icons";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import * as React from "react";

// src/util/tailwind-util/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/toast.tsx
var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = React.forwardRef(({ className, position, ...props }, ref) => {
  const positionClass = {
    "top-right": "top-20 right-0 w-full",
    "top-left": "top-20 left-0 w-full",
    "bottom-right": "bottom-4 right-0 w-full",
    "bottom-left": "bottom-4 left-0 w-full",
    default: "left-1/2 -translate-x-1/2 right-0 bottom-[80px] top-auto h-fit w-full md:top-[140px]"
  }[position || "default"];
  console.log(position);
  return /* @__PURE__ */ React.createElement(
    ToastPrimitives.Viewport,
    {
      ref,
      className: cn(
        "fixed z-[100] flex max-w-[420px] flex-col p-4 transition-transform",
        positionClass,
        className
      ),
      ...props
    }
  );
});
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = cva(
  " bg-opacity-70 backdrop-blur-sm group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md  p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: " bg-taling-gray-900  text-taling-white  ",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ React.createElement(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "focus:ring-ring group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-taling-gray-900/60 focus:outline-none focus:ring-1 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-taling-gray-600/40",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-1 top-1 rounded-md p-1 text-taling-white/50 opacity-0 transition-opacity hover:text-taling-white focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props
  },
  /* @__PURE__ */ React.createElement(Cross2Icon, { className: "h-4 w-4" })
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React.createElement(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-center text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
};
//# sourceMappingURL=toast.mjs.map