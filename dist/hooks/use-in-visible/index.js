"use strict";
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

// src/hooks/use-in-visible/index.ts
var use_in_visible_exports = {};
__export(use_in_visible_exports, {
  useIsVisible: () => useIsVisible
});
module.exports = __toCommonJS(use_in_visible_exports);
var import_react = require("react");
function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = (0, import_react.useState)(null);
  const [isIntersectingStart, setIntersectingStart] = (0, import_react.useState)(
    null
  );
  (0, import_react.useEffect)(() => {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useIsVisible
});
//# sourceMappingURL=index.js.map