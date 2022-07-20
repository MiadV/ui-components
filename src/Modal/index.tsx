import * as React from 'react'
import { Modal as AntModal, ModalFuncProps as AntModalFuncProps, ModalProps as AntModalProps } from 'antd'
import classNames from 'classnames'

import { X, Info, WarningCircle, XCircle } from 'phosphor-react'

import Button from '../Button'

import './style.css'

export type ModalProps = AntModalProps & {
  icon?: React.ReactNode
  confirmMode?: boolean
  modalFunc: (args: ModalFuncProps) => void
}

export type ModalFuncProps = AntModalFuncProps & {
  hasIcon?: boolean
  confirmMode?: boolean
}

const getClassName = ({ className, hasIcon }: ModalFuncProps) => {
  return classNames(className, hasIcon ? 'with-icon' : '')
}

const defaultWidth = 352
const defaultCloseIcon = <X size={16} />

const originalFunctions = { ...AntModal }

export const ModalFunctions = {
  confirm: ({
    closeIcon = defaultCloseIcon,
    closable = true,
    icon,
    hasIcon,
    width = defaultWidth,
    ...restProps
  }: ModalFuncProps) => {
    return originalFunctions.confirm({
      ...restProps,
      className: getClassName(restProps),
      icon: hasIcon ? icon : null,
      cancelButtonProps: { ...restProps.cancelButtonProps, className: 'ant-btn-text' },
      closable,
      closeIcon,
      width
    })
  },
  error: ({
    closeIcon = defaultCloseIcon,
    closable = true,
    icon = <XCircle size={24} color={'#DC2626'} />,
    confirmMode,
    width = defaultWidth,
    ...restProps
  }: ModalFuncProps) => {
    return confirmMode === undefined || confirmMode
      ? AntModal.confirm({
        ...restProps,
        className: getClassName(restProps),
        icon,
        cancelButtonProps: { ...restProps.cancelButtonProps, className: 'ant-btn-text' },
        closable,
        closeIcon,
        width
      })
      : originalFunctions.error({
        ...restProps,
        className: getClassName(restProps),
        icon,
        closable,
        closeIcon,
        width
      })
  },
  warning: ({
    closeIcon = defaultCloseIcon,
    closable = true,
    icon = <WarningCircle size={24} color={'#FBBF24'} />,
    confirmMode,
    width = defaultWidth,
    ...restProps
  }: ModalFuncProps) => {
    return confirmMode === undefined || confirmMode
      ? AntModal.confirm({
        ...restProps,
        className: getClassName(restProps),
        icon,
        cancelButtonProps: { ...restProps.cancelButtonProps, className: 'ant-btn-text' },
        closable,
        closeIcon,
        width
      })
      : originalFunctions.warning({
        ...restProps,
        className: getClassName(restProps),
        icon,
        closable,
        closeIcon,
        width
      })
  },
  info: ({
    closeIcon = defaultCloseIcon,
    closable = true,
    icon = <Info size={24} color={'#334155'} />,
    confirmMode,
    width = defaultWidth,
    ...restProps
  }: ModalFuncProps) => {
    return confirmMode === undefined || confirmMode
      ? AntModal.confirm({
        ...restProps,
        className: getClassName(restProps),
        icon,
        cancelButtonProps: { ...restProps.cancelButtonProps, className: 'ant-btn-text' },
        closable,
        closeIcon,
        width
      })
      : originalFunctions.info({
        ...restProps,
        className: getClassName(restProps),
        icon,
        closable,
        closeIcon,
        width
      })
  }
}

const Modal: React.FC<ModalProps> = props => {
  return <Button onClick={() => props.modalFunc({ ...props })}>Press Me</Button>
}

export default Modal
