import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import Badge from '../../Badge'
import { default as Tabs, renderTabHeader, TabPane, TabPaneProps } from '../index'

export default {
  title: 'Tabs',
  component: Tabs
} as ComponentMeta<typeof Tabs>

export const BasicTab = () => {
  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Selected Tab" key="1">
          Tab 1
        </TabPane>
        <TabPane tab="Not Selected Tab" key="2">
          Tab 2
        </TabPane>
        <TabPane tab="Disabled Tab" disabled key="3">
          Tab 3
        </TabPane>
      </Tabs>
    </>
  )
}

const initialTabs: TabPaneProps[] = [
  {
    key: '1',
    tab: 'Selected Tab1',
    children: 'Tab 4',
    showBadge: true
  },
  {
    key: '2',
    tab: 'Not Selected Tab2',
    children: 'Tab 5',
    showBadge: true
  },
  {
    key: '3',
    tab: 'Not Selected Tab3',
    children: 'Tab 6'
  },
  {
    key: '4',
    tab: 'Disabled Tab4',
    children: 'Tab 7',
    disabled: true
  }
]

initialTabs.forEach(tab => (tab.badge = <Badge status="default"></Badge>))

export const BasicTabBadge = () => {
  const [tabs, setTabs] = useState(initialTabs)

  const handleTabClick = (key: string) => {
    const newTabs = tabs.map(tab => (tab.key === key ? { ...tab, showBadge: false } : tab))

    setTabs(newTabs)
  }

  const defaultActiveTabKey = '1'

  return (
    <>
      <Tabs defaultActiveKey={defaultActiveTabKey} onChange={handleTabClick}>
        {tabs.map(tab => (
          <TabPane key={tab.key} {...tab} tab={renderTabHeader({ defaultActiveKey: defaultActiveTabKey, ...tab })} />
        ))}
      </Tabs>
    </>
  )
}
