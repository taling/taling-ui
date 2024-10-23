import { useLayoutEffect, useRef, useState } from "react";

interface DynamicLineHeightTextProps {
  text: string;
  singleLineHeight?: number;
  multiLineHeight?: number;
  className?: string;
}

const DynamicLineHeightText = ({
  text,
  singleLineHeight = 16,
  multiLineHeight = 20,
  className = "",
  ...props
}: DynamicLineHeightTextProps) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isSingleLine, setIsSingleLine] = useState(true);

  useLayoutEffect(() => {
    if (textRef.current) {
      setIsSingleLine(textRef.current.scrollHeight <= singleLineHeight * 2);
    }
  }, [text, singleLineHeight]);

  return (
    <p
      ref={textRef}
      className={`transition-all duration-200 ${
        isSingleLine
          ? `leading-[${singleLineHeight}px]`
          : `leading-[${multiLineHeight}px]`
      } ${className}`}
      {...props}
    >
      {text}
    </p>
  );
};

export default DynamicLineHeightText;
