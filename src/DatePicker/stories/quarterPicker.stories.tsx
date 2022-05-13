import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Form, FormItemProps } from 'antd'
import { differenceInDays } from 'date-fns'
import { QuarterPicker } from '../index'

import '../../assets/style/form-item.css'

export default {
  title: 'DatePicker/QuarterPicker',
  component: QuarterPicker
} as ComponentMeta<typeof QuarterPicker>

type Args = {
  formItem: FormItemProps
  datePicker: typeof QuarterPicker
}

const Template: Story<Args> = (args: Args) => {
  return (
    <Form layout='vertical'>
      <Form.Item style={{ width: '320px' }} {...args.formItem}>
        <QuarterPicker
          style={{ width: '320px' }}
          disabledDate={current => {
            return current && differenceInDays(current, new Date()) < 0
          }}
          {...args.datePicker}
        />
      </Form.Item>
    </Form>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  datePicker: {
    label: 'DatePicker',
  },
  formItem: {
    label: 'Date'
  }
}
