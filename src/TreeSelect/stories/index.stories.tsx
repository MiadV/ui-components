import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { default as TreeSelect, TreeSelectProps, TreeSelectTreeNodeProps } from '../index'

export default {
  title: 'TreeSelect',
  component: TreeSelect
} as ComponentMeta<typeof TreeSelect>

const Template: ComponentStory<typeof TreeSelect> = (args: TreeSelectProps) => <TreeSelect {...args} />

const treeNodesArray: TreeSelectTreeNodeProps[] = [
  {
    title: 'Main 1',
    children: [
      {
        title: 'Sub 1'
      },
      {
        title: 'Sub 2',
        disabled: true
      }
    ]
  },
  {
    title: 'Main 2',
    children: [
      {
        title: 'Sub 1'
      },
      {
        title: 'Sub 2',
        children: [
          {
            title: 'Content 1'
          },
          {
            title: 'Content 2'
          }
        ]
      }
    ]
  },
  {
    title: 'Dropdown 3',
    children: [
      {
        title: 'Sub 1'
      },
      {
        title: 'Sub 2'
      }
    ]
  },
  {
    title: 'Dropdown 4'
  }
]

export const Primary = Template.bind({})

Primary.args = {
  label: 'TreeSelect',

  treeData: treeNodesArray
}
