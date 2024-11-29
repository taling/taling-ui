import { classNames } from "@taling-ui/util/tailwind-util/class-names";

const sizeMap = {
  normal: {
    checkbox: "w-5 h-5 rounded-md",
    label: "text-label1normal-regular",
  },
  small: { checkbox: "w-4 h-4 rounded", label: "text-label2-regular" },
};
type sizeMapType = keyof typeof sizeMap;

interface CheckboxProps {
  size?: sizeMapType;
  disabled?: boolean;
  className?: string;
  checked?: boolean;
  label?: string;
  onChange?: (isChecked: boolean) => void;
}

export default function Checkbox({
  size = "normal",
  disabled = false,
  className,
  checked,
  label,
  onChange,
}: CheckboxProps) {
  const checkbox = (
    <input
      checked={checked}
      onChange={(e) => onChange?.(e.target.checked)}
      disabled={disabled}
      className={classNames(
        sizeMap[size].checkbox,
        "border-1 cursor-pointer border-taling-gray-300 text-primary",
        `disabled:cursor-default disabled:opacity-30 disabled:ring-0
        disabled:ring-offset-0`,
        "active:ring-2 active:ring-primary active:ring-offset-1",
        "focus:outline-none focus:ring-0 focus:ring-offset-0",
        "focus-visible:ring-0 focus-visible:ring-offset-0",
        "checked:focus:ring-0 checked:focus:ring-offset-0",
        "appearance-none",
        className,
      )}
      type="checkbox"
    />
  );

  if (!label) {
    return checkbox;
  }

  return (
    <label
      className={classNames(
        "inline-flex h-fit w-fit items-center gap-2",
        disabled ? "cursor-default" : "cursor-pointer",
      )}
    >
      {checkbox}
      <span
        className={classNames(
          sizeMap[size].label,
          "text-taling-black",
          disabled ? "opacity-30" : "",
        )}
      >
        {label}
      </span>
    </label>
  );
}
