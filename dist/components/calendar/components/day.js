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

// src/components/calendar/components/day.tsx
var day_exports = {};
__export(day_exports, {
  default: () => day_default
});
module.exports = __toCommonJS(day_exports);

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
//# sourceMappingURL=day.js.map