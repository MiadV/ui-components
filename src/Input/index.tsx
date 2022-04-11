import * as React from 'react'
import { default as AntInput, InputProps as AntInputProps, SearchProps as AntSearchProps } from 'antd/lib/input'

import './style.css'

export type InputProps = AntInputProps

export type SearchProps = AntSearchProps
export const { Search } = AntInput

const Input: React.FC<InputProps> = props => {
  return <AntInput {...props} />
}

export default Input
