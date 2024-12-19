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

// src/constants/application-tutor-status/index.ts
var application_tutor_status_exports = {};
__export(application_tutor_status_exports, {
  ApplicationTutorStatus: () => ApplicationTutorStatus
});
module.exports = __toCommonJS(application_tutor_status_exports);
var ApplicationTutorStatus = /* @__PURE__ */ ((ApplicationTutorStatus2) => {
  ApplicationTutorStatus2[ApplicationTutorStatus2["REQUESTED"] = 0] = "REQUESTED";
  ApplicationTutorStatus2[ApplicationTutorStatus2["APPROVED"] = 1] = "APPROVED";
  ApplicationTutorStatus2[ApplicationTutorStatus2["REJECTED"] = 2] = "REJECTED";
  return ApplicationTutorStatus2;
})(ApplicationTutorStatus || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ApplicationTutorStatus
});
//# sourceMappingURL=index.js.map