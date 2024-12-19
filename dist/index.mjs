// src/components/app-context/index.tsx
import { createContext } from "react";
var TalingAppContext = createContext(false);
function appPrefix(path) {
  return `/app${path}`;
}

// src/components/autocomplete/index.tsx
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/autocomplete/index.tsx
import { Fragment, useEffect, useState } from "react";
function Autocomplete({
  defaultSelection,
  list,
  onSelected,
  rounded = "md",
  enabled = true
}) {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const checkSearch = (item, searchVal) => {
    return item.toLowerCase().replace(/\s+/g, "").includes(searchVal.toLowerCase().replace(/\s+/g, ""));
  };
  const parsedList = list.map((item) => {
    return {
      id: "p" + item.id,
      name: item.name,
      children: item.children ? item.children.map((child) => ({
        id: "c" + child.id,
        name: child.name,
        parentId: child.parentId
      })) : null,
      isAvailable: item.isAvailable
    };
  });
  const filteredList = search === "" ? parsedList : parsedList.reduce(
    (searchResult, parent) => {
      var _a2;
      if (checkSearch(parent.name, search)) searchResult.push(parent);
      else {
        const childResult = (_a2 = parent.children) == null ? void 0 : _a2.filter(
          (child) => checkSearch(child.name, search)
        );
        if (childResult && childResult.length > 0) {
          searchResult.push(parent);
        }
      }
      return searchResult;
    },
    []
  );
  useEffect(() => {
    if (defaultSelection) {
      const parsedDefaultSelection = {
        ...defaultSelection,
        id: Object.prototype.hasOwnProperty.call(defaultSelection, "parentId") ? "c" + defaultSelection.id : "p" + defaultSelection.id
      };
      setSelected(parsedDefaultSelection);
    }
  }, [defaultSelection]);
  return /* @__PURE__ */ React.createElement(
    Combobox,
    {
      value: selected,
      by: "id",
      onChange: (value) => {
        if (value === null) return;
        setSelected(value);
        const parsedValue = {
          id: value.id.slice(1),
          name: value.name,
          ...Object.prototype.hasOwnProperty.call(value, "parentId") && {
            parentId: value.parentId
          }
        };
        onSelected(parsedValue);
      },
      disabled: !enabled
    },
    /* @__PURE__ */ React.createElement("div", { className: "relative z-30" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classNames(
          "relative w-full cursor-default bg-white text-left shadow-sm"
        )
      },
      /* @__PURE__ */ React.createElement(
        Combobox.Input,
        {
          className: classNames(
            "w-full border-none py-1.5 pl-3 pr-10 text-sm leading-5 text-taling-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6",
            enabled ? "focus:outline-none focus:ring-2 focus:ring-taling-pink" : "!cursor-not-allowed !bg-taling-gray-300 !text-taling-gray-800 opacity-50 ",
            round(rounded)
          ),
          displayValue: (item) => (item == null ? void 0 : item.name) || "",
          onChange: (e) => setSearch(e.target.value),
          placeholder: "\uCE74\uD14C\uACE0\uB9AC\uB97C \uAC80\uC0C9\uD574 \uC8FC\uC138\uC694."
        }
      ),
      /* @__PURE__ */ React.createElement(
        Combobox.Button,
        {
          className: classNames(
            "absolute inset-y-0 right-0 flex items-center pr-2",
            enabled ? "" : "!cursor-not-allowed"
          )
        },
        /* @__PURE__ */ React.createElement(
          ChevronUpDownIcon,
          {
            className: "h-5 w-5 text-gray-400",
            "aria-hidden": "true"
          }
        )
      )
    ), /* @__PURE__ */ React.createElement(
      Transition,
      {
        as: Fragment,
        leave: "transition ease-in duration-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        afterLeave: () => setSearch("")
      },
      /* @__PURE__ */ React.createElement(
        Combobox.Options,
        {
          className: classNames(
            "absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",
            round(rounded)
          )
        },
        filteredList.length === 0 && search !== "" ? /* @__PURE__ */ React.createElement("div", { className: "taling-gray-900 relative cursor-default select-none px-4 py-2" }, "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.") : filteredList.map((parent) => /* @__PURE__ */ React.createElement(
          Combobox.Option,
          {
            key: parent.id,
            className: ({ selected: selected2, active }) => classNames(
              "relative cursor-default select-none pl-5 text-taling-gray-900",
              active || selected2 ? "bg-taling-gray-100" : ""
            ),
            disabled: !parent.isAvailable,
            value: parent
          },
          ({ selected: selected2 }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
            "span",
            {
              className: classNames(
                "block truncate pb-1 pt-2",
                parent.children ? "font-bold text-taling-gray-700" : "font-normal"
              )
            },
            parent.name
          ), selected2 ? /* @__PURE__ */ React.createElement(
            "span",
            {
              className: `absolute left-0 top-1.5 flex items-center text-taling-pink`
            },
            /* @__PURE__ */ React.createElement(CheckIcon, { className: "h-5 w-5", "aria-hidden": "true" })
          ) : null, parent.children && /* @__PURE__ */ React.createElement("ul", null, parent.children.map((child) => /* @__PURE__ */ React.createElement(
            Combobox.Option,
            {
              key: child.id,
              className: ({ selected: selected3, active }) => classNames(
                "relative -ml-5 cursor-pointer select-none py-2 pl-8 pr-4 text-taling-gray-900",
                active || selected3 ? "bg-taling-gray-100" : ""
              ),
              value: child
            },
            ({ selected: selected3 }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "block truncate" }, child.name), selected3 ? /* @__PURE__ */ React.createElement(
              "span",
              {
                className: `absolute inset-y-0 left-2 flex items-center text-taling-pink`
              },
              /* @__PURE__ */ React.createElement(
                CheckIcon,
                {
                  className: "h-5 w-5",
                  "aria-hidden": "true"
                }
              )
            ) : null)
          ))))
        ))
      )
    ))
  );
}
function round(rounded) {
  switch (rounded) {
    case "sm":
      return "rounded";
    case "md":
      return "rounded-md";
    case "lg":
      return "rounded-lg";
  }
}

// src/components/buttons/animated-toggle-button/index.tsx
import { AnimatePresence, motion } from "framer-motion";
import { useState as useState2 } from "react";
var _DefaultToggleAnimateProps = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 }
};
function AnimatedToggleButtonComponent({
  isOn,
  render,
  onToggle
}) {
  var _a2, _b;
  const [isUpdating, setIsUpdating] = useState2(false);
  const [showErrorRender, setShowErrorRender] = useState2(false);
  return /* @__PURE__ */ React.createElement(AnimatePresence, null, isOn ? /* @__PURE__ */ React.createElement(
    motion.div,
    {
      ..._DefaultToggleAnimateProps,
      key: "button",
      onClick: (e) => {
        e.stopPropagation();
        if (isUpdating) return;
        setIsUpdating(true);
        onToggle().then(({ toggleSuccess }) => {
          setIsUpdating(false);
          setShowErrorRender(!toggleSuccess);
        });
      }
    },
    isUpdating ? /* @__PURE__ */ React.createElement(motion.div, { ..._DefaultToggleAnimateProps, key: "button-on-spin" }, render.loading) : /* @__PURE__ */ React.createElement(motion.div, { ..._DefaultToggleAnimateProps, key: "button-on-on" }, showErrorRender ? (_a2 = render.error) != null ? _a2 : render.on : render.on)
  ) : /* @__PURE__ */ React.createElement(
    motion.div,
    {
      ..._DefaultToggleAnimateProps,
      className: "",
      key: "button",
      onClick: (e) => {
        e.stopPropagation();
        if (isUpdating) return;
        setIsUpdating(true);
        onToggle().then(({ toggleSuccess }) => {
          setIsUpdating(false);
          setShowErrorRender(!toggleSuccess);
        });
      }
    },
    isUpdating ? /* @__PURE__ */ React.createElement(motion.div, { ..._DefaultToggleAnimateProps, key: "button-off-spin" }, render.loading) : /* @__PURE__ */ React.createElement(motion.div, { ..._DefaultToggleAnimateProps, key: "button-off-off" }, showErrorRender ? (_b = render.error) != null ? _b : render.off : render.off)
  ));
}

// src/components/buttons/waiting-button/index.tsx
import { cloneElement, useCallback, useEffect as useEffect2, useState as useState3 } from "react";
function WaitingButton({
  render: { normal, waiting, failed },
  passData,
  className,
  onClick
}) {
  const [currentRender, setCurrentRender] = useState3(normal);
  const [isLoading, setIsLoading] = useState3(false);
  const _internalOnClick = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    setCurrentRender(waiting);
    const result = await onClick(passData);
    setIsLoading(false);
    setCurrentRender(result ? normal : failed || normal);
  }, [failed, isLoading, normal, onClick, passData, waiting]);
  const updateNormalButton = useCallback(() => {
    if (!isLoading) {
      setCurrentRender(normal);
    }
  }, [isLoading, normal]);
  useEffect2(() => {
    updateNormalButton();
  }, [normal, updateNormalButton]);
  const element = currentRender;
  return cloneElement(element, {
    onClick: _internalOnClick,
    className: classNames(element.props.className || "", className || "")
  });
}

// src/components/buttons/PrimaryButton.tsx
var PrimaryButton = ({
  children,
  size = "md",
  showLoadingState = false,
  isEnabled = true
}) => {
  const pad = function() {
    switch (size) {
      case "sm":
        return "px-2 py-1.5 h-8";
      case "md":
        return "px-4 py-2 h-10";
      case "lg":
        return "px-6 py-3 h-12";
    }
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classNames(
        " text-white text-center px-2 py-1.5 rounded-md drop-shadow-sm cursor-pointer",
        isEnabled ? "bg-taling-pink" : "bg-taling-gray-400 cursor-not-allowed",
        pad()
      )
    },
    showLoadingState ? /* @__PURE__ */ React.createElement("div", { className: "flex w-full h-full justify-center items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-1.5 h-1.5 bg-white rounded-full animate-ping" }), /* @__PURE__ */ React.createElement("div", { className: "w-1.5 h-1.5 bg-white rounded-full animate-ping transition-transform delay-300" }), /* @__PURE__ */ React.createElement("div", { className: "w-1.5 h-1.5 bg-white rounded-full animate-ping transition-transform delay-600" })) : children
  );
};
var PrimaryButton_default = PrimaryButton;

// src/components/calendar/components/day.tsx
import { useContext } from "react";

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
import { createContext as createContext2 } from "react";
var MainColorContext = createContext2("pink");

