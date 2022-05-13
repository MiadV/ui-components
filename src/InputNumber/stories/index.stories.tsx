import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form } from 'antd'
import { default as InputNumber, InputNumberProps } from '../index'

import '../../assets/style/form-item.css';

export default {
  title: 'InputNumber',
  component: InputNumber,
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args: InputNumberProps) => <InputNumber style={{ width:"320px" }} {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  label: 'InputNumber',
  controls:false,
  bordered:false,
};

export const BasicDisabled = Template.bind({});

BasicDisabled.args = {
  label: 'InputNumber',
  controls:false,
  bordered:false,
  disabled:true,
  value:123,
};

export const PrefixCurrencyRM = Template.bind({});

PrefixCurrencyRM.args = {
  label: 'InputNumber',
  controls:false,
  bordered:false,
  prefix:"RM"
};

export const PrefixCurrencyRMDisbaled = Template.bind({});

PrefixCurrencyRMDisbaled.args = {
  label: 'InputNumber',
  controls:false,
  bordered:false,
  prefix:"RM",
  value:123,
  disabled:true,
};


export const PrefixCurrencySG = Template.bind({});

PrefixCurrencySG.args = {
  label: 'InputNumber',
  controls:false,
  bordered:false,
  prefix:"$S"
};

export const PrefixCurrencyRP = Template.bind({});

PrefixCurrencyRP.args = {
  label: 'InputNumber',
  controls:false,
  bordered:false,
  prefix:"Rp"
};

export const BasicPercentage = Template.bind({});

BasicPercentage.args = {
  label: 'InputNumber',
  controls:false,
  min:0,
  max:100,
  bordered:false,
  formatter:(value => `${value}%`),
  parser:(value => value.replace('%', ''))
};

export const BasicResponsive = () => {
  return(
    <div style={{ width:"320px", display:"flex" }}>
      <InputNumber
        style={{ flexBasis:"fit-content",marginRight:"16px" }}
        controls={false}
        bordered={false}
      />
      <InputNumber
        style={{ flexBasis:"fit-content" }}
        controls={false}
        bordered={false}
      />
    </div>
  );
}

export const Error = () => {
  return(
    <Form layout='vertical'>
      <Form.Item label='Text field title' validateStatus='error' help='Error text here. No more than one line'>
        <InputNumber
          style={{ flexBasis:"fit-content",width: '320px'  }}
          controls={false}
          bordered={false}
        />
      </Form.Item>
    </Form>
  );
}

export const ErrorCurrency = () => {
  return(
    <Form layout='vertical'>
      <Form.Item label='Text field title' validateStatus='error' help='Error text here. No more than one line'>
        <InputNumber
          prefix={"RM"}
          style={{ flexBasis:"fit-content",width: '320px'  }}
          controls={false}
          bordered={false}
        />
      </Form.Item>
    </Form>
  );
}


