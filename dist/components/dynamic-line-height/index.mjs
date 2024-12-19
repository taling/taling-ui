// src/components/dynamic-line-height/index.tsx
import { useLayoutEffect, useRef, useState } from "react";
var DynamicLineHeightText = ({
  text,
  singleLineHeight = 16,
  multiLineHeight = 20,
  className = "",
  ...props
}) => {
  const textRef = useRef(null);
  const [isSingleLine, setIsSingleLine] = useState(true);
  useLayoutEffect(() => {
    if (textRef.current) {
      setIsSingleLine(textRef.current.scrollHeight <= singleLineHeight * 2);
    }
  }, [text, singleLineHeight]);
  return /* @__PURE__ */ React.createElement(
    "p",
    {
      ref: textRef,
      className: `transition-all duration-200 ${isSingleLine ? `leading-[${singleLineHeight}px]` : `leading-[${multiLineHeight}px]`} ${className}`,
      ...props
    },
    text
  );
};
var dynamic_line_height_default = DynamicLineHeightText;
export {
  dynamic_line_height_default as default
};
//# sourceMappingURL=index.mjs.map