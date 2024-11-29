import { classNames } from "@taling-ui/util/tailwind-util/class-names";

interface InputLabelProps {
  label?: string;
  option?: string;
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
        <span className="inline-block text-caption1-regular text-danger">
          {`(${option})`}
        </span>
      )}
    </div>
  );
}
