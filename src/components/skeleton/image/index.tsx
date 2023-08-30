/* eslint-disable @next/next/no-img-element */
export function ImageSkeletonComponent({
  isLoading = true,
  className,
  imageUrl,
  imageAlt,
  placeholder,
}: {
  isLoading: boolean;
  className?: any;
  imageUrl?: string;
  imageAlt?: string;
  placeholder: any;
}) {
  if (isLoading) {
    return <div className={...className}>{placeholder}</div>;
  }
  return (
    <div className={...className}>
      {imageUrl ? (
        <img
          className={"w-full h-full object-cover"}
          src={imageUrl}
          alt={imageAlt}
        />
      ) : (
        placeholder
      )}
    </div>
  );
}
