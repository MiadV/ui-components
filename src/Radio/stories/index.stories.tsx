import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { default as Radio, RadioProps } from '../index'

export default {
  title: 'Radio',
  component: Radio
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args: RadioProps) => <Radio {...args} />

export const Basic = Template.bind({})

Basic.args = {
  label: 'Radio',
  children: 'Radio'
}

export const BasicChecked = Template.bind({})

BasicChecked.args = {
  label: 'Radio',
  children: 'Radio',
  defaultChecked: 'true'
}

export const Disabled = Template.bind({})

Disabled.args = {
  label: 'Radio',
  children: 'Radio',
  disabled: 'true'
}

export const DisabledChecked = Template.bind({})

DisabledChecked.args = {
  label: 'Radio',
  children: 'Radio',
  defaultChecked: 'true',
  disabled: 'true'
}
