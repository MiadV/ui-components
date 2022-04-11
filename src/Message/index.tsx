import * as React from 'react';
import { message as AntMessage } from 'antd';
import { ArgsProps } from 'antd/lib/message';

import './style.css';
import {
  CheckCircle,
  CircleNotch,
  Info,
  WarningCircle,
  XCircle
} from 'phosphor-react';

export type MessageProps = ArgsProps;
const iconSize = 16;
const Message = AntMessage;
const originalCalls = { ...Message };

Message.info = ({ icon, ...restArgs }: MessageProps) =>
  originalCalls.info({
    icon: icon || <Info size={iconSize} />,
    ...restArgs
  });

Message.success = ({ icon, ...restArgs }: MessageProps) =>
  originalCalls.success({
    icon: icon || <CheckCircle size={iconSize} />,
    ...restArgs
  });

Message.error = ({ icon, ...restArgs }: MessageProps) =>
  originalCalls.error({
    icon: icon || <XCircle size={iconSize} />,
    ...restArgs
  });

Message.warning = ({ icon, ...restArgs }: MessageProps) =>
  originalCalls.warning({
    icon: icon || <WarningCircle size={iconSize} />,
    ...restArgs
  });

Message.loading = ({ icon, ...restArgs }: MessageProps) =>
  originalCalls.loading({
    icon: icon || <CircleNotch className={'anticon-spin'} size={iconSize} />,
    ...restArgs
  });

export default Message;
