/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/image";
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
  nextImageOption,
  useDefaultImg,
}: {
  src: string;
  alt: string;
  className: string;
  fallback: React.ReactNode | string;
  loading?: "eager" | "lazy" | undefined;
  nextImageOption?: {
    width: number;
    height: number;
  };
  useDefaultImg?: boolean;
}) {
  const [showFallback, setShowFallback] = useState<boolean>(false);

  if (showFallback || !src) {
    if (useDefaultImg) {
      const defaultSrc =
        "//img.taling.me/Content/Images/placeholders/profile-default.jpg";
      return nextImageOption ? (
        <Image
          src={defaultSrc}
          alt={alt}
          className={className}
          width={nextImageOption.width}
          height={nextImageOption.height}
          loading={loading}
        />
      ) : (
        <img
          src={defaultSrc}
          alt={alt}
          className={className}
          loading={loading}
        />
      );
    }
    return <div className={className}>{fallback}</div>;
  }

  const protocolCheck = (src: string) => {
    if (src.startsWith("//")) {
      return "https:" + src;
    }
    if (!src.startsWith("http://") && !src.startsWith("https://")) {
      return "https://" + src;
    }
    return src;
  };

  const domainCheck = (src: string) => {
    if (!src) return false;
    if (src.includes("taling.me")) {
      return true;
    }
  };

  return nextImageOption && domainCheck(src) ? (
    <Image
      src={protocolCheck(src)}
      alt={alt}
      className={className}
      width={nextImageOption.width}
      height={nextImageOption.height}
      loading={loading}
      onError={() => {
        setShowFallback(true);
      }}
    />
  ) : (
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
