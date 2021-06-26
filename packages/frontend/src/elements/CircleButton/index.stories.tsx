import { Meta, Story } from '@storybook/react'

import CircleButton from '.'

export default {
  title: 'Components/CircleButton',
  component: CircleButton,
  argTypes: {},
} as Meta

const Template: Story = () => <CircleButton />

export const CircleButtonTemplate = Template.bind({})

CircleButtonTemplate.parameters = {}
CircleButtonTemplate.args = {}
