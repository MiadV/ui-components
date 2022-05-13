import * as React from 'react'
import { Tree as AntTree, TreeProps as AntTreeProps } from 'antd'

import './style.css'

export type TreeProps = AntTreeProps

const Tree: React.FC<TreeProps> = props => {
  return <AntTree {...props} />
}

Tree.defaultProps = {
  treeData: []
}

export default Tree
