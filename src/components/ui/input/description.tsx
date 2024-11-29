import { classNames } from "@taling-ui/util/tailwind-util/class-names";

interface InputDescriptionProps {
  description?: string;
  option?: string;
  className?: string;
}

export default function InputDescription({
  description = "description",
  option,
  className,
}: InputDescriptionProps) {
  return (
    <div
      className={classNames(
        "inline-flex items-center gap-1 text-caption1-regular text-neutral",
        className,
      )}
    >
      {option && <span className="inline-block">{option}</span>}
      <span className="inline-block">{description}</span>
    </div>
  );
}
