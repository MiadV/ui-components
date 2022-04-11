import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from '../../Avatar';
import { default as AvatarGroup, AvatarGroupProps } from '../index';

export default {
  title: 'AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    size: {
      options: [64, 'large', 'default', 'small'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof AvatarGroup>;

const Template: ComponentStory<typeof AvatarGroup> = (
  args: AvatarGroupProps
) => <AvatarGroup {...args} />;

export const Text = Template.bind({});

Text.args = {
  label: 'AvatarGroup',
  size: 64,
  children: (
    <>
      <Avatar>KS</Avatar>
      <Avatar>KS</Avatar>
      <Avatar>KS</Avatar>
    </>
  )
};

export const Images = Template.bind({});

Images.args = {
  label: 'AvatarGroup',
  size: 64,
  children: (
    <>
      <Avatar src={'https://joeschmoe.io/api/v1/random'} />
      <Avatar src={'https://joeschmoe.io/api/v1/random'} />
      <Avatar src={'https://joeschmoe.io/api/v1/random'} />
    </>
  )
};

export const Mixed = Template.bind({});

Mixed.args = {
  label: 'AvatarGroup',
  size: 64,
  children: (
    <>
      <Avatar src={'https://joeschmoe.io/api/v1/random'} />
      <Avatar>KS</Avatar>
      <Avatar src={'https://joeschmoe.io/api/v1/random'} />
    </>
  )
};
