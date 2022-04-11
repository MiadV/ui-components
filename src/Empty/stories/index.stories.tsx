import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { default as Empty, EmptyProps } from '../index'

export default {
  title: 'Empty',
  component: Empty
} as ComponentMeta<typeof Empty>

const Template: ComponentStory<typeof Empty> = (args: EmptyProps) => <Empty {...args} />

export const Preset = Template.bind({})

Preset.args = {
  label: 'Empty',
  emptyType: 'nothing-here'
}

export const Custom = Template.bind({})

Custom.args = {
  label: 'Empty',
  image: 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg',
  description: 'description can be a react node as well'
}

Custom.argTypes = {
  emptyType: {
    table: {
      disable: true
    }
  }
}
