import { classNames } from "@taling-ui/util/tailwind-util/class-names";

type ChipColorType =
  | "pink"
  | "green"
  | "blue"
  | "violet"
  | "orange"
  | "red"
  | "gray"
  | "purple";

type ChipSizeType = "xs" | "sm" | "md" | "lg" | "xl";

interface ChipProps {
  className?: string;
  color: ChipColorType;
  caption: string;
  size?: ChipSizeType;
}

export default function Chip({
  className,
  caption,
  color,
  size = "xs",
}: ChipProps) {
  return (
    <div
      className={classNames(
        className,
        generateChipColor(color),
        generateChipSize(size),
        "rounded-md ",
      )}
    >
      {caption}
    </div>
  );
}

function generateChipColor(color: ChipColorType) {
  const chipColorsObject: Record<ChipColorType, string> = {
    gray: "",
    green: "",
    orange: "",
    pink: "",
    purple: "",
    red: "",
    violet: "",
    blue: "bg-taling-light-blue-50 text-taling-light-blue-300",
  };

  return chipColorsObject[color];
}

function generateChipSize(size: ChipSizeType) {
  const chipSizeObject: Record<ChipSizeType, string> = {
    xs: "py-0.5 px-1.5 text-xs",
    sm: "",
    md: "",
    lg: "",
    xl: "",
  };

  return chipSizeObject[size];
}
