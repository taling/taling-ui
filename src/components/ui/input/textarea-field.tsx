import { useState } from "react";
import InputDescription, { InputDescriptionProps } from "./description";
import InputErrorMessage, { InputErrorMessageProps } from "./error-message";
import InputLabel, { InputLabelProps } from "./label";
import Textarea, { TextareaProps } from "./textarea";
interface TextareaFieldProps
  extends Omit<TextareaProps, "onValueLength">,
    Pick<InputLabelProps, "label">,
    Pick<InputDescriptionProps, "description">,
    Pick<InputErrorMessageProps, "errorMessage"> {
  labelOption?: InputLabelProps["option"];
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
  className,
  onChange,
}: TextareaFieldProps) {
  const [filteredLength, setFilteredLength] = useState(0);

  const lengthInfo = maxLength ? `(${filteredLength}/${maxLength})` : undefined;

  return (
    <div className="flex flex-col gap-1">
      <InputLabel label={label} option={labelOption} />
      <Textarea
        value={value}
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
        disabled={disabled}
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
