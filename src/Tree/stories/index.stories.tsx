import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { default as Tree, TreeProps } from '../index'

export default {
  title: 'Tree',
  component: Tree
} as ComponentMeta<typeof Tree>

const Template: ComponentStory<typeof Tree> = (args: TreeProps) => <Tree {...args} />

export const Primary = Template.bind({})
