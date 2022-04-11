import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Form, FormItemProps } from 'antd'
import { differenceInDays } from 'date-fns'
import { ArrowRight } from 'phosphor-react'
import { RangePicker } from '../index'

import '../../assets/style/form-item.css'

export default {
  title: 'DatePicker/RangePicker',
  component: RangePicker
} as ComponentMeta<typeof RangePicker>

type Args = {
  formItem: FormItemProps
  datePicker: typeof RangePicker
}

const Template: Story<Args> = (args: Args) => {
  return (
    <Form layout='vertical'>
      <Form.Item style={{ width: '320px' }} {...args.formItem}>
        <RangePicker
          style={{ width: '320px' }}
          {...args.datePicker}
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
    label: 'RangePicker',
    showToday: false,
    format: 'DD/MM/YYYY',
    dateRange: true,
    separator: <ArrowRight />
  },
  formItem: {
    label: 'Date'
  }
}

export const Error = Template.bind({})

Error.args = {
  datePicker: {
    label: 'RangePicker',
    showToday: false,
    format: 'DD/MM/YYYY',
    dateRange: true,
    separator: <ArrowRight />
  },
  formItem: {
    label: 'Date',
    validateStatus: 'error',
    help: 'Error text here. No more than one line'
  }
}
