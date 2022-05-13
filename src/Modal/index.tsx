import * as React from 'react';
import {
  Modal as AntModal,
  ModalFuncProps as AntModalFuncProps,
  ModalProps as AntModalProps
} from 'antd';
import classNames from 'classnames';

import { X, Info, WarningCircle, XCircle } from 'phosphor-react';

import Button from '../Button';

import './style.css';

export type ModalProps = AntModalProps & {
  icon?: React.ReactNode;
  confirmMode?: boolean;
  modalFunc: (args: ModalFuncProps) => void;
};

export type ModalFuncProps = AntModalFuncProps & {
  hasIcon?: boolean;
  confirmMode?: boolean;
};

const getClassName = ({ className, hasIcon }: ModalFuncProps) => {
  return classNames(className, hasIcon ? 'with-icon' : '');
};

const defaultCloseIcon = <X size={16} />;

const originalFunctions = { ...AntModal };

export const ModalFunctions = {
  confirm: ({
    closeIcon = defaultCloseIcon,
    closable = true,
    icon,
    hasIcon,
    ...restProps
  }: ModalFuncProps) => {
    return originalFunctions.confirm({
      ...restProps,
      className: getClassName(restProps),
      icon: hasIcon ? icon : null,
      cancelButtonProps: { className: 'ant-btn-text' },
      closable,
      closeIcon
    });
  },
  error: ({
    closeIcon = defaultCloseIcon,
    closable = true,
    icon = <XCircle size={24} color={'#DC2626'} />,
    confirmMode,
    ...restProps
  }: ModalFuncProps) => {
    return confirmMode === undefined || confirmMode
      ? AntModal.confirm({
        ...restProps,
        className: getClassName(restProps),
        icon: icon,
        cancelButtonProps: { className: 'ant-btn-text' },
        closable,
        closeIcon
      })
      : originalFunctions.error({
        ...restProps,
        className: getClassName(restProps),
        icon: icon,
        closable,
        closeIcon
      });
  },
  warning: ({
    closeIcon = defaultCloseIcon,
    closable = true,
    icon = <WarningCircle size={24} color={'#FBBF24'} />,
    confirmMode,
    ...restProps
  }: ModalFuncProps) => {
    return confirmMode === undefined || confirmMode
      ? AntModal.confirm({
        ...restProps,
        className: getClassName(restProps),
        icon: icon,
        cancelButtonProps: { className: 'ant-btn-text' },
        closable,
        closeIcon
      })
      : originalFunctions.warning({
        ...restProps,
        className: getClassName(restProps),
        icon: icon,
        closable,
        closeIcon
      });
  },
  info: ({
    closeIcon = defaultCloseIcon,
    closable = true,
    icon = <Info size={24} color={'#334155'} />,
    confirmMode,
    ...restProps
  }: ModalFuncProps) => {
    return confirmMode === undefined || confirmMode
      ? AntModal.confirm({
        ...restProps,
        className: getClassName(restProps),
        icon: icon,
        cancelButtonProps: { className: 'ant-btn-text' },
        closable,
        closeIcon
      })
      : originalFunctions.info({
        ...restProps,
        className: getClassName(restProps),
        icon: icon,
        closable,
        closeIcon
      });
  }
};

const Modal: React.FC<ModalProps> = props => {
  return (
    <Button onClick={() => props.modalFunc({ ...props })}>Press Me</Button>
  );
};

export default Modal;
