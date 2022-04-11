import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { default as Image, ImageProps } from '../index';

export default {
  title: 'Image',
  component: Image
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args: ImageProps) => (
  <Image {...args} />
);

export const WithImage = Template.bind({});

WithImage.args = {
  label: 'Image',
  width: 96,
  height: 96,
  src:
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
};

export const NoImage = Template.bind({});

NoImage.args = {
  label: 'Image',
  width: 96,
  height: 96,
  src: 'error'
};
