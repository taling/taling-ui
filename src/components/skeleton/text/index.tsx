export function TextSkeletonComponent({
  isLoading,
  expectedWidth,
  className,
  text,
}: {
  isLoading: boolean;
  expectedWidth?: string;
  className?: string;
  text?: string;
}) {
  const loadingClass = isLoading
    ? "animate-pulse bg-taling-gray-100 text-transparent rounded-lg"
    : "";

  return (
    <p
      className={`${loadingClass} ${className ?? ""}`}
      style={{
        width: isLoading ? expectedWidth : "auto",
      }}
    >
      {text ?? (isLoading ? "." : "")}
    </p>
  );
}