// src/components/calendar/components/event.tsx
var CalendarEventComponent = ({
  event,
  renderers
}) => {
  var _a2;
  const eventRenderer = (_a2 = renderers == null ? void 0 : renderers.monthView) == null ? void 0 : _a2.event;
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
  var _a2, _b;
  const mainColor = useContext(MainColorContext);
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
    ((_a2 = day.events) == null ? void 0 : _a2.length) > 0 && /* @__PURE__ */ React.createElement("ol", { className: "mt-2" }, (_b = day.events) == null ? void 0 : _b.map((event, index) => {
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

// src/components/calendar/components/header.tsx
import { Menu, Transition as Transition2 } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import { Fragment as Fragment2, useContext as useContext2 } from "react";
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
  const mainColor = useContext2(MainColorContext);
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
      ChevronLeftIcon,
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
      ChevronRightIcon,
      {
        className: " h-3 w-3 sm:h-4 sm:w-4 2xl:h-5 2xl:w-5",
        "aria-hidden": "true"
      }
    )
  )), /* @__PURE__ */ React.createElement("div", { className: "hidden md:flex md:items-center" }, useViewMode && /* @__PURE__ */ React.createElement(Menu, { as: "div", className: "relative md:ml-4 " }, /* @__PURE__ */ React.createElement(
    Menu.Button,
    {
      type: "button",
      className: "flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    },
    "\uC6D4\uAC04",
    /* @__PURE__ */ React.createElement(
      ChevronDownIcon,
      {
        className: "-mr-1 h-5 w-5 text-gray-400",
        "aria-hidden": "true"
      }
    )
  ), /* @__PURE__ */ React.createElement(
    Transition2,
    {
      as: Fragment2,
      enter: "transition ease-out duration-100",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95"
    },
    /* @__PURE__ */ React.createElement(Menu.Items, { className: "absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, /* @__PURE__ */ React.createElement("div", { className: "py-1" }, /* @__PURE__ */ React.createElement(Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "#",
        className: classNames(
          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
          "block px-4 py-2 text-sm"
        )
      },
      "\uC8FC\uAC04"
    )), /* @__PURE__ */ React.createElement(Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement(
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

// src/components/calendar/components/index.tsx
var CalendarInterface = ({
  days,
  renderers,
  onEventClick,
  onDayClick,
  onHover
}) => {
  const renderDay = (day, index) => {
    var _a2;
    if ((_a2 = renderers == null ? void 0 : renderers.monthView) == null ? void 0 : _a2.day)
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

// src/components/calendar/enums/index.ts
var StartOfWeek = /* @__PURE__ */ ((StartOfWeek3) => {
  StartOfWeek3[StartOfWeek3["Sunday"] = 0] = "Sunday";
  StartOfWeek3[StartOfWeek3["Monday"] = 1] = "Monday";
  StartOfWeek3[StartOfWeek3["Tuesday"] = 2] = "Tuesday";
  StartOfWeek3[StartOfWeek3["Wednesday"] = 3] = "Wednesday";
  StartOfWeek3[StartOfWeek3["Thursday"] = 4] = "Thursday";
  StartOfWeek3[StartOfWeek3["Friday"] = 5] = "Friday";
  StartOfWeek3[StartOfWeek3["Saturday"] = 6] = "Saturday";
  return StartOfWeek3;
})(StartOfWeek || {});
var CalendarViewMode = /* @__PURE__ */ ((CalendarViewMode2) => {
  CalendarViewMode2["Year"] = "year";
  CalendarViewMode2["Month"] = "month";
  CalendarViewMode2["Week"] = "week";
  return CalendarViewMode2;
})(CalendarViewMode || {});

// src/components/calendar/index.tsx
import {
  forwardRef,
  useCallback as useCallback2,
  useEffect as useEffect3,
  useImperativeHandle,
  useState as useState4
} from "react";
var TailwindCalendarComponent = forwardRef(
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
    useImperativeHandle(ref, () => ({
      reloadCalender() {
        console.log(`reloadCalender`);
        setReloadTrigger((prev) => prev + 1);
      }
    }));
    const [reloadTrigger, setReloadTrigger] = useState4(0);
    const [internalViewMode, setInternalViewMode] = useState4(
      "month" /* Month */
    );
    const [selectedYear, setSelectedYear] = useState4(
      defaultSelectedYear ? defaultSelectedYear : (/* @__PURE__ */ new Date()).getFullYear()
    );
    const [selectedMonth, setSelectedMonth] = useState4(
      defaultSelectedMonth ? defaultSelectedMonth : (/* @__PURE__ */ new Date()).getMonth() + 1
    );
    const [selectedWeekInYear, setSelectedWeekInYear] = useState4(
      DateSource.getWeekInYear(/* @__PURE__ */ new Date())
    );
    const [daysInMonth, setDaysInMonth] = useState4({
      days: [],
      isSixWeeks: false
    });
    const [eventMappedDaysInMonth, setEventMappedDaysInMonth] = useState4([]);
    const loadDaysInMonth = useCallback2(() => {
      const daysInMonth2 = DateSource.getDaysInMonth(
        selectedYear,
        selectedMonth
      );
      setDaysInMonth(daysInMonth2);
    }, [selectedMonth, selectedYear]);
    const loadAndMapEvents = useCallback2(
      async (daysInMonth2) => {
        var _a2;
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
        const eventMappedDaysInMonth2 = (_a2 = daysInMonth2.days) == null ? void 0 : _a2.map((day) => {
          const eventDate = day.dateObject.toISOString().slice(0, 10);
          const filteredEvents = eventsByDate[eventDate] || [];
          day.events = filteredEvents;
          return day;
        });
        setEventMappedDaysInMonth(eventMappedDaysInMonth2);
      },
      [eventSource, selectedMonth, selectedYear]
    );
    const nextMonth = useCallback2(() => {
      setSelectedMonth(selectedMonth + 1);
      if (selectedMonth === 12) {
        setSelectedYear(selectedYear + 1);
        setSelectedMonth(1);
      }
    }, [selectedMonth]);
    const prevMonth = useCallback2(() => {
      setSelectedMonth(selectedMonth - 1);
      if (selectedMonth === 1) {
        setSelectedYear(selectedYear - 1);
        setSelectedMonth(12);
      }
    }, [selectedMonth]);
    useEffect3(() => {
      if (!defaultSelectedMonth) return;
      setSelectedMonth(defaultSelectedMonth);
    }, [defaultSelectedMonth]);
    useEffect3(() => {
      if (!defaultSelectedYear) return;
      setSelectedYear(defaultSelectedYear);
    }, [defaultSelectedYear]);
    useEffect3(() => {
      loadDaysInMonth();
    }, []);
    useEffect3(() => {
      if (!viewMode) {
        return;
      }
      setInternalViewMode(viewMode);
    }, [viewMode]);
    useEffect3(() => {
      if (daysInMonth && daysInMonth.days.length > 0)
        loadAndMapEvents(daysInMonth);
    }, [daysInMonth, reloadTrigger]);
    useEffect3(() => {
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

// src/components/check-box/index.tsx
function CheckBox({
  label,
  checked,
  onChange
}) {
  const toggleChecked = () => {
    onChange(!checked);
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "flex items-center cursor-pointer text-taling-gray-800 gap-2 py-2 focus:bg-taling-gray-100",
      onClick: (e) => {
        toggleChecked();
      }
    },
    /* @__PURE__ */ React.createElement(
      "input",
      {
        id: label,
        name: label,
        type: "checkbox",
        checked,
        readOnly: true,
        className: "h-4 w-4 rounded border-gray-300 text-taling-pink focus:ring-transparent focus:ring-0 focus:outline-none "
      }
    ),
    /* @__PURE__ */ React.createElement("label", { className: "min-w-fit cursor-pointer" }, label)
  );
}

// src/components/chip/index.tsx
function Chip({ className, caption, color, icon }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classNames(
        className,
        generateChipColor(color),
        "flex px-1 items-center justify-between gap-0.5 rounded text-label2-semibold"
      )
    },
    caption,
    icon && /* @__PURE__ */ React.createElement("div", { className: "w-4 h-4" }, icon)
  );
}
function generateChipColor(color) {
  const chipColorsObject = {
    red: "bg-taling-pink-50 text-taling-pink",
    blue: "bg-taling-light-blue-50 text-taling-light-blue-600",
    violet: "bg-taling-violet-50 text-taling-violet-400",
    gray: "bg-taling-gray-200 text-taling-gray-600"
  };
  return chipColorsObject[color];
}

// src/components/dev-marker/index.tsx
import { useContext as useContext3, useEffect as useEffect4, useState as useState5 } from "react";

// src/store/devMarkerStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
var devMarkerStore = create()(
  persist(
    (set) => ({
      hideSession: false,
      setHideSession: (state) => set({ hideSession: state })
    }),
    {
      name: "dev-marker-storage",
      getStorage: () => sessionStorage
    }
  )
);

// src/components/dev-marker/index.tsx
var DevMarker = () => {
  const [isShowing, setIsShowing] = useState5(false);
  const appContext = useContext3(TalingAppContext);
  const [isDev, setIsDev] = useState5(false);
  const [devMsag, setDevMsg] = useState5(
    `\uAC1C\uBC1C/\uD14C\uC2A4\uD2B8 \uBAA8\uB4DC\uC5D0\uC6A9 - ${appContext ? "APP" : "WEB"}`
  );
  const { hideSession, setHideSession } = devMarkerStore();
  useEffect4(() => {
    if (!window) return;
    const devDomains = ["local", "dev", "test", "vercel.app", "172."];
    const domain = window.location.hostname;
    if (domain.match(new RegExp(devDomains.join("|")))) {
      setIsDev(true);
      setIsShowing(true);
    }
  }, []);
  if (isDev && !hideSession) {
    return /* @__PURE__ */ React.createElement("div", { className: "w-full bg-taling-pink-50 border-b-2 border-b-taling-pink" }, /* @__PURE__ */ React.createElement("div", { className: "flex h-6 items-center relative mx-auto max-w-7xl w-full" }, /* @__PURE__ */ React.createElement("div", { className: "mx-auto text-xs font-bold" }, "\u{1F916} ", devMsag), /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "absolute right-0 text-xs px-2 sm:px-8 cursor-pointer underline",
        onClick: () => {
          setHideSession(true);
        }
      },
      "\uC774 \uC138\uC158\uC5D0\uC11C \uADF8\uB9CC \uBCF4\uAE30"
    )));
  } else {
    return null;
  }
};
var dev_marker_default = DevMarker;

// src/components/dynamic-line-height/index.tsx
import { useLayoutEffect, useRef, useState as useState6 } from "react";
var DynamicLineHeightText = ({
  text,
  singleLineHeight = 16,
  multiLineHeight = 20,
  className = "",
  ...props
}) => {
  const textRef = useRef(null);
  const [isSingleLine, setIsSingleLine] = useState6(true);
  useLayoutEffect(() => {
    if (textRef.current) {
      setIsSingleLine(textRef.current.scrollHeight <= singleLineHeight * 2);
    }
  }, [text, singleLineHeight]);
  return /* @__PURE__ */ React.createElement(
    "p",
    {
      ref: textRef,
      className: `transition-all duration-200 ${isSingleLine ? `leading-[${singleLineHeight}px]` : `leading-[${multiLineHeight}px]`} ${className}`,
      ...props
    },
    text
  );
};
var dynamic_line_height_default = DynamicLineHeightText;

// src/components/icons/apple/index.tsx
function AppleIcon(props) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: props.className,
      fill: "currentColor",
      viewBox: "0 0 16 16"
    },
    /* @__PURE__ */ React.createElement("path", { d: "M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" }),
    /* @__PURE__ */ React.createElement("path", { d: "M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" })
  );
}

// src/components/icons/blog/index.tsx
function BlogIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: classNames("text-[#2DB400]", props.className), viewBox: "0 0 105.83333 105.83334" }, /* @__PURE__ */ React.createElement("g", { fill: "currentColor" }, /* @__PURE__ */ React.createElement("path", { fill: "transparent", d: "M35.454 30.453c0 .588 0 1.176.002 1.764.002 1.48-.023 2.96.031 4.44.025.326.042.656.124.974.091.366.269.716.536.986a1.689 1.689 0 0 0 .94.5c.274.175.509.403.738.633l.275.28v17.65h9.037l-.177-20.096c-.182-.355-.36-.712-.532-1.072-.328-.68-.655-1.362-1.053-2.004a8.6 8.6 0 0 0-3.74-3.256c-.245-.11-.49-.215-.742-.307-.936-.344-1.916-.546-2.898-.705-.33-.054-.66-.102-.99-.157l-1.551-.252v.622zM15.34 31.488l.04 8.838c.016 3.127.033 6.253.054 9.38.013 1.93.028 3.86.04 5.791l.015 2.01 1.418.035.092.002.36.01.046.001.405.012c1.282.038 2.564.082 3.847.09h.046c.148 0 .297-.007.446-.013.343-.017.689-.069 1.007-.203.132-.055.258-.123.375-.204.415.24.85.449 1.308.593.315.103.636.188.96.251.99.193 2.01.198 3.005.049a10.634 10.634 0 0 0 2.692-.785c.436-.187.858-.41 1.258-.666a9.879 9.879 0 0 0 2.85-2.809c.145-.214.284-.431.405-.66.322-.603.542-1.26.66-1.933.276-1.477.316-2.99.19-4.485a14.6 14.6 0 0 0-.19-1.478c-.159-.852-.42-1.692-.83-2.46a11.188 11.188 0 0 0-.434-.726c-.648-1.004-1.439-1.923-2.38-2.663a5.404 5.404 0 0 0-.49-.351c-.742-.471-1.57-.795-2.418-1.017a9.605 9.605 0 0 0-4.143-.184c-.558.101-1.107.257-1.633.47v-7.427h-9.003l.002.532zm63.325 6.257c-.609.01-1.216.076-1.814.19a10.64 10.64 0 0 0-3.28 1.208 8.563 8.563 0 0 0-3.08 3.079c-.23.392-.427.802-.594 1.225-.343.858-.568 1.76-.697 2.674a9.698 9.698 0 0 0-1.45-3.324 10.59 10.59 0 0 0-2.31-2.446 11.887 11.887 0 0 0-6.686-2.413 11.338 11.338 0 0 0-1.28.03 11.444 11.444 0 0 0-5.692 2.09 10.47 10.47 0 0 0-2.396 2.378 8.989 8.989 0 0 0-1.4 2.89c-.116.429-.195.869-.235 1.312-.07.817-.135 1.637-.1 2.457.008.223.026.446.061.667.092.593.283 1.166.518 1.717.138.327.291.647.449.965a12.29 12.29 0 0 0 3.458 3.968 9.175 9.175 0 0 0 2.777 1.367c1.007.306 2.057.46 3.108.494.408.011.817 0 1.224-.027a11.823 11.823 0 0 0 3.643-.816 5.93 5.93 0 0 0 .508-.228c.73-.374 1.415-.832 2.051-1.35.579-.47 1.117-.99 1.618-1.543.321-.357.613-.741.873-1.146a9.4 9.4 0 0 0 1.223-2.856c.113 1.023.35 2.039.773 2.98.265.59.605 1.149 1.02 1.646a8.286 8.286 0 0 0 1.959 1.698c.762.487 1.585.872 2.425 1.206.364.142.742.246 1.125.318v8.375l1.413-.06.142-.006.142-.006.046-.002.305-.011c1.316-.05 2.632-.087 3.946-.171.899-.066 1.794-.271 2.608-.664.224-.11.448-.223.665-.347a10.497 10.497 0 0 0 2.294-1.793c.089-.088.171-.181.25-.278.55-.652 1.034-1.368 1.37-2.155.15-.35.267-.715.353-1.086.23-.965.324-1.955.374-2.943.026-.503.043-1.006.061-1.509.072-3.2.052-6.401.053-9.602 0-.784.002-1.568.001-2.352V38.1h-8.73v.23a7.87 7.87 0 0 0-3.092-.585zm-19.768 8.557c.103.004.21.009.306.05.034.022.061.053.093.078.35.308.682.64.972 1.005.039.07.046.152.053.23.014.203-.005.405-.021.606a2.07 2.07 0 0 1-.748 1.322c-.201.162-.436.282-.687.341-.322.09-.67.06-.983-.054a1.922 1.922 0 0 1-.97-.772 1.865 1.865 0 0 1-.197-.445 1.833 1.833 0 0 1 .115-1.28c.07-.146.159-.282.262-.406.178-.256.428-.468.724-.572.096-.034.197-.05.297-.063a4.467 4.467 0 0 1 .675-.04c.036-.002.072-.001.109 0zm21.223.02c.166 0 .331.023.488.075.456.148.846.494 1.042.932.063.13.115.263.149.403.083.333.081.692-.034 1.017-.046.128-.111.25-.193.36l-.026.034a2.074 2.074 0 0 1-.806.614 2.91 2.91 0 0 1-.689.21 1.245 1.245 0 0 1-.456-.1 5.338 5.338 0 0 1-.484-.22 1.58 1.58 0 0 1-.598-.744 2.005 2.005 0 0 1-.094-1.23c.048-.193.13-.377.244-.54.264-.42.713-.72 1.204-.794.084-.013.169-.019.253-.017zm-53.803.29c.182.001.364.035.531.106.383.16.7.478.85.866.079.209.105.435.091.656a1.753 1.753 0 0 1-.321.907 1.835 1.835 0 0 1-.758.473c-.327.111-.678.151-1.022.118a1.047 1.047 0 0 1-.676-.397 1.615 1.615 0 0 1-.369-.9 1.83 1.83 0 0 1 .218-1.082c.115-.2.279-.375.481-.49.293-.173.635-.261.975-.257z" }), /* @__PURE__ */ React.createElement("path", { d: "M52.017 99.96c-.45-.424-2.01-3.81-4.948-10.716L42.783 79.11H30.03c-7.382 0-13.361-.105-14.181-.264-2.117-.397-4.975-1.905-6.51-3.44-1.56-1.56-3.068-4.286-3.492-6.297-.211-.952-.29-8.308-.29-23.415 0-18.945.052-22.252.396-23.601 1.27-4.869 5.318-8.6 10.187-9.367 2.38-.396 71.199-.396 73.554 0 4.736.741 8.652 4.128 10.054 8.626.503 1.667.53 2.434.53 24.262 0 14.208-.107 22.94-.292 23.68-.714 3.149-3.413 6.641-6.27 8.176-2.937 1.561-3.652 1.64-17.675 1.64H63.315l-4.286 10.134c-2.382 5.556-4.498 10.292-4.737 10.53-.793.794-1.534.847-2.275.186zm32.914-36.063c.794-.45 1.826-1.297 2.302-1.932 1.561-2.063 1.667-2.83 1.667-13.07v-9.208h-5.556V41.354l-.582-.529c-1.456-1.323-3.413-1.773-5.662-1.323-4.234.873-6.456 3.89-6.456 8.758 0 4.075 1.111 6.112 4.127 7.594 1.35.661 2.038.846 3.228.846 1.905-.026 3.493-.45 4.419-1.19l.74-.583-.185 1.165c-.37 2.302-1.587 3.44-3.704 3.44h-1.217v5.344l2.725-.106c2.382-.08 2.858-.185 4.154-.873zm-53.816-8.123c1.508-.688 2.963-2.17 3.651-3.625.741-1.667.768-5.609.053-7.673-.529-1.56-2.143-3.519-3.44-4.206-2.698-1.403-6.138-1.165-8.016.555l-.609.53v-8.811h-5.82l.052 11.72.08 11.695 2.857.08c2.699.08 2.831.053 2.831-.477 0-.661.08-.661 1.297.133 1.852 1.243 4.55 1.27 7.064.08zm30.983.265c1.614-.582 3.81-2.46 4.683-4.022 2.884-5.027-.397-11.112-6.641-12.33-3.916-.767-8.15 1.138-10.001 4.525-.583 1.111-.794 1.852-.874 3.44-.105 1.772-.026 2.195.609 3.624.767 1.72 2.513 3.599 4.101 4.419 2.302 1.19 5.477 1.323 8.123.344zm-16.643-9.023-.079-9.048-.873-1.773c-1.217-2.46-3.149-3.784-6.324-4.313l-1.137-.185v2.937c0 2.513.053 2.937.423 2.937.238 0 .82.397 1.323.9l.9.899v16.722h5.846z" }), /* @__PURE__ */ React.createElement("path", { d: "M78.66 51.197c-1.746-.741-2.434-3.122-1.402-4.816 1.43-2.354 4.763-2.143 5.874.37.82 1.88 0 3.81-1.984 4.552-.98.37-1.456.344-2.487-.106zM24.395 50.906c-1.958-1.35-1.747-4.525.37-5.53 2.91-1.376 5.689 1.508 4.207 4.366-.741 1.455-3.255 2.09-4.577 1.164zM56.7 51.065a3.374 3.374 0 0 1-1.058-4.79c.767-1.137 1.587-1.56 3.069-1.56.979 0 1.296.132 2.17 1.031.873.874 1.031 1.191 1.031 2.17 0 2.831-2.883 4.577-5.212 3.149z" })));
}

// src/components/icons/clipboard-list/index.tsx
function ClipboardListIconOutline(props) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: "0 0 22 26",
      fill: "transparent",
      xmlns: "http://www.w3.org/2000/svg",
      className: props.className
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M6.9974 3.66667H4.33073C2.85797 3.66667 1.66406 4.86057 1.66406 6.33333V22.3333C1.66406 23.8061 2.85797 25 4.33073 25H17.6641C19.1368 25 20.3307 23.8061 20.3307 22.3333V6.33333C20.3307 4.86057 19.1368 3.66667 17.6641 3.66667H14.9974M6.9974 3.66667C6.9974 5.13943 8.1913 6.33333 9.66406 6.33333H12.3307C13.8035 6.33333 14.9974 5.13943 14.9974 3.66667M6.9974 3.66667C6.9974 2.19391 8.1913 1 9.66406 1H12.3307C13.8035 1 14.9974 2.19391 14.9974 3.66667M10.9974 13H14.9974M10.9974 18.3333H14.9974M6.9974 13H7.01073M6.9974 18.3333H7.01073",
        stroke: "currentColor",
        strokeLinecap: "round"
      }
    )
  );
}
function ClipboardListIconSolid(props) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: "0 0 22 26",
      fill: "currentColor",
      xmlns: "http://www.w3.org/2000/svg",
      className: props.className
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M6.9974 3.66667H4.33073C2.85797 3.66667 1.66406 4.86057 1.66406 6.33333V22.3333C1.66406 23.8061 2.85797 25 4.33073 25H17.6641C19.1368 25 20.3307 23.8061 20.3307 22.3333V6.33333C20.3307 4.86057 19.1368 3.66667 17.6641 3.66667H14.9974M6.9974 3.66667C6.9974 5.13943 8.1913 6.33333 9.66406 6.33333H12.3307C13.8035 6.33333 14.9974 5.13943 14.9974 3.66667M6.9974 3.66667C6.9974 2.19391 8.1913 1 9.66406 1H12.3307C13.8035 1 14.9974 2.19391 14.9974 3.66667M10.9974 13H14.9974M10.9974 18.3333H14.9974M6.9974 13H7.01073M6.9974 18.3333H7.01073",
        strokeWidth: "1.5",
        strokeLinecap: "round"
      }
    )
  );
}

