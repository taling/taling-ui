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

// src/components/buttons/waiting-button/index.tsx
var waiting_button_exports = {};
__export(waiting_button_exports, {
  default: () => WaitingButton
});
module.exports = __toCommonJS(waiting_button_exports);

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/buttons/waiting-button/index.tsx
var import_react = require("react");
function WaitingButton({
  render: { normal, waiting, failed },
  passData,
  className,
  onClick
}) {
  const [currentRender, setCurrentRender] = (0, import_react.useState)(normal);
  const [isLoading, setIsLoading] = (0, import_react.useState)(false);
  const _internalOnClick = (0, import_react.useCallback)(async () => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentRender(waiting);
    const result = await onClick(passData);
    setIsLoading(false);
    setCurrentRender(result ? normal : failed || normal);
  }, [failed, isLoading, normal, onClick, passData, waiting]);
  const updateNormalButton = (0, import_react.useCallback)(() => {
    if (!isLoading) {
      setCurrentRender(normal);
    }
  }, [isLoading, normal]);
  (0, import_react.useEffect)(() => {
    updateNormalButton();
  }, [normal, updateNormalButton]);
  const element = currentRender;
  return (0, import_react.cloneElement)(element, {
    onClick: _internalOnClick,
    className: classNames(element.props.className || "", className || "")
  });
}
//# sourceMappingURL=index.js.map