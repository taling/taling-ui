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

// src/components/calendar/components/index.tsx
var components_exports = {};
__export(components_exports, {
  default: () => components_default
});
module.exports = __toCommonJS(components_exports);

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/calendar/components/day.tsx
var import_react2 = require("react");

// src/components/calendar/constants/index.ts
var colorPresets = {
  pink: {
    bg: "bg-taling-pink",
    hoverBg: "hover:bg-taling-pink-600",
    focusVisible: "focus-visible:outline-taling-pink-600"
  },
  purple: {
    bg: "bg-taling-purple-500",
    hoverBg: "hover:bg-taling-purple-600",
    focusVisible: "focus-visible:outline-taling-purple-700"
  }
};

// src/components/calendar/content.tsx
var import_react = require("react");
var MainColorContext = (0, import_react.createContext)("pink");

// src/components/calendar/components/event.tsx
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

// src/components/calendar/components/day.tsx
var CalendarDayComponent = ({
  day,
  renderers,
  onEventClick,
  onHover
}) => {
  var _a, _b;
  const mainColor = (0, import_react2.useContext)(MainColorContext);
  const color = colorPresets[mainColor];
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classNames(
        day.isCurrentMonth ? "bg-white" : "bg-gray-50 text-gray-500",
        "relative px-3 py-2 min-h-[88px]"
      )
    },
    /* @__PURE__ */ React.createElement(
      "time",
      {
        dateTime: day.dateString,
        className: day.isToday ? `flex h-6 w-6 items-center justify-center rounded-full ${color.bg} font-semibold text-white` : void 0
      },
      day.day
    ),
    ((_a = day.events) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ React.createElement("ol", { className: "mt-2" }, (_b = day.events) == null ? void 0 : _b.map((event, index) => {
      return /* @__PURE__ */ React.createElement(
        "li",
        {
          key: index,
          onClick: () => {
            onEventClick && onEventClick(event);
          },
          onMouseEnter: () => {
            onHover && onHover({ status: true, event });
          },
          onMouseLeave: () => {
            onHover && onHover({ status: false, event });
          }
        },
        /* @__PURE__ */ React.createElement(event_default, { event, renderers })
      );
    }))
  );
};
var day_default = CalendarDayComponent;

// src/components/calendar/components/index.tsx
var CalendarInterface = ({
  days,
  renderers,
  onEventClick,
  onDayClick,
  onHover
}) => {
  const renderDay = (day, index) => {
    var _a;
    if ((_a = renderers == null ? void 0 : renderers.monthView) == null ? void 0 : _a.day)
      return /* @__PURE__ */ React.createElement("div", { key: index, onClick: onDayClick && (() => onDayClick(day)) }, renderers == null ? void 0 : renderers.monthView.day(day));
    else
      return /* @__PURE__ */ React.createElement("div", { key: index, onClick: onDayClick && (() => onDayClick(day)) }, /* @__PURE__ */ React.createElement(
        day_default,
        {
          key: index,
          day,
          renderers,
          onEventClick,
          onHover
        }
      ));
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "flex flex-auto flex-col shadow ring-1 ring-black ring-opacity-5" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none" }, /* @__PURE__ */ React.createElement("div", { className: "bg-white py-2" }, "\uC77C"), /* @__PURE__ */ React.createElement("div", { className: "bg-white py-2" }, "\uC6D4"), /* @__PURE__ */ React.createElement("div", { className: "bg-white py-2" }, "\uD654"), /* @__PURE__ */ React.createElement("div", { className: "bg-white py-2" }, "\uC218"), /* @__PURE__ */ React.createElement("div", { className: "bg-white py-2" }, "\uBAA9"), /* @__PURE__ */ React.createElement("div", { className: "bg-white py-2" }, "\uAE08"), /* @__PURE__ */ React.createElement("div", { className: "bg-white py-2" }, "\uD1A0")), /* @__PURE__ */ React.createElement("div", { className: "flex bg-gray-200 text-xs leading-6 text-gray-700" }, /* @__PURE__ */ React.createElement("div", { className: "grid w-full grid-cols-7 gap-px" }, days == null ? void 0 : days.map(renderDay)))));
};
var components_default = CalendarInterface;
//# sourceMappingURL=index.js.map