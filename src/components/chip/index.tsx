import { classNames } from "@taling-ui/util/tailwind-util/class-names";

type ChipColorType = "blue" | "violet" | "red" | "gray";

interface ChipProps {
  className?: string;
  color: ChipColorType;
  caption: string;
  icon?: JSX.Element;
}

export default function Chip({ className, caption, color, icon }: ChipProps) {
  return (
    <div
      className={classNames(
        className,
        generateChipColor(color),
        "flex px-1 items-center justify-between gap-0.5 rounded text-label2-semibold",
      )}
    >
      {caption}
      {icon && <div className="w-4 h-4">{icon}</div>}
    </div>
  );
}

function generateChipColor(color: ChipColorType) {
  const chipColorsObject: Record<ChipColorType, string> = {
    red: "bg-taling-pink-50 text-taling-pink",
    blue: "bg-taling-light-blue-50 text-taling-light-blue-600",
    violet: "bg-taling-violet-50 text-taling-violet-400",
    gray: "bg-taling-gray-200 text-taling-gray-600",
  };

  return chipColorsObject[color];
}
