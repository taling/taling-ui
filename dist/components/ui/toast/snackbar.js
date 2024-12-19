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

// src/components/ui/toast/snackbar.tsx
var snackbar_exports = {};
__export(snackbar_exports, {
  snackbar: () => snackbar
});
module.exports = __toCommonJS(snackbar_exports);

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/toast/snackbar.tsx
var import_react_hot_toast = require("react-hot-toast");
var CustomSnackbar = ({
  description,
  t,
  label = "\uBC14\uB85C\uAC00\uAE30",
  onClick
}) => {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classNames(
        "flex items-center justify-between px-4 py-3 rounded-[0.625rem] bg-taling-gray-900 bg-opacity-80 shadow-emphasize backdrop-blur-md",
        "min-w-[20rem] max-w-[90vw] md:max-w-[25rem]",
        t.visible ? "animate-slide-in-bottom" : ""
      )
    },
    /* @__PURE__ */ React.createElement("div", { className: "text-taling-white text-body1normal-regular" }, description),
    /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick,
        className: "flex-shrink-0 ml-3 text-taling-pink-200 text-label1normal-semibold"
      },
      label
    )
  );
};
var snackbar = {
  show: ({ description, duration = 4e3, label, onClick }) => {
    return import_react_hot_toast.toast.custom(
      (t) => /* @__PURE__ */ React.createElement(
        CustomSnackbar,
        {
          description,
          t,
          label,
          onClick
        }
      ),
      {
        duration,
        position: "bottom-center"
      }
    );
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  snackbar
});
//# sourceMappingURL=snackbar.js.map