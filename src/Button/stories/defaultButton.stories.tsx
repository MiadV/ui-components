import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { CaretRight } from 'phosphor-react'
import Button, { ButtonProps } from '../index'

export default {
  title: 'Button/Default',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Button',
  children: 'Button',
  type: 'primary',
  size: 'default'
}

export const PrimaryIconLeft = Template.bind({})

PrimaryIconLeft.args = {
  label: 'Button',
  iconPlacement: 'start',
  children: 'Button',
  type: 'primary',
  size: 'default',
  icon: <CaretRight size={16} className="icon-start" />
}

export const PrimaryIconRight = Template.bind({})

PrimaryIconRight.args = {
  label: 'Button',
  iconPlacement: 'end',
  children: 'Button',
  type: 'primary',
  size: 'default',
  icon: <CaretRight size={16} className="icon-end" />
}

export const Text = Template.bind({})

Text.args = {
  label: 'Button',
  children: 'Button',
  type: 'text',
  size: 'default'
}

export const TextIconLeft = Template.bind({})

TextIconLeft.args = {
  label: 'Button',
  type: 'text',
  iconPlacement: 'start',
  children: 'Button',
  size: 'default',
  icon: <CaretRight size={16} className="icon-start" />
}

export const TextIconRight = Template.bind({})

TextIconRight.args = {
  label: 'Button',
  type: 'text',
  iconPlacement: 'end',
  children: 'Button',
  size: 'default',
  icon: <CaretRight size={16} className="icon-end" />
}
