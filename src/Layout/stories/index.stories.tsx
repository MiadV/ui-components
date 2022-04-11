import React, { useState } from 'react'
import { ComponentMeta, Story } from '@storybook/react'
import { Col, Row } from 'antd'
import { Handshake, Person } from 'phosphor-react'

import WithAntIconSpan from '../../HOCs'
import { default as Menu, MenuItem, SubMenu, isIconFill } from '../../Menu'
import Select, { CheckeableItem, Option } from '../../Select'
import Tag from '../../Tag'

import {
  Content,
  default as Layout,
  Header,
  LayoutProps,
  Sider,
  SiderHeader,
  LogoutButton,
  BottomPane,
  HeaderEndContent,
  PageHeaderTitle,
  PageHeaderSubtitle
} from '../index'

import 'antd/lib/typography/style/index.css'

type Args = LayoutProps & {
  label: string
  type?: string
}

export default {
  title: 'Layout',
  component: Layout,
  argTypes: {
    type: {
      options: ['staging', 'production'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Layout>

const subMenuItems = [
  {
    key: 'sub1',
    Icon: Handshake,
    title: 'Merchant Connect',
    subItems: [
      {
        key: '1',
        title: 'My Merchants'
      },
      {
        key: '2',
        title: 'My Submissions'
      },
      {
        key: '3',
        title: 'My Drafts'
      },
      {
        key: '4',
        title: 'My Attentions'
      }
    ]
  },
  {
    key: 'sub2',
    Icon: Person,
    title: 'User',
    subItems: [
      {
        key: '5',
        title: 'Tom'
      },
      {
        key: '6',
        title: 'Bill'
      },
      {
        key: '7',
        title: 'Alex'
      }
    ]
  }
]

const rootSubmenuKeys = subMenuItems.map(item => item.key)

const Template: Story<Args> = (args: Args) => {
  const [collapsed, setCollapsed] = useState(true)
  const [openKeys, setOpenKeys] = React.useState<string[]>([])
  const [selectedKeyPath, setSelectedKeyPath] = React.useState<string[]>(['sub1', '1'])

  const [selectedCountry, setSelectedCountry] = useState('MY')

  const handleMenuOpen = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) setOpenKeys(keys)
    else setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
  }

  const handleLogoutClick = () => confirm('Are you sure? :(')
  const isStaging = args.type && args.type === 'staging'

  return (
    <Layout {...args} style={{ height: 600 }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <SiderHeader text={'Katelyn Soo'} collapsed={collapsed} setCollapsed={setCollapsed} />

        <Menu
          mode="inline"
          defaultSelectedKeys={selectedKeyPath}
          inlineIndent={16}
          openKeys={openKeys}
          onOpenChange={handleMenuOpen}
          onSelect={selectionInfo => setSelectedKeyPath(selectionInfo.keyPath)}
        >
          {subMenuItems.map(item => (
            <SubMenu
              key={item.key}
              icon={<WithAntIconSpan icon={<item.Icon weight={isIconFill(selectedKeyPath, item.key)} />} />}
              title="Merchant Connect"
            >
              {item.subItems.map(sub => (
                <MenuItem key={sub.key}>{sub.title}</MenuItem>
              ))}
            </SubMenu>
          ))}
        </Menu>

        <BottomPane>
          <LogoutButton onClick={handleLogoutClick} />
        </BottomPane>
      </Sider>
      <Layout className={isStaging ? 'staging' : ''}>
        <Header>
          <HeaderEndContent>
            {isStaging && <Tag color={'success'}>ia-staging</Tag>}
            <Select
              style={{ width: 110 }}
              defaultValue={selectedCountry}
              optionLabelProp={'label'}
              bordered={false}
              dropdownMatchSelectWidth={false}
              showArrow
              onChange={value => setSelectedCountry(value)}
              // need to keep
              // options={[
              //   { label: 'Malaysia', value: 'MY' },
              //   { label: 'Singapore', value: 'SG' },
              //   { label: 'Indonesia', value: 'ID' },
              //   { label: 'India', value: 'IN' }
              // ]}
            >
              {[
                { label: 'Malaysia', value: 'MY' },
                { label: 'Singapore', value: 'SG' },
                { label: 'Indonesia', value: 'ID' },
                { label: 'India', value: 'IN' }
              ].map(item => (
                <Option key={item.value} value={item.value} label={item.label}>
                  <CheckeableItem>{item.label}</CheckeableItem>
                </Option>
              ))}
            </Select>
          </HeaderEndContent>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Row>
            <Col offset={1} span={22}>
              <PageHeaderTitle>My Merchants</PageHeaderTitle>
              <PageHeaderSubtitle>Here is the list of merchants you are working with.</PageHeaderSubtitle>
            </Col>
          </Row>
        </Content>
        {/* need to keep */}
        {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
      </Layout>
    </Layout>
  )
}

export const Default = Template.bind({})

Default.args = {
  type: 'staging',
  label: 'Layout'
}
