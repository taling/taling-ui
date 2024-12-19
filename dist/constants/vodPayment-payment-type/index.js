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

// src/constants/vodPayment-payment-type/index.ts
var vodPayment_payment_type_exports = {};
__export(vodPayment_payment_type_exports, {
  VodPaymentPaymentType: () => VodPaymentPaymentType
});
module.exports = __toCommonJS(vodPayment_payment_type_exports);
var VodPaymentPaymentType = /* @__PURE__ */ ((VodPaymentPaymentType2) => {
  VodPaymentPaymentType2[VodPaymentPaymentType2["VIRTUAL_ACCOUNT"] = 0] = "VIRTUAL_ACCOUNT";
  VodPaymentPaymentType2[VodPaymentPaymentType2["CARD"] = 1] = "CARD";
  return VodPaymentPaymentType2;
})(VodPaymentPaymentType || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  VodPaymentPaymentType
});
//# sourceMappingURL=index.js.map