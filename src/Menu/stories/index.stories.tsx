import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Switch } from 'antd'
import { Bell, CaretDown, HouseLine, MagnifyingGlass } from 'phosphor-react'

import { default as Menu, MenuProps, isIconFill } from '../index'

import 'antd/lib/switch/style/index.css'

export default {
  title: 'Menu',
  component: Menu
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args: MenuProps, context) => {
  return (
    <Menu
      {...args}
      onSelect={context.onSelect}
      style={{
        width: args.inlineCollapsed ? 64 : args.mode === 'inline' && 256
      }}
      items={args.items || context.items}
    />
  )
}

export const TopNavigation = Template.bind({})

TopNavigation.args = {
  label: 'Top Navigation',
  mode: 'horizontal',
  items: [
    {
      label: 'Navigation One',
      key: 'one'
    },
    {
      label: 'Navigation Two',
      key: 'two'
    },
    {
      label: 'Navigation Three',
      key: 'three',
      disabled: true
    },
    {
      label: 'Navigation Four',
      key: 'four',
      icon: <CaretDown size={16} weight={'light'} />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            { label: 'Option 1', key: 'setting:1' },
            { label: 'Option 2', key: 'setting:2' }
          ]
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            { label: 'Option 3', key: 'setting:3' },
            { label: 'Option 4', key: 'setting:4' }
          ]
        }
      ]
    }
  ]
}

export const InlineMenuCollapsed = () => {
  const [selectedKey, setSelectedKey] = React.useState([])
  const [inlineCollapsed, setInlineCollapsed] = React.useState(true)

  const items = [
    {
      label: 'Navigation One',
      key: 'one',
      icon: <HouseLine weight={isIconFill(selectedKey, 'one')} size={16} />,
      children: [
        {
          type: 'group',
          label: 'Sub-menu 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1'
            },
            {
              label: 'Option 2',
              key: 'setting:2'
            }
          ]
        },
        {
          type: 'group',
          label: 'Sub-menu 2',
          children: [
            {
              label: 'Option 1',
              key: 'setting:3'
            },
            {
              label: 'Option 2',
              key: 'setting:4'
            }
          ]
        }
      ]
    },
    {
      label: 'Navigation Two',
      key: 'two',
      icon: <MagnifyingGlass weight={isIconFill(selectedKey, 'two')} size={16} />,
      children: [
        {
          type: 'group',
          label: 'Sub-menu 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:5'
            },
            {
              label: 'Option 2',
              key: 'setting:6'
            }
          ]
        },
        {
          type: 'group',
          label: 'Sub-menu 2',
          children: [
            {
              label: 'Option 1',
              key: 'setting:7'
            },
            {
              label: 'Option 2',
              key: 'setting:8'
            }
          ]
        }
      ]
    },
    {
      label: 'Navigation Three',
      key: 'three',
      icon: <Bell weight={isIconFill(selectedKey, 'three')} size={16} />,
      children: [
        {
          type: 'group',
          label: 'Sub-menu 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:9'
            },
            {
              label: 'Option 2',
              key: 'setting:10'
            }
          ]
        },
        {
          type: 'group',
          label: 'Sub-menu 2',
          children: [
            {
              label: 'Option 1',
              key: 'setting:11'
            },
            {
              label: 'Option 2',
              key: 'setting:12'
            }
          ]
        }
      ]
    }
  ]

  return (
    <>
      <Menu
        mode="inline"
        inlineCollapsed={inlineCollapsed}
        items={items}
        onSelect={item => setSelectedKey(item.keyPath)}
        style={{
          width: inlineCollapsed ? 64 : 256,
          marginBottom: '20px'
        }}
      />
      <Switch
        defaultChecked={inlineCollapsed}
        onChange={() => setInlineCollapsed(!inlineCollapsed)}
        checkedChildren={'Collapsed'}
        unCheckedChildren={'Expanded'}
      />
    </>
  )
}
