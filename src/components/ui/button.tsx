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
      // deprecated - default는 추후 사라질 예정.
      xl: "h-6 w-6",
      default: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-1 rounded-lg transition-colors",
    "disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        solidPrimary: [
          "bg-primary text-taling-white [&]:text-taling-white",
          "disabled:bg-taling-gray-400 disabled:text-interaction-disabled/50",
          "hover:bg-taling-pink-600",
          "active:bg-taling-pink-700",
        ],
        solidSecondary: [
          "bg-taling-gray-100 text-strong [&]:text-strong",
          "disabled:bg-taling-gray-400 disabled:text-interaction-disabled/50",
          "hover:bg-taling-gray-200",
          "active:bg-taling-gray-300",
        ],
        outlinedPrimary: [
          "bg-taling-white border border-primary text-primary [&]:text-primary",
          "disabled:border-interaction-inactive disabled:text-disabled/80",
          "hover:bg-primary/5",
          "active:bg-primary/15",
        ],
        outlinedSecondary: [
          "bg-taling-white border border-taling-gray-300 text-normal [&]:text-normal",
          "disabled:border-interaction-inactive disabled:text-disabled/80",
          "hover:bg-taling-gray-50",
          "active:bg-taling-gray-100",
        ],
        // deprecated - 추후 사라질 속성
        default:
          "bg-taling-pink text-taling-white [&]:text-taling-white shadow hover:bg-taling-pink/80 disabled:bg-taling-gray-400 disabled:opacity-50 whitespace-nowrap",
        outline:
          "border border-taling-gray-300 bg-transparent shadow-sm hover:bg-taling-gray-100 hover:text-taling-gray-900 disabled:opacity-50 whitespace-nowrap",
        secondary:
          "bg-taling-gray-100 text-taling-gray-900 shadow-sm hover:bg-taling-gray-100/70 disabled:opacity-50 whitespace-nowrap",
        ghost:
          "hover:bg-taling-gray-100 hover:text-taling-gray-900 disabled:opacity-50 whitespace-nowrap",
        underline:
          "underline hover:text-taling-gray-900 text-taling-gray-600 disabled:opacity-50 whitespace-nowrap",
      },
      size: {
        xs: "h-7 min-w-[3rem] rounded-lg px-2.5 py-1.5 text-caption1-semibold",
        sm: "h-[2.125rem] min-w-[3.5rem] rounded-lg px-3 py-2 text-label2-semibold",
        md: "h-10 min-w-[4.25rem] rounded-lg px-3.5 py-2 text-body2normal-semibold",
        lg: "h-12 min-w-[5.25rem] rounded-lg px-4 py-3 text-body2normal-semibold",
        // deprecated - default는 추후 사라질 예정.
        xl: "h-12 rounded-md px-8 text-sm font-medium",
        default: "h-9 px-4 py-2 text-sm font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
        className={cn(buttonVariants({ variant, size, className }))}
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
Button.displayName = "Button";

export { Button, buttonVariants };
