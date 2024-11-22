import { classNames } from "@taling-ui/util/tailwind-util/class-names";

const sizeMap = {
  normal: "w-5 h-5",
  small: "w-4 h-4",
};
type sizeMapType = keyof typeof sizeMap;

interface RadioButtonProps {
  size?: sizeMapType;
  radioGroup?: string;
}

export default function RadioButton({
  size = "normal",
  radioGroup,
}: RadioButtonProps) {
  return (
    <input
      className={classNames(
        sizeMap[size],
        "text-primary cursor-pointer",
        "active:ring-2 active:ring-offset-1 active:ring-primary",
        "disabled:opacity-30",
        "focus:ring-0 focus:ring-offset-0 focus:outline-none",
        "focus-visible:ring-0 focus-visible:ring-offset-0",
        "checked:focus:ring-0 checked:focus:ring-offset-0",
        "appearance-none",
      )}
      type="radio"
      radioGroup={radioGroup}
    />
  );
}
