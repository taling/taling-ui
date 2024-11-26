import { toast as sonnerToast } from "sonner";

// 토스트 스타일 설정
const toastStyles = {
  default: {
    container:
      "inline-flex flex-col gap-2 justify-center items-center px-8 py-4 min-h-[3.375rem] min-w-[12rem] rounded-[0.625rem] bg-taling-gray-900 bg-opacity-80 text-taling-white shadow-strong backdrop-blur-sm hover:bg-opacity-85",
    title: "text-heading3-semibold",
    description: "text-body2normal-regular",
  },
  success: {
    container:
      "inline-flex flex-col gap-2 justify-center items-center px-8 py-4 min-h-[3.375rem] min-w-[12rem] rounded-[0.625rem] bg-taling-gray-900 bg-opacity-80 text-taling-white shadow-strong backdrop-blur-sm hover:bg-opacity-85",
    title: "text-heading3-semibold",
    description: "text-body2normal-regular",
  },
  alert: {
    container:
      "inline-flex flex-col gap-2 justify-center items-center px-8 py-4 min-h-[3.375rem] min-w-[12rem] rounded-[0.625rem] bg-taling-gray-900 bg-opacity-80 text-taling-white shadow-strong backdrop-blur-sm hover:bg-opacity-85",
    title: "text-heading3-semibold",
    description: "text-body2normal-regular",
  },
};

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

export const toast = {
  show: ({
    title,
    description,
    duration = 4000,
    position = "top-center",
    type = "success",
  }: ToastOptions) => {
    sonnerToast(
      <div
        className={toastStyles[type].container}
        onClick={() => sonnerToast.dismiss()}
      >
        {title && <div className={toastStyles[type].title}>{title}</div>}
        {description && (
          <div className={toastStyles[type].description}>{description}</div>
        )}
      </div>,
      {
        duration,
        position,
        className: "cursor-pointer",
      },
    );
  },
  success: (options: Omit<ToastOptions, "type">) => {
    toast.show({ ...options, type: "success" });
  },
};
