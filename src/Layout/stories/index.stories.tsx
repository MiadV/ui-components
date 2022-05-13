import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { Col, Row, Switch } from 'antd'
import { Handshake, Person } from 'phosphor-react'

import WithAntIconSpan from '../../HOCs'
import { default as Menu, isIconFill } from '../../Menu'
import Select, { CheckeableItem, Option } from '../../Select'
import Tag from '../../Tag'

import {
  Content,
  default as Layout,
  Header,
  Sider,
  SiderHeader,
  LogoutButton,
  BottomPane,
  HeaderEndContent,
  PageHeaderTitle,
  PageHeaderSubtitle
} from '../index'

import 'antd/lib/typography/style/index.css'

export default {
  title: 'Layout',
  component: Layout
} as ComponentMeta<typeof Layout>

export const Default = () => {
  const [collapsed, setCollapsed] = useState(true)
  const [openKeys, setOpenKeys] = React.useState<string[]>([])
  const [selectedKeyPath, setSelectedKeyPath] = React.useState<string[]>(['sub1', '1'])
  const [selectedCountry, setSelectedCountry] = useState('MY')
  const [isStaging, setIsStaging] = useState(true)

  const subMenuItems = [
    {
      key: 'sub1',
      icon: <WithAntIconSpan icon={<Handshake weight={isIconFill(selectedKeyPath, 'sub1')} />} />,
      label: 'Merchant Connect',
      children: [
        {
          key: '1',
          label: 'My Merchants'
        },
        {
          key: '2',
          label: 'My Submissions'
        },
        {
          key: '3',
          label: 'My Drafts'
        },
        {
          key: '4',
          label: 'My Attentions'
        }
      ]
    },
    {
      key: 'sub2',
      icon: <WithAntIconSpan icon={<Person weight={isIconFill(selectedKeyPath, 'sub2')} />} />,
      label: 'User',
      children: [
        {
          key: '5',
          label: 'Tom'
        },
        {
          key: '6',
          label: 'Bill'
        },
        {
          key: '7',
          label: 'Alex'
        }
      ]
    }
  ]

  const rootSubmenuKeys = subMenuItems.map(item => item.key)

  const handleMenuOpen = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) setOpenKeys(keys)
    else setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
  }

  const handleLogoutClick = () => confirm('Are you sure? :(')

  return (
    <Layout style={{ height: 600, position: 'relative' }}>
      <Switch
        style={{ position: 'fixed', bottom: 10, right: 10 }}
        checked={isStaging}
        checkedChildren={'Staging'}
        unCheckedChildren={'Production'}
        onChange={() => setIsStaging(!isStaging)}
      />
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <SiderHeader text={'Katelyn Soo'} collapsed={collapsed} setCollapsed={setCollapsed} />

        <Menu
          mode="inline"
          defaultSelectedKeys={selectedKeyPath}
          inlineIndent={16}
          openKeys={openKeys}
          onOpenChange={handleMenuOpen}
          onSelect={selectionInfo => setSelectedKeyPath(selectionInfo.keyPath)}
          items={subMenuItems}
        />

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
