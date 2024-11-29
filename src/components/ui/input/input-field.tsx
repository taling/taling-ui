import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import { useState } from "react";
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
  displayModifier?: {
    wrap: (value: string) => string;
    unwrap: (value: string) => string;
  };
  charFilter?: string | RegExp | ((value: string) => string);
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
  displayModifier,
  className,
  charFilter,
  onChange,
}: InputFieldProps) {
  const [filteredLength, setFilteredLength] = useState(0);

  const lengthInfo = maxLength ? `(${filteredLength}/${maxLength})` : undefined;

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
        displayModifier={displayModifier}
        charFilter={charFilter}
        onChange={onChange}
        onValueLength={setFilteredLength}
      />
      {!errorMessage && description && (
        <InputDescription description={description} option={lengthInfo} />
      )}
      {errorMessage && (
        <InputErrorMessage errorMessage={errorMessage} option={lengthInfo} />
      )}
    </div>
  );
}
