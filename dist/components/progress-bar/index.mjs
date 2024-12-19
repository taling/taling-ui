"use client";

// src/components/progress-bar/index.tsx
import { useEffect, useState } from "react";
function DefaultProgressBarComponent({ percent }) {
  const [_internalPercent, setInternalPercent] = useState(0);
  useEffect(() => {
    if (percent > 100) setInternalPercent(100);
    else if (percent < 0) setInternalPercent(0);
    else setInternalPercent(percent);
  }, [percent]);
  return /* @__PURE__ */ React.createElement("div", { className: "relative h-1 w-full overflow-hidden rounded-full" }, /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-0 left-0 right-0 top-0 h-2 bg-gray-200" }), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "absolute bottom-0 left-0 right-0 top-0 h-2 bg-taling-purple-400",
      style: { width: `${_internalPercent}%` }
    }
  ));
}
export {
  DefaultProgressBarComponent
};
//# sourceMappingURL=index.mjs.map