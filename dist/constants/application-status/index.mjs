// src/constants/application-status/index.ts
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
export {
  ApplicationStatus
};
//# sourceMappingURL=index.mjs.map