import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';

import { TimeRangePicker, TimeRangePickerProps } from '../../DatePicker/index'; 

export default {
  title: 'TimePicker/RangePicker',
  component: TimeRangePicker,
} as ComponentMeta<typeof TimeRangePicker>;


type Args = TimeRangePickerProps & {
}

const Template: Story<Args> = (args: Args) => <TimeRangePicker style={{ width:"320px" }}{...args} />


function onChange(time, timeString) {
  return null;
}

export const Basic = Template.bind({});

Basic.args = {
  label: 'RangePicker',
  onChange:{ onChange },
};

export const Disabled = Template.bind({});

Disabled.args = {
  label: 'RangePicker',
  disabled:true,
  onChange:{ onChange },
};

