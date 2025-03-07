import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@taling-ui/util/tailwind-util/utils";

const iconContainerVariants = cva("inline-flex items-center justify-center", {
  variants: {
    size: {
      xs: "h-4 w-4",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

const textButtonVariants = cva(
  [
    "inline-flex items-center justify-center gap-1 rounded-lg transition-colors",
    "disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-taling-white text-primary [&]:text-primary",
          "disabled:text-disabled",
          "hover:bg-taling-gray-900/5",
          "active:bg-taling-gray-900/10",
        ],
        secondary: [
          "bg-taling-white text-high-emphasis [&]:text-high-emphasis",
          "disabled:text-disabled",
          "hover:bg-taling-gray-900/5",
          "active:bg-taling-gray-900/10",
        ],
        underlined: [
          "bg-taling-white text-high-emphasis [&]:text-high-emphasis underline underline-offset-1",
          "disabled:text-disabled",
          "hover:bg-taling-gray-900/5",
          "active:bg-taling-gray-900/10",
        ],
      },
      size: {
        xs: "h-6 min-w-[2.5rem] rounded-lg px-1 py-1 text-caption1-semibold",
        sm: "h-7 min-w-[2.5rem] rounded-lg px-1 py-1 text-label1normal-semibold",
        md: "h-8 min-w-[2.5rem] rounded-lg px-1 py-1 text-body2normal-semibold",
        lg: "h-8 min-w-[2.5rem] rounded-lg px-1 py-1 text-body2normal-regular",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  },
);

export interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof textButtonVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? (Slot as any) : "button";
    return (
      <Comp
        className={cn(textButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon && (
          <div className={cn(iconContainerVariants({ size }))}>{leftIcon}</div>
        )}
        {children}
        {rightIcon && (
          <div className={cn(iconContainerVariants({ size }))}>{rightIcon}</div>
        )}
      </Comp>
    );
  },
);
TextButton.displayName = "TextButton";

export { TextButton, textButtonVariants };
