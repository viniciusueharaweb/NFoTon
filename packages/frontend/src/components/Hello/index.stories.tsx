import { Meta, Story } from '@storybook/react'

import Hello from '.'

export default {
  title: 'Components/Hello',
  component: Hello,
  argTypes: {},
} as Meta

const Template: Story = () => <Hello />

export const HelloTemplate = Template.bind({})

HelloTemplate.parameters = {}
HelloTemplate.args = {}
