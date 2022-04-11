import * as React from 'react'
import {
  Menu as AntMenu,
  MenuProps as AntMenuProps,
  MenuItemProps as AntMenuItemProps,
  SubMenuProps as AntSubMenuProps
} from 'antd'
import { MenuDividerProps as AntMenuDividerProps, MenuItemGroupProps as AntMenuItemGroupProps } from 'antd/lib/menu'
import { MenuTheme } from 'antd/lib/menu/MenuContext'

import './style.css'
import { CaretDown } from 'phosphor-react'
import defaults from '../defaults'

export type MenuProps = AntMenuProps
export type MenuItemProps = AntMenuItemProps
export type SubMenuProps = AntSubMenuProps
export type MenuItemGroupProps = AntMenuItemGroupProps
export type MenuDividerProps = AntMenuDividerProps

export const isIconFill = (keyPath: string[], key: string) => (keyPath.includes(key) ? 'fill' : 'light')

const Menu: React.FC<MenuProps> = props => {
  return <AntMenu {...props} />
}

export const MenuItem: React.FC<MenuItemProps> = props => {
  return <AntMenu.Item {...props} />
}

export const SubMenu: React.FC<SubMenuProps> = props => {
  return <AntMenu.SubMenu {...props} />
}

export const MenuItemGroup: React.FC<MenuItemGroupProps> = props => {
  return <AntMenu.ItemGroup {...props} />
}

export const MenuDivider: React.FC<MenuDividerProps> = props => {
  return <AntMenu.Divider {...props} />
}

Menu.defaultProps = {
  theme: defaults.theme as MenuTheme,
  expandIcon: ({ isOpen }) => <CaretDown size={16} style={{ transform: isOpen && 'rotate(-180deg)' }} />
}

export default Menu
