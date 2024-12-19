// src/components/modal/index.tsx
import { Dialog, Transition } from "@headlessui/react";

// src/util/tailwind-util/class-names/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// src/components/modal/index.tsx
import { Fragment, useRef } from "react";
var widthMap = {
  sm: "max-w-[360px]",
  md: "max-w-[520px]",
  lg: "max-w-[800px]"
};
function Modal({
  isOpen,
  setIsOpen,
  isBackdropClickable = true,
  width = "md",
  isRound = true,
  children
}) {
  const initRef = useRef(null);
  return /* @__PURE__ */ React.createElement(Transition, { appear: true, show: isOpen, as: Fragment }, /* @__PURE__ */ React.createElement(
    Dialog,
    {
      initialFocus: initRef,
      as: "div",
      className: "relative z-50",
      onClose: () => {
        isBackdropClickable && setIsOpen(false);
      }
    },
    /* @__PURE__ */ React.createElement(
      Transition.Child,
      {
        as: Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0"
      },
      /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 bg-taling-gray-900/70" })
    ),
    /* @__PURE__ */ React.createElement("div", { className: "fixed inset-0 overflow-y-auto" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-center min-h-full text-center p-4" }, /* @__PURE__ */ React.createElement(
      Transition.Child,
      {
        as: Fragment,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95"
      },
      /* @__PURE__ */ React.createElement(
        Dialog.Panel,
        {
          ref: initRef,
          className: classNames(
            "relative w-full align-middle transition-all transform bg-white shadow-elevation-32",
            widthMap[width],
            isRound ? "rounded-2xl" : "rounded-none"
          )
        },
        /* @__PURE__ */ React.createElement("div", { className: "flex flex-col" }, children)
      )
    )))
  ));
}
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
export {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
};
//# sourceMappingURL=index.mjs.map