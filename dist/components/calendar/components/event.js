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

// src/components/calendar/components/event.tsx
var event_exports = {};
__export(event_exports, {
  default: () => event_default
});
module.exports = __toCommonJS(event_exports);
var CalendarEventComponent = ({
  event,
  renderers
}) => {
  var _a;
  const eventRenderer = (_a = renderers == null ? void 0 : renderers.monthView) == null ? void 0 : _a.event;
  if (eventRenderer) {
    return eventRenderer(event);
  }
  return /* @__PURE__ */ React.createElement("div", { className: "bg-white shadow-md rounded-md overflow-hidden my-1" }, /* @__PURE__ */ React.createElement("a", { className: "group flex gap-2 cursor-pointer" }, /* @__PURE__ */ React.createElement("div", { className: "bg-taling-purple-500 w-[0.25rem] shrink-0" }), /* @__PURE__ */ React.createElement("p", { className: "flex-auto truncate font-medium text-gray-900 group-hover:text-taling-purple-600" }, event.title)));
};
var event_default = CalendarEventComponent;
//# sourceMappingURL=event.js.map