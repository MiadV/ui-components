import * as React from 'react'
import { Menu as AntMenu, MenuProps as AntMenuProps } from 'antd'
import { MenuDividerProps as AntMenuDividerProps } from 'antd/lib/menu'
import { MenuTheme } from 'antd/lib/menu/MenuContext'

import './style.css'
import { CaretDown } from 'phosphor-react'
import defaults from '../defaults'

export type MenuProps = AntMenuProps
export type MenuDividerProps = AntMenuDividerProps

export const isIconFill = (keyPath: string[], key: string) => (keyPath.includes(key) ? 'fill' : 'light')

const Menu: React.FC<MenuProps> = props => {
  return <AntMenu {...props} />
}

export const MenuDivider: React.FC<MenuDividerProps> = props => {
  return <AntMenu.Divider {...props} />
}

Menu.defaultProps = {
  theme: defaults.theme as MenuTheme,
  expandIcon: ({ isOpen }) => <CaretDown size={16} style={{ transform: isOpen && 'rotate(-180deg)' }} />
}

export default Menu
