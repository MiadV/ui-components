import * as React from 'react'
import { Tabs as AntTabs, TabsProps as AntTabsProps, TabPaneProps as AntTabPaneProps } from 'antd'

import './style.css'

export type TabsProps = AntTabsProps

export type TabPaneProps = AntTabPaneProps & {
  key: React.Key
  badge?: React.ReactNode
  showBadge?: boolean
}

export const renderTabHeader = ({
  tab,
  badge,
  showBadge,
  key,
  defaultActiveKey
}: TabPaneProps & { defaultActiveKey: string }) => {
  if (defaultActiveKey && defaultActiveKey === key) return <>{tab}</>
  else
    return showBadge && badge ? (
      <>
        {tab}
        <span>{badge}</span>
      </>
    ) : (
      <>{tab}</>
    )
}

export const TabPane = (props: TabPaneProps) => <AntTabs.TabPane {...props} />

const Tabs: React.FC<TabsProps> = props => {
  return <AntTabs {...props} />
}

export default Tabs
