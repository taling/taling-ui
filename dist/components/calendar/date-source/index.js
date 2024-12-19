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

// src/components/calendar/date-source/index.ts
var date_source_exports = {};
__export(date_source_exports, {
  DateSource: () => DateSource
});
module.exports = __toCommonJS(date_source_exports);
function isDateToday(date) {
  const today = /* @__PURE__ */ new Date();
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
}
var DateSource = {
  getDaysInMonth: (year, month) => {
    const days = [];
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const firstDayOfWeek = 0;
    const numDaysInMonth = new Date(year, month, 0).getDate();
    const startDay = firstDayOfMonth.getDay() - firstDayOfWeek;
    const numDaysFromPrevMonth = startDay < 0 ? -startDay : firstDayOfMonth.getDay();
    const numDaysFromNextMonth = 42 - numDaysFromPrevMonth - numDaysInMonth;
    const numWeeks = Math.ceil((numDaysInMonth + numDaysFromPrevMonth) / 7);
    const loopValue = numWeeks === 5 ? 35 : 42;
    for (let i = 0; i < loopValue; i++) {
      const date = new Date(year, month - 1, i - startDay + 1);
      const day = date.getDate();
      const isToday = isDateToday(date);
      const isCurrentMonth = date.getMonth() === month - 1;
      const dayOfWeek = date.getDay();
      const dateString = date.toDateString();
      let calendarMonth = month;
      let calendarYear = year;
      if (i < startDay) {
        calendarMonth = month === 1 ? 12 : month - 1;
        calendarYear = month === 1 ? year - 1 : year;
      } else if (i >= startDay + numDaysInMonth) {
        calendarMonth = month === 12 ? 1 : month + 1;
        calendarYear = month === 12 ? year + 1 : year;
      }
      const calendarDay = {
        dateObject: date,
        year: calendarYear,
        month: calendarMonth,
        day,
        isToday,
        isCurrentMonth,
        dayOfWeek,
        dateString,
        events: []
      };
      days.push(calendarDay);
    }
    return { days, isSixWeeks: numWeeks === 6 };
  },
  getWeekInYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const weekOffset = (startOfYear.getDay() + 6) % 7;
    const pastDaysOfYear = Math.floor(
      (date.getTime() - startOfYear.getTime()) / 864e5
    );
    const weekNumber = Math.floor((pastDaysOfYear + weekOffset) / 7) + 1;
    return Math.min(52, weekNumber);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DateSource
});
//# sourceMappingURL=index.js.map