import { classNames } from "@taling-ui/util/tailwind-util/class-names";

interface TextareaProps {
  value?: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({
  value,
  placeholder = "입력해주세요",
  minLength,
  maxLength,
  disabled,
  onChange,
  className,
}: TextareaProps) {
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
      onChange={onChange}
    />
  );
}
