import * as React from 'react'
import { default as AntCard, CardProps as AntCardProps, CardMetaProps as AntCardMetaProps } from 'antd/lib/card'

import './style.css'

export type CardProps = AntCardProps & {
  hasButton?:boolean,
  hasMetaExtra?:boolean,
}

export type MetaProps = AntCardMetaProps & {
  hasMeta: boolean,
  extra?:React.ReactNode,
}

export const { Meta } = AntCard

const Card: React.FC<CardProps> = props => {
  const { hasButton,hasMetaExtra } = props
  return <AntCard {...props}  className={ [hasButton ? "with-button" : "", hasMetaExtra ? "with-meta-extra" : ""].join(" ")}/>
}

export default Card
