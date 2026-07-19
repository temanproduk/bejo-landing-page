import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-[1.15em] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-[0_10px_26px_rgba(46,125,87,0.35)] hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(46,125,87,0.42)]",
        amber:
          "bg-gradient-to-br from-amber to-amber-dark text-[#3a2a05] shadow-[0_10px_26px_rgba(224,163,46,0.4)] hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(224,163,46,0.5)]",
        ghost:
          "bg-card text-primary shadow-[inset_0_0_0_1.5px_hsl(var(--border))] hover:-translate-y-0.5 hover:shadow-[inset_0_0_0_1.5px_hsl(var(--primary))]",
        light:
          "bg-white/15 text-white shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.35)] hover:bg-white/25",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
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
