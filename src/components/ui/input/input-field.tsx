import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import InputDescription from "./description";
import InputErrorMessage from "./error-message";
import Input from "./input";
import InputLabel from "./label";

interface InputFieldProps {
  label?: string;
  labelOption?: string;
  type?: string;
  value?: string;
  valueType?: "int" | "float" | "string";
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  description?: string;
  errorMessage?: string;
  isError?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  labelOption,
  type,
  value,
  valueType,
  placeholder,
  minLength,
  maxLength,
  disabled,
  description,
  errorMessage,
  isError,
  className,
  onChange,
}: InputFieldProps) {
  return (
    <div className={classNames("flex flex-col gap-1", className)}>
      <InputLabel label={label} option={labelOption} />
      <Input
        type={type}
        value={value}
        valueType={valueType}
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
