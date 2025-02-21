import { cva, type VariantProps } from "class-variance-authority"
import { Form, Label } from "radix-ui"
import React from "react"
import { twMerge } from "tailwind-merge"

const textFieldVariants = cva(
  "mt-2 flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-white/0 p-3 text-sm text-gray-700 outline-none dark:!border-white/10 dark:text-white  px-3 py-2 transition-all",
  {
    variants: {
      variant: {
        default: "border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500",
        error: "border-red-500 focus:ring-red-500",
        disabled: "bg-gray-100 cursor-not-allowed opacity-50",
      },
      inputSize: {
        sm: "text-xs py-1",
        md: "text-sm py-2",
        lg: "text-base py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "md",
    },
  }
)

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof textFieldVariants> {
  name: string
  label?: string
  error?: string
  icon?: React.ReactNode
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, icon, variant, inputSize, disabled, className, required, ...props }, ref) => {
    return (
      <Form.Field name={props.name} className="flex flex-col space-y-1">
        <div className="flex items-center justify-between">
          <Form.Label className="text-sm font-medium text-gray-700">
            {label}
            {required && <span className="text-brand-500 text-md">*</span>}
          </Form.Label>

          {/* ✅ Messages d'erreur affichés à droite du label */}
          <div className="text-automatron-orange-600 text-xs">
            <Form.Message match="valueMissing">Champ requis</Form.Message>
            <Form.Message match="typeMismatch">Format invalide</Form.Message>
            <Form.Message match="tooShort">Trop court</Form.Message>
          </div>
        </div>
        <div className="relative">
          {icon && <div className="absolute top-1/2 left-3 -translate-y-1/2">{icon}</div>}
          <Form.Control asChild>
            <input
              ref={ref}
              className={twMerge(textFieldVariants({ variant, inputSize }), icon && "pl-10", className)}
              disabled={disabled}
              required={required}
              {...props}
            />
          </Form.Control>
        </div>
      </Form.Field>
    )
  }
)

export default TextField
