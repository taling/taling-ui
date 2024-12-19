"use client";

// src/components/ui/toast/toast.tsx
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon
} from "@heroicons/react/20/solid";

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/toast/toast.tsx
import { toast as hotToast } from "react-hot-toast";
var toastStyles = {
  default: {
    icon: "w-6 h-6 text-success"
  },
  warning: {
    icon: "w-6 h-6 text-caution"
  },
  error: {
    icon: "w-6 h-6 text-danger"
  }
};
var toastIcons = {
  default: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: XCircleIcon
};
var MOBILE_BREAKPOINT = 768;
var getDefaultPosition = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth < MOBILE_BREAKPOINT ? "bottom-center" : "top-right";
  }
  return "top-right";
};
var CustomToast = ({
  type = "default",
  description,
  t,
  position
}) => {
  const Icon = toastIcons[type];
  const isBottom = position == null ? void 0 : position.includes("bottom");
  const isLeft = position == null ? void 0 : position.includes("left");
  const isRight = position == null ? void 0 : position.includes("right");
  const getAnimationClass = () => {
    if (isBottom) return "animate-slide-in-bottom";
    if (isLeft) return "animate-slide-in-left";
    if (isRight) return "animate-slide-in-right";
    return "animate-slide-in-right";
  };
  const handleClick = () => {
    hotToast.remove(t.id);
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classNames(
        "inline-flex gap-2 justify-center items-center min-h-[3rem] pl-4 pr-10 py-3 rounded-[0.625rem] bg-taling-gray-900 bg-opacity-80 text-taling-white shadow-emphasize backdrop-blur-md cursor-pointer",
        "min-w-[10rem] max-w-[90vw] md:max-w-[25rem]",
        "hover:bg-opacity-85",
        t.visible ? getAnimationClass() : ""
      ),
      onClick: handleClick
    },
    /* @__PURE__ */ React.createElement(Icon, { className: toastStyles[type].icon }),
    description && /* @__PURE__ */ React.createElement("div", { className: "text-body2normal-regular text-white" }, description)
  );
};
var toast = {
  show: ({
    description,
    duration = 4e3,
    position,
    type = "default"
  }) => {
    const toastPosition = position || getDefaultPosition();
    return hotToast.custom(
      (t) => /* @__PURE__ */ React.createElement(
        CustomToast,
        {
          type,
          description,
          t,
          position: toastPosition
        }
      ),
      {
        duration,
        position: toastPosition
      }
    );
  },
  warning: (options) => {
    return toast.show({ ...options, type: "warning" });
  },
  error: (options) => {
    return toast.show({ ...options, type: "error" });
  }
};
export {
  toast
};
//# sourceMappingURL=toast.mjs.map