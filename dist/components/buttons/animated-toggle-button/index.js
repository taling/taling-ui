"use strict";
"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/buttons/animated-toggle-button/index.tsx
var animated_toggle_button_exports = {};
__export(animated_toggle_button_exports, {
  default: () => AnimatedToggleButtonComponent
});
module.exports = __toCommonJS(animated_toggle_button_exports);
var import_framer_motion = require("framer-motion");
var import_react = require("react");
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
  const [isUpdating, setIsUpdating] = (0, import_react.useState)(false);
  const [showErrorRender, setShowErrorRender] = (0, import_react.useState)(false);
  return /* @__PURE__ */ React.createElement(import_framer_motion.AnimatePresence, null, isOn ? /* @__PURE__ */ React.createElement(
    import_framer_motion.motion.div,
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
    isUpdating ? /* @__PURE__ */ React.createElement(import_framer_motion.motion.div, { ..._DefaultToggleAnimateProps, key: "button-on-spin" }, render.loading) : /* @__PURE__ */ React.createElement(import_framer_motion.motion.div, { ..._DefaultToggleAnimateProps, key: "button-on-on" }, showErrorRender ? (_a = render.error) != null ? _a : render.on : render.on)
  ) : /* @__PURE__ */ React.createElement(
    import_framer_motion.motion.div,
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
    isUpdating ? /* @__PURE__ */ React.createElement(import_framer_motion.motion.div, { ..._DefaultToggleAnimateProps, key: "button-off-spin" }, render.loading) : /* @__PURE__ */ React.createElement(import_framer_motion.motion.div, { ..._DefaultToggleAnimateProps, key: "button-off-off" }, showErrorRender ? (_b = render.error) != null ? _b : render.off : render.off)
  ));
}
//# sourceMappingURL=index.js.map