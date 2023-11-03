import { SelectableColorType } from "../types";

type ColorPresetsType<T> = {
  [key in SelectableColorType]: T;
};

export const colorPresets: ColorPresetsType<any> = {
  pink: {
    bg: "bg-taling-pink-400",
    hoverBg: "hover:bg-taling-pink-500",
    focusVisible: "focus-visible:outline-taling-pink-600",
  },
  purple: {
    bg: "bg-taling-purple-500",
    hoverBg: "hover:bg-taling-purple-600",
    focusVisible: "focus-visible:outline-taling-purple-700",
  },
};
