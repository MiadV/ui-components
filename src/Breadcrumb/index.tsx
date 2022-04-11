import * as React from 'react'
import {
  default as AntBreadcrumb,
  BreadcrumbProps as AntBreadcrumbProps,
  BreadcrumbItemProps as AntBreadcrumbItemProps
} from 'antd/lib/breadcrumb'

import './style.css'
import { default as BreadcrumbItemType } from 'antd/lib/breadcrumb/BreadcrumbItem';

export type BreadcrumbProps = AntBreadcrumbProps
export type BreadcrumbItemProps = AntBreadcrumbItemProps

export const BreadcrumbItem : typeof BreadcrumbItemType = AntBreadcrumb.Item;

const Breadcrumb: React.FC<BreadcrumbProps> = props => {
  return <AntBreadcrumb {...props} />
}

export default Breadcrumb
