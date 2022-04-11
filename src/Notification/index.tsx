import * as React from 'react';
import { notification as AntNotification } from 'antd';
import { ArgsProps } from 'antd/lib/notification';
import { CheckCircle, Info, WarningCircle, X, XCircle } from 'phosphor-react';

import './style.css';

export type NotificationProps = ArgsProps;
const Notification = AntNotification;
const originalCalls = { ...Notification };

const iconSize = 24;
const customCloseIconSize = 16;
const CustomCloseIcon: React.FC = () => <X size={customCloseIconSize} />;

Notification.open = ({ closeIcon, ...restArgs }: NotificationProps) =>
  originalCalls.open({
    closeIcon: closeIcon || <CustomCloseIcon />,
    ...restArgs
  });

Notification.info = ({ icon, closeIcon, ...restArgs }: NotificationProps) =>
  originalCalls.info({
    icon: icon || <Info size={iconSize} />,
    closeIcon: closeIcon || <CustomCloseIcon />,
    ...restArgs
  });

Notification.success = ({ icon, closeIcon, ...restArgs }: NotificationProps) =>
  originalCalls.success({
    icon: icon || <CheckCircle size={iconSize} />,
    closeIcon: closeIcon || <CustomCloseIcon />,
    ...restArgs
  });

Notification.error = ({ icon, closeIcon, ...restArgs }: NotificationProps) =>
  originalCalls.error({
    icon: icon || <XCircle size={iconSize} />,
    closeIcon: closeIcon || <CustomCloseIcon />,
    ...restArgs
  });

Notification.warning = ({ icon, closeIcon, ...restArgs }: NotificationProps) =>
  originalCalls.warning({
    icon: icon || <WarningCircle size={iconSize} />,
    closeIcon: closeIcon || <CustomCloseIcon />,
    ...restArgs
  });

export default Notification;
