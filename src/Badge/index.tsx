import * as React from 'react';
import { Badge as AntBadge, BadgeProps as AntBadgeProps } from 'antd';
import './style.css';

export type BadgeProps = AntBadgeProps;

const Badge: React.FC<BadgeProps> = props => {
  return <AntBadge {...props} />;
};

Badge.defaultProps = {};

export default Badge;
