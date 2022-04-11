import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MagnifyingGlass, ArrowLeft, Plus } from 'phosphor-react'
import Button, { ButtonProps } from '../index'

export default {
  title: 'Button/Icon',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />

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
  icon: <ArrowLeft size={16} className="circle" />
}

export const IconPlus = Template.bind({})

IconPlus.args = {
  label: 'Button',
  type: 'primary',
  shape: 'circle',
  size: 'large',
  icon: <Plus size={16} className="circle" />
}
