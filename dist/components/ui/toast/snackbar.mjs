"use client";

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/ui/toast/snackbar.tsx
import { toast as hotToast } from "react-hot-toast";
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
    return hotToast.custom(
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
export {
  snackbar
};
//# sourceMappingURL=snackbar.mjs.map