// src/components/icons/facebook/index.tsx
function FacebookIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", { className: props.className, viewBox: "0 0 134 250", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M124.96 139.563L131.847 94.6602H88.7643V65.5209C88.7643 53.2364 94.7822 41.2621 114.079 41.2621H133.667V3.03398C133.667 3.03398 115.89 0 98.8947 0C63.4117 0 40.2206 21.5049 40.2206 60.4369V94.6602H0.778809V139.563H40.2206V248.113C48.1292 249.354 56.2351 250 64.4924 250C72.7497 250 80.8556 249.354 88.7643 248.113V139.563H124.96Z", fill: "white" }));
}

// src/components/icons/instagram/index.tsx
function InstagramIcon(props) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      className: props.className,
      viewBox: "-8.093805 -13.489675 70.14631 80.93805"
    },
    /* @__PURE__ */ React.createElement("defs", null, /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        id: "a",
        y2: "1.7526",
        x2: "1.7537",
        y1: "-5.8041",
        x1: "-5.8093"
      },
      /* @__PURE__ */ React.createElement("stop", { offset: "0%", "stop-color": "#FFD521" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "5%", "stop-color": "#FFD521" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "50.1119%", "stop-color": "#F50000" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "95%", "stop-color": "#B900B4" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "95.0079%", "stop-color": "#B900B4" }),
      /* @__PURE__ */ React.createElement("stop", { offset: "100%", "stop-color": "#B900B4" })
    ), /* @__PURE__ */ React.createElement("linearGradient", { id: "b", y2: ".9175", x2: ".9175", y1: ".0091", x1: ".009" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", "stop-color": "#FFD521" }), /* @__PURE__ */ React.createElement("stop", { offset: "5%", "stop-color": "#FFD521" }), /* @__PURE__ */ React.createElement("stop", { offset: "50.1119%", "stop-color": "#F50000" }), /* @__PURE__ */ React.createElement("stop", { offset: "95%", "stop-color": "#B900B4" }), /* @__PURE__ */ React.createElement("stop", { offset: "95.0079%", "stop-color": "#B900B4" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", "stop-color": "#B900B4" })), /* @__PURE__ */ React.createElement("linearGradient", { id: "c", y2: "1.3128", x2: "1.3126", y1: "-.456", x1: "-.4558" }, /* @__PURE__ */ React.createElement("stop", { offset: "0%", "stop-color": "#FFD521" }), /* @__PURE__ */ React.createElement("stop", { offset: "5%", "stop-color": "#FFD521" }), /* @__PURE__ */ React.createElement("stop", { offset: "50.1119%", "stop-color": "#F50000" }), /* @__PURE__ */ React.createElement("stop", { offset: "95%", "stop-color": "#B900B4" }), /* @__PURE__ */ React.createElement("stop", { offset: "95.0079%", "stop-color": "#B900B4" }), /* @__PURE__ */ React.createElement("stop", { offset: "100%", "stop-color": "#B900B4" })), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "scale(1.00041 .99959)",
        y2: "11.412",
        x2: "11.3667",
        y1: "-37.5455",
        x1: "-37.6312",
        id: "d",
        xlinkHref: "#a"
      }
    ), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        y2: "49.554",
        x2: "49.5047",
        y1: ".536",
        x1: ".4867",
        id: "e",
        xlinkHref: "#b"
      }
    ), /* @__PURE__ */ React.createElement(
      "linearGradient",
      {
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "scale(.99988 1.00012)",
        y2: "36.4816",
        x2: "36.4315",
        y1: "-12.5305",
        x1: "-12.5688",
        id: "f",
        xlinkHref: "#c"
      }
    )),
    /* @__PURE__ */ React.createElement("g", { fill: "none" }, /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M6.4867 3.292c0 1.7933-1.4534 3.2413-3.24 3.2413C1.46 6.5333.0053 5.0853.0053 3.292.0053 1.5053 1.46.0573 3.2467.0573c1.7866 0 3.24 1.448 3.24 3.2347",
        fill: "url(#d)",
        transform: "matrix(1 0 0 -1 38.1333 15.8707)"
      }
    ), /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M48.9373 16.124c-.12-2.6307-.56-4.06-.9253-5.0093-.4907-1.2587-1.076-2.1587-2.0253-3.1027-.9387-.944-1.8387-1.528-3.0974-2.0133-.9493-.3707-2.384-.812-5.0146-.9374-2.844-.1253-3.6867-.152-10.8987-.152-7.2053 0-8.0547.0267-10.8987.152-2.6306.1254-4.0586.5667-5.008.9374C9.804 6.484 8.9107 7.068 7.9667 8.012c-.9507.944-1.536 1.844-2.02 3.1027-.3654.9493-.812 2.3786-.9254 5.0093-.1386 2.844-.164 3.7-.164 10.8973 0 7.212.0254 8.0614.164 10.9054.1134 2.6306.56 4.0586.9254 5.016.484 1.2573 1.0693 2.152 2.02 3.096.944.9426 1.8373 1.528 3.1026 2.0186.9494.372 2.3774.8067 5.008.932 2.844.1254 3.6934.1574 10.8987.1574 7.212 0 8.0547-.032 10.8987-.1574 2.6306-.1253 4.0653-.56 5.0146-.932 1.2587-.4906 2.1587-1.076 3.0974-2.0186.9493-.944 1.5346-1.8387 2.0253-3.096.3653-.9574.8053-2.3854.9253-5.016.132-2.844.164-3.6934.164-10.9054 0-7.1973-.032-8.0533-.164-10.8973zm4.8574 22.024c-.132 2.8747-.5854 4.8387-1.2587 6.5493-.6853 1.7747-1.604 3.2787-3.108 4.7827-1.4973 1.4973-3.0013 2.416-4.776 3.1093-1.7173.6667-3.6747 1.1254-6.5507 1.2507-2.876.1387-3.7946.164-11.1253.164-7.324 0-8.2493-.0253-11.1253-.164-2.8694-.1253-4.8254-.584-6.5507-1.2507-1.768-.6933-3.272-1.612-4.7693-3.1093-1.504-1.504-2.4227-3.008-3.1147-4.7827C.7493 42.9867.296 41.0227.1573 38.148.032 35.272 0 34.352 0 27.0213c0-7.324.032-8.2426.1573-11.1186.1387-2.8694.592-4.832 1.2587-6.5507.692-1.768 1.6107-3.2787 3.1147-4.776C6.028 3.0787 7.532 2.1533 9.3 1.4613c1.7253-.6666 3.6813-1.12 6.5507-1.252 2.876-.132 3.8013-.164 11.1253-.164 7.3307 0 8.2493.032 11.1253.164 2.876.132 4.8334.5854 6.5507 1.252 1.7747.692 3.2787 1.6174 4.776 3.1147 1.504 1.4973 2.4227 3.008 3.108 4.776.6733 1.7187 1.1267 3.6813 1.2587 6.5507.132 2.876.164 3.7946.164 11.1186 0 7.3307-.032 8.2507-.164 11.1267z",
        fill: "url(#e)",
        transform: "matrix(1 0 0 -1 0 54.004)"
      }
    ), /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M13.9093 4.9693c-4.964 0-8.992 4.0214-8.992 8.9854 0 4.972 4.028 8.9986 8.992 8.9986 4.9654 0 8.9987-4.0266 8.9987-8.9986 0-4.964-4.0333-8.9854-8.9987-8.9854zm0 22.848C6.2573 27.8173.06 21.6067.06 13.9547.06 6.3093 6.2573.1053 13.9093.1053c7.652 0 13.856 6.204 13.856 13.8494 0 7.652-6.204 13.8626-13.856 13.8626z",
        fill: "url(#f)",
        transform: "matrix(1 0 0 -1 13.0667 40.9373)"
      }
    ))
  );
}

// src/components/icons/kakao/index.tsx
function KakaoIcon(props) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: props.className,
      fill: "currentColor",
      viewBox: "0 0 550 550"
    },
    /* @__PURE__ */ React.createElement("path", { d: "M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z" })
  );
}
function KakaoTalkIcon(props) {
  return /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: props.className, viewBox: "0 0 256 256" }, /* @__PURE__ */ React.createElement("path", { fill: "currentColor", d: "M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z" }), /* @__PURE__ */ React.createElement("path", { d: "M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z" }), /* @__PURE__ */ React.createElement("path", { fill: "currentColor", d: "M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z" }));
}

// src/components/icons/naver/index.tsx
function NaverIcon(props) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      className: classNames("text-[#2DB400]", props.className),
      viewBox: "0 0 128 128",
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M81.5802 13H114V114H82.8272L45.4198 61.0062V114H13V13H44.1728L80.9568 65.9938L81.5802 13Z",
        fill: "currentColor"
      }
    )
  );
}

// src/components/icons/template/index.tsx
function TemplateIconOutline(props) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      className: props.className,
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M0.796875 2.40005C0.796875 1.51639 1.51322 0.800049 2.39688 0.800049H21.5969C22.4805 0.800049 23.1969 1.51639 23.1969 2.40005V5.60005C23.1969 6.4837 22.4805 7.20005 21.5969 7.20005H2.39688C1.51322 7.20005 0.796875 6.4837 0.796875 5.60005V2.40005Z",
        fill: "transparent",
        stroke: "currentColor"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M0.796875 12C0.796875 11.1164 1.51322 10.4 2.39688 10.4H11.9969C12.8805 10.4 13.5969 11.1164 13.5969 12V21.6001C13.5969 22.4837 12.8805 23.2001 11.9969 23.2001H2.39688C1.51322 23.2001 0.796875 22.4837 0.796875 21.6001V12Z",
        fill: "transparent",
        stroke: "currentColor"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M18.3969 10.4C17.5132 10.4 16.7969 11.1164 16.7969 12V21.6001C16.7969 22.4837 17.5132 23.2001 18.3969 23.2001H21.5969C22.4805 23.2001 23.1969 22.4837 23.1969 21.6001V12C23.1969 11.1164 22.4805 10.4 21.5969 10.4H18.3969Z",
        fill: "transparent",
        stroke: "currentColor"
      }
    )
  );
}
function TemplateIconSolid(props) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      className: props.className,
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M0.796875 2.40005C0.796875 1.51639 1.51322 0.800049 2.39688 0.800049H21.5969C22.4805 0.800049 23.1969 1.51639 23.1969 2.40005V5.60005C23.1969 6.4837 22.4805 7.20005 21.5969 7.20005H2.39688C1.51322 7.20005 0.796875 6.4837 0.796875 5.60005V2.40005Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M0.796875 12C0.796875 11.1164 1.51322 10.4 2.39688 10.4H11.9969C12.8805 10.4 13.5969 11.1164 13.5969 12V21.6001C13.5969 22.4837 12.8805 23.2001 11.9969 23.2001H2.39688C1.51322 23.2001 0.796875 22.4837 0.796875 21.6001V12Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M18.3969 10.4C17.5132 10.4 16.7969 11.1164 16.7969 12V21.6001C16.7969 22.4837 17.5132 23.2001 18.3969 23.2001H21.5969C22.4805 23.2001 23.1969 22.4837 23.1969 21.6001V12C23.1969 11.1164 22.4805 10.4 21.5969 10.4H18.3969Z",
        fill: "currentColor"
      }
    )
  );
}

// src/components/icons/youtube/index.tsx
function YoutubeIcon(props) {
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      className: classNames("text-[#ff0000]", props.className)
    },
    /* @__PURE__ */ React.createElement("g", { transform: "translate(-851 -334)" }, /* @__PURE__ */ React.createElement(
      "rect",
      {
        width: "100",
        height: "100",
        transform: "translate(851 334)",
        fill: "transparent"
      }
    ), /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M97.911,87.731A12.522,12.522,0,0,0,89.07,78.89C81.271,76.8,50,76.8,50,76.8s-31.271,0-39.07,2.09a12.523,12.523,0,0,0-8.841,8.841C0,95.529,0,111.8,0,111.8s0,16.271,2.089,24.069a12.524,12.524,0,0,0,8.841,8.842C18.729,146.8,50,146.8,50,146.8s31.271,0,39.07-2.089a12.523,12.523,0,0,0,8.841-8.842C100,128.072,100,111.8,100,111.8S100,95.529,97.911,87.731ZM40,126.8v-30l25.98,15L40,126.8Z",
        transform: "translate(851 272.2)",
        fill: "currentColor"
      }
    ))
  );
}

// src/components/image-fallback/index.tsx
import Image2 from "next/image";
import { useState as useState7 } from "react";
function ImageFallback({
  src,
  alt,
  className = "",
  fallback = /* @__PURE__ */ React.createElement("div", { className: "h-full bg-taling-gray-300 blur-sm " }),
  loading = "lazy",
  nextImageOption,
  useDefaultImg,
  onClick
}) {
  const [showFallback, setShowFallback] = useState7(false);
  if (showFallback || !src) {
    if (useDefaultImg) {
      const defaultSrc = "//img.taling.me/Content/Images/placeholders/profile-default.jpg";
      return nextImageOption ? /* @__PURE__ */ React.createElement(
        Image2,
        {
          src: defaultSrc,
          alt,
          className,
          width: nextImageOption.width,
          height: nextImageOption.height,
          fill: nextImageOption.fill,
          loading,
          onClick
        }
      ) : /* @__PURE__ */ React.createElement(
        "img",
        {
          src: defaultSrc,
          alt,
          className,
          loading,
          onClick
        }
      );
    }
    return /* @__PURE__ */ React.createElement("div", { className }, fallback);
  }
  const protocolCheck = (src2) => {
    if (src2.startsWith("//")) {
      return "https:" + src2;
    }
    if (!src2.startsWith("http://") && !src2.startsWith("https://")) {
      return "https://" + src2;
    }
    return src2;
  };
  const domainCheck = (src2) => {
    if (!src2) return false;
    if (src2.includes("taling.me")) {
      return true;
    }
  };
  return nextImageOption && domainCheck(src) ? /* @__PURE__ */ React.createElement(
    Image2,
    {
      src: protocolCheck(src),
      alt,
      className,
      width: nextImageOption.width,
      height: nextImageOption.height,
      fill: nextImageOption.fill,
      placeholder: "blur",
      blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO8Ww8AAj8BXkQ+xPEAAAAASUVORK5CYII=",
      loading,
      onError: () => {
        setShowFallback(true);
      },
      onClick
    }
  ) : /* @__PURE__ */ React.createElement(
    "img",
    {
      src,
      alt,
      className,
      loading,
      onError: () => {
        setShowFallback(true);
      },
      onClick
    }
  );
}

// src/components/loading/spinner/index.tsx
function LoadingSpinner({ className }) {
  return /* @__PURE__ */ React.createElement("div", { className }, /* @__PURE__ */ React.createElement(
    "svg",
    {
      "aria-hidden": "true",
      className: "text-taling-gray-300 animate-spin fill-taling-pink",
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
        fill: "currentFill"
      }
    )
  ));
}

// src/components/loading/banner/index.tsx
function LoadingBannerComponent({ title }) {
  return /* @__PURE__ */ React.createElement("div", { className: "mx-auto max-w-sm py-12 text-center min-h-screen mt-44" }, title, /* @__PURE__ */ React.createElement("div", { className: "mx-auto w-6 text-taling-pink p-4" }, /* @__PURE__ */ React.createElement(LoadingSpinner, { className: "w-5 h-5" })));
}

