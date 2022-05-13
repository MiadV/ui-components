import * as React from 'react'
import { Tag as AntTag, TagProps as AntTagProps } from 'antd'
import { X } from 'phosphor-react'

import './style.css'

export type TagProps = AntTagProps

const Tag: React.FC<TagProps> = props => {
  return <AntTag {...props} />
}

Tag.defaultProps = {
  closeIcon: <X size={12} />
}

export default Tag
