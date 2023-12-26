/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

/**
 * 이미지 로드에 실패하면 fallback 컴포넌트를 표시합니다.
 * @param param0
 * @returns
 */
export default function ImageFallback({
  src,
  alt,
  className = "",
  fallback,
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className: string;
  fallback: React.ReactNode | string;
  loading?: "eager" | "lazy" | undefined;
}) {
  const [showFallback, setShowFallback] = useState<boolean>(false);

  if (showFallback) {
    return <div className={className}>{fallback}</div>;
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => {
        setShowFallback(true);
      }}
    />
  );
}
