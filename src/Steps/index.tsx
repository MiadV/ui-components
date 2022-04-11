import * as React from 'react'
import { Steps as AntSteps, StepsProps as AntStepsProps, StepProps as AntStepProps } from 'antd'

import './style.css'

export type StepsProps = AntStepsProps
export type StepProps = AntStepProps

export const { Step } = AntSteps

const Steps: React.FC<StepsProps> = props => <AntSteps {...props} />

Steps.defaultProps = {
  size: 'small'
}

export default Steps
