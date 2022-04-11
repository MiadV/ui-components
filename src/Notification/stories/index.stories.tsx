import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { ButtonProps } from '../../Button';
import Notification from '../index';

export default {
  title: 'Notification',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

const message = 'Notification Title';
const description = `This is the content of the notification. Depends on what you want to convey, it’s best to keep it short. Else it’ll be too long.`;
export const Basic = Template.bind({});

Basic.args = {
  label: 'Notification',
  children: 'Button',
  onClick: () =>
    Notification.open({
      message: message,
      description: description
    })
};

export const BasicWithButton = Template.bind({});

BasicWithButton.args = {
  label: 'Notification',
  children: 'Button',
  onClick: () =>
    Notification.open({
      message: message,
      description: description,
      btn: <Button type={'text'}>Button</Button>
    })
};

export const Info = Template.bind({});

Info.args = {
  label: 'Notification',
  children: 'Button',
  onClick: () =>
    Notification.info({
      message: message,
      description: description
    })
};

export const InfoWithButton = Template.bind({});

InfoWithButton.args = {
  label: 'Notification',
  children: 'Button',
  onClick: () =>
    Notification.info({
      message: message,
      description: description,
      btn: <Button type={'text'}>Button</Button>
    })
};

export const Success = Template.bind({});

Success.args = {
  label: 'Notification',
  children: 'Button',
  onClick: () =>
    Notification.success({
      message: message,
      description: description
    })
};

export const SuccessWithButton = Template.bind({});

SuccessWithButton.args = {
  label: 'Notification',
  children: 'Button',
  onClick: () =>
    Notification.success({
      message: message,
      description: description,
      btn: <Button type={'text'}>Button</Button>
    })
};

export const Error = Template.bind({});

Error.args = {
  label: 'Notification',
  children: 'Button',
  onClick: () =>
    Notification.error({
      message: message,
      description: description
    })
};

export const ErrorWithButton = Template.bind({});

ErrorWithButton.args = {
  label: 'Notification',
  children: 'Button',
  onClick: () =>
    Notification.error({
      message: message,
      description: description,
      btn: <Button type={'text'}>Button</Button>
    })
};

export const Warning = Template.bind({});

Warning.args = {
  label: 'Notification',
  children: 'Button',
  onClick: () =>
    Notification.warning({
      message: message,
      description: description
    })
};

export const WarningWithButton = Template.bind({});

WarningWithButton.args = {
  label: 'Notification',
  children: 'Button',
  onClick: () =>
    Notification.warning({
      message: message,
      description: description,
      btn: <Button type={'text'}>Button</Button>
    })
};
