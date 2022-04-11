import * as React from 'react'
import { Progress as AntProgress, ProgressProps as AntProgressProps } from 'antd'

import './style.css'

export type ProgressProps = AntProgressProps

// AntProgress does NOT support passing icons
const Progress: React.FC<ProgressProps> = ({ size, strokeWidth, ...restProps }) => {
  const defaultStrokeWidth = strokeWidth || (size && size === 'small' ? 4 : 6)

  return <AntProgress strokeWidth={defaultStrokeWidth} size={size} {...restProps} />
}

export default Progress
