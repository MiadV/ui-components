import * as React from 'react'
import { AutoComplete as AntAutoComplete, AutoCompleteProps as AntAutoCompleteProps } from 'antd'

import './style.css'

export type AutoCompleteProps = AntAutoCompleteProps

const AutoComplete: React.FC<AutoCompleteProps> = props => {
  return <AntAutoComplete {...props}></AntAutoComplete>
}

export default AutoComplete
