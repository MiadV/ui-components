import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArrowLeft } from 'phosphor-react';
import Button from '../../Button/index';
import { default as PageHeader, PageHeaderProps } from '../index'


export default {
  title: 'PageHeader',
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args: PageHeaderProps) => <PageHeader {...args} />;


const back = () => { window.history.back() }

const routes = [
  {
    path: 'index',
    breadcrumbName: 'Home',
  },
  {
    path: 'first',
    breadcrumbName: 'My Merchants',
  },
  {
    path: 'second',
    breadcrumbName: 'Add New Merchants',
  },
];

export const Basic = Template.bind({});

Basic.args = {
  label: 'PageHeader',
  title:"Header",
  subTitle:"This is the description, one-liner only please."
};


export const BasicWithBack = Template.bind({});

BasicWithBack.args = {
  label: 'PageHeader',
  backIcon:<Button shape="circle" size='large' icon={<ArrowLeft size={16} className="circle" />}/>,
  onBack:back,
  hasBack:true,
  title:"Header",
  subTitle:"This is the description, one-liner only please."
};

export const BasicWithBreadcrumb = Template.bind({});

BasicWithBreadcrumb.args = {
  label: 'PageHeader',
  breadcrumb: { routes },
  title:"Header",
  subTitle:"This is the description, one-liner only please."
};

export const BasicBackWithBreadcrumb = Template.bind({});

BasicBackWithBreadcrumb.args = {
  label: 'PageHeader',
  breadcrumb: { routes },
  backIcon:<Button shape="circle" size='large' icon={<ArrowLeft size={16} className="circle" />}/>,
  onBack:back,
  hasBack:true,
  title:"Header",
  subTitle:"This is the description, one-liner only please."
};
