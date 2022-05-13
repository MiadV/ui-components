import * as React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import classNames from 'classnames';

import './style.css';

export type ButtonProps = AntButtonProps & {
  iconPlacement?: 'start' | 'end';
};

const Button: React.FC<ButtonProps> = props => {
  const { children, iconPlacement, className, icon, ...restProps } = props;

  const hasIconPlacement = icon && iconPlacement;

  return (
    <AntButton
      className={classNames(
        className,
        iconPlacement && `icon-${iconPlacement}`
      )}
      icon={iconPlacement ? null : icon}
      {...restProps}
    >
      {hasIconPlacement && iconPlacement === 'start' && icon}
      {children}
      {hasIconPlacement && iconPlacement === 'end' && icon}
    </AntButton>
  );
};

export default Button
