import { Meta, Story } from '@storybook/react'
import ArrowIcon from '.'

export default {
  title: 'Elements/ArrowIcon',
  component: ArrowIcon,
  argTypes: {},
} as Meta

const Template: Story = (args) => <ArrowIcon {...args} />

export const ArrowIconTemplate = Template.bind({})

ArrowIconTemplate.parameters = {}
ArrowIconTemplate.args = { variant: 'right', disabled: false }