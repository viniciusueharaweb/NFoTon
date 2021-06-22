import { Meta, Story } from '@storybook/react'

import Notifications from '.'

import notifications from '../../mock/notifications'

export default {
  title: 'Components/Notifications',
  component: Notifications,
  argTypes: {},
} as Meta

const Template: Story = () => <Notifications notifications={notifications} />

export const HelloTemplate = Template.bind({})

HelloTemplate.parameters = {}
HelloTemplate.args = {}
