import { Meta, Story } from '@storybook/react'

import Label, { LabelProps } from '.'

export default {
  title: 'Elements/Label',
  component: Label,
  argTypes: {
    content: {
      type: 'string'
    },
    color: {
      control: {
        type: 'select',
        options: ['default', 'popular', 'new', 'featured', 'soon']
      }
    }
  }
} as Meta

const Template: Story<LabelProps> = (args) => <Label {...args} />

export const Solid = Template.bind({})

Solid.parameters = {}
Solid.args = { variant: 'solid', content: 'Solid' }

export const Outlined = Template.bind({})

Outlined.parameters = {}
Outlined.args = { variant: 'outlined', content: 'Outlined' }