// src/components/logo/index.tsx
var LogoComponent = ({ size = "sm", color = "black" }) => {
  const sizeMap4 = {
    xs: "h-4 w-8 sm:h-4 sm:w-8",
    sm: "h-6 w-12 sm:h-8 sm:w-12",
    md: "h-10 w-16 sm:h-10 sm:w-16",
    lg: "h-12 w-20 sm:h-12 sm:w-20"
  };
  const colorMap = {
    black: "#090304",
    white: "#ffffff"
  };
  return /* @__PURE__ */ React.createElement(
    "svg",
    {
      className: sizeMap4[size],
      viewBox: "0 0 46 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    },
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M12.2923 15.1316L11.6006 19.2996H14.5961L14.3283 20.9033H11.4836H5.64868H5.64599L3.95312 31.0851H9.79069H17.6845L18.4071 26.7409H10.5133L10.7838 25.1143H13.6272H18.0734H18.5888L19.5576 19.2996H19.559L20.2507 15.1316H15.2891H12.2923Z",
        fill: colorMap[color]
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M9.51667 19.2995L10.2057 15.1315H5.97886L6.24935 13.505H10.46L10.8906 10.9931L11.184 9.28044H11.1732H7.24111L7.50756 7.66867H11.4396L12.1031 3.66211H8.16964V3.66077L2.5864 3.66211L0 19.2995H1.99161H9.51667Z",
        fill: colorMap[color]
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M20.2829 0H14.7576L12.5547 13.505H18.0814L18.9776 8.00639H22.7536L23.4641 3.66214H19.6868L20.2829 0Z",
        fill: colorMap[color]
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M37.8906 15.1598H43.4039L45.6377 1.63194H40.1231L37.8906 15.1598Z",
        fill: colorMap[color]
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M30.3896 15.1598C33.7189 15.1598 36.4277 12.4959 36.4277 9.22127C36.4277 5.9466 33.7189 3.28274 30.3896 3.28274C27.0604 3.28274 24.3516 5.9466 24.3516 9.22127C24.3516 12.4959 27.0604 15.1598 30.3896 15.1598ZM30.3896 7.35118C31.4379 7.35118 32.2911 8.1907 32.2911 9.22127C32.2911 10.2518 31.4379 11.0914 30.3896 11.0914C29.3414 11.0914 28.4882 10.2518 28.4882 9.22127C28.4882 8.1907 29.3414 7.35118 30.3896 7.35118Z",
        fill: colorMap[color]
      }
    ),
    /* @__PURE__ */ React.createElement(
      "path",
      {
        d: "M38.9172 18.6793C37.3993 17.2223 35.3848 16.4191 33.2465 16.4191C31.1082 16.4191 29.0938 17.2223 27.5758 18.6793C26.8317 19.3937 26.2476 20.2265 25.8386 21.1562C25.412 22.1235 25.1953 23.1514 25.1953 24.2089C25.1953 25.2663 25.412 26.2942 25.8386 27.2629C26.2476 28.1926 26.833 29.0253 27.5758 29.7397C29.0938 31.1968 31.1082 32 33.2465 32C35.3848 32 37.3993 31.1968 38.9172 29.7397C39.6614 29.0253 40.2454 28.1926 40.6545 27.2629C41.0811 26.2942 41.2977 25.2677 41.2977 24.2089C41.2977 23.1501 41.0811 22.1235 40.6545 21.1562C40.2454 20.2265 39.66 19.3937 38.9172 18.6793ZM33.2465 26.8902C31.6721 26.8902 30.391 25.6874 30.391 24.2102C30.391 22.733 31.6721 21.5302 33.2465 21.5302C34.821 21.5302 36.1021 22.733 36.1021 24.2102C36.1021 25.6874 34.821 26.8902 33.2465 26.8902Z",
        fill: colorMap[color]
      }
    )
  );
};
var logo_default = LogoComponent;

// src/components/logo/studio.tsx
function StudioLogo(props) {
  return /* @__PURE__ */ React.createElement("div", { ...props }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 916 238", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M91.3684 112.471L86.2284 143.451H108.488L106.498 155.371H85.3584H41.9984H41.9784L29.3984 231.051H72.7784H131.438L136.808 198.761H78.1484L80.1584 186.671H101.288H134.328H138.158L145.358 143.451H145.368L150.508 112.471H113.638H91.3684Z",
      fill: "black"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M75.84 112.471H44.43L46.44 100.381H77.73L80.93 81.7107L83.1 68.9807H83.03H53.8L55.79 57.0007H85.01L89.94 27.2207H60.71H19.22L0 143.451H14.8H70.72L75.84 112.471Z",
      fill: "black"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M150.711 0H109.651L93.2812 100.38H134.351L141.011 59.51H169.071L174.351 27.22H146.271L150.711 0Z",
      fill: "black"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M298.152 12.1309L281.562 112.681H322.533L339.133 12.1309H298.152Z",
      fill: "black"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M225.847 112.68C250.587 112.68 270.717 92.8804 270.717 68.5404C270.717 44.2004 250.587 24.4004 225.847 24.4004C201.107 24.4004 180.977 44.2004 180.977 68.5404C180.977 92.8804 201.107 112.68 225.847 112.68ZM225.847 54.6404C233.637 54.6404 239.977 60.8804 239.977 68.5404C239.977 76.2004 233.637 82.4404 225.847 82.4404C218.057 82.4404 211.717 76.2004 211.717 68.5404C211.717 60.8804 218.057 54.6404 225.847 54.6404Z",
      fill: "black"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M289.212 138.839C277.932 128.009 262.962 122.039 247.072 122.039C231.182 122.039 216.212 127.999 204.932 138.839C199.402 144.149 195.062 150.339 192.022 157.249C188.852 164.439 187.242 172.079 187.242 179.939C187.242 187.799 188.852 195.439 192.022 202.639C195.062 209.549 199.412 215.739 204.932 221.049C216.212 231.879 231.182 237.849 247.072 237.849C262.962 237.849 277.932 231.889 289.212 221.049C294.742 215.739 299.082 209.549 302.122 202.639C305.292 195.439 306.902 187.809 306.902 179.939C306.902 172.069 305.292 164.439 302.122 157.249C299.082 150.339 294.732 144.149 289.212 138.839ZM247.072 199.869C235.372 199.869 225.852 190.929 225.852 179.949C225.852 168.969 235.372 160.029 247.072 160.029C258.772 160.029 268.292 168.969 268.292 179.949C268.292 190.929 258.772 199.869 247.072 199.869Z",
      fill: "black"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M886.169 199.859H362.609L392.399 11.7793H915.959L886.169 199.859Z",
      fill: "#FF0045"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M388.812 231.05L394.832 192.99H442.003L388.812 231.05Z",
      fill: "#FF0045"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M433.139 166.13C423.169 166.13 414.169 163.26 405.469 157.34L417.789 138.25C423.969 142.98 431.279 145.85 437.199 145.85C441.759 145.85 445.509 143.48 446.049 140.11C446.259 138.76 445.999 137.24 445.429 136.56C444.429 135.38 442.849 134.7 436.189 133.01C432.939 132.17 426.279 129.46 423.179 126.59C419.209 122.87 417.279 117.97 418.299 111.55C420.979 94.6598 435.159 84.0098 455.099 84.0098C463.209 84.0098 470.909 85.5298 477.809 88.9098L466.409 106.48C461.909 103.95 457.399 102.59 452.999 102.59C448.269 102.59 444.689 104.96 444.179 108.17C443.989 109.35 444.479 110.54 445.219 111.21C447.149 112.9 452.679 114.25 455.759 115.1C459.939 116.45 464.259 117.97 467.349 120.84C471.179 124.39 473.529 129.79 472.359 137.23C469.579 154.8 454.269 166.12 433.149 166.12L433.139 166.13Z",
      fill: "white"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M522.922 109.2L514.362 163.26H488.512L497.072 109.2H485.242L488.802 86.73H500.632L504.272 63.75H530.122L526.482 86.73H544.732L541.172 109.2H522.922Z",
      fill: "white"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M579.895 166.47C554.555 166.47 543.255 155.66 546.495 135.22L554.175 86.7305H580.025L573.145 130.15C571.595 139.95 574.785 144.34 583.395 144.34C591.505 144.34 596.645 139.61 598.145 130.15L605.025 86.7305H630.705L623.025 135.22C619.785 155.66 605.235 166.47 579.895 166.47Z",
      fill: "white"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M689.552 163.26L690.892 154.81C689.642 156.33 688.462 157.35 687.852 158.02C682.512 162.92 674.622 165.79 666.852 165.79C646.072 165.79 632.832 148.05 636.522 124.74C640.132 101.93 658.822 84.1899 679.432 84.1899C683.322 84.1899 686.902 85.0399 690.262 86.2199C695.032 88.0799 697.022 89.4299 700.492 94.1599L709.162 39.4199H734.842L715.232 163.26H689.552ZM682.672 107.51C673.382 107.51 664.712 115.28 663.162 125.08C661.632 134.71 667.842 142.48 677.132 142.48C686.422 142.48 694.922 134.71 696.442 125.08C697.972 115.45 691.792 107.51 682.672 107.51Z",
      fill: "white"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M732.461 163.259L744.581 86.729H770.261L758.141 163.259H732.461ZM759.701 72.369C751.251 72.369 745.571 65.609 746.901 57.159C748.241 48.709 756.071 41.959 764.511 41.959C772.951 41.959 778.641 48.719 777.311 57.159C775.971 65.609 768.141 72.369 759.701 72.369Z",
      fill: "white"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M813.098 166.129C787.418 166.129 772.048 149.069 775.868 124.909C779.668 100.919 800.448 83.8594 826.128 83.8594C851.808 83.8594 867.178 100.919 863.378 124.909C859.548 149.069 838.768 166.129 813.088 166.129H813.098ZM822.388 107.509C813.268 107.509 804.598 115.279 803.078 124.909C801.558 134.539 807.758 142.309 816.878 142.309C825.998 142.309 834.668 134.539 836.188 124.909C837.718 115.279 831.508 107.509 822.388 107.509Z",
      fill: "white"
    }
  )));
}

// src/components/logo/taling.tsx
function TalingLogoWithOutTM(props) {
  return /* @__PURE__ */ React.createElement("div", { ...props }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 340 239", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M91.37 112.64L86.23 143.62H108.49L106.5 155.54H85.36H42H41.98L29.4 231.22H72.78H131.44L136.81 198.93H78.15L80.16 186.84H101.29H134.33H138.16L145.36 143.62H145.37L150.51 112.64H113.64H91.37Z",
      fill: "currentColor"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M75.84 112.64H44.43L46.44 100.55H77.73L80.93 81.88L83.1 69.15H83.03H53.8L55.79 57.17H85.01L89.94 27.39H60.71H19.22L0 143.62H14.8H70.72L75.84 112.64Z",
      fill: "currentColor"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M150.71 0.169983H109.65L93.28 100.55H134.35L141.01 59.68H169.07L174.35 27.39H146.27L150.71 0.169983Z",
      fill: "currentColor"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M298.15 12.3L281.56 112.85H322.53L339.13 12.3H298.15Z",
      fill: "currentColor"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M225.85 112.85C250.59 112.85 270.72 93.05 270.72 68.71C270.72 44.37 250.59 24.57 225.85 24.57C201.11 24.57 180.98 44.37 180.98 68.71C180.98 93.05 201.11 112.85 225.85 112.85ZM225.85 54.81C233.64 54.81 239.98 61.05 239.98 68.71C239.98 76.37 233.64 82.61 225.85 82.61C218.06 82.61 211.72 76.37 211.72 68.71C211.72 61.05 218.06 54.81 225.85 54.81Z",
      fill: "currentColor"
    }
  ), /* @__PURE__ */ React.createElement(
    "path",
    {
      d: "M289.21 139.01C277.93 128.18 262.96 122.21 247.07 122.21C231.18 122.21 216.21 128.17 204.93 139.01C199.4 144.32 195.06 150.51 192.02 157.42C188.85 164.61 187.24 172.25 187.24 180.11C187.24 187.97 188.85 195.61 192.02 202.81C195.06 209.72 199.41 215.91 204.93 221.22C216.21 232.05 231.18 238.02 247.07 238.02C262.96 238.02 277.93 232.06 289.21 221.22C294.74 215.91 299.08 209.72 302.12 202.81C305.29 195.61 306.9 187.98 306.9 180.11C306.9 172.24 305.29 164.61 302.12 157.42C299.08 150.51 294.73 144.32 289.21 139.01ZM247.07 200.04C235.37 200.04 225.85 191.1 225.85 180.12C225.85 169.14 235.37 160.2 247.07 160.2C258.77 160.2 268.29 169.14 268.29 180.12C268.29 191.1 258.77 200.04 247.07 200.04Z",
      fill: "currentColor"
    }
  )));
}

// src/components/modal/index.tsx
import { Dialog, Transition as Transition3 } from "@headlessui/react";
import { Fragment as Fragment3, useRef as useRef2 } from "react";
function ModalHeader({
  children,
  setIsOpen,
  className,
  ...props
}) {
  return /* @__PURE__ */ React.createElement("header", { className: "flex justify-between px-8 pt-8 pb-4" }, /* @__PURE__ */ React.createElement(
    Dialog.Title,
    {
      as: "h3",
      className: classNames(
        "w-full font-bold text-2xl leading-9 text-left text-taling-gray-900 ",
        className
      ),
      ...props
    },
    children
  ));
}
function ModalBody({ children, className, ...props }) {
  return /* @__PURE__ */ React.createElement(
    "section",
    {
      className: classNames(
        "flex flex-col flex-1 px-8 pb-8 text-start font-normal text-base leading-7 text-taling-gray-900",
        className
      ),
      ...props
    },
    children
  );
}
var modalFooterAlignMap = {
  between: "justify-between gap-3",
  end: "justify-end gap-3",
  column: "flex-col gap-2"
};
function ModalFooter({
  children,
  align = "between",
  className,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    "footer",
    {
      className: classNames(
        "flex px-5 py-4",
        modalFooterAlignMap[align],
        className
      ),
      ...props
    },
    children
  );
}

// src/components/not-found/index.tsx
function NotFoundComponent() {
  return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-2 items-center justify-center py-12 sm:py-24 text-sm min-h-screen -mt-16" }, /* @__PURE__ */ React.createElement("h2", { className: "text-2xl font-extralight py-4" }, "\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"), /* @__PURE__ */ React.createElement("p", null, "\uC694\uCCAD\uD558\uC2E0 \uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."), /* @__PURE__ */ React.createElement("p", null, "\uC785\uB825\uD558\uC2E0 \uC8FC\uC18C\uAC00 \uC815\uD655\uD55C\uC9C0 \uB2E4\uC2DC \uD55C\uBC88 \uD655\uC778\uD574 \uC8FC\uC138\uC694."), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", { href: "/", className: "text-taling-pink underline" }, "\uD648\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30")));
}

// src/components/progress-bar/index.tsx
import { useEffect as useEffect5, useState as useState8 } from "react";
function DefaultProgressBarComponent({ percent }) {
  const [_internalPercent, setInternalPercent] = useState8(0);
  useEffect5(() => {
    if (percent > 100) setInternalPercent(100);
    else if (percent < 0) setInternalPercent(0);
    else setInternalPercent(percent);
  }, [percent]);
  return /* @__PURE__ */ React.createElement("div", { className: "relative h-1 w-full overflow-hidden rounded-full" }, /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-0 left-0 right-0 top-0 h-2 bg-gray-200" }), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "absolute bottom-0 left-0 right-0 top-0 h-2 bg-taling-purple-400",
      style: { width: `${_internalPercent}%` }
    }
  ));
}

// src/components/radio-button/index.tsx
function RadioButton({
  label,
  checked,
  onChange
}) {
  const toggleChecked = () => {
    onChange(!checked);
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "flex items-center cursor-pointer gap-1 py-2 md:py-0 focus:bg-taling-gray-100 ",
      onClick: (e) => {
        toggleChecked();
      }
    },
    /* @__PURE__ */ React.createElement(
      "input",
      {
        id: label,
        name: label,
        type: "radio",
        className: "form-radio h-3 w-3 text-taling-pink focus:ring-transparent focus:ring-0 focus:outline-none focus:ring-transparent",
        checked,
        readOnly: true
      }
    ),
    /* @__PURE__ */ React.createElement("label", { className: "text-taling-gray-800 cursor-pointer " }, label)
  );
}

