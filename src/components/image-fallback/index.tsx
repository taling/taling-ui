/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";

interface ImageFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode | string;
  loading?: "eager" | "lazy" | undefined;
  nextImageOption?: {
    width?: number;
    height?: number;
    fill?: boolean;
  };
  useDefaultImg?: boolean;
  onClick?: () => void
}
/**
 * 이미지 로드에 실패하면 fallback 컴포넌트를 표시합니다.
 * @param param0
 * @returns
 */
export default function ImageFallback({
  src,
  alt,
  className = "",
  fallback = <div className="h-full bg-taling-gray-300 blur-sm "></div>
  ,
  loading = "lazy",
  nextImageOption,
  useDefaultImg,
  onClick
}:ImageFallbackProps) {
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
          fill={nextImageOption.fill}
          loading={loading}
          onClick={onClick}
        />
      ) : (
        <img
          src={defaultSrc}
          alt={alt}
          className={className}
          loading={loading}
          onClick={onClick}
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
      fill={nextImageOption.fill}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8Ww8AAj8BXkQ+xPEAAAAASUVORK5CYII="
      loading={loading}
      onError={() => {
        setShowFallback(true);
      }}
      onClick={onClick}
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
      onClick={onClick}
    />
  );
}
