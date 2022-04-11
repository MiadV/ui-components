import * as React from 'react'
import { Tooltip as AntTooltip, TooltipProps as AntTooltipProps } from 'antd'

import './style.css'

export type TooltipProps = AntTooltipProps

const Tooltip: React.FC<TooltipProps> = props => {
  return <AntTooltip {...props} />
}

export default Tooltip