// src/components/select-box/index.tsx
import { Listbox, Transition as Transition4 } from "@headlessui/react";
import { CheckIcon as CheckIcon2, ChevronUpDownIcon as ChevronUpDownIcon2 } from "@heroicons/react/20/solid";
import { Fragment as Fragment4, useCallback as useCallback3, useEffect as useEffect6, useState as useState9 } from "react";
function SelectBox({
  list,
  enabled,
  onSelected,
  defaultSelection,
  isToday,
  placeholder = "\uC120\uD0DD\uD574 \uC8FC\uC138\uC694",
  width = "w-full",
  optionHight = "max-h-60",
  optionWidth = "w-full",
  optionAlign
}) {
  const [_internaList, setInternalList] = useState9();
  const [selected, setSelected] = useState9(null);
  const [_hydrated, setHydrated] = useState9(false);
  const onListChanged = useCallback3(
    (newList) => {
      const found = newList.find(
        (item) => (item == null ? void 0 : item.id) === (selected == null ? void 0 : selected.id) || (item == null ? void 0 : item.id) === (defaultSelection == null ? void 0 : defaultSelection.id)
      );
      if (!found) {
        setSelected(null);
        return;
      }
      if (!selected) {
        setSelected(defaultSelection);
      }
      if (newList === _internaList) return;
      setInternalList(newList);
    },
    [_internaList, defaultSelection, selected]
  );
  useEffect6(() => {
    setHydrated(true);
    onListChanged(list);
    return () => {
      setHydrated(false);
    };
  }, [defaultSelection, list]);
  useEffect6(() => {
    setSelected(defaultSelection);
  }, [defaultSelection]);
  if (list.length === 0 && defaultSelection === null) return /* @__PURE__ */ React.createElement(React.Fragment, null);
  if (!_hydrated) return /* @__PURE__ */ React.createElement(React.Fragment, null);
  return /* @__PURE__ */ React.createElement(
    Listbox,
    {
      value: selected,
      onChange: (value) => {
        setSelected(value);
        onSelected(value);
      }
    },
    ({ open }) => {
      var _a2;
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: classNames("relative", width) }, /* @__PURE__ */ React.createElement(
        Listbox.Button,
        {
          className: classNames(
            width,
            "relative cursor-pointer rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-taling-gray-900 shadow-sm ring-1 ring-inset ring-taling-gray-300  sm:text-sm sm:leading-6",
            enabled ? "focus:outline-none focus:ring-2 focus:ring-taling-pink " : "!cursor-not-allowed !bg-taling-gray-300 !text-taling-gray-800 opacity-50 "
          )
        },
        /* @__PURE__ */ React.createElement(
          "span",
          {
            className: classNames(
              "block truncate",
              selected ? "" : "text-low-emphasis"
            )
          },
          (_a2 = selected == null ? void 0 : selected.name) != null ? _a2 : placeholder
        ),
        /* @__PURE__ */ React.createElement("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, /* @__PURE__ */ React.createElement(
          ChevronUpDownIcon2,
          {
            className: "h-5 w-5 text-taling-gray-400",
            "aria-hidden": "true"
          }
        ))
      ), /* @__PURE__ */ React.createElement(
        Transition4,
        {
          show: open && enabled,
          as: Fragment4,
          leave: "transition ease-in duration-100",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0"
        },
        /* @__PURE__ */ React.createElement(
          Listbox.Options,
          {
            className: classNames(
              "no-scrollbar absolute z-10 mt-1 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
              optionHight,
              optionWidth
            )
          },
          list.map((item) => {
            const internalSelected = (selected == null ? void 0 : selected.id) === item.id;
            const excludeToday = isToday && !item.display;
            return /* @__PURE__ */ React.createElement(
              Listbox.Option,
              {
                key: item.id,
                className: ({ active }) => classNames(
                  excludeToday ? "hidden" : "",
                  active || internalSelected ? "bg-taling-gray-100" : "text-taling-gray-900",
                  "relative cursor-pointer select-none py-2 pl-3 pr-9",
                  optionAlign
                ),
                value: item
              },
              ({ selected: selected2, active }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
                "span",
                {
                  className: classNames(
                    selected2 || internalSelected ? "font-semibold" : "font-normal",
                    "block truncate"
                  )
                },
                item.name
              ), selected2 || internalSelected ? /* @__PURE__ */ React.createElement(
                "span",
                {
                  className: classNames(
                    active || internalSelected ? "text-taling-black" : "text-taling-pink",
                    "absolute inset-y-0 right-0 flex items-center pr-4"
                  )
                },
                /* @__PURE__ */ React.createElement(
                  CheckIcon2,
                  {
                    className: "h-5 w-5",
                    "aria-hidden": "true"
                  }
                )
              ) : null)
            );
          })
        )
      )));
    }
  );
}

// src/components/skeleton/basic/index.tsx
function BasicSkeletonComponent({
  height = "h-44"
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `w-full ${height} bg-taling-gray-100 rounded-md animate-pulse`
    }
  );
}

// src/components/skeleton/image/index.tsx
function ImageSkeletonComponent({
  isLoading = true,
  className,
  imageUrl,
  imageAlt,
  placeholder
}) {
  if (isLoading) {
    return /* @__PURE__ */ React.createElement("div", { className }, placeholder);
  }
  return /* @__PURE__ */ React.createElement("div", { className }, imageUrl ? /* @__PURE__ */ React.createElement(
    "img",
    {
      className: "w-full h-full object-cover",
      src: imageUrl,
      alt: imageAlt
    }
  ) : placeholder);
}

// src/components/skeleton/text/index.tsx
function TextSkeletonComponent({
  isLoading,
  expectedWidth,
  className,
  text,
  isOverflowMode
}) {
  const loadingClass = isLoading ? "animate-pulse bg-taling-gray-100 text-transparent rounded-lg" : "";
  const overflowClass = isOverflowMode ? "overflow-y-scroll " : "";
  return /* @__PURE__ */ React.createElement(
    "p",
    {
      className: `${loadingClass} ${overflowClass} ${className != null ? className : ""}`,
      style: {
        width: isLoading ? expectedWidth : "auto"
      }
    },
    text != null ? text : isLoading ? "." : ""
  );
}

// src/components/tracking-loaders/naver/index.tsx
import Script from "next/script";
var _a;
var NAVER_PIXEL_ID = (_a = process.env.NEXT_PUBLIC_NAVER_PIXEL_ID) != null ? _a : "s_568925707495";
var NAVER_INFLOW_DOMAIN = "taling.me";
function NaverTrackingLoader() {
  return /* @__PURE__ */ React.createElement(
    Script,
    {
      id: `naver-pixel-${Math.random().toFixed(5)}`,
      type: "text/javascript",
      src: "//wcs.naver.net/wcslog.js",
      onLoad: () => {
        console.log(`\u{1F340} NaverTrackingLoader loaded.`);
        const w = window;
        const _nasa = {};
        const wcs = w.wcs;
        const wcs_add = w.wcs_add;
        const wcs_do = w.wcs_do;
        if (wcs) {
          if (wcs_add) {
            wcs_add["wa"] = NAVER_PIXEL_ID;
          }
          wcs.inflow(NAVER_INFLOW_DOMAIN);
          wcs_do == null ? void 0 : wcs_do(_nasa);
        }
      }
    }
  );
}

// src/components/version-context/index.tsx
import { createContext as createContext3 } from "react";
var TalingAppIsPreviewVersionContext = createContext3({
  isPreviewVersion: false
});

// src/components/ui/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React2 from "react";

// src/util/tailwind-util/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/button.tsx
var iconContainerVariants = cva("inline-flex items-center justify-center", {
  variants: {
    size: {
      xs: "h-4 w-4",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-6 w-6",
      // deprecated - default는 추후 사라질 예정.
      xl: "h-6 w-6",
      default: "h-6 w-6"
    }
  },
  defaultVariants: {
    size: "lg"
  }
});
var buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-1 rounded-lg transition-colors",
    "disabled:pointer-events-none"
  ],
  {
    variants: {
      variant: {
        solidPrimary: [
          "bg-primary text-taling-white [&]:text-taling-white",
          "disabled:bg-taling-gray-400 disabled:text-interaction-disabled/50",
          "hover:bg-taling-pink-600",
          "active:bg-taling-pink-700"
        ],
        solidSecondary: [
          "bg-taling-gray-100 text-strong [&]:text-strong",
          "disabled:bg-taling-gray-400 disabled:text-interaction-disabled/50",
          "hover:bg-taling-gray-200",
          "active:bg-taling-gray-300"
        ],
        outlinedPrimary: [
          "bg-taling-white border border-primary text-primary [&]:text-primary",
          "disabled:border-interaction-inactive disabled:text-disabled/80",
          "hover:bg-primary/5",
          "active:bg-primary/15"
        ],
        outlinedSecondary: [
          "bg-taling-white border border-taling-gray-300 text-normal [&]:text-normal",
          "disabled:border-interaction-inactive disabled:text-disabled/80",
          "hover:bg-taling-gray-50",
          "active:bg-taling-gray-100"
        ],
        // deprecated - 추후 사라질 속성
        default: "bg-taling-pink text-taling-white [&]:text-taling-white shadow hover:bg-taling-pink/80 disabled:bg-taling-gray-400 disabled:opacity-50 whitespace-nowrap",
        outline: "border border-taling-gray-300 bg-transparent shadow-sm hover:bg-taling-gray-100 hover:text-taling-gray-900 disabled:opacity-50 whitespace-nowrap",
        secondary: "bg-taling-gray-100 text-taling-gray-900 shadow-sm hover:bg-taling-gray-100/70 disabled:opacity-50 whitespace-nowrap",
        ghost: "hover:bg-taling-gray-100 hover:text-taling-gray-900 disabled:opacity-50 whitespace-nowrap",
        underline: "underline hover:text-taling-gray-900 text-taling-gray-600 disabled:opacity-50 whitespace-nowrap"
      },
      size: {
        xs: "h-7 min-w-[3rem] rounded-lg px-2.5 py-1.5 text-caption1-semibold",
        sm: "h-[2.125rem] min-w-[3.5rem] rounded-lg px-3 py-2 text-label2-semibold",
        md: "h-10 min-w-[4.25rem] rounded-lg px-3.5 py-2 text-body2normal-semibold",
        lg: "h-12 min-w-[5.25rem] rounded-lg px-4 py-3 text-body2normal-semibold",
        // deprecated - default는 추후 사라질 예정.
        xl: "h-12 rounded-md px-8 text-sm font-medium",
        default: "h-9 px-4 py-2 text-sm font-medium"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React2.forwardRef(
  ({
    className,
    variant,
    size,
    asChild = false,
    leftIcon,
    rightIcon,
    children,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ React2.createElement(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      },
      leftIcon && /* @__PURE__ */ React2.createElement("div", { className: cn(iconContainerVariants({ size })) }, leftIcon),
      children,
      rightIcon && /* @__PURE__ */ React2.createElement("div", { className: cn(iconContainerVariants({ size })) }, rightIcon)
    );
  }
);
Button.displayName = "Button";

// src/components/ui/checkbox.tsx
var sizeMap = {
  normal: {
    checkbox: "w-5 h-5 rounded-md",
    label: "text-label1normal-regular"
  },
  small: { checkbox: "w-4 h-4 rounded", label: "text-label2-regular" }
};
function Checkbox({
  size = "normal",
  disabled = false,
  className,
  checked,
  label,
  onChange
}) {
  const checkbox = /* @__PURE__ */ React.createElement(
    "input",
    {
      checked,
      onChange: (e) => onChange == null ? void 0 : onChange(e.target.checked),
      disabled,
      className: classNames(
        sizeMap[size].checkbox,
        "border-1 cursor-pointer border-taling-gray-300 text-primary",
        `disabled:cursor-default disabled:opacity-30 disabled:ring-0
        disabled:ring-offset-0`,
        "active:ring-2 active:ring-primary active:ring-offset-1",
        "focus:outline-none focus:ring-0 focus:ring-offset-0",
        "focus-visible:ring-0 focus-visible:ring-offset-0",
        "checked:focus:ring-0 checked:focus:ring-offset-0",
        "appearance-none",
        className
      ),
      type: "checkbox"
    }
  );
  if (!label) {
    return checkbox;
  }
  return /* @__PURE__ */ React.createElement(
    "label",
    {
      className: classNames(
        "inline-flex h-fit w-fit items-center gap-2",
        disabled ? "cursor-default" : "cursor-pointer"
      )
    },
    checkbox,
    /* @__PURE__ */ React.createElement(
      "span",
      {
        className: classNames(
          sizeMap[size].label,
          "text-taling-black",
          disabled ? "opacity-30" : ""
        )
      },
      label
    )
  );
}

// src/components/ui/dialog/dialog-buttons.tsx
function DialogButtons({
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
  onPromiseCancel,
  onPromiseConfirm,
  setIsOpen
}) {
  return /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, !onPromiseCancel && /* @__PURE__ */ React.createElement(
    Button,
    {
      size: "md",
      variant: "outlinedSecondary",
      className: "w-full",
      onClick: () => {
        onCancel == null ? void 0 : onCancel();
        setIsOpen == null ? void 0 : setIsOpen(false);
      }
    },
    cancelLabel
  ), onPromiseCancel && /* @__PURE__ */ React.createElement(
    WaitingButton,
    {
      className: "w-full",
      render: {
        normal: /* @__PURE__ */ React.createElement(
          Button,
          {
            size: "md",
            variant: "outlinedSecondary",
            className: "w-full"
          },
          cancelLabel
        ),
        waiting: /* @__PURE__ */ React.createElement(
          Button,
          {
            size: "md",
            variant: "outlinedSecondary",
            className: "w-full"
          },
          /* @__PURE__ */ React.createElement(LoadingSpinner, { className: "w-4 h-4 animate-spin" })
        )
      },
      onClick: async () => {
        await onPromiseCancel();
        setIsOpen == null ? void 0 : setIsOpen(false);
        return false;
      }
    }
  ), !onPromiseConfirm && /* @__PURE__ */ React.createElement(
    Button,
    {
      size: "md",
      variant: "solidPrimary",
      className: "w-full",
      onClick: () => {
        onConfirm == null ? void 0 : onConfirm();
        setIsOpen == null ? void 0 : setIsOpen(false);
      }
    },
    confirmLabel
  ), onPromiseConfirm && /* @__PURE__ */ React.createElement(
    WaitingButton,
    {
      className: "w-full",
      render: {
        normal: /* @__PURE__ */ React.createElement(Button, { size: "md", variant: "solidPrimary", className: "w-full" }, confirmLabel),
        waiting: /* @__PURE__ */ React.createElement(Button, { size: "md", variant: "solidPrimary", className: "w-full" }, /* @__PURE__ */ React.createElement(LoadingSpinner, { className: "w-4 h-4 animate-spin" }))
      },
      onClick: async () => {
        await onPromiseConfirm();
        setIsOpen == null ? void 0 : setIsOpen(false);
        return false;
      }
    }
  ));
}

// src/components/ui/dialog/index.tsx
import {
  DialogPanel,
  DialogTitle,
  Dialog as HeadlessUiDialog
} from "@headlessui/react";
function Dialog2({
  title,
  subTitle,
  children,
  cancelLabel = "\uCDE8\uC18C",
  confirmLabel = "\uD655\uC778",
  isBackDropClickable = true,
  isOpen,
  onPromiseCancel,
  onPromiseConfirm,
  onCancel,
  onConfirm,
  setIsOpen
}) {
  return /* @__PURE__ */ React.createElement(
    HeadlessUiDialog,
    {
      open: isOpen,
      onClose: () => {
        isBackDropClickable && (setIsOpen == null ? void 0 : setIsOpen(false));
      },
      transition: true,
      className: classNames(
        "z-[999] fixed inset-0 flex w-screen items-center justify-center bg-taling-gray-900/70",
        "transition duration-300 ease-out",
        "data-[closed]:opacity-0"
      )
    },
    /* @__PURE__ */ React.createElement(DialogPanel, { className: "flex flex-col gap-6 w-[18.4375rem] bg-taling-white p-5 rounded-xl shadow-strong" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-5" }, /* @__PURE__ */ React.createElement(DialogTitle, { className: "flex flex-col gap-1.5" }, /* @__PURE__ */ React.createElement("span", { className: "text-body1normal-bold text-strong" }, title), /* @__PURE__ */ React.createElement("span", { className: "text-label1reading-regular text-neutral" }, subTitle)), children && /* @__PURE__ */ React.createElement("section", null, children)), /* @__PURE__ */ React.createElement(
      DialogButtons,
      {
        cancelLabel,
        confirmLabel,
        onCancel,
        onConfirm,
        onPromiseCancel,
        onPromiseConfirm,
        setIsOpen
      }
    ))
  );
}

// src/components/ui/input/description.tsx
function InputDescription({
  description = "description",
  option,
  className
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classNames(
        "inline-flex items-center gap-1 text-caption1-regular text-neutral",
        className
      )
    },
    option && /* @__PURE__ */ React.createElement("span", { className: "inline-block" }, option),
    /* @__PURE__ */ React.createElement("span", { className: "inline-block" }, description)
  );
}

// src/components/ui/input/error-message.tsx
function InputErrorMessage({
  errorMessage = "error",
  option,
  className
}) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classNames(
        "inline-flex items-center gap-1 text-caption1-regular text-danger",
        className
      )
    },
    option && /* @__PURE__ */ React.createElement("span", { className: "inline-block" }, option),
    /* @__PURE__ */ React.createElement("span", { className: "inline-block" }, errorMessage)
  );
}

