import React from 'react'
import { useState } from '@storybook/addons'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { UserCircle } from 'phosphor-react'
import { default as Menu, MenuItem, SubMenu, MenuItemGroup, MenuDivider } from '../../Menu'
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

const menu = (
  <Menu style={{ width: 320 }}>
    <MenuItem key="1">Dropdown 1</MenuItem>
    <MenuItem key="2">Dropdown 2</MenuItem>
    <MenuItem key="3">Dropdown 4</MenuItem>
    <MenuItem key="4">Dropdown 3</MenuItem>
    <MenuItem key="5">Dropdown 5</MenuItem>
    <MenuItem key="6">Dropdown 6</MenuItem>
  </Menu>
)

const menuWithDivider = (
  <Menu style={{ width: 320 }}>
    <MenuItem key="1">Dropdown 1</MenuItem>
    <MenuItem key="2">Dropdown 2</MenuItem>
    <MenuItem key="3">Dropdown 4</MenuItem>
    <MenuItem key="4">Dropdown 3</MenuItem>
    <MenuDivider />
    <MenuItem key="5">Dropdown 5</MenuItem>
    <MenuItem key="6">Dropdown 6</MenuItem>
  </Menu>
)

const menuWithSubmenu = (
  <Menu style={{ width: 320 }}>
    <MenuItemGroup title="Group title">
      <MenuItem key="1">Dropdown 1</MenuItem>
      <MenuItem key="2">Dropdown 2</MenuItem>
    </MenuItemGroup>
    <SubMenu key="3" title="Sub-menu">
      <MenuItem key="sub1">Sub-menu 1</MenuItem>
      <MenuItem key="sub2">Sub-menu 2</MenuItem>
    </SubMenu>
    <MenuDivider />
    <MenuItemGroup title="Title 2"></MenuItemGroup>
    <MenuItemGroup title="Title 3"></MenuItemGroup>
  </Menu>
)

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

  const menu = (
    <Menu mode="vertical" onClick={handleClick} selectedKeys={[current]}>
      <MenuItem key="1" icon={<UserCircle size={16} />}>
        Dropdown 1
      </MenuItem>
      <SubMenu key="2" title="Dropdown 2">
        <MenuItem key="5">Option 5</MenuItem>
        <MenuItem key="6">Option 6</MenuItem>
      </SubMenu>
      <MenuItem key="7">Dropdown 3</MenuItem>
      <MenuItem key="8" disabled>
        Dropdown 4
      </MenuItem>
    </Menu>
  )

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a onClick={e => e.preventDefault()}>Click me</a>
    </Dropdown>
  )
}
