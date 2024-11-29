import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import InputDescription from "./description";
import InputErrorMessage from "./error-message";
import InputLabel from "./label";
import Textarea from "./textarea";

interface TextareaFieldProps {
  label?: string;
  labelOption?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  description?: string;
  errorMessage?: string;
  isError?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextareaField({
  label,
  labelOption,
  value,
  placeholder,
  minLength,
  maxLength,
  disabled,
  description,
  errorMessage,
  isError,
  className,
  onChange,
}: TextareaFieldProps) {
  return (
    <div className={classNames("flex flex-col gap-1", className)}>
      <InputLabel label={label} option={labelOption} />
      <Textarea
        value={value}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
        onChange={onChange}
      />
      {description && <InputDescription description={description} />}
      {isError && errorMessage && (
        <InputErrorMessage errorMessage={errorMessage} />
      )}
    </div>
  );
}
