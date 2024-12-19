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

// src/constants/talent-category/index.ts
var talent_category_exports = {};
__export(talent_category_exports, {
  TalentCategory: () => TalentCategory,
  TalentSpecialRegion: () => TalentSpecialRegion
});
module.exports = __toCommonJS(talent_category_exports);
var TalentCategory = /* @__PURE__ */ ((TalentCategory2) => {
  TalentCategory2[TalentCategory2["P2P_OFFLINE"] = 1] = "P2P_OFFLINE";
  TalentCategory2[TalentCategory2["P2P_ONLINE"] = 2] = "P2P_ONLINE";
  TalentCategory2[TalentCategory2["P2P_VIDEO"] = 3] = "P2P_VIDEO";
  TalentCategory2[TalentCategory2["P2P_EBOOK"] = 4] = "P2P_EBOOK";
  TalentCategory2[TalentCategory2["VOD"] = 5] = "VOD";
  TalentCategory2[TalentCategory2["SUBSCRIPTION"] = 6] = "SUBSCRIPTION";
  return TalentCategory2;
})(TalentCategory || {});
var TalentSpecialRegion = /* @__PURE__ */ ((TalentSpecialRegion2) => {
  TalentSpecialRegion2[TalentSpecialRegion2["ONLINE"] = 64] = "ONLINE";
  TalentSpecialRegion2[TalentSpecialRegion2["OFFLINE"] = 65] = "OFFLINE";
  return TalentSpecialRegion2;
})(TalentSpecialRegion || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TalentCategory,
  TalentSpecialRegion
});
//# sourceMappingURL=index.js.map