// src/components/ui/input/input.tsx
import { useEffect as useEffect7, useState as useState10 } from "react";
function Input({
  value,
  valueType = "string",
  placeholder = "\uC785\uB825\uD574\uC8FC\uC138\uC694",
  minLength,
  maxLength,
  disabled,
  type = "text",
  className,
  displayModifier,
  charFilter,
  onChange,
  onValueLength
}) {
  const [displayValue, setDisplayValue] = useState10(
    (value == null ? void 0 : value.toString()) || ""
  );
  const getInputType = () => {
    if (displayModifier) {
      return "text";
    }
    if (valueType === "string") {
      return type;
    }
    if (valueType === "int" || valueType === "float") {
      return "number";
    }
    return type;
  };
  const inputType = getInputType();
  const step = valueType === "float" ? "any" : "1";
  const handleKeyDown = (e) => {
    if (valueType === "int" || valueType === "float") {
      if (["e", "E", "+", "-"].includes(e.key)) {
        e.preventDefault();
      }
    }
    if (valueType === "int" && e.key === ".") {
      e.preventDefault();
    }
  };
  const filterValue = (value2) => {
    if (!charFilter) return value2;
    if (typeof charFilter === "function") {
      return charFilter(value2);
    }
    if (charFilter instanceof RegExp) {
      return value2.replace(charFilter, "");
    }
    return value2.replace(new RegExp(charFilter, "g"), "");
  };
  const handleChange = (e) => {
    let newValue = e.target.value;
    newValue = filterValue(newValue);
    if (displayModifier) {
      const unwrappedValue = displayModifier.unwrap(newValue);
      setDisplayValue(displayModifier.wrap(unwrappedValue));
      onValueLength == null ? void 0 : onValueLength(unwrappedValue.length);
      const modifiedEvent = {
        ...e,
        target: {
          ...e.target,
          value: unwrappedValue
        }
      };
      onChange == null ? void 0 : onChange(modifiedEvent);
    } else {
      setDisplayValue(newValue);
      onValueLength == null ? void 0 : onValueLength(newValue.length);
      onChange == null ? void 0 : onChange({
        ...e,
        target: {
          ...e.target,
          value: newValue
        }
      });
    }
  };
  useEffect7(() => {
    if (displayModifier) {
      setDisplayValue(displayModifier.wrap((value == null ? void 0 : value.toString()) || ""));
      return;
    }
    setDisplayValue((value == null ? void 0 : value.toString()) || "");
  }, [value, displayModifier]);
  return /* @__PURE__ */ React.createElement(
    "input",
    {
      type: inputType,
      step,
      onKeyDown: handleKeyDown,
      pattern: valueType === "int" ? "[0-9]*" : void 0,
      className: classNames(
        `h-10 min-w-[16.5rem] appearance-none rounded-md border border-taling-gray-300
        bg-taling-white px-3 py-2.5 text-label1normal-regular text-strong
        placeholder:text-label1normal-regular placeholder:text-low-emphasis
        focus:border-primary focus:ring-1 focus:ring-inset focus:ring-primary
        disabled:bg-taling-gray-200 disabled:text-disabled`,
        className
      ),
      value: displayValue,
      placeholder,
      minLength,
      maxLength,
      disabled,
      onChange: handleChange
    }
  );
}

// src/components/ui/input/input-field.tsx
import { useState as useState11 } from "react";

// src/components/ui/input/label.tsx
function InputLabel({
  label = "label",
  option,
  className
}) {
  return /* @__PURE__ */ React.createElement("div", { className: classNames("inline-flex items-center gap-0.5", className) }, /* @__PURE__ */ React.createElement("span", { className: "inline-block text-label1normal-regular text-neutral" }, label), option && /* @__PURE__ */ React.createElement(
    "span",
    {
      className: classNames(
        "inline-block text-caption1-regular",
        option === "\uC120\uD0DD" ? "text-high-emphasis" : "text-danger"
      )
    },
    `(${option})`
  ));
}

// src/components/ui/input/input-field.tsx
function InputField({
  label,
  labelOption,
  type,
  value,
  valueType,
  placeholder,
  minLength,
  maxLength,
  disabled,
  description,
  errorMessage,
  displayModifier,
  className,
  inputClassName,
  charFilter,
  onChange
}) {
  const [filteredLength, setFilteredLength] = useState11(0);
  const lengthInfo = maxLength ? `(${filteredLength}/${maxLength})` : void 0;
  return /* @__PURE__ */ React.createElement("div", { className: classNames("inline-flex flex-col gap-1", className) }, /* @__PURE__ */ React.createElement(InputLabel, { label, option: labelOption }), /* @__PURE__ */ React.createElement(
    Input,
    {
      type,
      value,
      valueType,
      placeholder,
      minLength,
      maxLength,
      disabled,
      displayModifier,
      charFilter,
      onChange,
      onValueLength: setFilteredLength,
      className: inputClassName
    }
  ), !errorMessage && description && /* @__PURE__ */ React.createElement(InputDescription, { description, option: lengthInfo }), errorMessage && /* @__PURE__ */ React.createElement(InputErrorMessage, { errorMessage, option: lengthInfo }));
}

// src/components/ui/input/textarea.tsx
function Textarea({
  value,
  placeholder = "\uC785\uB825\uD574\uC8FC\uC138\uC694",
  minLength,
  maxLength,
  disabled,
  className,
  charFilter,
  onChange,
  onValueLength
}) {
  const filterValue = (value2) => {
    if (!charFilter) return value2;
    if (typeof charFilter === "function") {
      return charFilter(value2);
    }
    if (charFilter instanceof RegExp) {
      return value2.replace(charFilter, "");
    }
    return value2.replace(new RegExp(charFilter, "g"), "");
  };
  const handleChange = (e) => {
    let newValue = e.target.value;
    newValue = filterValue(newValue);
    onValueLength == null ? void 0 : onValueLength(newValue.length);
    onChange == null ? void 0 : onChange({ ...e, target: { ...e.target, value: newValue } });
  };
  return /* @__PURE__ */ React.createElement(
    "textarea",
    {
      className: classNames(
        `min-h-[9.125rem] min-w-[16.5rem] appearance-none rounded-md border
        border-taling-gray-300 bg-taling-white px-3 py-2.5 text-label1normal-regular
        text-strong placeholder:text-label1normal-regular placeholder:text-low-emphasis
        focus:border-primary focus:ring-1 focus:ring-inset focus:ring-primary
        disabled:bg-taling-gray-200 disabled:text-disabled`,
        className
      ),
      value,
      placeholder,
      minLength,
      maxLength,
      disabled,
      onChange: handleChange
    }
  );
}

// src/components/ui/input/textarea-field.tsx
import { useState as useState12 } from "react";
function TextareaField({
  label,
  labelOption,
  value,
  placeholder,
  minLength,
  maxLength,
  disabled,
  description,
  errorMessage,
  className,
  onChange
}) {
  const [filteredLength, setFilteredLength] = useState12(0);
  const lengthInfo = maxLength ? `(${filteredLength}/${maxLength})` : void 0;
  return /* @__PURE__ */ React.createElement("div", { className: "inline-flex w-fit flex-col gap-1" }, /* @__PURE__ */ React.createElement(InputLabel, { label, option: labelOption }), /* @__PURE__ */ React.createElement(
    Textarea,
    {
      value,
      placeholder,
      minLength,
      maxLength,
      disabled,
      onChange,
      onValueLength: setFilteredLength,
      className
    }
  ), !errorMessage && description && /* @__PURE__ */ React.createElement(InputDescription, { description, option: lengthInfo }), errorMessage && /* @__PURE__ */ React.createElement(InputErrorMessage, { errorMessage, option: lengthInfo }));
}

// src/components/ui/modal/index.tsx
import {
  Dialog as HeadlessUiModal,
  DialogPanel as ModalPanel,
  DialogTitle as ModalTitle
} from "@headlessui/react";

// src/components/ui/text-button.tsx
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";
import * as React3 from "react";
var iconContainerVariants2 = cva2("inline-flex items-center justify-center", {
  variants: {
    size: {
      xs: "h-4 w-4",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-6 w-6"
    }
  },
  defaultVariants: {
    size: "lg"
  }
});
var textButtonVariants = cva2(
  [
    "inline-flex items-center justify-center gap-1 rounded-lg transition-colors",
    "disabled:pointer-events-none"
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-taling-white text-primary [&]:text-primary",
          "disabled:text-disabled",
          "hover:bg-taling-gray-900/5",
          "active:bg-taling-gray-900/10"
        ],
        secondary: [
          "bg-taling-white text-high-emphasis [&]:text-high-emphasis",
          "disabled:text-disabled",
          "hover:bg-taling-gray-900/5",
          "active:bg-taling-gray-900/10"
        ],
        underlined: [
          "bg-taling-white text-high-emphasis [&]:text-high-emphasis underline underline-offset-1",
          "disabled:text-disabled",
          "hover:bg-taling-gray-900/5",
          "active:bg-taling-gray-900/10"
        ]
      },
      size: {
        xs: "h-6 min-w-[2.5rem] rounded-lg px-1 py-1 text-caption1-semibold",
        sm: "h-7 min-w-[2.5rem] rounded-lg px-1 py-1 text-label1normal-semibold",
        md: "h-8 min-w-[2.5rem] rounded-lg px-1 py-1 text-body2normal-semibold",
        lg: "h-8 min-w-[2.5rem] rounded-lg px-1 py-1 text-body2normal-regular"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "lg"
    }
  }
);
var TextButton = React3.forwardRef(
  ({
    className,
    variant,
    size,
    asChild = false,
    leftIcon,
    rightIcon,
    children,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot2 : "button";
    return /* @__PURE__ */ React3.createElement(
      Comp,
      {
        className: cn(textButtonVariants({ variant, size, className })),
        ref,
        ...props
      },
      leftIcon && /* @__PURE__ */ React3.createElement("div", { className: cn(iconContainerVariants2({ size })) }, leftIcon),
      children,
      rightIcon && /* @__PURE__ */ React3.createElement("div", { className: cn(iconContainerVariants2({ size })) }, rightIcon)
    );
  }
);
TextButton.displayName = "TextButton";

// src/components/ui/modal/modal-buttons.tsx
function ModalButtons({
  cancelLabel,
  confirmLabel,
  modalType,
  leftIcon,
  rightIcon,
  onCancel,
  onConfirm,
  onPromiseCancel,
  onPromiseConfirm
}) {
  if (modalType === "oneButton") {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, !onPromiseConfirm && /* @__PURE__ */ React.createElement(
      Button,
      {
        size: "lg",
        variant: "solidPrimary",
        className: "w-full",
        onClick: () => {
          onConfirm == null ? void 0 : onConfirm();
        }
      },
      confirmLabel
    ), onPromiseConfirm && /* @__PURE__ */ React.createElement(
      WaitingButton,
      {
        className: "w-full",
        render: {
          normal: /* @__PURE__ */ React.createElement(Button, { size: "lg", variant: "solidPrimary", className: "w-full" }, confirmLabel),
          waiting: /* @__PURE__ */ React.createElement(Button, { size: "lg", variant: "solidPrimary", className: "w-full" }, /* @__PURE__ */ React.createElement(LoadingSpinner, { className: "w-4 h-4 animate-spin" }))
        },
        onClick: async () => {
          await onPromiseConfirm();
          return false;
        }
      }
    ));
  }
  if (modalType === "secondary") {
    return /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 self-end" }, !onPromiseCancel && /* @__PURE__ */ React.createElement(
      TextButton,
      {
        size: "lg",
        variant: "secondary",
        leftIcon,
        rightIcon,
        onClick: () => {
          onCancel == null ? void 0 : onCancel();
        }
      },
      cancelLabel
    ), onPromiseCancel && /* @__PURE__ */ React.createElement(
      WaitingButton,
      {
        render: {
          normal: /* @__PURE__ */ React.createElement(
            TextButton,
            {
              size: "lg",
              variant: "secondary",
              leftIcon,
              rightIcon
            },
            cancelLabel
          ),
          waiting: /* @__PURE__ */ React.createElement(TextButton, { size: "lg", variant: "secondary" }, /* @__PURE__ */ React.createElement(LoadingSpinner, { className: "w-4 h-4 animate-spin" }))
        },
        onClick: async () => {
          await onPromiseCancel();
          return false;
        }
      }
    ), !onPromiseConfirm && /* @__PURE__ */ React.createElement(
      Button,
      {
        size: "sm",
        variant: "solidPrimary",
        onClick: () => {
          onConfirm == null ? void 0 : onConfirm();
        }
      },
      confirmLabel
    ), onPromiseConfirm && /* @__PURE__ */ React.createElement(
      WaitingButton,
      {
        render: {
          normal: /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "solidPrimary" }, confirmLabel),
          waiting: /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "solidPrimary" }, /* @__PURE__ */ React.createElement(LoadingSpinner, { className: "w-4 h-4 animate-spin" }))
        },
        onClick: async () => {
          await onPromiseConfirm();
          return false;
        }
      }
    ));
  }
  return /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, !onPromiseCancel && /* @__PURE__ */ React.createElement(
    Button,
    {
      size: "lg",
      variant: "outlinedSecondary",
      className: "w-full",
      onClick: () => {
        onCancel == null ? void 0 : onCancel();
      }
    },
    cancelLabel
  ), onPromiseCancel && /* @__PURE__ */ React.createElement(
    WaitingButton,
    {
      className: "w-full",
      render: {
        normal: /* @__PURE__ */ React.createElement(
          Button,
          {
            size: "lg",
            variant: "outlinedSecondary",
            className: "w-full"
          },
          cancelLabel
        ),
        waiting: /* @__PURE__ */ React.createElement(
          Button,
          {
            size: "lg",
            variant: "outlinedSecondary",
            className: "w-full"
          },
          /* @__PURE__ */ React.createElement(LoadingSpinner, { className: "w-4 h-4 animate-spin" })
        )
      },
      onClick: async () => {
        await onPromiseCancel();
        return false;
      }
    }
  ), !onPromiseConfirm && /* @__PURE__ */ React.createElement(
    Button,
    {
      size: "lg",
      variant: "solidPrimary",
      className: "w-full",
      onClick: () => {
        onConfirm == null ? void 0 : onConfirm();
      }
    },
    confirmLabel
  ), onPromiseConfirm && /* @__PURE__ */ React.createElement(
    WaitingButton,
    {
      className: "w-full",
      render: {
        normal: /* @__PURE__ */ React.createElement(Button, { size: "lg", variant: "solidPrimary", className: "w-full" }, confirmLabel),
        waiting: /* @__PURE__ */ React.createElement(Button, { size: "lg", variant: "solidPrimary", className: "w-full" }, /* @__PURE__ */ React.createElement(LoadingSpinner, { className: "w-4 h-4 animate-spin" }))
      },
      onClick: async () => {
        await onPromiseConfirm();
        return false;
      }
    }
  ));
}

