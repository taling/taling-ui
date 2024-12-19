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

// src/components/calendar/index.tsx
var calendar_exports = {};
__export(calendar_exports, {
  default: () => calendar_default
});
module.exports = __toCommonJS(calendar_exports);
var import_react5 = require("react");

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

// src/components/calendar/components/header.tsx
var import_react3 = require("@headlessui/react");
var import_outline = require("@heroicons/react/24/outline");
var import_react4 = require("react");
var CalendarHeader = ({
  selectedYear,
  selectedMonth,
  viewMode,
  useViewMode,
  onPrev,
  onNext,
  onToday,
  onAction
}) => {
  const mainColor = (0, import_react4.useContext)(MainColorContext);
  const color = colorPresets[mainColor];
  return /* @__PURE__ */ React.createElement("header", { className: "flex items-center justify-between border-b border-gray-200 py-2 sm:py-2 lg:flex-none 2xl:py-4 " }, /* @__PURE__ */ React.createElement("h1", { className: "text-xl font-medium leading-6 text-gray-900 sm:text-xl 2xl:text-2xl" }, /* @__PURE__ */ React.createElement("time", { dateTime: `${selectedYear}-${selectedMonth}` }, selectedYear, "\uB144 ", selectedMonth, "\uC6D4")), /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement("div", { className: "relative flex items-center rounded-md bg-white shadow-sm md:items-stretch" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gray-300",
      "aria-hidden": "true"
    }
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "flex items-center justify-center rounded-l-md py-2 pl-1.5 pr-2 text-gray-400 hover:text-gray-500 sm:pr-4 md:w-9 md:px-2 md:hover:bg-gray-50",
      onClick: () => {
        onPrev();
      }
    },
    /* @__PURE__ */ React.createElement(
      import_outline.ChevronLeftIcon,
      {
        className: " h-3 w-3 sm:h-4 sm:w-4 2xl:h-5 2xl:w-5",
        "aria-hidden": "true"
      }
    )
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: " shrink-0 px-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 sm:px-1 2xl:px-3.5",
      onClick: () => {
        onToday();
      }
    },
    "\uC624\uB298"
  ), /* @__PURE__ */ React.createElement("span", { className: "relative -mx-px hidden h-5 w-px bg-gray-300" }), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "flex items-center justify-center rounded-r-md py-2 pl-1.5 pr-2 text-gray-400 hover:text-gray-500 sm:pl-4 md:w-9 md:px-2 md:hover:bg-gray-50",
      onClick: () => {
        onNext();
      }
    },
    /* @__PURE__ */ React.createElement(
      import_outline.ChevronRightIcon,
      {
        className: " h-3 w-3 sm:h-4 sm:w-4 2xl:h-5 2xl:w-5",
        "aria-hidden": "true"
      }
    )
  )), /* @__PURE__ */ React.createElement("div", { className: "hidden md:flex md:items-center" }, useViewMode && /* @__PURE__ */ React.createElement(import_react3.Menu, { as: "div", className: "relative md:ml-4 " }, /* @__PURE__ */ React.createElement(
    import_react3.Menu.Button,
    {
      type: "button",
      className: "flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    },
    "\uC6D4\uAC04",
    /* @__PURE__ */ React.createElement(
      import_outline.ChevronDownIcon,
      {
        className: "-mr-1 h-5 w-5 text-gray-400",
        "aria-hidden": "true"
      }
    )
  ), /* @__PURE__ */ React.createElement(
    import_react3.Transition,
    {
      as: import_react4.Fragment,
      enter: "transition ease-out duration-100",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95"
    },
    /* @__PURE__ */ React.createElement(import_react3.Menu.Items, { className: "absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, /* @__PURE__ */ React.createElement("div", { className: "py-1" }, /* @__PURE__ */ React.createElement(import_react3.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "#",
        className: classNames(
          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
          "block px-4 py-2 text-sm"
        )
      },
      "\uC8FC\uAC04"
    )), /* @__PURE__ */ React.createElement(import_react3.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "#",
        className: classNames(
          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
          "block px-4 py-2 text-sm"
        )
      },
      "\uC6D4\uAC04"
    ))))
  )), onAction && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "ml-6 h-6 w-px bg-gray-300" }), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: `ml-6 rounded-md ${color == null ? void 0 : color.bg} ${color == null ? void 0 : color.hoverBg} ${color == null ? void 0 : color.focusVisible}  px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `,
      onClick: () => {
        onAction && onAction();
      }
    },
    "\uC77C\uC815 \uCD94\uAC00"
  )))));
};
var header_default = CalendarHeader;

// src/components/calendar/date-source/index.ts
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

