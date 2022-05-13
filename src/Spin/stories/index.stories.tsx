import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { default as Spin, SpinProps } from '../index'

export default {
  title: 'Spin',
  component: Spin,
  argTypes: {
    size: {
      options: ['small', 'default', 'large'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Spin>

const Template: ComponentStory<typeof Spin> = (args: SpinProps) => <Spin {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Spin'
}
