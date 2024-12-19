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

// src/constants/talent-type/index.ts
var talent_type_exports = {};
__export(talent_type_exports, {
  GROUP_CLASS: () => GROUP_CLASS,
  MULTI_DAY_CLASS: () => MULTI_DAY_CLASS,
  ONE_DAY_CLASS: () => ONE_DAY_CLASS,
  ONE_ON_ONE_CLASS: () => ONE_ON_ONE_CLASS
});
module.exports = __toCommonJS(talent_type_exports);
var ONE_ON_ONE_CLASS = [0, 2];
var GROUP_CLASS = [1, 3];
var ONE_DAY_CLASS = [2, 3];
var MULTI_DAY_CLASS = [0, 1];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GROUP_CLASS,
  MULTI_DAY_CLASS,
  ONE_DAY_CLASS,
  ONE_ON_ONE_CLASS
});
//# sourceMappingURL=index.js.map