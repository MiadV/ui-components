import * as React from 'react';
import { Avatar as AntAvatar } from 'antd';
import { GroupProps as AntAvatarGroupProps } from 'antd/lib/avatar';
import './style.css';

export type AvatarGroupProps = AntAvatarGroupProps;

const AvatarGroup: React.FC<AvatarGroupProps> = props => {
  return <AntAvatar.Group {...props} />;
};

AvatarGroup.defaultProps = {};

export default AvatarGroup;
