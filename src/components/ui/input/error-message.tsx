import { classNames } from "@taling-ui/util/tailwind-util/class-names";

export interface InputErrorMessageProps {
  errorMessage?: string;
  option?: string;
  className?: string;
}

export default function InputErrorMessage({
  errorMessage = "error",
  option,
  className,
}: InputErrorMessageProps) {
  return (
    <div
      className={classNames(
        "inline-flex items-center gap-1 text-caption1-regular text-danger",
        className,
      )}
    >
      {option && <span className="inline-block">{option}</span>}
      <span className="inline-block">{errorMessage}</span>
    </div>
  );
}
