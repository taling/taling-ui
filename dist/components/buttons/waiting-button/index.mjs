// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/buttons/waiting-button/index.tsx
import { cloneElement, useCallback, useEffect, useState } from "react";
function WaitingButton({
  render: { normal, waiting, failed },
  passData,
  className,
  onClick
}) {
  const [currentRender, setCurrentRender] = useState(normal);
  const [isLoading, setIsLoading] = useState(false);
  const _internalOnClick = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentRender(waiting);
    const result = await onClick(passData);
    setIsLoading(false);
    setCurrentRender(result ? normal : failed || normal);
  }, [failed, isLoading, normal, onClick, passData, waiting]);
  const updateNormalButton = useCallback(() => {
    if (!isLoading) {
      setCurrentRender(normal);
    }
  }, [isLoading, normal]);
  useEffect(() => {
    updateNormalButton();
  }, [normal, updateNormalButton]);
  const element = currentRender;
  return cloneElement(element, {
    onClick: _internalOnClick,
    className: classNames(element.props.className || "", className || "")
  });
}
export {
  WaitingButton as default
};
//# sourceMappingURL=index.mjs.map