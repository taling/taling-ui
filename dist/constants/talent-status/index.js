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

// src/constants/talent-status/index.ts
var talent_status_exports = {};
__export(talent_status_exports, {
  TalentStatusEnum: () => TalentStatusEnum
});
module.exports = __toCommonJS(talent_status_exports);
var TalentStatusEnum = /* @__PURE__ */ ((TalentStatusEnum2) => {
  TalentStatusEnum2[TalentStatusEnum2["DELETED"] = -1] = "DELETED";
  TalentStatusEnum2[TalentStatusEnum2["DRAFT"] = 0] = "DRAFT";
  TalentStatusEnum2[TalentStatusEnum2["REJECTED"] = 1] = "REJECTED";
  TalentStatusEnum2[TalentStatusEnum2["OPENED"] = 2] = "OPENED";
  TalentStatusEnum2[TalentStatusEnum2["SUSPENDED"] = 3] = "SUSPENDED";
  TalentStatusEnum2[TalentStatusEnum2["WAITING_FOR_TERMS_AGREEMENT"] = 8] = "WAITING_FOR_TERMS_AGREEMENT";
  TalentStatusEnum2[TalentStatusEnum2["WAITING_FOR_REVIEW"] = 9] = "WAITING_FOR_REVIEW";
  return TalentStatusEnum2;
})(TalentStatusEnum || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TalentStatusEnum
});
//# sourceMappingURL=index.js.map