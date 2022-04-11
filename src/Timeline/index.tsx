import * as React from 'react';
import {
  Timeline as AntTimeline,
  TimelineItemProps as AntTimelineItemProps,
  TimelineProps as AntTimelineProps
} from 'antd';

import './style.css';

export type TimelineProps = AntTimelineProps;
export type TimelineItemProps = AntTimelineItemProps;

const Timeline: React.FC<TimelineItemProps> = props => (
  <AntTimeline {...props} />
);

export const TimelineItem: React.FC<AntTimelineItemProps> = props => (
  <AntTimeline.Item {...props} />
);

export default Timeline;
