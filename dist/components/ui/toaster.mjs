"use client";

// src/components/ui/toast.tsx
import { Cross2Icon } from "@radix-ui/react-icons";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import * as React2 from "react";

// src/util/tailwind-util/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/toast.tsx
var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = React2.forwardRef(({ className, position, ...props }, ref) => {
  const positionClass = {
    "top-right": "top-20 right-0 w-full",
    "top-left": "top-20 left-0 w-full",
    "bottom-right": "bottom-4 right-0 w-full",
    "bottom-left": "bottom-4 left-0 w-full",
    default: "left-1/2 -translate-x-1/2 right-0 bottom-[80px] top-auto h-fit w-full md:top-[140px]"
  }[position || "default"];
  console.log(position);
  return /* @__PURE__ */ React2.createElement(
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
var Toast = React2.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ React2.createElement(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React2.createElement(
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
var ToastClose = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React2.createElement(
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
  /* @__PURE__ */ React2.createElement(Cross2Icon, { className: "h-4 w-4" })
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React2.createElement(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React2.createElement(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-center text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// src/components/ui/use-toast.ts
import * as React3 from "react";
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  var _a, _b;
  const id = genId();
  const position = (_a = props.position) != null ? _a : "default";
  const update = (props2) => {
    var _a2;
    return dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props2, id, duration: (_a2 = props2 == null ? void 0 : props2.duration) != null ? _a2 : 3e3, position }
    });
  };
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      duration: (_b = props == null ? void 0 : props.duration) != null ? _b : 3e3,
      open: true,
      position,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React3.useState(memoryState);
  React3.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// src/components/ui/toaster.tsx
function Toaster() {
  var _a;
  const { toasts } = useToast();
  return /* @__PURE__ */ React.createElement(ToastProvider, null, toasts.map(function({ id, title, description, action, ...props }) {
    return /* @__PURE__ */ React.createElement(Toast, { className: "", key: id, ...props }, /* @__PURE__ */ React.createElement("div", { className: "grid w-full gap-1" }, title && /* @__PURE__ */ React.createElement(ToastTitle, null, title), description && /* @__PURE__ */ React.createElement(ToastDescription, null, description)), action, /* @__PURE__ */ React.createElement(ToastClose, null));
  }), /* @__PURE__ */ React.createElement(ToastViewport, { position: (_a = toasts[0]) == null ? void 0 : _a.position }));
}
export {
  Toaster
};
//# sourceMappingURL=toaster.mjs.map