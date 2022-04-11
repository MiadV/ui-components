import * as React from 'react'
import { Popconfirm as AntPopconfirm, PopconfirmProps as AntPopconfirmProps } from 'antd'

import { WarningCircle } from 'phosphor-react'

import './style.css'

export type PopconfirmProps = AntPopconfirmProps

export const NoIcon = <WarningCircle size={16} className={'icon-none'} />
export const WarningIcon = <WarningCircle size={16} color={'#FBBF24'} />

const Popconfirm: React.FC<PopconfirmProps> = props => {
  return <AntPopconfirm {...props} />
}

Popconfirm.defaultProps = {
  cancelButtonProps: { className: 'ant-btn-text' }
}

export default Popconfirm
