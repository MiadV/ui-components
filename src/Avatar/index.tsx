import * as React from 'react';
import { Avatar as AntAvatar, AvatarProps as AntAvatarProps } from 'antd';
import './style.css';

export type AvatarProps = AntAvatarProps;

const Avatar: React.FC<AvatarProps> = props => {
  return <AntAvatar {...props} />;
};

Avatar.defaultProps = {};

export default Avatar;
