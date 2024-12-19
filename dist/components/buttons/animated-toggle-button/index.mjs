"use client";

// src/components/buttons/animated-toggle-button/index.tsx
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
var _DefaultToggleAnimateProps = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 }
};
function AnimatedToggleButtonComponent({
  isOn,
  render,
  onToggle
}) {
  var _a, _b;
  const [isUpdating, setIsUpdating] = useState(false);
  const [showErrorRender, setShowErrorRender] = useState(false);
  return /* @__PURE__ */ React.createElement(AnimatePresence, null, isOn ? /* @__PURE__ */ React.createElement(
    motion.div,
    {
      ..._DefaultToggleAnimateProps,
      key: "button",
      onClick: (e) => {
        e.stopPropagation();
        if (isUpdating) return;
        setIsUpdating(true);
        onToggle().then(({ toggleSuccess }) => {
          setIsUpdating(false);
          setShowErrorRender(!toggleSuccess);
        });
      }
    },
    isUpdating ? /* @__PURE__ */ React.createElement(motion.div, { ..._DefaultToggleAnimateProps, key: "button-on-spin" }, render.loading) : /* @__PURE__ */ React.createElement(motion.div, { ..._DefaultToggleAnimateProps, key: "button-on-on" }, showErrorRender ? (_a = render.error) != null ? _a : render.on : render.on)
  ) : /* @__PURE__ */ React.createElement(
    motion.div,
    {
      ..._DefaultToggleAnimateProps,
      className: "",
      key: "button",
      onClick: (e) => {
        e.stopPropagation();
        if (isUpdating) return;
        setIsUpdating(true);
        onToggle().then(({ toggleSuccess }) => {
          setIsUpdating(false);
          setShowErrorRender(!toggleSuccess);
        });
      }
    },
    isUpdating ? /* @__PURE__ */ React.createElement(motion.div, { ..._DefaultToggleAnimateProps, key: "button-off-spin" }, render.loading) : /* @__PURE__ */ React.createElement(motion.div, { ..._DefaultToggleAnimateProps, key: "button-off-off" }, showErrorRender ? (_b = render.error) != null ? _b : render.off : render.off)
  ));
}
export {
  AnimatedToggleButtonComponent as default
};
//# sourceMappingURL=index.mjs.map