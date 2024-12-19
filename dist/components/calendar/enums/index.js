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

// src/components/calendar/enums/index.ts
var enums_exports = {};
__export(enums_exports, {
  CalendarViewMode: () => CalendarViewMode,
  StartOfWeek: () => StartOfWeek
});
module.exports = __toCommonJS(enums_exports);
var StartOfWeek = /* @__PURE__ */ ((StartOfWeek2) => {
  StartOfWeek2[StartOfWeek2["Sunday"] = 0] = "Sunday";
  StartOfWeek2[StartOfWeek2["Monday"] = 1] = "Monday";
  StartOfWeek2[StartOfWeek2["Tuesday"] = 2] = "Tuesday";
  StartOfWeek2[StartOfWeek2["Wednesday"] = 3] = "Wednesday";
  StartOfWeek2[StartOfWeek2["Thursday"] = 4] = "Thursday";
  StartOfWeek2[StartOfWeek2["Friday"] = 5] = "Friday";
  StartOfWeek2[StartOfWeek2["Saturday"] = 6] = "Saturday";
  return StartOfWeek2;
})(StartOfWeek || {});
var CalendarViewMode = /* @__PURE__ */ ((CalendarViewMode2) => {
  CalendarViewMode2["Year"] = "year";
  CalendarViewMode2["Month"] = "month";
  CalendarViewMode2["Week"] = "week";
  return CalendarViewMode2;
})(CalendarViewMode || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CalendarViewMode,
  StartOfWeek
});
//# sourceMappingURL=index.js.map