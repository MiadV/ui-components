import * as React from 'react'
import { Skeleton as AntSkeleton, SkeletonProps as AntSkeletonProps } from 'antd'

import { AvatarProps } from 'antd/lib/skeleton/Avatar'
import { SkeletonButtonProps as AntSkeletonButtonProps } from 'antd/lib/skeleton/Button'
import { SkeletonImageProps as AntSkeletonImageProps } from 'antd/lib/skeleton/Image'
import { SkeletonInputProps as AntSkeletonInputProps } from 'antd/lib/skeleton/Input'
import './style.css'

export type SkeletonProps = AntSkeletonProps
export type SkeletonAvatarProps = AvatarProps
export type SkeletonButtonProps = AntSkeletonButtonProps
export type SkeletonInputProps = AntSkeletonInputProps
export type SkeletonImageProps = AntSkeletonImageProps

const Skeleton: React.FC<SkeletonProps> = props => <AntSkeleton {...props} />
export const SkeletonAvatar: React.FC<SkeletonAvatarProps> = props => <AntSkeleton.Avatar {...props} />
export const SkeletonButton: React.FC<SkeletonButtonProps> = props => <AntSkeleton.Button {...props} />
export const SkeletonInput: React.FC<SkeletonInputProps> = props => <AntSkeleton.Input {...props} />
export const SkeletonImage = (props: SkeletonImageProps) => <AntSkeleton.Image {...props} />

Skeleton.defaultProps = {
  active: true
}

export default Skeleton
