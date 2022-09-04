import * as React from 'react'
import { List as AntList, ListProps as AntListProps, Skeleton } from 'antd'
import { ListItemProps as AntListItemProps, ListItemMetaProps as AntListItemMetaProps } from 'antd/lib/list/Item'

import './style.css'

export type ListProps<T> = AntListProps<T>
export type ListItemProps = AntListItemProps
export type ListItemMetaProps = AntListItemMetaProps & { loading?: boolean }

const List = <T extends {}>(props: AntListProps<T>) => <AntList {...props} />
export const ListItem = (props: ListItemProps) => <AntList.Item {...props} />
export const ListItemMeta = (props: ListItemMetaProps) => <AntList.Item.Meta {...props} />
export const ListItemMetaSkeleton = ({ avatar, title, loading, ...restProps }: ListItemMetaProps) => {
  const skeletonAvatar = avatar || false
  const skeletonTitle = title || false
  const skeletonLoading = loading
  return (
    <Skeleton avatar={!!skeletonAvatar} title={!!skeletonTitle} loading={skeletonLoading} active>
      <AntList.Item.Meta avatar={skeletonAvatar} title={skeletonTitle} {...restProps} />
    </Skeleton>
  )
}

List.defaultProps = {
  size: 'default',
  bordered: true
}

export default List
