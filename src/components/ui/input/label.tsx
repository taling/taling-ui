import { classNames } from "@taling-ui/util/tailwind-util/class-names";

export interface InputLabelProps {
  label?: string;
  option?: "필수" | "선택";
  className?: string;
}

export default function InputLabel({
  label = "label",
  option,
  className,
}: InputLabelProps) {
  return (
    <div className={classNames("inline-flex items-center gap-0.5", className)}>
      <span className="inline-block text-label1normal-regular text-neutral">
        {label}
      </span>
      {option && (
        <span
          className={classNames(
            "inline-block text-caption1-regular",
            option === "선택" ? "text-high-emphasis" : "text-danger",
          )}
        >
          {`(${option})`}
        </span>
      )}
    </div>
  );
}
