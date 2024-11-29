import { classNames } from "@taling-ui/util/tailwind-util/class-names";

const sizeMap = {
  normal: {
    radio: "w-5 h-5",
    label: "text-label1normal-regular",
  },
  small: {
    radio: "w-4 h-4",
    label: "text-label2-regular",
  },
};
type sizeMapType = keyof typeof sizeMap;

interface RadioButtonProps {
  size?: sizeMapType;
  name?: string;
  className?: string;
  checked?: boolean;
  value?: string | number;
  disabled?: boolean;
  label?: string;
  onChange?: (checked: boolean) => void;
}

export default function RadioButton({
  size = "normal",
  name,
  className,
  checked,
  value,
  disabled = false,
  label,
  onChange,
}: RadioButtonProps) {
  const radio = (
    <input
      name={name}
      checked={checked}
      value={value}
      onChange={(e) => onChange?.(e.target.checked)}
      disabled={disabled}
      className={classNames(
        sizeMap[size].radio,
        "cursor-pointer border-taling-gray-300 text-primary",
        "active:ring-2 active:ring-primary active:ring-offset-1",
        `disabled:cursor-default disabled:opacity-30 disabled:ring-0
        disabled:ring-offset-0`,
        "focus:outline-none focus:ring-0 focus:ring-offset-0",
        "focus-visible:ring-0 focus-visible:ring-offset-0",
        "checked:focus:ring-0 checked:focus:ring-offset-0",
        "appearance-none",
        className,
      )}
      type="radio"
    />
  );

  if (!label) {
    return radio;
  }

  return (
    <label
      className={classNames(
        "inline-flex h-fit w-fit items-center gap-2",
        disabled ? "cursor-default" : "cursor-pointer",
      )}
    >
      {radio}
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
