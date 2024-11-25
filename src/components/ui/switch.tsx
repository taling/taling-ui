import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import { useState } from "react";

const sizeMap = {
  normal: {
    wrapper: "w-[2.8125rem] h-[1.625rem]",
    thumb: {
      size: "w-5 h-5",
      spacing: "top-[0.2rem] left-1",
      translation: "translate-x-[1.1rem]",
    },
  },
  small: {
    wrapper: "w-[2.25rem] h-[1.375rem]",
    thumb: {
      size: "w-4 h-4",
      spacing: "top-[0.2rem] left-[0.2rem]",
      translation: "translate-x-[0.9rem]",
    },
  },
};
type sizeMapType = keyof typeof sizeMap;

interface SwitchProps {
  size?: sizeMapType;
  disabled?: boolean;
  checked?: boolean;
  className?: string;
  onChange?: (checked: boolean) => void;
}

export default function Switch({
  size = "normal",
  disabled = false,
  className,
  onChange,
}: SwitchProps) {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    if (onChange) {
      onChange(!isActive);
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={handleToggle}
      className={classNames(
        "relative rounded-full transition-colors duration-200 ease-in-out",
        isActive ? "bg-primary" : "bg-taling-gray-400",
        sizeMap[size].wrapper,
        "disabled:opacity-40",
        className,
      )}
    >
      <div
        className={classNames(
          "absolute bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out",
          sizeMap[size].thumb.size,
          sizeMap[size].thumb.spacing,
          isActive ? sizeMap[size].thumb.translation : "translate-x-0",
        )}
      />
    </button>
  );
}
