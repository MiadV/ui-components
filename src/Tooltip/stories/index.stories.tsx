import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from 'antd'
import { default as Tooltip, TooltipProps } from '../index'

export default {
  title: 'Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args: TooltipProps) => (
  <Tooltip {...args}>
    <Button style={{ backgroundColor: 'grey' }}>Upload</Button>
  </Tooltip>
)

export const Basic = Template.bind({})

Basic.args = {
  label: 'Tooltip',
  placement: 'bottom',
  color: 'white',
  title: 'Upload contact(s)'
}
