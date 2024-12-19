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

// src/constants/application-status/index.ts
var application_status_exports = {};
__export(application_status_exports, {
  ApplicationStatus: () => ApplicationStatus
});
module.exports = __toCommonJS(application_status_exports);
var ApplicationStatus = /* @__PURE__ */ ((ApplicationStatus2) => {
  ApplicationStatus2[ApplicationStatus2["REQUESTED"] = 0] = "REQUESTED";
  ApplicationStatus2[ApplicationStatus2["PAYMENT_COMPLETED"] = 1] = "PAYMENT_COMPLETED";
  ApplicationStatus2[ApplicationStatus2["BOOKING_SUCCESS"] = 2] = "BOOKING_SUCCESS";
  ApplicationStatus2[ApplicationStatus2["BOOKING_CANCELED"] = 3] = "BOOKING_CANCELED";
  ApplicationStatus2[ApplicationStatus2["EXPIRED"] = 5] = "EXPIRED";
  ApplicationStatus2[ApplicationStatus2["REFUND"] = 6] = "REFUND";
  ApplicationStatus2[ApplicationStatus2["REFUND_1HOUR"] = 7] = "REFUND_1HOUR";
  ApplicationStatus2[ApplicationStatus2["PARTIAL_REFUND"] = 10] = "PARTIAL_REFUND";
  return ApplicationStatus2;
})(ApplicationStatus || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ApplicationStatus
});
//# sourceMappingURL=index.js.map