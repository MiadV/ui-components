import * as React from 'react'
import { Divider as AntDivider, DividerProps as AntDividerProps } from 'antd'

import './style.css'

export type DividerProps = AntDividerProps

const Divider: React.FC<DividerProps> = props => {
  return <AntDivider {...props} />
}

Divider.defaultProps = {}

export default Divider
