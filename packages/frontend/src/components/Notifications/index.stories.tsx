import { Meta, Story } from '@storybook/react'

import Notifications from '.'

import notificationsMock from '../../mock/notifications'

export default {
  title: 'Components/Notifications',
  component: Notifications,
  argTypes: {},
} as Meta

const Template: Story = ({ notifications }) => <Notifications notifications={notifications} />

export const NotificationsTemplate = Template.bind({})

NotificationsTemplate.parameters = {}
NotificationsTemplate.args = {
  notifications: notificationsMock,
}
