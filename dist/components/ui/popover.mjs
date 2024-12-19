// src/components/ui/popover.tsx
import * as PopoverPrimitive from "@radix-ui/react-popover";

// src/util/tailwind-util/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/popover.tsx
import React from "react";
var Popover = PopoverPrimitive.Root;
var PopoverTrigger = PopoverPrimitive.Trigger;
var PopoverContent = React.forwardRef(
  ({
    children,
    ...props
  }, forwardedRef) => /* @__PURE__ */ React.createElement(PopoverPrimitive.Portal, null, /* @__PURE__ */ React.createElement(
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
    /* @__PURE__ */ React.createElement(PopoverPrimitive.Arrow, { className: "fill-white" })
  ))
);
PopoverContent.displayName = "PopoverContent";
export {
  Popover,
  PopoverContent,
  PopoverTrigger
};
//# sourceMappingURL=popover.mjs.map