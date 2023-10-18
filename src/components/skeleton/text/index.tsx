export function TextSkeletonComponent({
  isLoading,
  expectedWidth,
  className,
  text,
  isOverflowMode,
}: {
  isLoading: boolean;
  expectedWidth?: string;
  className?: string;
  text?: string;
  isOverflowMode?: boolean;
}) {
  const loadingClass = isLoading
    ? "animate-pulse bg-taling-gray-100 text-transparent rounded-lg"
    : "";

  const overflowClass = isOverflowMode ? "overflow-y-scroll " : "";

  return (
    <p
      className={`${loadingClass} ${overflowClass} ${className ?? ""}`}
      style={{
        width: isLoading ? expectedWidth : "auto",
      }}
    >
      {text ?? (isLoading ? "." : "")}
    </p>
  );
}
