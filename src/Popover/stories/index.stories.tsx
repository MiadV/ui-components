import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from 'antd';
import { default as Popover, PopoverProps } from '../index'

export default {
  title: 'Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args: PopoverProps) => (

  <Popover {...args} >
    <Button style={{ backgroundColor: 'grey',  margin: '140px' }}>Hover</Button>
  </Popover>
);

const buttonStyle={
  color:"#DE206A",
  fontWeight:"600",
  marginTop:'6px',
  boxShadow:'none',
  fontSize:"12px",
}

const contentButton = (
  <div>
    <p>Content</p>
    <p>Content</p>
    <Button style={ buttonStyle }>Button</Button>
  </div>
);

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export const Top = Template.bind({});

Top.args = {
  label: 'Popover',
  title:"Title",
  content: content,
  placement: 'top',
  color: 'white'
};

export const TopButton = Template.bind({});

TopButton.args = {
  label: 'Popover',
  title:"Title",
  content: contentButton,
  placement: 'top',
  color: 'white',
};

export const Bottom = Template.bind({});

Bottom.args = {
  label: 'Popover',
  title:"Title",
  content: content,
  placement: 'bottom',
  color: 'white',
};

export const BottomButton = Template.bind({});

BottomButton.args = {
  label: 'Popover',
  title:"Title",
  content: contentButton,
  placement: 'bottom',
  color: 'white',
};
