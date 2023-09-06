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
}: {
  src: string;
  alt: string;
  className: string;
  fallback: React.ReactNode | string;
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
      onError={() => {
        setShowFallback(true);
      }}
    />
  );
}
