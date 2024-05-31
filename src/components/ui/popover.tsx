import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@taling-ui/util/tailwind-util/utils";
import React, { Ref } from "react";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export const PopoverContent = React.forwardRef(
  (
    {
      children,
      ...props
    }: {
      children: React.ReactNode;
    } & React.ComponentProps<typeof PopoverPrimitive.Content>,
    forwardedRef
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        sideOffset={5}
        {...props}
        className={cn(
          "data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade w-[260px] rounded bg-white p-5 shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)]",
          props.className
        )}
        ref={forwardedRef as Ref<HTMLDivElement>}
      >
        {children}
        <PopoverPrimitive.Arrow className="fill-white" />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
);
PopoverContent.displayName = "PopoverContent";
