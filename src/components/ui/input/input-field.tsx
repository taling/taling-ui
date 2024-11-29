import { useState } from "react";
import InputDescription, { InputDescriptionProps } from "./description";
import InputErrorMessage, { InputErrorMessageProps } from "./error-message";
import Input, { InputProps } from "./input";
import InputLabel, { InputLabelProps } from "./label";

interface InputFieldProps
  extends Omit<InputProps, "onValueLength">,
    Pick<InputLabelProps, "label">,
    Pick<InputDescriptionProps, "description">,
    Pick<InputErrorMessageProps, "errorMessage"> {
  labelOption?: InputLabelProps["option"];
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
    <div className="flex flex-col gap-1">
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
        className={className}
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
