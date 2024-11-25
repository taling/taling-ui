import { classNames } from "@taling-ui/util/tailwind-util/class-names";

const sizeMap = {
  normal: "w-5 h-5 rounded-md",
  small: "w-4 h-4 rounded",
};
type sizeMapType = keyof typeof sizeMap;

interface CheckBoxProps {
  size?: sizeMapType;
  disabled?: boolean;
  className?: string;
  checked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

export default function CheckBox({
  size = "normal",
  disabled = false,
  className,
  checked,
  onChange,
}: CheckBoxProps) {
  return (
    <input
      checked={checked}
      onChange={(e) => onChange?.(e.target.checked)}
      disabled={disabled}
      className={classNames(
        sizeMap[size],
        "border-1 border-taling-gray-300 text-primary cursor-pointer",
        "disabled:opacity-60 disabled:cursor-default disabled:ring-0 disabled:ring-offset-0",
        "active:ring-2 active:ring-offset-1 active:ring-primary",
        "focus:ring-0 focus:ring-offset-0 focus:outline-none",
        "focus-visible:ring-0 focus-visible:ring-offset-0",
        "checked:focus:ring-0 checked:focus:ring-offset-0",
        "appearance-none",
        className,
      )}
      type="checkbox"
    />
  );
}