// src/components/calendar/index.tsx
var TailwindCalendarComponent = (0, import_react5.forwardRef)(
  ({
    eventSource,
    option,
    renderers,
    onEventClick,
    onDayClick,
    viewMode,
    onViewModeChange,
    onMonthChange,
    onAction,
    onHover,
    mainColor = "purple",
    useViewMode = true,
    useHeaderDecoration = false,
    defaultSelectedYear,
    defaultSelectedMonth
  }, ref) => {
    (0, import_react5.useImperativeHandle)(ref, () => ({
      reloadCalender() {
        console.log(`reloadCalender`);
        setReloadTrigger((prev) => prev + 1);
      }
    }));
    const [reloadTrigger, setReloadTrigger] = (0, import_react5.useState)(0);
    const [internalViewMode, setInternalViewMode] = (0, import_react5.useState)(
      "month" /* Month */
    );
    const [selectedYear, setSelectedYear] = (0, import_react5.useState)(
      defaultSelectedYear ? defaultSelectedYear : (/* @__PURE__ */ new Date()).getFullYear()
    );
    const [selectedMonth, setSelectedMonth] = (0, import_react5.useState)(
      defaultSelectedMonth ? defaultSelectedMonth : (/* @__PURE__ */ new Date()).getMonth() + 1
    );
    const [selectedWeekInYear, setSelectedWeekInYear] = (0, import_react5.useState)(
      DateSource.getWeekInYear(/* @__PURE__ */ new Date())
    );
    const [daysInMonth, setDaysInMonth] = (0, import_react5.useState)({
      days: [],
      isSixWeeks: false
    });
    const [eventMappedDaysInMonth, setEventMappedDaysInMonth] = (0, import_react5.useState)([]);
    const loadDaysInMonth = (0, import_react5.useCallback)(() => {
      const daysInMonth2 = DateSource.getDaysInMonth(
        selectedYear,
        selectedMonth
      );
      setDaysInMonth(daysInMonth2);
    }, [selectedMonth, selectedYear]);
    const loadAndMapEvents = (0, import_react5.useCallback)(
      async (daysInMonth2) => {
        var _a;
        if (!daysInMonth2) return;
        const events = await eventSource({
          year: selectedYear,
          month: selectedMonth
        });
        if (!events) return;
        const eventsByDate = {};
        for (const event of events) {
          const eventDate = event.date.toISOString().slice(0, 10);
          if (!eventsByDate[eventDate]) {
            eventsByDate[eventDate] = [];
          }
          eventsByDate[eventDate].push(event);
        }
        const eventMappedDaysInMonth2 = (_a = daysInMonth2.days) == null ? void 0 : _a.map((day) => {
          const eventDate = day.dateObject.toISOString().slice(0, 10);
          const filteredEvents = eventsByDate[eventDate] || [];
          day.events = filteredEvents;
          return day;
        });
        setEventMappedDaysInMonth(eventMappedDaysInMonth2);
      },
      [eventSource, selectedMonth, selectedYear]
    );
    const nextMonth = (0, import_react5.useCallback)(() => {
      setSelectedMonth(selectedMonth + 1);
      if (selectedMonth === 12) {
        setSelectedYear(selectedYear + 1);
        setSelectedMonth(1);
      }
    }, [selectedMonth]);
    const prevMonth = (0, import_react5.useCallback)(() => {
      setSelectedMonth(selectedMonth - 1);
      if (selectedMonth === 1) {
        setSelectedYear(selectedYear - 1);
        setSelectedMonth(12);
      }
    }, [selectedMonth]);
    (0, import_react5.useEffect)(() => {
      if (!defaultSelectedMonth) return;
      setSelectedMonth(defaultSelectedMonth);
    }, [defaultSelectedMonth]);
    (0, import_react5.useEffect)(() => {
      if (!defaultSelectedYear) return;
      setSelectedYear(defaultSelectedYear);
    }, [defaultSelectedYear]);
    (0, import_react5.useEffect)(() => {
      loadDaysInMonth();
    }, []);
    (0, import_react5.useEffect)(() => {
      if (!viewMode) {
        return;
      }
      setInternalViewMode(viewMode);
    }, [viewMode]);
    (0, import_react5.useEffect)(() => {
      if (daysInMonth && daysInMonth.days.length > 0)
        loadAndMapEvents(daysInMonth);
    }, [daysInMonth, reloadTrigger]);
    (0, import_react5.useEffect)(() => {
      loadDaysInMonth();
      onMonthChange && onMonthChange({ year: selectedYear, month: selectedMonth });
    }, [selectedMonth, selectedYear]);
    return /* @__PURE__ */ React.createElement(MainColorContext.Provider, { value: mainColor }, /* @__PURE__ */ React.createElement("div", { className: "w-full bg-white" }, useHeaderDecoration && /* @__PURE__ */ React.createElement("div", { className: " relative h-2 w-full bg-taling-pink" }), /* @__PURE__ */ React.createElement("div", { className: "flex h-full flex-col" }, /* @__PURE__ */ React.createElement(
      header_default,
      {
        selectedYear,
        selectedMonth,
        viewMode: internalViewMode,
        useViewMode,
        onPrev: () => {
          if (internalViewMode === "month" /* Month */) {
            prevMonth();
          }
        },
        onNext: () => {
          if (internalViewMode === "month" /* Month */) {
            nextMonth();
          }
        },
        onToday: () => {
          setSelectedYear((/* @__PURE__ */ new Date()).getFullYear());
          setSelectedMonth((/* @__PURE__ */ new Date()).getMonth() + 1);
        },
        onAction
      }
    ), /* @__PURE__ */ React.createElement(
      components_default,
      {
        days: eventMappedDaysInMonth,
        renderers,
        onEventClick,
        onHover,
        onDayClick
      }
    ))));
  }
);
TailwindCalendarComponent.displayName = "TailwindCalendarComponent";
var calendar_default = TailwindCalendarComponent;
//# sourceMappingURL=index.js.map