import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons"
import { cva, type VariantProps } from "class-variance-authority"
import { Form } from "radix-ui"
import React, { useState } from "react"
import { twMerge } from "tailwind-merge"

const textFieldVariants = cva(
  "flex h-12 w-full items-center justify-center rounded-xl border border-gray-200 bg-white/0 p-3 text-sm text-gray-700 outline-none dark:!border-white/10 dark:text-white  px-3 py-2 transition-all",
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
  ({ label, icon, variant, inputSize, disabled, className, required, type, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible)
    }

    return (
      <Form.Field name={props.name} className="flex w-full flex-col space-y-1">
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
        <div className="relative flex">
          {icon && <div className="absolute top-1/2 left-3 -translate-y-1/2">{icon}</div>}
          <Form.Control asChild>
            <input
              ref={ref}
              className={twMerge(
                textFieldVariants({ variant, inputSize }),
                icon && "pl-10",
                type === "password" && "pr-10",
                className
              )}
              disabled={disabled}
              required={required}
              type={type === "password" ? (isPasswordVisible ? "text" : "password") : type}
              {...props}
            />
          </Form.Control>

          {/* Icône pour afficher/masquer le mot de passe */}
          {type === "password" && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-3 h-full -translate-y-1/2 items-center text-gray-500 hover:cursor-pointer hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
            >
              {isPasswordVisible ? (
                <EyeClosedIcon className="h-5 w-5 items-center" />
              ) : (
                <EyeOpenIcon className="h-5 w-5 items-center" />
              )}
            </button>
          )}
        </div>
      </Form.Field>
    )
  }
)

export default TextField
