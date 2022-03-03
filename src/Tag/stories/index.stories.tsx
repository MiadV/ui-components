import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { default as Tag, TagProps } from '../index'

export default {
  title: 'Tag',
  component: Tag
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args: TagProps) => <Tag {...args} />

const args = {
  label: 'Tag',
  children: 'Status',
  closable: false,
  onClose: (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    alert('bye bye!')
  }
}

export const None = Template.bind({})

None.args = {
  ...args,
  children: 'Selected',
  closable: true
}

export const Success = Template.bind({})

Success.args = {
  ...args,
  color: 'success'
}

export const Error = Template.bind({})

Error.args = {
  ...args,
  color: 'error'
}

export const Warning = Template.bind({})

Warning.args = {
  ...args,
  color: 'warning'
}

export const Default = Template.bind({})

Default.args = {
  ...args,
  color: 'default'
}
