import React from 'react'
import { useState } from '@storybook/addons'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ItemType } from 'antd/lib/menu/hooks/useItems'
import { UserCircle } from 'phosphor-react'
import { default as Menu } from '../../Menu'
import { default as Dropdown, DropdownProps } from '../index'

export default {
  title: 'Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args: DropdownProps) => {
  return (
    <Dropdown {...args}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Click me
      </a>
    </Dropdown>
  )
}

const menuItems: ItemType[] = [
  {
    key: '1',
    label: 'Dropdown 1'
  },
  {
    key: '2',
    label: 'Dropdown 2'
  },
  {
    key: '3',
    label: 'Dropdown 3'
  },
  {
    key: '4',
    label: 'Dropdown 4'
  },
  {
    key: '5',
    label: 'Dropdown 5'
  },
  {
    key: '6',
    label: 'Dropdown 6'
  }
]

const menuWithDividerItems: ItemType[] = [
  {
    key: '1',
    label: 'Dropdown 1'
  },
  {
    key: '2',
    label: 'Dropdown 2'
  },
  {
    key: '3',
    label: 'Dropdown 3'
  },
  {
    key: '4',
    label: 'Dropdown 4'
  },
  { type: 'divider' },
  {
    key: '5',
    label: 'Dropdown 5'
  },
  {
    key: '6',
    label: 'Dropdown 6'
  }
]

const menuWithSubmenuItems: ItemType[] = [
  {
    type: 'group',
    label: 'Group Title',
    children: [
      {
        key: '1',
        label: 'Dropdown 1'
      },
      {
        key: '2',
        label: 'Dropdown 2'
      }
    ]
  },
  {
    key: '3',
    label: 'Sub-menu',
    children: [
      {
        key: 'sub1',
        label: 'Sub-menu 1'
      },
      {
        key: 'sub2',
        label: 'Sub-menu 2'
      }
    ]
  },
  {
    type: 'divider'
  },
  {
    type: 'group',
    label: 'Title 2'
  },
  {
    type: 'group',
    label: 'Title 3'
  }
]

const menu = <Menu style={{ width: 320 }} items={menuItems} />
const menuWithDivider = <Menu style={{ width: 320 }} items={menuWithDividerItems} />
const menuWithSubmenu = <Menu style={{ width: 320 }} items={menuWithSubmenuItems} />

export const Basic = Template.bind({})

Basic.args = {
  label: 'Dropdown',
  overlay: menu,
  trigger: 'click'
}

export const MenuWithDivider = Template.bind({})

MenuWithDivider.args = {
  label: 'Dropdown',
  overlay: menuWithDivider,
  trigger: 'click'
}

export const MenuWithSubmenu = Template.bind({})

MenuWithSubmenu.args = {
  label: 'Dropdown',
  overlay: menuWithSubmenu,
  trigger: 'click'
}

export const MenuWithState = () => {
  const [current, setCurrent] = useState('sub1')

  const handleClick = e => {
    setCurrent(e.key)
  }

  const menuWithStateItems: ItemType[] = [
    {
      key: '1',
      icon: <UserCircle size={16} />,
      label: 'Dropdown 1'
    },
    {
      key: '2',
      label: 'Dropdown 2',
      children: [
        { key: '3', label: 'Option 3' },
        { key: '4', label: 'Option 4' }
      ]
    },
    { key: '5', label: 'Dropdown 3' },
    { key: '6', label: 'Dropdown 4', disabled: true }
  ]

  const menu = <Menu mode="vertical" onClick={handleClick} selectedKeys={[current]} items={menuWithStateItems} />

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={e => e.preventDefault()}>Click me</a>
    </Dropdown>
  )
}
