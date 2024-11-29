import { classNames } from "@taling-ui/util/tailwind-util/class-names";

interface InputProps {
  value?: string;
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    // 숫자 타입에서 0으로 시작하는 입력값 처리
    if (
      (valueType === "int" || valueType === "float") &&
      newValue.startsWith("0")
    ) {
      if (newValue.length > 1) {
        newValue = newValue.slice(1);
        e.target.value = newValue;
      }
    }

    // 숫자 타입 유효성 검사
    if (valueType === "int") {
      if (!/^-?\d*$/.test(newValue)) {
        return;
      }
    } else if (valueType === "float") {
      if (!/^-?\d*\.?\d*$/.test(newValue)) {
        return;
      }
    }

    onChange?.(e);
  };

  const displayValue =
    (valueType === "int" || valueType === "float") && (!value || value === "")
      ? "0"
      : value;

  return (
    <input
      type={type}
      className={classNames(
        `h-10 min-w-[16.5rem] appearance-none rounded-md border border-taling-gray-300
        bg-taling-white px-3 py-2.5 text-label1normal-regular text-strong
        placeholder:text-label1normal-regular placeholder:text-low-emphasis
        focus:border-primary focus:ring-1 focus:ring-inset focus:ring-primary
        disabled:bg-taling-gray-200 disabled:text-disabled`,
        className,
      )}
      value={displayValue}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      disabled={disabled}
      onChange={handleChange}
    />
  );
}
