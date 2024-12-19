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

// src/constants/vodPayment-status/index.ts
var vodPayment_status_exports = {};
__export(vodPayment_status_exports, {
  VodPaymentStatus: () => VodPaymentStatus
});
module.exports = __toCommonJS(vodPayment_status_exports);
var VodPaymentStatus = /* @__PURE__ */ ((VodPaymentStatus2) => {
  VodPaymentStatus2[VodPaymentStatus2["REQUESTED"] = 0] = "REQUESTED";
  VodPaymentStatus2[VodPaymentStatus2["PAYMENT_COMPLETED"] = 1] = "PAYMENT_COMPLETED";
  return VodPaymentStatus2;
})(VodPaymentStatus || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  VodPaymentStatus
});
//# sourceMappingURL=index.js.map