import { classNames } from "@taling-ui/util/tailwind-util/class-names";

interface InputProps {
  value?: string | number;
  valueType?: "string" | "int" | "float";
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  type?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  value,
  valueType = "string",
  placeholder = "입력해주세요",
  minLength,
  maxLength,
  disabled,
  type = "text",
  className,
  onChange,
}: InputProps) {
  const getInputType = () => {
    if (valueType === "string") {
      return type;
    }
    if (valueType === "int" || valueType === "float") {
      return "number";
    }
    return type;
  };

  const inputType = getInputType();

  const step = valueType === "float" ? "any" : "1";

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (valueType === "int" || valueType === "float") {
      if (["e", "E", "+", "-"].includes(e.key)) {
        e.preventDefault();
      }
    }

    if (valueType === "int" && e.key === ".") {
      e.preventDefault();
    }
  };

  return (
    <input
      type={inputType}
      step={step}
      onKeyDown={handleKeyDown}
      pattern={valueType === "int" ? "[0-9]*" : undefined}
      className={classNames(
        `h-10 min-w-[16.5rem] appearance-none rounded-md border border-taling-gray-300
        bg-taling-white px-3 py-2.5 text-label1normal-regular text-strong
        placeholder:text-label1normal-regular placeholder:text-low-emphasis
        focus:border-primary focus:ring-1 focus:ring-inset focus:ring-primary
        disabled:bg-taling-gray-200 disabled:text-disabled`,
        className,
      )}
      value={value}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      disabled={disabled}
      onChange={onChange}
    />
  );
}
