import { Meta, Story } from '@storybook/react'
import Input, { InputProps } from '.'

export default {
  title: 'Elements/Input',
  component: Input,
  argTypes: {},
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const InputTemplate = Template.bind({})

InputTemplate.parameters = {}
InputTemplate.args = {
  variant: 'default',
  placeholder: "Type your email",
  errorLabel: 'Email is incorrect.',
}
