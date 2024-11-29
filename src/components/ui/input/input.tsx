import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import { useEffect, useState } from "react";

interface InputProps {
  value?: string | number;
  valueType?: "string" | "int" | "float";
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  type?: string;
  className?: string;
  displayModifier?: {
    wrap: (value: string) => string;
    unwrap: (value: string) => string;
  };
  charFilter?: string | RegExp | ((value: string) => string);
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValueLength?: (length: number) => void;
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
  displayModifier,
  charFilter,
  onChange,
  onValueLength,
}: InputProps) {
  const [displayValue, setDisplayValue] = useState<string>(
    value?.toString() || "",
  );

  const getInputType = () => {
    if (displayModifier) {
      return "text";
    }

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

  const filterValue = (value: string) => {
    if (!charFilter) return value;

    if (typeof charFilter === "function") {
      return charFilter(value);
    }

    if (charFilter instanceof RegExp) {
      return value.replace(charFilter, "");
    }

    return value.replace(new RegExp(charFilter, "g"), "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    newValue = filterValue(newValue);

    if (displayModifier) {
      const unwrappedValue = displayModifier.unwrap(newValue);
      setDisplayValue(displayModifier.wrap(unwrappedValue));
      onValueLength?.(unwrappedValue.length);

      const modifiedEvent = {
        ...e,
        target: {
          ...e.target,
          value: unwrappedValue,
        },
      } as React.ChangeEvent<HTMLInputElement>;

      onChange?.(modifiedEvent);
    } else {
      setDisplayValue(newValue);
      onValueLength?.(newValue.length);
      onChange?.({
        ...e,
        target: {
          ...e.target,
          value: newValue,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  useEffect(() => {
    if (displayModifier) {
      setDisplayValue(displayModifier.wrap(value?.toString() || ""));
      return;
    }
    setDisplayValue(value?.toString() || "");
  }, [value, displayModifier]);

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
      value={displayValue}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      disabled={disabled}
      onChange={handleChange}
    />
  );
}
