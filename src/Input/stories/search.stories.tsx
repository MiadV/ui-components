import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Form, FormItemProps } from 'antd'
import { Search, SearchProps } from '../index'

import '../../assets/style/form-item.css';

export default {
  title: 'Input/Search',
  component: Search
} as ComponentMeta<typeof Search>

type Args = {
  formItem: FormItemProps
  input: SearchProps
}

const Template: Story<Args> = (args: Args) => (
  <Form layout='vertical'>
    <Form.Item style={{ width: '320px' }} {...args.formItem}>
      <Search {...args.input} />
    </Form.Item>
  </Form>
)

export const Basic = Template.bind({})

Basic.args = {
  input: {
    label: 'Input',
    placeholder: 'Placeholder',
    allowClear: true
  },
  formItem: {
    label: 'Text field title'
  }
}

export const SearchError = Template.bind({})

SearchError.args = {
  input: {
    label: 'Input',
    placeholder: 'Placeholder',
    allowClear: true
  },
  formItem: {
    label: 'Text field title',
    validateStatus: 'error',
    help: 'Error text here. No more than one line'
  }
}

export const SearchLoading = Template.bind({})

SearchLoading.args = {
  input: {
    label: 'Input',
    placeholder: 'Placeholder',
    allowClear: true,
    loading: true,
    disabled: true
  },
  formItem: {
    label: 'Text field title'
  }
}
