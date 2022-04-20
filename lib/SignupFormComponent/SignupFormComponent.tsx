export default function SignupFormComponent() {
  return (
    <div className="mt-8 flex flex-col items-center space-y-4 rounded border p-8">
      <input
        type="text"
        className="rounded border p-4"
        placeholder="username"
      />
      <input
        type="text"
        className="rounded border p-4"
        placeholder="password"
      />
      <div className="flex justify-between">
        <ButtonComponent type="primary" />
        <button>Log In</button>
        <button>Create Account</button>
      </div>
      <div>
        <ButtonComponent type="underline" />
      </div>
    </div>
  )
}

interface ButtonComponentProps {
  type: 'primary' | 'disabled' | 'underline'
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  type,
  children,
}) => {
  return <button>{children}</button>
}
