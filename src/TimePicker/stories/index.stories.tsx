import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';

import { TimePicker, TimePickerProps } from '../../DatePicker/index'; 

export default {
  title: 'TimePicker/Basic',
  component: TimePicker,
} as ComponentMeta<typeof TimePicker>;


type Args = TimePickerProps & {
}

const Template: Story<Args> = (args: Args) => <TimePicker style={{ width:"320px" }}{...args} />;


function onChange(time, timeString) {
  return null;
}

export const Basic = Template.bind({});

Basic.args = {
  label: 'TimePicker',
  onChange:{ onChange },
};

export const BasicWithCurrentTime = Template.bind({});

BasicWithCurrentTime.args = {
  label: 'TimePicker',
  onChange:{ onChange },
  hasDone:false,
  defaultValue:new Date(),
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: 'TimePicker',
  disabled:true,
  onChange:{ onChange },
};