// src/components/ui/modal/index.tsx
var getMaxWidthClass = (maxWidth) => {
  switch (maxWidth) {
    case "sm":
      return "max-w-sm";
    case "md":
      return "max-w-md";
    case "lg":
      return "max-w-lg";
    case "xl":
      return "max-w-xl";
    case "2xl":
      return "max-w-2xl";
    case "full":
      return "max-w-full";
    default:
      return "";
  }
};
function Modal({
  title,
  subTitle,
  children,
  cancelLabel = "\uCDE8\uC18C",
  confirmLabel = "\uD655\uC778",
  leftIcon,
  rightIcon,
  isBackDropClickable = true,
  isOpen,
  modalType = "twoButton",
  maxWidth = null,
  onPromiseCancel,
  onPromiseConfirm,
  onCancel,
  onConfirm,
  setIsOpen
}) {
  return /* @__PURE__ */ React.createElement(
    HeadlessUiModal,
    {
      open: isOpen,
      onClose: () => {
        isBackDropClickable && (setIsOpen == null ? void 0 : setIsOpen(false));
      },
      transition: true,
      className: classNames(
        `fixed inset-0 z-[999] flex w-screen items-center justify-center
        bg-taling-gray-900/70`,
        "transition duration-300 ease-out",
        "data-[closed]:opacity-0"
      )
    },
    /* @__PURE__ */ React.createElement(
      ModalPanel,
      {
        className: classNames(
          `flex min-w-[18.4375rem] flex-col gap-5 rounded-2xl bg-taling-white px-8 py-7
          shadow-strong`,
          getMaxWidthClass(maxWidth)
        )
      },
      /* @__PURE__ */ React.createElement(ModalTitle, { className: "flex flex-col gap-1" }, /* @__PURE__ */ React.createElement("span", { className: "text-heading3-semibold text-neutral" }, title), /* @__PURE__ */ React.createElement("span", { className: "text-label1reading-regular text-neutral" }, subTitle)),
      children && /* @__PURE__ */ React.createElement("section", null, children),
      /* @__PURE__ */ React.createElement(
        ModalButtons,
        {
          cancelLabel,
          confirmLabel,
          modalType,
          leftIcon,
          rightIcon,
          onCancel,
          onConfirm,
          onPromiseCancel,
          onPromiseConfirm
        }
      )
    )
  );
}

// src/components/ui/popover.tsx
import * as PopoverPrimitive from "@radix-ui/react-popover";
import React4 from "react";
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React4.forwardRef(
  ({
    children,
    ...props
  }, forwardedRef) => /* @__PURE__ */ React4.createElement(PopoverPrimitive.Portal, null, /* @__PURE__ */ React4.createElement(
    PopoverPrimitive.Content,
    {
      sideOffset: 5,
      ...props,
      className: cn(
        "data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade w-[260px] rounded bg-white p-5 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)]",
        props.className
      ),
      ref: forwardedRef
    },
    children,
    /* @__PURE__ */ React4.createElement(PopoverPrimitive.Arrow, { className: "fill-white" })
  ))
);
PopoverContent.displayName = "PopoverContent";

// src/components/ui/radio-button.tsx
var sizeMap2 = {
  normal: {
    radio: "w-5 h-5",
    label: "text-label1normal-regular"
  },
  small: {
    radio: "w-4 h-4",
    label: "text-label2-regular"
  }
};
function RadioButton2({
  size = "normal",
  name,
  className,
  checked,
  value,
  disabled = false,
  label,
  onChange
}) {
  const radio = /* @__PURE__ */ React.createElement(
    "input",
    {
      name,
      checked,
      value,
      onChange: (e) => onChange == null ? void 0 : onChange(e.target.checked),
      disabled,
      className: classNames(
        sizeMap2[size].radio,
        "cursor-pointer border-taling-gray-300 text-primary",
        "active:ring-2 active:ring-primary active:ring-offset-1",
        `disabled:cursor-default disabled:opacity-30 disabled:ring-0
        disabled:ring-offset-0`,
        "focus:outline-none focus:ring-0 focus:ring-offset-0",
        "focus-visible:ring-0 focus-visible:ring-offset-0",
        "checked:focus:ring-0 checked:focus:ring-offset-0",
        "appearance-none",
        className
      ),
      type: "radio"
    }
  );
  if (!label) {
    return radio;
  }
  return /* @__PURE__ */ React.createElement(
    "label",
    {
      className: classNames(
        "inline-flex h-fit w-fit items-center gap-2",
        disabled ? "cursor-default" : "cursor-pointer"
      )
    },
    radio,
    /* @__PURE__ */ React.createElement(
      "span",
      {
        className: classNames(
          sizeMap2[size].label,
          "text-taling-black",
          disabled ? "opacity-30" : ""
        )
      },
      label
    )
  );
}

// src/components/ui/resizable.tsx
import { DragHandleDots2Icon } from "@radix-ui/react-icons";
import * as ResizablePrimitive from "react-resizable-panels";
var ResizablePanelGroup = ({
  className,
  ...props
}) => /* @__PURE__ */ React.createElement(
  ResizablePrimitive.PanelGroup,
  {
    className: cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    ),
    ...props
  }
);
var ResizablePanel = ResizablePrimitive.Panel;
var ResizableHandle = ({
  withHandle,
  className,
  ...props
}) => /* @__PURE__ */ React.createElement(
  ResizablePrimitive.PanelResizeHandle,
  {
    className: cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90    data-[resize-handle-state=hover]:border-taling-gray-400 data-[resize-handle-state=hover]:border-l-2  data-[resize-handle-state=drag]:border-l-2 data-[resize-handle-state=drag]:border-taling-gray-400 ",
      className
    ),
    ...props
  },
  withHandle && /* @__PURE__ */ React.createElement("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border" }, /* @__PURE__ */ React.createElement(DragHandleDots2Icon, { className: "h-2.5 w-2.5" }))
);

// src/components/ui/switch.tsx
import { useState as useState13 } from "react";
var sizeMap3 = {
  normal: {
    wrapper: "w-[2.8125rem] h-[1.625rem]",
    thumb: {
      size: "w-5 h-5",
      spacing: "top-[0.2rem] left-1",
      translation: "translate-x-[1.1rem]"
    }
  },
  small: {
    wrapper: "w-[2.25rem] h-[1.375rem]",
    thumb: {
      size: "w-4 h-4",
      spacing: "top-[0.2rem] left-[0.2rem]",
      translation: "translate-x-[0.9rem]"
    }
  }
};
function Switch({
  size = "normal",
  disabled = false,
  className,
  onChange
}) {
  const [isActive, setIsActive] = useState13(false);
  const handleToggle = () => {
    setIsActive(!isActive);
    if (onChange) {
      onChange(!isActive);
    }
  };
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      disabled,
      onClick: handleToggle,
      className: classNames(
        "relative rounded-full",
        "transition-colors duration-200 ease-in-out",
        isActive ? "bg-primary" : "bg-taling-gray-400",
        sizeMap3[size].wrapper,
        "disabled:opacity-40",
        className
      )
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classNames(
          "absolute bg-white rounded-full shadow-normal",
          "transition-transform duration-200 ease-in-out",
          sizeMap3[size].thumb.size,
          sizeMap3[size].thumb.spacing,
          isActive ? sizeMap3[size].thumb.translation : "translate-x-0"
        )
      }
    )
  );
}

// src/components/ui/toast.tsx
import { Cross2Icon } from "@radix-ui/react-icons";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva as cva3 } from "class-variance-authority";
import * as React5 from "react";
var ToastProvider = ToastPrimitives.Provider;
var ToastViewport = React5.forwardRef(({ className, position, ...props }, ref) => {
  const positionClass = {
    "top-right": "top-20 right-0 w-full",
    "top-left": "top-20 left-0 w-full",
    "bottom-right": "bottom-4 right-0 w-full",
    "bottom-left": "bottom-4 left-0 w-full",
    default: "left-1/2 -translate-x-1/2 right-0 bottom-[80px] top-auto h-fit w-full md:top-[140px]"
  }[position || "default"];
  console.log(position);
  return /* @__PURE__ */ React5.createElement(
    ToastPrimitives.Viewport,
    {
      ref,
      className: cn(
        "fixed z-[100] flex max-w-[420px] flex-col p-4 transition-transform",
        positionClass,
        className
      ),
      ...props
    }
  );
});
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = cva3(
  " bg-opacity-70 backdrop-blur-sm group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md  p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: " bg-taling-gray-900  text-taling-white  ",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Toast = React5.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ React5.createElement(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React5.createElement(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "focus:ring-ring group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-taling-gray-900/60 focus:outline-none focus:ring-1 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-taling-gray-600/40",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React5.createElement(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-1 top-1 rounded-md p-1 text-taling-white/50 opacity-0 transition-opacity hover:text-taling-white focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props
  },
  /* @__PURE__ */ React5.createElement(Cross2Icon, { className: "h-4 w-4" })
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React5.createElement(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold [&+div]:text-xs", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React5.createElement(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-center text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// src/components/ui/use-toast.ts
import * as React6 from "react";
var TOAST_LIMIT = 1;
var TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map();
var addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
var reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast3) => {
          addToRemoveQueue(toast3.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
var listeners = [];
var memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  var _a2, _b;
  const id = genId();
  const position = (_a2 = props.position) != null ? _a2 : "default";
  const update = (props2) => {
    var _a3;
    return dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props2, id, duration: (_a3 = props2 == null ? void 0 : props2.duration) != null ? _a3 : 3e3, position }
    });
  };
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      duration: (_b = props == null ? void 0 : props.duration) != null ? _b : 3e3,
      open: true,
      position,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React6.useState(memoryState);
  React6.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// src/components/ui/toast/toast.tsx
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon
} from "@heroicons/react/20/solid";
import { toast as hotToast } from "react-hot-toast";
var toastStyles = {
  default: {
    icon: "w-6 h-6 text-success"
  },
  warning: {
    icon: "w-6 h-6 text-caution"
  },
  error: {
    icon: "w-6 h-6 text-danger"
  }
};
var toastIcons = {
  default: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: XCircleIcon
};
var MOBILE_BREAKPOINT = 768;
var getDefaultPosition = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth < MOBILE_BREAKPOINT ? "bottom-center" : "top-right";
  }
  return "top-right";
};
var CustomToast = ({
  type = "default",
  description,
  t,
  position
}) => {
  const Icon = toastIcons[type];
  const isBottom = position == null ? void 0 : position.includes("bottom");
  const isLeft = position == null ? void 0 : position.includes("left");
  const isRight = position == null ? void 0 : position.includes("right");
  const getAnimationClass = () => {
    if (isBottom) return "animate-slide-in-bottom";
    if (isLeft) return "animate-slide-in-left";
    if (isRight) return "animate-slide-in-right";
    return "animate-slide-in-right";
  };
  const handleClick = () => {
    hotToast.remove(t.id);
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classNames(
        "inline-flex gap-2 justify-center items-center min-h-[3rem] pl-4 pr-10 py-3 rounded-[0.625rem] bg-taling-gray-900 bg-opacity-80 text-taling-white shadow-emphasize backdrop-blur-md cursor-pointer",
        "min-w-[10rem] max-w-[90vw] md:max-w-[25rem]",
        "hover:bg-opacity-85",
        t.visible ? getAnimationClass() : ""
      ),
      onClick: handleClick
    },
    /* @__PURE__ */ React.createElement(Icon, { className: toastStyles[type].icon }),
    description && /* @__PURE__ */ React.createElement("div", { className: "text-body2normal-regular text-white" }, description)
  );
};
var toast2 = {
  show: ({
    description,
    duration = 4e3,
    position,
    type = "default"
  }) => {
    const toastPosition = position || getDefaultPosition();
    return hotToast.custom(
      (t) => /* @__PURE__ */ React.createElement(
        CustomToast,
        {
          type,
          description,
          t,
          position: toastPosition
        }
      ),
      {
        duration,
        position: toastPosition
      }
    );
  },
  warning: (options) => {
    return toast2.show({ ...options, type: "warning" });
  },
  error: (options) => {
    return toast2.show({ ...options, type: "error" });
  }
};

// src/components/ui/toast/toaster.tsx
import { Toaster as HotToaster } from "react-hot-toast";
var Toaster = () => /* @__PURE__ */ React.createElement(HotToaster, null);

// src/components/ui/toast/snackbar.tsx
import { toast as hotToast2 } from "react-hot-toast";
var CustomSnackbar = ({
  description,
  t,
  label = "\uBC14\uB85C\uAC00\uAE30",
  onClick
}) => {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: classNames(
        "flex items-center justify-between px-4 py-3 rounded-[0.625rem] bg-taling-gray-900 bg-opacity-80 shadow-emphasize backdrop-blur-md",
        "min-w-[20rem] max-w-[90vw] md:max-w-[25rem]",
        t.visible ? "animate-slide-in-bottom" : ""
      )
    },
    /* @__PURE__ */ React.createElement("div", { className: "text-taling-white text-body1normal-regular" }, description),
    /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick,
        className: "flex-shrink-0 ml-3 text-taling-pink-200 text-label1normal-semibold"
      },
      label
    )
  );
};
var snackbar = {
  show: ({ description, duration = 4e3, label, onClick }) => {
    return hotToast2.custom(
      (t) => /* @__PURE__ */ React.createElement(
        CustomSnackbar,
        {
          description,
          t,
          label,
          onClick
        }
      ),
      {
        duration,
        position: "bottom-center"
      }
    );
  }
};

// src/constants/app-cookie/index.ts
var AppCookieConstants = {
  isApp: "taling-app",
  // true / false
  appVersion: "taling-app-version",
  // eg. 4.0.40
  appBuildNum: "taling-app-build-num",
  // eg. 436
  // iOS: "iOS" on newer iOS devices "iPhone OS" on older devices (including older iPad models), "iPadOS" for iPads using iPadOS 15.0 or higher.
  // Android: "Android"
  appPlatform: "taling-app-platform",
  appUserAuth: "taling-app-user-auth",
  crossDomainUserAuth: "taling-crossdomain-user-auth",
  crossDomainTalingPixelSessionId: "taling-pixel:sessionId"
};
var app_cookie_default = AppCookieConstants;

// src/constants/app-download-url/index.ts
var APP_DOWNLOAD_URLS = {
  Android: "https://play.google.com/store/apps/details?id=com.taling",
  iOS: "https://apps.apple.com/kr/app/%ED%83%88%EC%9E%89-%EB%B0%B0%EC%9B%80%EC%9D%84-%EC%9E%AC%EB%B0%8C%EA%B2%8C/id1153218962"
};

// src/constants/application-payment-type/index.ts
var ApplicationPaymentType = /* @__PURE__ */ ((ApplicationPaymentType2) => {
  ApplicationPaymentType2[ApplicationPaymentType2["CARD"] = 1] = "CARD";
  ApplicationPaymentType2[ApplicationPaymentType2["VIRTUAL_ACCOUNT"] = 2] = "VIRTUAL_ACCOUNT";
  return ApplicationPaymentType2;
})(ApplicationPaymentType || {});

// src/constants/application-refund-status/index.ts
var ApplicationRefundStatus = /* @__PURE__ */ ((ApplicationRefundStatus2) => {
  ApplicationRefundStatus2[ApplicationRefundStatus2["REQUESTED"] = 0] = "REQUESTED";
  ApplicationRefundStatus2[ApplicationRefundStatus2["REFUNDED"] = 1] = "REFUNDED";
  return ApplicationRefundStatus2;
})(ApplicationRefundStatus || {});

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

// src/constants/application-tutor-status/index.ts
var ApplicationTutorStatus = /* @__PURE__ */ ((ApplicationTutorStatus2) => {
  ApplicationTutorStatus2[ApplicationTutorStatus2["REQUESTED"] = 0] = "REQUESTED";
  ApplicationTutorStatus2[ApplicationTutorStatus2["APPROVED"] = 1] = "APPROVED";
  ApplicationTutorStatus2[ApplicationTutorStatus2["REJECTED"] = 2] = "REJECTED";
  return ApplicationTutorStatus2;
})(ApplicationTutorStatus || {});

// src/constants/talent-category/index.ts
var TalentCategory = /* @__PURE__ */ ((TalentCategory2) => {
  TalentCategory2[TalentCategory2["P2P_OFFLINE"] = 1] = "P2P_OFFLINE";
  TalentCategory2[TalentCategory2["P2P_ONLINE"] = 2] = "P2P_ONLINE";
  TalentCategory2[TalentCategory2["P2P_VIDEO"] = 3] = "P2P_VIDEO";
  TalentCategory2[TalentCategory2["P2P_EBOOK"] = 4] = "P2P_EBOOK";
  TalentCategory2[TalentCategory2["VOD"] = 5] = "VOD";
  TalentCategory2[TalentCategory2["SUBSCRIPTION"] = 6] = "SUBSCRIPTION";
  return TalentCategory2;
})(TalentCategory || {});
var TalentSpecialRegion = /* @__PURE__ */ ((TalentSpecialRegion2) => {
  TalentSpecialRegion2[TalentSpecialRegion2["ONLINE"] = 64] = "ONLINE";
  TalentSpecialRegion2[TalentSpecialRegion2["OFFLINE"] = 65] = "OFFLINE";
  return TalentSpecialRegion2;
})(TalentSpecialRegion || {});

