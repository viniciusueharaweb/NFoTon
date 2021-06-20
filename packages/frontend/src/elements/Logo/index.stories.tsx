import { Meta, Story } from '@storybook/react'

import Logo from '.'

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {},
} as Meta

const Template: Story = (props) => (
  <Logo
    imgPath={props.imgPath}
    imgAlt={props.imgAlt}
    name={props.name}
    isVertical={props.isVertical}
  />
)

export const LogoTemplate = Template.bind({})

LogoTemplate.parameters = {}
LogoTemplate.args = {
  imgPath: '/logo.png',
  imgAlt: 'Logo alt',
  name: 'Logo name',
  isVertical: false,
}
