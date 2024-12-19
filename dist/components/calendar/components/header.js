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

// src/components/calendar/components/header.tsx
var header_exports = {};
__export(header_exports, {
  default: () => header_default
});
module.exports = __toCommonJS(header_exports);
var import_react2 = require("@headlessui/react");
var import_outline = require("@heroicons/react/24/outline");
var import_react3 = require("react");

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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

// src/components/calendar/components/header.tsx
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
  const mainColor = (0, import_react3.useContext)(MainColorContext);
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
  )), /* @__PURE__ */ React.createElement("div", { className: "hidden md:flex md:items-center" }, useViewMode && /* @__PURE__ */ React.createElement(import_react2.Menu, { as: "div", className: "relative md:ml-4 " }, /* @__PURE__ */ React.createElement(
    import_react2.Menu.Button,
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
    import_react2.Transition,
    {
      as: import_react3.Fragment,
      enter: "transition ease-out duration-100",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95"
    },
    /* @__PURE__ */ React.createElement(import_react2.Menu.Items, { className: "absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, /* @__PURE__ */ React.createElement("div", { className: "py-1" }, /* @__PURE__ */ React.createElement(import_react2.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement(
      "a",
      {
        href: "#",
        className: classNames(
          active ? "bg-gray-100 text-gray-900" : "text-gray-700",
          "block px-4 py-2 text-sm"
        )
      },
      "\uC8FC\uAC04"
    )), /* @__PURE__ */ React.createElement(import_react2.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement(
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
//# sourceMappingURL=header.js.map