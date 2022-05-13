import * as React from 'react'
import { Input as AntInput, InputProps as AntInputProps } from 'antd'
import { SearchProps as AntSearchProps,  TextAreaProps as AntTextAreaProps } from 'antd/lib/input'

import './style.css'

export type InputProps = AntInputProps
export type SearchProps = AntSearchProps
export type TextAreaProps = AntTextAreaProps
export const { Search, TextArea } = AntInput

const Input: React.FC<InputProps> = props => <AntInput {...props} />

export default Input
