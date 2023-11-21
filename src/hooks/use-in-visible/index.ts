import { useEffect, useState } from "react";

export function useIsVisible(ref: any) {
  const [isIntersecting, setIntersecting] = useState<boolean | null>(null);
  const [isIntersectingStart, setIntersectingStart] = useState<boolean | null>(
    null
  );
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      // if entry is outside of viewport (start and top of the viewport)
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
    isIntersectingStart,
  };
}
