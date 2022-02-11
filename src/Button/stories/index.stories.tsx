import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MagnifyingGlass, CaretRight,ArrowLeft,Plus } from 'phosphor-react'
import Button, { ButtonProps } from '../index'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Button',
  children: 'BUTTON',
  type: 'primary',
  size: 'large',
}

export const PrimaryIconLeft = Template.bind({})

PrimaryIconLeft.args = {
  label: 'Button',
  iconPlacement: 'start',
  children:"BUTTON",
  type: 'primary',
  size: 'large',
  icon: <CaretRight size={24} className="icon-start" />,
}

export const PrimaryIconRight = Template.bind({})

PrimaryIconRight.args = {
  label: 'Button',
  iconPlacement: 'end',
  children:"BUTTON",
  type: 'primary',
  size: 'large',
  icon: <MagnifyingGlass size={24} className="icon-end" />
}

export const Text = Template.bind({})

Text.args = {
  label: 'Button',
  children: 'BUTTON',
  type: 'text',
  size: 'large',
}

export const TextIconLeft = Template.bind({})

TextIconLeft.args = {
  label: 'Button',
  type: 'text',
  iconPlacement: 'start',
  children:"BUTTON",
  size: 'large',
  icon: <CaretRight size={24} className="icon-start" />,
}

export const TextIconRight = Template.bind({})

TextIconRight.args = {
  label: 'Button',
  type: 'text',
  iconPlacement: 'end',
  children:"BUTTON",
  size: 'large',
  icon:<CaretRight size={24} className="icon-end" />
}

export const IconSearch = Template.bind({})

IconSearch.args = {
  label: 'Button',
  shape: 'circle',
  size: 'large',
  icon: <MagnifyingGlass size={16} className="circle" />
}

export const IconArrowLeft = Template.bind({})

IconArrowLeft.args = {
  label: 'Button',
  shape: 'circle',
  size: 'large',
  icon:  <ArrowLeft size={16} className="circle" />
}

export const IconPlus = Template.bind({})

IconPlus.args = {
  label: 'Button',
  type: 'primary',
  shape: 'circle',
  size: 'large',
  icon: <Plus size={16} className="circle" />,
}
