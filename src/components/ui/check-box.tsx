import { classNames } from "@taling-ui/util/tailwind-util/class-names";

const sizeMap = {
  normal: "w-5 h-5 rounded-md",
  small: "w-4 h-4 rounded",
};
type sizeMapType = keyof typeof sizeMap;

interface CheckBoxProps {
  size?: sizeMapType;
  isChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
  disabled?: boolean;
}

export default function CheckBox({
  size = "normal",
  isChecked,
  onChange,
  disabled = false,
}: CheckBoxProps) {
  return (
    <input
      disabled={disabled}
      checked={isChecked}
      onChange={(e) => {
        if (!onChange) return;
        onChange(e.target.checked);
      }}
      className={classNames(
        sizeMap[size],
        "border-1 border-taling-gray-400 text-primary cursor-pointer",
        "disabled:opacity-30",
        "active:ring-2 active:ring-offset-1 active:ring-primary",
        "focus:ring-0 focus:ring-offset-0 focus:outline-none",
        "focus-visible:ring-0 focus-visible:ring-offset-0",
        "checked:focus:ring-0 checked:focus:ring-offset-0",
        "appearance-none",
      )}
      type="checkbox"
    />
  );
}
