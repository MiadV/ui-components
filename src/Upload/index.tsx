import * as React from 'react'
import { Upload as AntUpload, UploadProps as AntUploadProps } from 'antd'
import { DraggerProps as AntDraggerProps } from 'antd/lib/upload'
import { ShowUploadListInterface, UploadListProgressProps } from 'antd/lib/upload/interface'

import { UploadSimple, Trash, Eye } from 'phosphor-react'

import './style.css'

export type UploadProps<T> = React.PropsWithChildren<AntUploadProps<T>>

export type DraggerProps = AntDraggerProps & {
  Icon?: React.ReactNode
  Text?: React.ReactNode
  Hint?: React.ReactNode
}

export type UploadButtonContentProps = React.PropsWithChildren<{
  Icon?: React.ReactNode
}>

export const defaultIconOptions: ShowUploadListInterface = {
  previewIcon: <Eye size={16} color={'white'} />,
  removeIcon: <Trash size={16} color={'white'} />
}

export const defaultProgressOptions: UploadListProgressProps = { strokeWidth: 2, showInfo: true }

export const UploadButtonContent = ({ Icon, children }: UploadButtonContentProps) => (
  <>
    {Icon}
    <span>{children}</span>
  </>
)

export const Upload = <T,>({ progress, listType, ...restProps }: UploadProps<T>) => {
  const progressProps: UploadListProgressProps | undefined =
    progress || (!listType ? defaultProgressOptions : undefined)

  return <AntUpload showUploadList listType={listType} progress={progressProps} {...restProps} />
}

export const Dragger: React.FC<DraggerProps> = ({ Icon, showUploadList, Text, Hint, ...restProps }: DraggerProps) => {
  const progressProps = showUploadList || defaultIconOptions

  return (
    <AntUpload.Dragger showUploadList={progressProps} {...restProps}>
      <p className="icon">{Icon}</p>
      <p className="ant-upload-text">{Text}</p>
      <p className="ant-upload-hint">{Hint}</p>
    </AntUpload.Dragger>
  )
}

Upload.defaultProps = {
  showUploadList: defaultIconOptions
}

Dragger.defaultProps = {
  progress: defaultProgressOptions,
  Icon: <UploadSimple size={24} weight={'light'} />,
  Text: 'Click or drag file to this area to upload',
  Hint: 'Each file size is limited to 50MB'
}

UploadButtonContent.defaultProps = {
  Icon: <UploadSimple size={16} weight={'light'} />,
  children: 'Upload'
}

export default Upload
