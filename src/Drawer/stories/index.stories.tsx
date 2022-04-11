import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Button } from '../../Button';
import { default as Drawer, DrawerProps } from '../index';

export default {
  title: 'Drawer',
  component: Drawer,
  argTypes: {
    placement: {
      options: ['right', 'bottom', 'left', 'top'],
      control: { type: 'radio' }
    },
    children: {
      table: { disable: true }
    }
  }
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (
  args: DrawerProps,
  context
) => {
  const { visible, onClose, children } = context;
  return (
    <Drawer {...args} visible={visible} onClose={onClose}>
      {args.children || children}
    </Drawer>
  );
};

export const BasicDrawer = Template.bind({});

BasicDrawer.args = {
  label: 'Drawer Title',
  title: 'Drawer Title',
  placement: 'right'
};

BasicDrawer.decorators = [
  Story => {
    const [mainDrawerVisible, setMainDrawerVisible] = React.useState(false);
    return (
      <div>
        <Button
          className={'mr-1'}
          type={'primary'}
          onClick={() => setMainDrawerVisible(true)}
        >
          Open Main Drawer
        </Button>
        <Story
          visible={mainDrawerVisible}
          onClose={() => setMainDrawerVisible(false)}
        >
          <p>Some contents</p>
          <p>Some contents</p>
          <p>Some contents</p>
        </Story>
      </div>
    );
  }
];

export const ExtraDrawer = Template.bind({});

ExtraDrawer.args = {
  label: 'Drawer Title',
  title: 'Drawer Title',
  placement: 'right'
};

ExtraDrawer.decorators = [
  Story => {
    const [mainDrawerVisible, setMainDrawerVisible] = React.useState(false);
    const [childrenDrawerVisible, setChildrenDrawerVisible] = React.useState(
      false
    );
    return (
      <div>
        <Button
          className={'mr-1'}
          type={'primary'}
          onClick={() => setMainDrawerVisible(true)}
        >
          Open Main Drawer
        </Button>
        <Story
          visible={mainDrawerVisible}
          onClose={() => setMainDrawerVisible(false)}
        >
          <p>Some contents</p>
          <p>Some contents</p>
          <p>Some contents</p>
          <Button
            className={'mr-1'}
            type={'primary'}
            onClick={() => setChildrenDrawerVisible(true)}
          >
            Open Children Drawer
          </Button>
          <Story
            visible={childrenDrawerVisible}
            onClose={() => setChildrenDrawerVisible(false)}
          >
            <p>Some contents</p>
            <p>Some contents</p>
            <p>Some contents</p>
          </Story>
        </Story>
      </div>
    );
  }
];
