import { classNames } from "@taling-ui/util/tailwind-util/class-names";

interface TextareaProps {
  value?: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  className?: string;
  charFilter?: string | RegExp | ((value: string) => string);
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onValueLength?: (length: number) => void;
}

export default function Textarea({
  value,
  placeholder = "입력해주세요",
  minLength,
  maxLength,
  disabled,
  className,
  charFilter,
  onChange,
  onValueLength,
}: TextareaProps) {
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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newValue = e.target.value;

    newValue = filterValue(newValue);
    onValueLength?.(newValue.length);
    onChange?.({ ...e, target: { ...e.target, value: newValue } });
  };

  return (
    <textarea
      className={classNames(
        `min-h-[9.125rem] min-w-[16.5rem] appearance-none rounded-md border
        border-taling-gray-300 bg-taling-white px-3 py-2.5 text-label1normal-regular
        text-strong placeholder:text-label1normal-regular placeholder:text-low-emphasis
        focus:border-primary focus:ring-1 focus:ring-inset focus:ring-primary
        disabled:bg-taling-gray-200 disabled:text-disabled`,
        className,
      )}
      value={value}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      disabled={disabled}
      onChange={handleChange}
    />
  );
}
