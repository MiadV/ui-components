import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../../Button';
import { default as Alert, AlertProps, AlertWithButtons } from '../index';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    type: {
      options: ['success', 'info', 'warning', 'error'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args: AlertProps) => (
  <Alert {...args} />
);

const message = 'Success Text';
const description =
  'Success Text Success Text Success Text Success Text Success Text';
const type = 'success';

export const Basic = Template.bind({});

Basic.args = {
  label: 'Alert',
  message: message,
  type: type,
  showIcon: false,
  closable: false,
  banner: false
};

export const BasicWithCustomButton = Template.bind({});

BasicWithCustomButton.args = {
  label: 'Alert',
  message: message,
  type: type,
  showIcon: false,
  closable: false,
  banner: false,
  action: (
    <AlertWithButtons>
      <Button type={'text'} size={'small'}>
        Button
      </Button>
    </AlertWithButtons>
  )
};

export const TitleWithDescription = Template.bind({});

TitleWithDescription.args = {
  label: 'Alert',
  message: message,
  description: description,
  type: type,
  showIcon: false,
  closable: false
};

export const TitleWithDescriptionWithCustomButton = Template.bind({});

TitleWithDescriptionWithCustomButton.args = {
  label: 'Alert',
  message: message,
  description: description,
  type: type,
  showIcon: false,
  closable: false,
  action: (
    <AlertWithButtons>
      <Button type={'primary'} size="small" className="mb-2.5">
        Button
      </Button>
      <Button type={'text'} size={'small'}>
        Button
      </Button>
    </AlertWithButtons>
  )
};
