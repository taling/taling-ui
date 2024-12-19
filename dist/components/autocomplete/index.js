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

// src/components/autocomplete/index.tsx
var autocomplete_exports = {};
__export(autocomplete_exports, {
  default: () => Autocomplete
});
module.exports = __toCommonJS(autocomplete_exports);
var import_react = require("@headlessui/react");
var import_solid = require("@heroicons/react/20/solid");

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/autocomplete/index.tsx
var import_react2 = require("react");
function Autocomplete({
  defaultSelection,
  list,
  onSelected,
  rounded = "md",
  enabled = true
}) {
  const [selected, setSelected] = (0, import_react2.useState)(null);
  const [search, setSearch] = (0, import_react2.useState)("");
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
      var _a;
      if (checkSearch(parent.name, search)) searchResult.push(parent);
      else {
        const childResult = (_a = parent.children) == null ? void 0 : _a.filter(
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
  (0, import_react2.useEffect)(() => {
    if (defaultSelection) {
      const parsedDefaultSelection = {
        ...defaultSelection,
        id: Object.prototype.hasOwnProperty.call(defaultSelection, "parentId") ? "c" + defaultSelection.id : "p" + defaultSelection.id
      };
      setSelected(parsedDefaultSelection);
    }
  }, [defaultSelection]);
  return /* @__PURE__ */ React.createElement(
    import_react.Combobox,
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
        import_react.Combobox.Input,
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
        import_react.Combobox.Button,
        {
          className: classNames(
            "absolute inset-y-0 right-0 flex items-center pr-2",
            enabled ? "" : "!cursor-not-allowed"
          )
        },
        /* @__PURE__ */ React.createElement(
          import_solid.ChevronUpDownIcon,
          {
            className: "h-5 w-5 text-gray-400",
            "aria-hidden": "true"
          }
        )
      )
    ), /* @__PURE__ */ React.createElement(
      import_react.Transition,
      {
        as: import_react2.Fragment,
        leave: "transition ease-in duration-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        afterLeave: () => setSearch("")
      },
      /* @__PURE__ */ React.createElement(
        import_react.Combobox.Options,
        {
          className: classNames(
            "absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm",
            round(rounded)
          )
        },
        filteredList.length === 0 && search !== "" ? /* @__PURE__ */ React.createElement("div", { className: "taling-gray-900 relative cursor-default select-none px-4 py-2" }, "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.") : filteredList.map((parent) => /* @__PURE__ */ React.createElement(
          import_react.Combobox.Option,
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
            /* @__PURE__ */ React.createElement(import_solid.CheckIcon, { className: "h-5 w-5", "aria-hidden": "true" })
          ) : null, parent.children && /* @__PURE__ */ React.createElement("ul", null, parent.children.map((child) => /* @__PURE__ */ React.createElement(
            import_react.Combobox.Option,
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
                import_solid.CheckIcon,
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
//# sourceMappingURL=index.js.map