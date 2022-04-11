import React from 'react'
import { Story, ComponentMeta } from '@storybook/react'
import { Form, FormItemProps } from 'antd'
import { default as Input, InputProps } from '../index'

import '../../assets/style/form-item.css';

export default {
  title: 'Input/Basic',
  component: Input
} as ComponentMeta<typeof Input>

type Args = {
  formItem: FormItemProps
  input: InputProps
}

const Template: Story<Args> = (args: Args) => (
  <Form layout='vertical'>
    <Form.Item style={{ width: '320px' }} {...args.formItem}>
      <Input {...args.input} />
    </Form.Item>
  </Form>
)

export const Basic = Template.bind({})

Basic.args = {
  input: {
    label: 'Input',
    placeholder: 'Placeholder',
    allowClear: true,
    bordered: false
  },
  formItem: {
    label: 'Text field title'
  }
}

export const BasicBordered = Template.bind({})

BasicBordered.args = {
  input: {
    label: 'Input',
    placeholder: 'Placeholder',
    allowClear: true
  },
  formItem: {
    label: 'Text field title'
  }
}

export const BasicError = Template.bind({})

BasicError.args = {
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

export const BasicDisabled = Template.bind({})

BasicDisabled.args = {
  input: {
    label: 'Input',
    placeholder: 'Disabled',
    allowClear: true,
    disabled: true
  },
  formItem: {
    label: 'Text field title'
  }
}
