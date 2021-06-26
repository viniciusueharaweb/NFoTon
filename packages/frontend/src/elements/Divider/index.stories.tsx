import { Meta, Story } from '@storybook/react'

import Divider, { DividerProps } from '.'

export default {
  title: 'Elements/Divider',
  component: Divider,
  argTypes: {},
} as Meta

const Template: Story<DividerProps> = (args) => <Divider {...args} />

export const Default = Template.bind({})

Default.parameters = {}
Default.args = { height: 'light' }
