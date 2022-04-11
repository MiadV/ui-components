import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as Timeline, TimelineItem } from '../index';

export default {
  title: 'Timeline',
  component: Timeline
} as ComponentMeta<typeof Timeline>;

const TimelineTemplate: ComponentStory<typeof Timeline> = (args: any) => (
  <Timeline {...args} />
);

const TimelineItemTemplate: ComponentStory<typeof TimelineItem> = (
  args: any
) => <TimelineItem {...args} />;

export const Individual = TimelineItemTemplate.bind({});

Individual.argTypes = {
  color: {
    options: ['green', 'red', 'yellow', 'grey'],
    control: { type: 'radio' }
  },
  label: {
    disabled: true
  }
};

Individual.args = {
  color: 'green',
  children: 'Completed item 20/01/2022'
};

Individual.decorators = [
  Story => (
    <Timeline>
      <Story />
    </Timeline>
  )
];

export const FullTimeline = TimelineTemplate.bind({});

FullTimeline.args = {
  label: 'Timeline',
  children: (
    <>
      <TimelineItem color={'green'}>Completed item 20/01/2022</TimelineItem>
      <TimelineItem color={'red'}>Completed item 20/01/2022</TimelineItem>
      <TimelineItem color={'yellow'}>Ongoing item 20/01/2022</TimelineItem>
      <TimelineItem color={'grey'}>Unfinished item 20/01/2022</TimelineItem>
    </>
  )
};
