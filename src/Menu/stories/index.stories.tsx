import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Bell, CaretDown, HouseLine, MagnifyingGlass } from 'phosphor-react'
import { default as Menu, MenuItemGroup, MenuItem, MenuProps, SubMenu, isIconFill } from '../index'

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
    >
      {args.children || context.children}
    </Menu>
  )
}

export const TopNavigation = Template.bind({})

TopNavigation.args = {
  label: 'Top Navigation',
  mode: 'horizontal',
  children: (
    <>
      <MenuItem key={'one'}>Navigation One</MenuItem>
      <MenuItem key={'two'}>Navigation Two</MenuItem>
      <MenuItem key={'three'} disabled={true}>
        Navigation Three
      </MenuItem>
      <SubMenu icon={<CaretDown size={16} weight={'light'} />} key={'four'} title="Navigation One">
        <MenuItemGroup title="Item 1">
          <MenuItem key="setting:1">Option 1</MenuItem>
          <MenuItem key="setting:2">Option 2</MenuItem>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <MenuItem key="setting:3">Option 3</MenuItem>
          <MenuItem key="setting:4">Option 4</MenuItem>
        </MenuItemGroup>
      </SubMenu>
    </>
  )
}

export const InlineMenu = Template.bind({})

InlineMenu.argTypes = {
  inlineCollapsed: {
    options: [true, false],
    control: { type: 'radio' }
  },
  mode: {
    table: {
      disable: true
    }
  }
}

InlineMenu.args = {
  label: 'Inline Menu',
  mode: 'inline',
  inlineCollapsed: true
}

InlineMenu.decorators = [
  Story => {
    const [selectedKey, setSelectedKey] = React.useState([])

    return (
      <Story mode="inline" onSelect={menuData => setSelectedKey(menuData.keyPath)}>
        <SubMenu
          key={'one'}
          icon={<HouseLine weight={isIconFill(selectedKey, 'one')} size={16} />}
          title="Navigation One"
        >
          <MenuItemGroup title="Sub-menu 1">
            <MenuItem key="setting:1">Option 1</MenuItem>
            <MenuItem key="setting:2">Option 2</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <MenuItem key="setting:3">Option 3</MenuItem>
            <MenuItem key="setting:4">Option 4</MenuItem>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu
          key={'two'}
          icon={<MagnifyingGlass weight={isIconFill(selectedKey, 'two')} size={16} />}
          title="Navigation Two"
        >
          <MenuItemGroup title="Item 1">
            <MenuItem key="setting:5">Option 1</MenuItem>
            <MenuItem key="setting:6">Option 2</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <MenuItem key="setting:7">Option 3</MenuItem>
            <MenuItem key="setting:8">Option 4</MenuItem>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu
          key={'three'}
          icon={<Bell weight={isIconFill(selectedKey, 'three')} size={16} />}
          title="Navigation Three"
        >
          <MenuItemGroup title="Item 1">
            <MenuItem key="setting:9">Option 1</MenuItem>
            <MenuItem key="setting:10">Option 2</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <MenuItem key="setting:11">Option 3</MenuItem>
            <MenuItem key="setting:12">Option 4</MenuItem>
          </MenuItemGroup>
        </SubMenu>
      </Story>
    )
  }
]
