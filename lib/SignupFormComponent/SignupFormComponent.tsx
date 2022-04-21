import { useState } from 'react'
import ButtonComponent, { ButtonColor, ButtonType } from '../ButtonComponent'

export default function SignupFormComponent() {
  const [showDanger, setShowDanger] = useState(false)

  return (
    <div className="relative mt-8 flex max-w-xs flex-col items-center rounded border bg-slate-50 p-8">
      <input
        type="text"
        className="mb-4 rounded border p-4"
        placeholder="username"
      />
      <input
        type="text"
        className="mb-8 rounded border p-4"
        placeholder="password"
      />
      <div className="mb-8 flex w-full justify-between">
        <ButtonComponent type={ButtonType.Primary}>Log In</ButtonComponent>
        <ButtonComponent type={ButtonType.Primary}>Sign Up</ButtonComponent>
      </div>
      <div className="flex w-full flex-col justify-start space-y-4">
        <ButtonComponent type={ButtonType.Underlined}>
          Reset Password
        </ButtonComponent>
        <ButtonComponent
          type={ButtonType.Underlined}
          imperceptible
          onClick={() => setShowDanger(!showDanger)}
        >
          Reset Every. Single. Password.
        </ButtonComponent>
      </div>
      {showDanger && (
        <div className="absolute bottom-0 flex w-full items-center justify-center">
          <ButtonComponent
            type={ButtonType.Primary}
            color={ButtonColor.Red}
            danger
            onClick={() => setShowDanger(false)}
          >
            Mad Hax, No!!!
          </ButtonComponent>
        </div>
      )}
    </div>
  )
}
