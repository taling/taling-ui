import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import { useState } from "react";
import InputDescription, { InputDescriptionProps } from "./description";
import InputErrorMessage, { InputErrorMessageProps } from "./error-message";
import Input, { InputProps } from "./input";
import InputLabel, { InputLabelProps } from "./label";

interface InputFieldProps
  extends Omit<InputProps, "onValueLength">,
    Partial<
      Pick<InputLabelProps, "label"> &
        Pick<InputDescriptionProps, "description"> &
        Pick<InputErrorMessageProps, "errorMessage">
    > {
  labelOption?: InputLabelProps["option"];
  inputClassName?: string;
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
  inputClassName,
  charFilter,
  onChange,
}: InputFieldProps) {
  const [filteredLength, setFilteredLength] = useState(0);

  const lengthInfo = maxLength ? `(${filteredLength}/${maxLength})` : undefined;

  return (
    <div className={classNames("inline-flex flex-col gap-1", className)}>
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
        className={inputClassName}
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
