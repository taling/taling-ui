import { classNames } from "@taling-ui/util/tailwind-util/class-names";

interface InputDescriptionProps {
  description?: string;
  className?: string;
}

export default function InputDescription({
  description = "description",
  className,
}: InputDescriptionProps) {
  return (
    <span
      className={classNames(
        "inline-block text-caption1-regular text-neutral",
        className,
      )}
    >
      {description}
    </span>
  );
}
