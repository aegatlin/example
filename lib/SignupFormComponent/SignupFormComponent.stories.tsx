import { ComponentMeta } from '@storybook/react'
import SignupFormComponent from './SignupFormComponent'

export default {
  title: 'Signup Form Component',
  component: SignupFormComponent,
} as ComponentMeta<typeof SignupFormComponent>

export const NotSignedIn = () => <SignupFormComponent />
