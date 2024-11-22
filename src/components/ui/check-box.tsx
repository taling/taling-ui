import { classNames } from "@taling-ui/util/tailwind-util/class-names";

const sizeMap = {
  normal: "w-5 h-5",
  small: "w-4 h-4",
};
type sizeMapType = keyof typeof sizeMap;

interface CheckBoxProps {
  size?: sizeMapType;
}

export default function CheckBox({ size = "normal" }: CheckBoxProps) {
  return (
    <input
      className={classNames(
        sizeMap[size],
        "rounded-md border-1 border-taling-gray-400 text-primary",
        "hover:ring-2 hover:ring-offset-0 hover:ring-primary/10",
        "active:ring-2 active:ring-offset-0 active:ring-primary/15",
        "focus:ring-0 focus:ring-offset-0 focus:outline-none",
        "focus-visible:ring-0 focus-visible:ring-offset-0",
        "checked:focus:ring-0 checked:focus:ring-offset-0",
        "appearance-none",
      )}
      type="checkbox"
    />
  );
}
