import * as React from 'react'
import { Result as AntResult, ResultProps as AntResultProps } from 'antd'

import './style.css'
import { ResultStatusType } from 'antd/lib/result'
import Result403IconSVG from '../assets/icons/Result403IconSVG'
import Result404IconSVG from '../assets/icons/Result404IconSVG'
import Result500IconSVG from '../assets/icons/Result500IconSVG'
import ResultInfoIconSVG from '../assets/icons/ResultInfoIconSVG'
import ResultSuccessIconSVG from '../assets/icons/ResultSuccessIconSVG'
import ResultWarningIconSVG from '../assets/icons/ResultWarningIconSVG'

export type ResultProps = AntResultProps
export type ResultChildrenContentProps = {
  icon?: React.ReactNode
  text: string
  button?: React.ReactNode
}
export type ResultChildrenProps = {
  title?: string | React.ReactNode
  content: ResultChildrenContentProps[]
}

const resultIcon = (status: ResultStatusType | undefined, icon: React.ReactNode) => {
  if (status === '403') return <Result403IconSVG />
  else if (status === '404') return <Result404IconSVG />
  else if (status === '500' || status === 'error') return <Result500IconSVG />
  else if (status === 'info') return <ResultInfoIconSVG />
  else if (status === 'success') return <ResultSuccessIconSVG />
  else if (status === 'warning') return <ResultWarningIconSVG />
  else return icon
}

const Result: React.FC<ResultProps> = props => {
  const { status, icon, ...restProps } = props
  return <AntResult icon={resultIcon(status, icon)} {...restProps} />
}

export const ResultChildren: React.FC<ResultChildrenProps> = props => {
  const { title, content } = props
  return (
    <div className="ant-result-children">
      <p className="ant-result-children-title">{title}</p>
      <div>
        {content.map((item, index) => (
          <div key={index} className="ant-result-children-content">
            <div className="ant-result-children-icon-and-text">
              <>{item.icon}</>
              <span>{item.text}</span>
            </div>
            <>{item.button}</>
          </div>
        ))}
      </div>
    </div>
  )
}

Result.defaultProps = {}

export default Result
