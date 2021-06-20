import { Meta, Story } from '@storybook/react'

import Header from '.'

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {},
} as Meta

const Template: Story = () => <Header />

export const HeaderTemplate = Template.bind({})

HeaderTemplate.parameters = {}
HeaderTemplate.args = {}
