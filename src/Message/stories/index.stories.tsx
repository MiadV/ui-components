import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonProps } from '../../Button';
import Message from '../index';

const hideControl = {
  table: {
    disable: true
  }
};

const restButtonArgTypes = {
  onClick: {
    ...hideControl
  },
  href: {
    ...hideControl
  },
  target: {
    ...hideControl
  },
  htmlType: {
    ...hideControl
  },
  iconPlacement: {
    ...hideControl
  }
};

const buttonArgTypes = {
  ...restButtonArgTypes
};

export default {
  title: 'Message',
  component: Button,
  argTypes: { ...buttonArgTypes }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

const ButtonArgs = {
  label: 'Message',
  children: 'Button',
  type: 'primary'
};
export const Info = Template.bind({});

Info.args = {
  ...ButtonArgs,
  onClick: () => Message.info({ content: 'Normal message to appear here.' })
};

export const Success = Template.bind({});

Success.args = {
  ...ButtonArgs,
  onClick: () => Message.success({ content: 'Success message to appear here.' })
};

export const Error = Template.bind({});

Error.args = {
  ...ButtonArgs,
  onClick: () => Message.error({ content: 'Error message to appear here.' })
};

export const Warning = Template.bind({});

Warning.args = {
  ...ButtonArgs,
  onClick: () => Message.warning({ content: 'Warning message to appear here.' })
};

export const Loading = Template.bind({});

Loading.args = {
  ...ButtonArgs,
  onClick: () => Message.loading({ content: 'Message is loading...' })
};
