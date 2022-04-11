import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Form, FormItemProps } from 'antd'
import { MagnifyingGlass } from 'phosphor-react'
import { default as Select, SelectProps } from '../index'

import '../../assets/style/form-item.css'

export default {
  title: 'Select',
  component: Select
} as ComponentMeta<typeof Select>

type Args = {
  formItem: FormItemProps
  select: SelectProps
}

const Template: Story<Args> = (args: Args) => (
  <Form layout='vertical'>
    <Form.Item style={{ width: '320px' }} {...args.formItem}>
      <Select {...args.select} />
    </Form.Item>
  </Form>
)

export const Primary = Template.bind({})

Primary.args = {
  select: {
    label: 'Select',
    mode: 'multiple',
    defaultValue: 'SG',
    placeholder: 'Search',
    bordered: false,
    showArrow: true,
    options: [
      { label: 'Poland', value: 'PL' },
      { label: 'Malaysia', value: 'MY' },
      { label: 'Singapore', value: 'SG' },
      { label: 'Indonesia', value: 'In' },
      { label: 'India', value: 'ID' },
      { label: 'Vietname', value: 'VT' }
    ]
  },
  formItem: {
    label: 'Text field title'
  }
}

export const PrimaryBordered = Template.bind({})

PrimaryBordered.args = {
  select: {
    label: 'Select',
    mode: 'multiple',
    defaultValue: 'SG',
    placeholder: 'Search',
    showArrow: true,
    options: [
      { label: 'Poland', value: 'PL' },
      { label: 'Malaysia', value: 'MY' },
      { label: 'Singapore', value: 'SG' },
      { label: 'Indonesia', value: 'In' },
      { label: 'India', value: 'ID' },
      { label: 'Vietname', value: 'VT' }
    ]
  },
  formItem: {
    label: 'Text field title'
  }
}

export const Basic = Template.bind({})

Basic.args = {
  select: {
    label: 'Select',
    mode: 'multiple',
    placeholder: 'Search',
    showArrow: true,
    options: [
      { label: 'Poland', value: 'PL' },
      { label: 'Malaysia', value: 'MY' },
      { label: 'Singapore', value: 'SG' },
      { label: 'Indonesia', value: 'In' },
      { label: 'India', value: 'ID' },
      { label: 'Vietname', value: 'VT' }
    ]
  },
  formItem: {
    label: 'Text field title'
  }
}

export const BasicEmpty = Template.bind({})

BasicEmpty.args = {
  select: {
    label: 'Select',
    mode: 'multiple',
    placeholder: 'Search',
    showArrow: true
  },
  formItem: {
    label: 'Text field title'
  }
}

export const BasicSearch = Template.bind({})

BasicSearch.args = {
  select: {
    label: 'Select',
    mode: 'multiple',
    placeholder: 'Search',
    showArrow: true,
    suffixIcon: <MagnifyingGlass size={16} />,
    options: [
      { label: 'Poland', value: 'PL' },
      { label: 'Malaysia', value: 'MY' },
      { label: 'Singapore', value: 'SG' },
      { label: 'Indonesia', value: 'In' },
      { label: 'India', value: 'ID' },
      { label: 'Vietname', value: 'VT' }
    ]
  },
  formItem: {
    label: 'Text field title'
  }
}

export const BasicDisabled = Template.bind({})

BasicDisabled.args = {
  select: {
    label: 'Select',
    mode: 'multiple',
    defaultValue: 'MY',
    placeholder: 'Search',
    showArrow: true,
    disabled: true,
    options: [
      { label: 'Poland', value: 'PL' },
      { label: 'Malaysia', value: 'MY' },
      { label: 'Singapore', value: 'SG' },
      { label: 'Indonesia', value: 'In' },
      { label: 'India', value: 'ID' },
      { label: 'Vietname', value: 'VT' }
    ]
  },
  formItem: {
    label: 'Text field title'
  }
}

export const BasicHelper = Template.bind({})

BasicHelper.args = {
  select: {
    label: 'Select',
    mode: 'multiple',
    placeholder: 'Select',
    showArrow: true,
    options: [
      { label: 'Poland', value: 'PL' },
      { label: 'Malaysia', value: 'MY' },
      { label: 'Singapore', value: 'SG' },
      { label: 'Indonesia', value: 'In' },
      { label: 'India', value: 'ID' },
      { label: 'Vietname', value: 'VT' }
    ]
  },
  formItem: {
    label: 'Text field title',
    extra: 'Optional helper text here. Wrap text if more tha one line text.'
  }
}

export const BasicError = Template.bind({})

BasicError.args = {
  select: {
    label: 'Select',
    mode: 'multiple',
    placeholder: 'Error',
    showArrow: true,
    options: [
      { label: 'Poland', value: 'PL' },
      { label: 'Malaysia', value: 'MY' },
      { label: 'Singapore', value: 'SG' },
      { label: 'Indonesia', value: 'In' },
      { label: 'India', value: 'ID' },
      { label: 'Vietname', value: 'VT' }
    ]
  },
  formItem: {
    label: 'Text field title',
    validateStatus: 'error',
    help: 'Error text here. No more than one line'
  }
}
