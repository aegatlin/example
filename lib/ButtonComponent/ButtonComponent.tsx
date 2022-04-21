import { PropsWithChildren } from 'react'

export enum ButtonType {
  Primary = 'p-2 drop-shadow hover:drop-shadow-lg border text-white rounded',
  Underlined = 'underline text-slate-400 hover:text-slate-500',
}

export enum ButtonColor {
  Blue = 'bg-sky-400 hover:bg-sky-500',
  Green = 'bg-emerald-400 hover:bg-emerald-500',
  Red = 'bg-red-500 hover:bg-red-600',
}

interface ButtonComponentProps {
  type: ButtonType
  color?: ButtonColor
  danger?: Boolean
  imperceptible?: Boolean
  onClick?: () => void
}

export default function ButtonComponent({
  children,
  type = ButtonType.Primary,
  color = ButtonColor.Blue,
  danger = false,
  imperceptible = false,
  onClick = () => {},
}: PropsWithChildren<ButtonComponentProps>) {
  let classes = `${type}`
  classes += type == ButtonType.Primary ? ` ${color}` : ''
  classes += danger ? ' text-4xl vibrate' : ''
  classes += imperceptible ? ' text-sm text-slate-200 hover:text-slate-300' : ''

  let displayableChildren = children
  if (imperceptible && typeof children == 'string') {
    displayableChildren = `(${children})`
  }

  return (
    <button
      className={`max-w-max cursor-pointer whitespace-nowrap ${classes}`}
      onClick={onClick}
    >
      {displayableChildren}
    </button>
  )
}
