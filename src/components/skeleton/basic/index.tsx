type SkeletonHeightType =
  | "h-44"
  | "h-28"
  | "h-20"
  | "h-16"
  | "h-12"
  | "h-8"
  | "h-6"
  | "h-4"
  | "h-3"
  | "h-2"
  | "h-1"
  | "h-0.5";

export default function BasicSkeletonComponent({
  height = "h-44",
}: {
  height?: SkeletonHeightType;
}) {
  return (
    <div
      className={`w-full ${height} bg-taling-gray-100 rounded-md animate-pulse`}
    ></div>
  );
}
