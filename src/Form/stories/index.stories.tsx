import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Input from '../../Input/index';
import { default as Form, FormItem } from '../index'

export default {
  title: 'Form',
  component: Form,
} as ComponentMeta<typeof Form>;

export const Default = () => {

  return (
    <Form layout='vertical'>
      <FormItem label={ "Name" } style={{ width:"320px" }}>
        <Input bordered={ true } placeholder='Enter your name' allowClear/>
      </FormItem>
    </Form>
  )
}

export const error = () => {

  return (
    <Form layout='vertical'>
      <FormItem label={ "Name" } style={{ width:"320px" }} validateStatus={ "error" } help={ "Invalid Password" }>
        <Input bordered={ true } placeholder='Enter your name' allowClear/>
      </FormItem>
    </Form>
  )
}
