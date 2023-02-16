import { ComponentProps, ComponentPropsWithoutRef } from "react"

type ButtonProps = {
  children: React.ReactNode
} & ComponentProps<"button">

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button type="button" {...rest}>
      {children}
    </button>
  )
}
