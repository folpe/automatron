import { cva, type VariantProps } from "class-variance-authority"

import { twMerge } from "tailwind-merge"

const button = cva(
  [
    "justify-center",
    "inline-flex",
    "items-center",
    "rounded-xl",
    "text-center",
    "transition-colors",
    "delay-50",
    "hover:cursor-pointer",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-brand-500", "text-white", "hover:enabled:bg-brand-600"],
        secondary: ["bg-transparent", "text-blue-400", "hover:enabled:bg-brand-200", "hover:enabled:text-white"],
      },
      size: {
        sm: ["min-w-20", "h-full", "min-h-10", "text-sm", "py-1.5", "px-4"],
        lg: ["min-w-32", "h-full", "min-h-12", "text-lg", "py-2.5", "px-6"],
      },
      underline: { true: ["underline"], false: [] },
    },
    defaultVariants: {
      intent: "primary",
      size: "lg",
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  underline?: boolean
}

export function Button({ className, intent, size, underline, ...props }: ButtonProps) {
  return (
    <button className={twMerge(button({ intent, size, className, underline }))} {...props}>
      {props.children}
    </button>
  )
}
