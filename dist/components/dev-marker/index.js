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

// src/components/dev-marker/index.tsx
var dev_marker_exports = {};
__export(dev_marker_exports, {
  default: () => dev_marker_default
});
module.exports = __toCommonJS(dev_marker_exports);
var import_react2 = require("react");

// src/store/devMarkerStore.ts
var import_zustand = require("zustand");
var import_middleware = require("zustand/middleware");
var devMarkerStore = (0, import_zustand.create)()(
  (0, import_middleware.persist)(
    (set) => ({
      hideSession: false,
      setHideSession: (state) => set({ hideSession: state })
    }),
    {
      name: "dev-marker-storage",
      getStorage: () => sessionStorage
    }
  )
);

// src/components/app-context/index.tsx
var import_react = require("react");
var TalingAppContext = (0, import_react.createContext)(false);

// src/components/dev-marker/index.tsx
var DevMarker = () => {
  const [isShowing, setIsShowing] = (0, import_react2.useState)(false);
  const appContext = (0, import_react2.useContext)(TalingAppContext);
  const [isDev, setIsDev] = (0, import_react2.useState)(false);
  const [devMsag, setDevMsg] = (0, import_react2.useState)(
    `\uAC1C\uBC1C/\uD14C\uC2A4\uD2B8 \uBAA8\uB4DC\uC5D0\uC6A9 - ${appContext ? "APP" : "WEB"}`
  );
  const { hideSession, setHideSession } = devMarkerStore();
  (0, import_react2.useEffect)(() => {
    if (!window) return;
    const devDomains = ["local", "dev", "test", "vercel.app", "172."];
    const domain = window.location.hostname;
    if (domain.match(new RegExp(devDomains.join("|")))) {
      setIsDev(true);
      setIsShowing(true);
    }
  }, []);
  if (isDev && !hideSession) {
    return /* @__PURE__ */ React.createElement("div", { className: "w-full bg-taling-pink-50 border-b-2 border-b-taling-pink" }, /* @__PURE__ */ React.createElement("div", { className: "flex h-6 items-center relative mx-auto max-w-7xl w-full" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto text-xs font-bold" }, "\u{1F916} ", devMsag), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute right-0 text-xs px-2 sm:px-8 cursor-pointer underline",
        onClick: () => {
          setHideSession(true);
        }
      },
      "\uC774 \uC138\uC158\uC5D0\uC11C \uADF8\uB9CC \uBCF4\uAE30"
    )));
  } else {
    return null;
  }
};
var dev_marker_default = DevMarker;
//# sourceMappingURL=index.js.map