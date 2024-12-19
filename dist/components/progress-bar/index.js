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

// src/components/progress-bar/index.tsx
var progress_bar_exports = {};
__export(progress_bar_exports, {
  DefaultProgressBarComponent: () => DefaultProgressBarComponent
});
module.exports = __toCommonJS(progress_bar_exports);
var import_react = require("react");
function DefaultProgressBarComponent({ percent }) {
  const [_internalPercent, setInternalPercent] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultProgressBarComponent
});
//# sourceMappingURL=index.js.map