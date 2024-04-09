import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@taling-ui/util/tailwind-util/utils";

const buttonVariants = cva(
  "min-w-[100px] inline-flex gap-2 items-center justify-center whitespace-nowrap rounded text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80 disabled:bg-taling-gray-200 disabled:text-taling-gray-400",
        secondary:
          "bg-taling-gray-900 text-white hover:bg-taling-gray-dark disabled:bg-taling-gray-200 disabled:text-taling-gray-400",
        outline:
          "border border-taling-gray-300 bg-white text-primary hover:bg-taling-gray-100 disabled:bg-taling-gray-100 disabled:text-taling-gray-300",
        ghost:
          "text-taling-gray-600 hover:bg-accent hover:text-accent-foreground",
        underline: "underline hover:text-foreground text-muted ",
      },
      size: {
        sm: "h-10 text-xs px-4 py-2.5 leading-5",
        default: "h-12 text-sm px-4 py-3 leading-6",
        lg: "h-14 text-base px-4 py-3.5 leading-7",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
