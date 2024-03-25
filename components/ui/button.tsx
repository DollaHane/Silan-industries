import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-background text-primary shadow-lg border border-transparent hover:bg-muted",
        icon: "bg-transparent text-primary border border-transparent",
        destructive:
          "hover:bg-red-500 hover:text-white bg-red-400 text-primary border border-red-500 shadow-md",
        passivedestructive:
          "hover:bg-red-500 hover:text-white bg-background text-primary border-2 border-red-500 shadow-md",
        outline:
          "border-2 border-transparent hover:border-customAccent bg-background shadow-lg",
        outlineTwo:
          "border-2 border-customAccent bg-background shadow-lg hover:text-customAccent",
        outlinebold:
          "font-bold border-2 border-customAccent bg-background shadow-lg hover:bg-gradient-to-br from-customColorOne via-customColorTwo to-customColorThr hover:text-customColorFou",
        secondary: " bg-transparent text-primary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-lg px-8",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
