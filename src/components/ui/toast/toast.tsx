"use client";

import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import { toast as hotToast, Toast as HotToastType } from "react-hot-toast";

const toastStyles = {
  success: {
    icon: "w-6 h-6 text-success",
  },
  warning: {
    icon: "w-6 h-6 text-caution",
  },
  error: {
    icon: "w-6 h-6 text-danger",
  },
  normal: {
    icon: undefined,
  },
};

const toastIcons = {
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: XCircleIcon,
  normal: null,
};

const MOBILE_BREAKPOINT = 768;

type ToastType = keyof typeof toastStyles;

interface ToastOptions {
  title?: string;
  description?: string;
  duration?: number;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
  type?: ToastType;
}

const getDefaultPosition = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth < MOBILE_BREAKPOINT
      ? "bottom-center"
      : "top-right";
  }
  return "top-right";
};

interface CustomToastProps {
  type?: ToastType;
  description?: string;
  t: HotToastType;
  position?: ToastOptions["position"];
}

const CustomToast = ({
  type = "success",
  description,
  t,
  position,
}: CustomToastProps) => {
  const Icon = toastIcons[type];
  const isBottom = position?.includes("bottom");
  const isLeft = position?.includes("left");
  const isRight = position?.includes("right");

  const getAnimationClass = () => {
    if (isBottom) return "animate-slide-in-bottom";
    if (isLeft) return "animate-slide-in-left";
    if (isRight) return "animate-slide-in-right";
    return "animate-slide-in-right";
  };

  const handleClick = () => {
    hotToast.remove(t.id);
  };

  return (
    <div
      className={classNames(
        `bg-taling-gray-900 text-taling-white shadow-emphasize inline-flex min-h-[3rem]
        cursor-pointer items-center justify-center gap-2 rounded-[0.625rem]
        bg-opacity-80 py-3 pl-4 pr-10 backdrop-blur-md`,
        "min-w-[10rem] max-w-[90vw] md:max-w-[25rem]",
        "hover:bg-opacity-85",
        t.visible ? getAnimationClass() : "",
      )}
      onClick={handleClick}
    >
      {Icon && <Icon className={toastStyles[type].icon} />}
      {description && (
        <div className="text-body2normal-regular text-white">{description}</div>
      )}
    </div>
  );
};

export const toast = {
  show: ({
    description,
    duration = 4000,
    position,
    type = "success",
  }: ToastOptions) => {
    const toastPosition = position || getDefaultPosition();

    return hotToast.custom(
      (t) => (
        <CustomToast
          type={type}
          description={description}
          t={t}
          position={toastPosition}
        />
      ),
      {
        duration,
        position: toastPosition,
      },
    );
  },

  warning: (options: Omit<ToastOptions, "type">) => {
    return toast.show({ ...options, type: "warning" });
  },

  error: (options: Omit<ToastOptions, "type">) => {
    return toast.show({ ...options, type: "error" });
  },
};
