// toast.ts
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/20/solid";
import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import { toast as sonnerToast } from "sonner";

// 토스트 스타일 설정
const toastStyles = {
  default: {
    icon: "w-6 h-6 text-success",
  },
  warning: {
    icon: "w-6 h-6 text-caution",
  },
  error: {
    icon: "w-6 h-6 text-danger",
  },
};

const toastIcons = {
  default: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: XCircleIcon,
};

// 모바일 브레이크포인트 설정
const MOBILE_BREAKPOINT = 768;

// 토스트 옵션 타입
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
  return window.innerWidth < MOBILE_BREAKPOINT ? "bottom-center" : "top-right";
};

export const toast = {
  show: ({
    description,
    duration = 4000,
    position,
    type = "default",
  }: ToastOptions) => {
    const Icon = toastIcons[type];
    const toastPosition = position || getDefaultPosition();

    sonnerToast(
      <div
        className={classNames(
          "inline-flex gap-2 justify-center items-center pl-4 pr-10 py-3 min-h-[3.375rem] min-w-[12rem] max-w-[90vw] rounded-[0.625rem] bg-taling-gray-900 bg-opacity-80 text-taling-white shadow-emphasize backdrop-blur-2xl hover:bg-opacity-85",
        )}
        onClick={() => sonnerToast.dismiss()}
      >
        <Icon className={toastStyles[type].icon} />
        {description && (
          <div className={"text-body2normal-regular"}>{description}</div>
        )}
      </div>,
      {
        duration,
        position: toastPosition,
        className: "cursor-pointer",
      },
    );
  },
  warning: (options: Omit<ToastOptions, "type">) => {
    toast.show({ ...options, type: "warning" });
  },
  error: (options: Omit<ToastOptions, "type">) => {
    toast.show({ ...options, type: "error" });
  },
};
