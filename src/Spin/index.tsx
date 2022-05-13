import * as React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin as AntSpin, SpinProps as AntSpinProps } from 'antd'

import './style.css'

export type SpinProps = AntSpinProps
export type DefaultIconProps = {
  size?: number
  color?: string
}
export const spinSizeNumbers = {
  small: 14,
  default: 20,
  large: 32
}

export const DefaultLoadingIcon: React.FC<DefaultIconProps> = ({ size, color }) => (
  <LoadingOutlined style={{ fontSize: size, color: color }} />
)

const Spin: React.FC<SpinProps> = props => {
  return <AntSpin {...props} />
}

DefaultLoadingIcon.defaultProps = {
  size: spinSizeNumbers.default,
  color: 'rgb(51 65 85)'
}

Spin.defaultProps = {
  indicator: <DefaultLoadingIcon />
}

export default Spin
