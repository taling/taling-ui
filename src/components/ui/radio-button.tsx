import { classNames } from "@taling-ui/util/tailwind-util/class-names";

const sizeMap = {
  normal: "w-5 h-5",
  small: "w-4 h-4",
};
type sizeMapType = keyof typeof sizeMap;

interface RadioButtonProps {
  size?: sizeMapType;
  name?: string;
  className?: string;
  checked?: boolean;
  value?: string | number;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function RadioButton({
  size = "normal",
  name,
  className,
  checked,
  value,
  disabled = false,
  onChange,
}: RadioButtonProps) {
  return (
    <input
      name={name}
      checked={checked}
      value={value}
      onChange={(e) => onChange?.(e.target.checked)}
      disabled={disabled}
      className={classNames(
        sizeMap[size],
        "text-primary cursor-pointer border-taling-gray-300",
        "active:ring-2 active:ring-offset-1 active:ring-primary",
        "disabled:opacity-60 disabled:cursor-default disabled:ring-0 disabled:ring-offset-0",
        "focus:ring-0 focus:ring-offset-0 focus:outline-none",
        "focus-visible:ring-0 focus-visible:ring-offset-0",
        "checked:focus:ring-0 checked:focus:ring-offset-0",
        "appearance-none",
        className,
      )}
      type="radio"
    />
  );
}