// src/constants/talent-status/index.ts
var TalentStatusEnum = /* @__PURE__ */ ((TalentStatusEnum2) => {
  TalentStatusEnum2[TalentStatusEnum2["DELETED"] = -1] = "DELETED";
  TalentStatusEnum2[TalentStatusEnum2["DRAFT"] = 0] = "DRAFT";
  TalentStatusEnum2[TalentStatusEnum2["REJECTED"] = 1] = "REJECTED";
  TalentStatusEnum2[TalentStatusEnum2["OPENED"] = 2] = "OPENED";
  TalentStatusEnum2[TalentStatusEnum2["SUSPENDED"] = 3] = "SUSPENDED";
  TalentStatusEnum2[TalentStatusEnum2["WAITING_FOR_TERMS_AGREEMENT"] = 8] = "WAITING_FOR_TERMS_AGREEMENT";
  TalentStatusEnum2[TalentStatusEnum2["WAITING_FOR_REVIEW"] = 9] = "WAITING_FOR_REVIEW";
  return TalentStatusEnum2;
})(TalentStatusEnum || {});

// src/constants/talent-type/index.ts
var ONE_ON_ONE_CLASS = [0, 2];
var GROUP_CLASS = [1, 3];
var ONE_DAY_CLASS = [2, 3];
var MULTI_DAY_CLASS = [0, 1];

// src/constants/vodPayment-isRefund/index.ts
var VodPaymentIsRefund = /* @__PURE__ */ ((VodPaymentIsRefund2) => {
  VodPaymentIsRefund2[VodPaymentIsRefund2["REQUESTED"] = 0] = "REQUESTED";
  VodPaymentIsRefund2[VodPaymentIsRefund2["REFUNDED"] = 1] = "REFUNDED";
  return VodPaymentIsRefund2;
})(VodPaymentIsRefund || {});

// src/constants/vodPayment-payment-type/index.ts
var VodPaymentPaymentType = /* @__PURE__ */ ((VodPaymentPaymentType2) => {
  VodPaymentPaymentType2[VodPaymentPaymentType2["VIRTUAL_ACCOUNT"] = 0] = "VIRTUAL_ACCOUNT";
  VodPaymentPaymentType2[VodPaymentPaymentType2["CARD"] = 1] = "CARD";
  return VodPaymentPaymentType2;
})(VodPaymentPaymentType || {});

// src/constants/vodPayment-status/index.ts
var VodPaymentStatus = /* @__PURE__ */ ((VodPaymentStatus2) => {
  VodPaymentStatus2[VodPaymentStatus2["REQUESTED"] = 0] = "REQUESTED";
  VodPaymentStatus2[VodPaymentStatus2["PAYMENT_COMPLETED"] = 1] = "PAYMENT_COMPLETED";
  return VodPaymentStatus2;
})(VodPaymentStatus || {});

// src/hooks/cross-domain-cookies/index.ts
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

// src/util/check-is-client/index.ts
function assertRunningAsClient() {
  if (typeof document === "undefined") {
    throw new Error("\u{1F6D1} document is not defined! \uC11C\uBC84\uC0AC\uC774\uB4DC\uC5D0\uC11C \uD638\uCD9C?");
  }
}

// src/hooks/cross-domain-cookies/index.ts
var DOMAIN = "taling.me";
function useCrossDomainCookies() {
  function findCookie(key) {
    assertRunningAsClient();
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find((cookie2) => cookie2.startsWith(key));
    return cookie;
  }
  const setCrossDomainAuthCookie = (accessToken) => {
    assertRunningAsClient();
    const key = app_cookie_default.crossDomainUserAuth;
    document.cookie = `${key}=${accessToken}; path=/; domain=${DOMAIN};`;
  };
  const clearCrossDomainAuthCookie = () => {
    assertRunningAsClient();
    const key = app_cookie_default.crossDomainUserAuth;
    document.cookie = `${key}=; path=/; domain=${DOMAIN}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  };
  const getCrossDomainAuthCookie = () => {
    assertRunningAsClient();
    const cookie = findCookie(app_cookie_default.crossDomainUserAuth);
    if (!cookie) return null;
    const [, value] = cookie.split("=");
    return value;
  };
  const getOrCreateTalingPixelSessionId = () => {
    assertRunningAsClient();
    const expireDate = dayjs().add(30, "day").toDate().toUTCString();
    const key = app_cookie_default.crossDomainTalingPixelSessionId;
    const cookie = findCookie(key);
    if (!cookie) {
      const sessionId = uuidv4();
      document.cookie = `${key}=${sessionId}; path=/; domain=${DOMAIN}; expires=${expireDate};`;
      return sessionId;
    }
    const [, value] = cookie.split("=");
    return value;
  };
  return {
    /**
     * 크로스 도메인 인증 용 쿠키 설정
     * @param accessToken
     */
    setCrossDomainAuthCookie,
    /**
     * 크로스 도메인 인증 용 쿠키 삭제
     */
    clearCrossDomainAuthCookie,
    /**
     * 크로스 도메인 인증 용 쿠키 조회
     */
    getCrossDomainAuthCookie,
    /**
     * 탈잉 픽셀용 세션 쿠키 가져오기. 없다면 생성합니다.
     * @returns string
     */
    getOrCreateTalingPixelSessionId
  };
}

// src/hooks/naver-pixel/index.ts
var NaverPixelConversionType = /* @__PURE__ */ ((NaverPixelConversionType2) => {
  NaverPixelConversionType2["PURCHASE"] = "1";
  NaverPixelConversionType2["SIGNUP"] = "2";
  NaverPixelConversionType2["ADD_TO_CART"] = "3";
  NaverPixelConversionType2["APPLY"] = "4";
  NaverPixelConversionType2["OTHER"] = "5";
  return NaverPixelConversionType2;
})(NaverPixelConversionType || {});
function useNaverPixel() {
  function sendConversion(value) {
    const w = window;
    const _nasa = {};
    const wcs = w.wcs;
    const wcs_add = w.wcs_add;
    const wcs_do = w.wcs_do;
    if (wcs) {
      _nasa["cnv"] = wcs.cnv(
        "1" /* PURCHASE */.valueOf(),
        `${value}`
      );
      if (wcs_add) {
        wcs_add["wa"] = NAVER_PIXEL_ID;
      }
      wcs.inflow(NAVER_INFLOW_DOMAIN);
      wcs_do == null ? void 0 : wcs_do(_nasa);
      console.log(`\u{1F340} naverPixelStore: sendConversion(${value})`);
    }
  }
  function sendSignUpFinished() {
    const w = window;
    const _nasa = {};
    const wcs = w.wcs;
    const wcs_add = w.wcs_add;
    const wcs_do = w.wcs_do;
    if (wcs) {
      _nasa["cnv"] = wcs.cnv("2" /* SIGNUP */.valueOf(), "0");
      if (wcs_add) {
        wcs_add["wa"] = NAVER_PIXEL_ID;
      }
      wcs.inflow(NAVER_INFLOW_DOMAIN);
      wcs_do == null ? void 0 : wcs_do(_nasa);
      console.log(`\u{1F340} naverPixelStore: sendSignUp()`);
    }
  }
  function sendPageView() {
    const w = window;
    const _nasa = {};
    const wcs = w.wcs;
    const wcs_add = w.wcs_add;
    const wcs_do = w.wcs_do;
    if (wcs) {
      if (wcs_add) {
        wcs_add["wa"] = NAVER_PIXEL_ID;
      }
      wcs.inflow(NAVER_INFLOW_DOMAIN);
      wcs_do == null ? void 0 : wcs_do(_nasa);
      console.log(`\u{1F340} naverPixelStore: sendPageView()`);
    }
  }
  return {
    sendConversion,
    sendSignUpFinished,
    sendPageView
  };
}

// src/hooks/taling-pixel/index.ts
import qs from "qs";
function useTalingPixel() {
  const talingPixelUrl = process.env.NEXT_PUBLIC_TALING_PIXEL_URL;
  const { getOrCreateTalingPixelSessionId } = useCrossDomainCookies();
  function track({
    eventName,
    talentId,
    userId,
    pathname,
    mktUtm
  }) {
    try {
      const sessionId = getOrCreateTalingPixelSessionId();
      const queryStr = qs.stringify(
        {
          ev: eventName,
          tId: talentId,
          uId: userId,
          sId: sessionId,
          p: pathname,
          mu: mktUtm
        },
        {
          skipNulls: true
        }
      );
      const trackingUrl = `${talingPixelUrl}/pixel.gif?${queryStr}`;
      const img = new Image(1, 1);
      img.src = trackingUrl;
      img.alt = "Taling Pixel";
      img.style.display = "none";
      document.body.appendChild(img);
    } catch (error) {
      console.log("[TALING][PIXEL] error:", error);
      return;
    }
  }
  return {
    /**
     * 탈잉 픽셀 이벤트 트래킹
     */
    track
  };
}

// src/hooks/use-in-visible/index.ts
import { useEffect as useEffect9, useState as useState15 } from "react";
function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState15(null);
  const [isIntersectingStart, setIntersectingStart] = useState15(
    null
  );
  useEffect9(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      setIntersectingStart(entry.boundingClientRect.top > 0);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return {
    isIntersecting,
    isIntersectingStart
  };
}

// src/util/bytes-format/index.ts
function formatBytes(argBytes, decimals = 2) {
  const bytes = Number(argBytes);
  if (isNaN(bytes)) return "";
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + "" + sizes[i];
}

// src/util/numbers/index.ts
var Numbers = {
  isInt,
  isFloat
};
function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}
function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}
var numbers_default = Numbers;

// src/util/strings/index.ts
function kebabCaseToCamelCase(input) {
  return input.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}
function filterKspayForbiddenChar(input) {
  return input.replace(/[^가-힣a-zA-Z0-9\s]/g, "");
}

// src/util/talent-schedule/index.ts
var TalentSchedule = {
  /**
   * 클래스가 오프라인 지역인지 검사
   * @param talent
   * @returns
   */
  isOfflineRegion: (schedule) => {
    return !((schedule == null ? void 0 : schedule.region) === 64 /* ONLINE */);
  }
};
var talent_schedule_default = TalentSchedule;

// src/util/talent-type/index.ts
var TalentType = {
  /**
   * Talent가 전자책 클래스인지 검사
   * @param talent
   * @returns boolean
   */
  isEbook: (talent) => {
    return (talent == null ? void 0 : talent.mCategory) === 4 /* P2P_EBOOK */;
  },
  /**
   * Talent가 p2p 인지 검사
   * @param talent
   * @returns boolean
   */
  isP2p: (talent) => {
    return (talent == null ? void 0 : talent.mCategory) === 1 /* P2P_OFFLINE */ || (talent == null ? void 0 : talent.mCategory) === 2 /* P2P_ONLINE */ || (talent == null ? void 0 : talent.mCategory) === 3 /* P2P_VIDEO */;
  },
  /**
   * Talent가 VOD인지 검사
   * @param talent
   * @returns boolean
   */
  isVod: (talent) => {
    return (talent == null ? void 0 : talent.mCategory) === 5 /* VOD */ || (talent == null ? void 0 : talent.isVod) === 1;
  },
  /**
   * Talent가 멤버십 클래스인지 검사
   * @param talent
   * @returns boolean
   */
  isSubscription: (talent) => {
    return (talent == null ? void 0 : talent.mCategory) === 6 /* SUBSCRIPTION */;
  },
  /**
   * Talent가 원데이 클래스인지 검사
   * @param talent
   * @returns
   */
  isOneDayClass: (talent) => {
    return (talent == null ? void 0 : talent.totalTimes) === 1;
  },
  /**
   * Talent가 그룹 클래스인지 검사
   * @param talent
   * @returns
   */
  isGroupClass: (talent) => {
    const groupAvailable = talent == null ? void 0 : talent.groupAvailable;
    return GROUP_CLASS.includes(groupAvailable);
  },
  getTalentType: (talent) => {
    if (TalentType.isVod(talent)) {
      return "VOD";
    } else if (TalentType.isEbook(talent)) {
      return "EBOOK";
    } else if (TalentType.isSubscription(talent)) {
      return "SUBSCRIPTION";
    } else {
      return "P2P";
    }
  },
  getTalentTypeString: (talent) => {
    if (TalentType.isVod(talent)) {
      return "VOD";
    } else if (TalentType.isEbook(talent)) {
      return "\uC804\uC790\uCC45";
    } else if (TalentType.isSubscription(talent)) {
      return "\uBA64\uBC84\uC2ED";
    } else {
      return "\uC628/\uC624\uD504\uB77C\uC778";
    }
  }
};
var TalentStatus = {
  isDraft: (talent) => {
    return (talent == null ? void 0 : talent.status) === 0 /* DRAFT */;
  },
  isRejected: (talent) => {
    return (talent == null ? void 0 : talent.status) === 1 /* REJECTED */;
  },
  isSuspended: (talent) => {
    return (talent == null ? void 0 : talent.status) === 3 /* SUSPENDED */;
  },
  isSoldOut: (talent) => {
    return (talent == null ? void 0 : talent.isSoldOut) === 1;
  },
  isOpened: (talent) => {
    return (talent == null ? void 0 : talent.status) === 2 /* OPENED */;
  },
  isPublicClass: (talent) => {
    return talent.status == 2 /* OPENED */ && talent.testYn == "N";
  },
  //심사 완료 된 클래스인지
  isReviewComplete: (talent) => {
    return (talent == null ? void 0 : talent.status) === 3 /* SUSPENDED */ || (talent == null ? void 0 : talent.status) === 2 /* OPENED */ || (talent == null ? void 0 : talent.status) === 8 /* WAITING_FOR_TERMS_AGREEMENT */;
  }
};
export {
  APP_DOWNLOAD_URLS,
  AnimatedToggleButtonComponent,
  app_cookie_default as AppCookieConstants,
  AppleIcon,
  ApplicationPaymentType,
  ApplicationRefundStatus,
  ApplicationStatus,
  ApplicationTutorStatus,
  Autocomplete,
  BasicSkeletonComponent,
  BlogIcon,
  Button,
  day_default as CalendarDay,
  event_default as CalendarEvent,
  header_default as CalendarHeader,
  components_default as CalendarInterface,
  CalendarViewMode,
  CheckBox,
  Checkbox,
  Chip,
  ClipboardListIconOutline,
  ClipboardListIconSolid,
  DateSource,
  DefaultProgressBarComponent,
  dev_marker_default as DevMarker,
  Dialog2 as Dialog,
  DialogButtons,
  dynamic_line_height_default as DynamicLineHeight,
  FacebookIcon,
  GROUP_CLASS,
  ImageFallback,
  ImageSkeletonComponent,
  Input,
  InputDescription,
  InputErrorMessage,
  InputField,
  InputLabel,
  InstagramIcon,
  KakaoIcon,
  KakaoTalkIcon,
  LoadingBannerComponent,
  LoadingSpinner,
  logo_default as LogoComponent,
  MULTI_DAY_CLASS,
  MainColorContext,
  Modal,
  ModalBody,
  ModalButtons,
  ModalFooter,
  ModalHeader,
  NAVER_INFLOW_DOMAIN,
  NAVER_PIXEL_ID,
  NaverIcon,
  NaverPixelConversionType,
  NaverTrackingLoader,
  NotFoundComponent,
  numbers_default as Numbers,
  ONE_DAY_CLASS,
  ONE_ON_ONE_CLASS,
  Popover,
  PopoverContent,
  PopoverTrigger,
  PrimaryButton_default as PrimaryButton,
  RadioButton2 as Radio,
  RadioButton,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  SelectBox,
  StartOfWeek,
  StudioLogo,
  Switch,
  calendar_default as TailwindCalendarComponent,
  TalentCategory,
  talent_schedule_default as TalentSchedule,
  TalentSpecialRegion,
  TalentStatus,
  TalentStatusEnum,
  TalentType,
  TalingAppContext,
  TalingAppIsPreviewVersionContext,
  TalingLogoWithOutTM,
  TemplateIconOutline,
  TemplateIconSolid,
  TextButton,
  TextSkeletonComponent,
  Textarea,
  TextareaField,
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  Toaster,
  VodPaymentIsRefund,
  VodPaymentPaymentType,
  VodPaymentStatus,
  WaitingButton,
  YoutubeIcon,
  appPrefix,
  assertRunningAsClient,
  buttonVariants,
  classNames,
  cn,
  colorPresets,
  devMarkerStore,
  filterKspayForbiddenChar,
  formatBytes,
  kebabCaseToCamelCase,
  reducer,
  snackbar,
  textButtonVariants,
  toast2 as toast,
  useCrossDomainCookies,
  useIsVisible,
  useNaverPixel,
  useTalingPixel,
  useToast
};
//# sourceMappingURL=index.mjs.map