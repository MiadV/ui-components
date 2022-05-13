import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArrowLineUp } from 'phosphor-react';
import Button from '../../Button';
import { default as BackTop, BackTopProps } from '../index'

export default {
  title: 'BackTop',
  component: BackTop,
} as ComponentMeta<typeof BackTop>;

const Template: ComponentStory<typeof BackTop> = (args: BackTopProps) =>{

  return(
    <div style={{ height: '600vh', padding: 8 }}>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <BackTop {...args} >
        <Button shape='circle' size='large' icon={<ArrowLineUp size={16} className="circle" />} />
      </BackTop>
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  label: 'BackTop2'
};
