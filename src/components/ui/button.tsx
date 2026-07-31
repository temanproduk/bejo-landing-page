import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-control font-bold transition-all active:translate-y-[1px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-[1.1em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        solid: "bg-green text-white hover:bg-green-dark",
        gold: "bg-gold text-ink hover:bg-gold-dark hover:text-white",
        outline:
          "border border-line-strong bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white",
        light: "bg-white text-ink hover:bg-paper",
        onDark:
          "border border-white/35 bg-transparent text-white hover:bg-white hover:text-ink",
      },
      size: {
        md: "px-5 py-3 text-sm",
        lg: "px-6 py-3.5 text-[15px]",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  }
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
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
