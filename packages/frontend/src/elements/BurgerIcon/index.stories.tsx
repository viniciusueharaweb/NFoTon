import { Meta, Story } from '@storybook/react'

import BurgerIcon from '.'

export default {
  title: 'Components/BurgerIcon',
  component: BurgerIcon,
  argTypes: {},
} as Meta

const Template: Story = ({ variant }) => <BurgerIcon variant={variant} />

export const BurguerTemplate = Template.bind({})

BurguerTemplate.parameters = {}
BurguerTemplate.args = { variant: 'closed' }
