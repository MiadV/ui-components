import * as React from 'react'
import { Radio as AntRadio, RadioProps as AntRadioProps } from 'antd'

import './style.css'

export type RadioProps = AntRadioProps

const Radio: React.FC<RadioProps> = props => {
  return <AntRadio {...props} />
}

export default Radio
