import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from 'antd'
import { XCircle, CheckCircle, Info } from 'phosphor-react'
import { default as Popconfirm, NoIcon, PopconfirmProps, WarningIcon } from '../index'

export default {
  title: 'Popconfirm',
  component: Popconfirm
} as ComponentMeta<typeof Popconfirm>

const Template: ComponentStory<typeof Popconfirm> = (args: PopconfirmProps) => {
  return (
    <Popconfirm {...args}>
      <Button type="primary" style={{ margin: '150px' }}>
        Click Me
      </Button>
    </Popconfirm>
  )
}

export const Top = Template.bind({})

Top.args = {
  label: 'Popconfirm',
  title: 'Are you sure you wish to delete this task',
  placement: 'top',
  icon: NoIcon,
  onConfirm: { confirm },
  okText: 'Button',
  cancelText: 'Button'
}

export const TopWarningIcon = Template.bind({})

TopWarningIcon.args = {
  label: 'Popconfirm',
  title: 'Are you sure you wish to delete this task',
  placement: 'top',
  icon: WarningIcon,
  onConfirm: { confirm },
  okText: 'Button',
  cancelText: 'Button'
}

export const TopInfoIcon = Template.bind({})

TopInfoIcon.args = {
  label: 'Popconfirm',
  title: 'Are you sure you wish to delete this task',
  placement: 'top',
  icon: <Info size={16} />,
  onConfirm: { confirm },
  okText: 'Button',
  cancelText: 'Button'
}

export const TopErrorIcon = Template.bind({})

TopErrorIcon.args = {
  label: 'Popconfirm',
  title: 'Are you sure you wish to delete this task',
  placement: 'top',
  icon: <XCircle size={16} color={'#DC2626'} />,
  onConfirm: { confirm },
  okText: 'Button',
  cancelText: 'Button'
}

export const TopSuccessIcon = Template.bind({})

TopSuccessIcon.args = {
  label: 'Popconfirm',
  title: 'Are you sure you wish to delete this task',
  placement: 'top',
  icon: <CheckCircle size={16} color={'#10B981'} />,
  onConfirm: { confirm },
  okText: 'Button',
  cancelText: 'Button'
}

export const Bottom = Template.bind({})

Bottom.args = {
  label: 'Popconfirm',
  title: 'Are you sure you wish to delete this task',
  placement: 'bottom',
  icon: NoIcon,
  onConfirm: { confirm },
  okText: 'Button',
  cancelText: 'Button'
}

export const BottomIcon = Template.bind({})

BottomIcon.args = {
  label: 'Popconfirm',
  title: 'Are you sure you wish to delete this task',
  placement: 'bottom',
  icon: WarningIcon,
  onConfirm: { confirm },
  okText: 'Button',
  cancelText: 'Button'
}
