import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Collapse, CollapseProps, CollapsePanel } from '../index';

export default {
  title: 'Collapse',
  component: Collapse
} as ComponentMeta<typeof Collapse>;

const Template: ComponentStory<typeof Collapse> = (args: CollapseProps) => (
  <Collapse {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Collapse',
  children: (
    <>
      <CollapsePanel key={1} header={'This is panel header 1'}>
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </CollapsePanel>
      <CollapsePanel key={2} header={'This is panel header 1'}>
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </CollapsePanel>
      <CollapsePanel key={3} header={'This is panel header 1'}>
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </CollapsePanel>
    </>
  )
};
