import { ComponentMeta } from '@storybook/react'
import ButtonComponent, { ButtonColor, ButtonType } from '.'

export default {
  title: 'Button Component',
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>

const Template = args => <ButtonComponent {...args} />

export const PrimaryDefault = Template.bind({})
PrimaryDefault.args = {
  type: ButtonType.Primary,
  children: 'Primary',
}

export const PrimaryGreen = Template.bind({})
PrimaryGreen.args = {
  type: ButtonType.Primary,
  color: ButtonColor.Green,
  children: 'Primary',
}

export const PrimaryRed = Template.bind({})
PrimaryRed.args = {
  type: ButtonType.Primary,
  color: ButtonColor.Red,
  children: 'Primary',
}

export const PrimaryBlue = Template.bind({})
PrimaryBlue.args = {
  type: ButtonType.Primary,
  color: ButtonColor.Blue,
  children: 'Primary',
}

export const Underlined = Template.bind({})
Underlined.args = {
  type: ButtonType.Underlined,
  children: 'Underlined',
}

export const UnderlinedImperceptible = Template.bind({})
UnderlinedImperceptible.args = {
  type: ButtonType.Underlined,
  imperceptible: true,
  children: 'Underlined Imperceptible',
}

export const Danger = Template.bind({})
Danger.args = {
  type: ButtonType.Primary,
  color: ButtonColor.Red,
  danger: true,
  children: 'Danger',
}

// export const Wrong = () => <ButtonComponent type={ButtonType.Wrong} />
// const PrimaryButton = <ButtonComponent type={ButtonType.Primary} ></ButtonComponent>
