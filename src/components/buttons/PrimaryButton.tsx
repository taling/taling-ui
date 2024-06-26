import { classNames } from "../../util/tailwind-util/class-names";

const PrimaryButton = ({
  children,
  size = "md",
  showLoadingState = false,
  isEnabled = true,
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  showLoadingState?: boolean;
  isEnabled?: boolean;
}): JSX.Element => {
  const pad = function () {
    switch (size) {
      case "sm":
        return "px-2 py-1.5 h-8";
      case "md":
        return "px-4 py-2 h-10";
      case "lg":
        return "px-6 py-3 h-12";
    }
  };
  return (
    <div
      className={classNames(
        " text-white text-center px-2 py-1.5 rounded-md drop-shadow-sm cursor-pointer",
        isEnabled ? "bg-taling-pink" : "bg-taling-gray-400 cursor-not-allowed",
        pad(),
      )}
    >
      {showLoadingState ? (
        <div className="flex w-full h-full justify-center items-center gap-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping transition-transform delay-300"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping transition-transform delay-600"></div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default PrimaryButton;
