'use strict'

module.exports = ({ componentName}) => {
  return `
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as ${componentName}, ${componentName}Props } from '../index'

export default {
  title: '${componentName}',
  component: ${componentName},
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args: ${componentName}Props) => <${componentName} {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	label: '${componentName}'
};
`.trim()
}
