// src/hooks/use-in-visible/index.ts
import { useEffect, useState } from "react";
function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(null);
  const [isIntersectingStart, setIntersectingStart] = useState(
    null
  );
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      setIntersectingStart(entry.boundingClientRect.top > 0);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return {
    isIntersecting,
    isIntersectingStart
  };
}
export {
  useIsVisible
};
//# sourceMappingURL=index.mjs.map