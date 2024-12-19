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

// src/components/icons/clipboard-list/index.tsx
var clipboard_list_exports = {};
__export(clipboard_list_exports, {
  ClipboardListIconSolid: () => ClipboardListIconSolid,
  default: () => ClipboardListIconOutline
});
module.exports = __toCommonJS(clipboard_list_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ClipboardListIconSolid
});
//# sourceMappingURL=index.js.map