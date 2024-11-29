import { classNames } from "@taling-ui/util/tailwind-util/class-names";
import { useState } from "react";
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
  className,
  onChange,
}: TextareaFieldProps) {
  const [filteredLength, setFilteredLength] = useState(0);

  const lengthInfo = maxLength ? `(${filteredLength}/${maxLength})` : undefined;

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
