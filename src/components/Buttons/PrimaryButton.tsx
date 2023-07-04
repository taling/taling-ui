const PrimaryButton = ({
  children,
  size = "md",
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
}): JSX.Element => {
  const pad = function () {
    switch (size) {
      case "sm":
        return "px-2 py-1.5";
      case "md":
        return "px-4 py-2";
      case "lg":
        return "px-6 py-3";
    }
  };
  return (
    <div
      className={
        "bg-taling-pink-400 text-white text-center px-2 py-1.5 rounded-md drop-shadow-sm cursor-pointer" +
        pad()
      }
    >
      {children}
    </div>
  );
};

export default PrimaryButton;
