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

// src/store/devMarkerStore.ts
var devMarkerStore_exports = {};
__export(devMarkerStore_exports, {
  devMarkerStore: () => devMarkerStore
});
module.exports = __toCommonJS(devMarkerStore_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  devMarkerStore
});
//# sourceMappingURL=devMarkerStore.js.map