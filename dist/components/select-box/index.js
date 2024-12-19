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

// src/components/select-box/index.tsx
var select_box_exports = {};
__export(select_box_exports, {
  default: () => SelectBox
});
module.exports = __toCommonJS(select_box_exports);
var import_react = require("@headlessui/react");
var import_solid = require("@heroicons/react/20/solid");

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/select-box/index.tsx
var import_react2 = require("react");
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
  const [_internaList, setInternalList] = (0, import_react2.useState)();
  const [selected, setSelected] = (0, import_react2.useState)(null);
  const [_hydrated, setHydrated] = (0, import_react2.useState)(false);
  const onListChanged = (0, import_react2.useCallback)(
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
  (0, import_react2.useEffect)(() => {
    setHydrated(true);
    onListChanged(list);
    return () => {
      setHydrated(false);
    };
  }, [defaultSelection, list]);
  (0, import_react2.useEffect)(() => {
    setSelected(defaultSelection);
  }, [defaultSelection]);
  if (list.length === 0 && defaultSelection === null) return /* @__PURE__ */ React.createElement(React.Fragment, null);
  if (!_hydrated) return /* @__PURE__ */ React.createElement(React.Fragment, null);
  return /* @__PURE__ */ React.createElement(
    import_react.Listbox,
    {
      value: selected,
      onChange: (value) => {
        setSelected(value);
        onSelected(value);
      }
    },
    ({ open }) => {
      var _a;
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: classNames("relative", width) }, /* @__PURE__ */ React.createElement(
        import_react.Listbox.Button,
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
          (_a = selected == null ? void 0 : selected.name) != null ? _a : placeholder
        ),
        /* @__PURE__ */ React.createElement("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, /* @__PURE__ */ React.createElement(
          import_solid.ChevronUpDownIcon,
          {
            className: "h-5 w-5 text-taling-gray-400",
            "aria-hidden": "true"
          }
        ))
      ), /* @__PURE__ */ React.createElement(
        import_react.Transition,
        {
          show: open && enabled,
          as: import_react2.Fragment,
          leave: "transition ease-in duration-100",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0"
        },
        /* @__PURE__ */ React.createElement(
          import_react.Listbox.Options,
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
              import_react.Listbox.Option,
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
                  import_solid.CheckIcon,
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
//# sourceMappingURL=index.js.map