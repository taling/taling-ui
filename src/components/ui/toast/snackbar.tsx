"use client";

import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import { toast as hotToast, Toast as HotToastType } from "react-hot-toast";

interface SnackbarOptions {
  description: string;
  duration?: number;
  label?: string;
  onClick?: () => void;
}

interface CustomSnackbarProps {
  description: string;
  t: HotToastType;
  label?: string;
  onClick?: () => void;
}

const CustomSnackbar = ({
  description,
  t,
  label = "바로가기",
  onClick,
}: CustomSnackbarProps) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-between px-4 py-3 rounded-[0.625rem] bg-taling-gray-900 bg-opacity-80 shadow-emphasize backdrop-blur-md",
        "min-w-[20rem] max-w-[90vw] md:max-w-[25rem]",
        t.visible ? "animate-slide-in-bottom" : "",
      )}
    >
      <div className="text-taling-white text-body1normal-regular">
        {description}
      </div>
      <button
        onClick={onClick}
        className="flex-shrink-0 ml-3 text-taling-pink-200 text-label1normal-semibold"
      >
        {label}
      </button>
    </div>
  );
};

export const snackbar = {
  show: ({ description, duration = 4000, label, onClick }: SnackbarOptions) => {
    return hotToast.custom(
      (t) => (
        <CustomSnackbar
          description={description}
          t={t}
          label={label}
          onClick={onClick}
        />
      ),
      {
        duration,
        position: "bottom-center",
      },
    );
  },
};
