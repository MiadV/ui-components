import * as React from 'react'
import { Alert as AntAlert, AlertProps as AntAlertProps } from 'antd'
import { ErrorIconSVG, InfoIconSVG, SuccessIconSVG, WarningIconSVG } from '../assets/icons'

import './style.css'

export type AlertProps = AntAlertProps
type IconTypes = 'success' | 'info' | 'warning' | 'error' | undefined

export const AlertWithButtons: React.FC<any> = ({ children }) => {
  return <div className={'flex flex-col'}>{children}</div>
}

// icons are different based on whether they
// have description prop or not, this function
// standardises them
const iconType = (icon: React.ReactNode, type: IconTypes) => {
  if (type === 'success') return <SuccessIconSVG />
  else if (type === 'info') return <InfoIconSVG />
  else if (type === 'warning') return <WarningIconSVG />
  else if (type === 'error') return <ErrorIconSVG />
  else return icon
}

const Alert: React.FC<AlertProps> = props => {
  const { icon, type } = props
  return <AntAlert icon={iconType(icon, type)} {...props} />
}

export default Alert
