import { ComponentMeta } from '@storybook/react'
import ButtonComponent from './ButtonComponent'

export default {
  title: 'Button Component',
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>

export const Default = () => <ButtonComponent />
