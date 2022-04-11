import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { default as Pagination, PaginationProps } from '../index'

export default {
  title: 'Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args: PaginationProps) => <Pagination {...args} />

export const Basic = Template.bind({})

Basic.args = {
  label: 'Pagination',
  defaultCurrent: 1,
  total: 50
}

export const BasicJumper = Template.bind({})

BasicJumper.args = {
  label: 'Pagination',
  defaultCurrent: 1,
  total: 50,
  showQuickJumper: true
}

export const BasicEllipsis = Template.bind({})

BasicEllipsis.args = {
  label: 'Pagination',
  defaultCurrent: 1,
  showSizeChanger: false,
  total: 90
}

export const BasicEllipsisJumper = Template.bind({})

BasicEllipsisJumper.args = {
  label: 'Pagination',
  defaultCurrent: 1,
  showSizeChanger: false,
  showQuickJumper: true,
  total: 90
}

export const Ellipsis = Template.bind({})

Ellipsis.args = {
  label: 'Pagination',
  defaultCurrent: 9,
  showSizeChanger: false,
  showQuickJumper: false,
  total: 200
}

export const EllipsisJumper = Template.bind({})

EllipsisJumper.args = {
  label: 'Pagination',
  defaultCurrent: 9,
  showSizeChanger: false,
  showQuickJumper: true,
  total: 200
}

export const Simple = Template.bind({})

Simple.args = {
  label: 'Pagination',
  simple: true,
  defaultCurrent: 1,
  total: 50
}
