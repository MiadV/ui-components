import * as React from 'react'

import { Layout as AntLayout, LayoutProps as AntLayoutProps, Typography } from 'antd'
import { SiderProps as AntSiderProps } from 'antd/lib/layout'
import { BasicProps as AntBasicProps } from 'antd/lib/layout/layout'
import { SiderTheme } from 'antd/lib/layout/Sider'

import './style.css'
import classNames from 'classnames'
import { CaretDoubleLeft, CaretDoubleRight } from 'phosphor-react'
import Avatar from '../Avatar'

import defaults from '../defaults'

export { SiderContextProps, SiderState } from 'antd/lib/layout/Sider'

export const { Header: AntHeader, Content, Footer, Sider } = AntLayout
const { Text, Title } = Typography

export type LayoutProps = AntLayoutProps
export type HeaderProps = LayoutProps & {
  stagingLabel?: string
}
export type SiderProps = AntSiderProps
export type BasicProps = AntBasicProps

export type SharedProps = React.PropsWithChildren<{ className?: string }>

export type LogoutButtonProps = {
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export type SiderHeaderProps = {
  className?: string
  text: React.ReactNode
  avatarText?: React.ReactNode
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export type AvatarTextProps = {
  userText: React.ReactNode
  fullText: React.ReactNode
}

const caretLeft = <CaretDoubleLeft size={16} />
const caretRight = <CaretDoubleRight size={16} />

export const AvatarText: React.FC<AvatarTextProps> = ({ userText, fullText }) => {
  if (userText) return <>{userText}</>

  if (fullText && typeof fullText === 'string')
    return (
      <>
        {fullText
          .split(' ')
          .map(word => word[0])
          .join('')}
      </>
    )

  return <>fullText</> || null
}

export const PageHeaderTitle: React.FC<SharedProps> = ({ children, className }) => (
  <Title level={4} className={classNames('ui-page-title', className)}>
    {children}
  </Title>
)

export const PageHeaderSubtitle: React.FC<SharedProps> = ({ children, className }) => (
  <Typography className={classNames('ui-page-subtitle', className)}>{children}</Typography>
)

export const SiderHeader: React.FC<SiderHeaderProps> = ({ className, text, avatarText, collapsed, setCollapsed }) => {
  const styles = classNames('ui-sider-header', className)

  const InternalAvatarText = React.memo(AvatarText)

  return (
    <div className={styles}>
      <Avatar>
        <InternalAvatarText userText={avatarText} fullText={text} />
      </Avatar>
      <Text>{text}</Text>
      <button className={'ui-sider-header-button'} onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? caretRight : caretLeft}
      </button>
    </div>
  )
}

export const HeaderEndContent: React.FC<SharedProps> = ({ children, className }) => (
  <div className={classNames('ui-header-end', className)}>{children}</div>
)

export const LogoutButton: React.FC<React.PropsWithChildren<LogoutButtonProps>> = ({
  className,
  children,
  onClick
}) => (
  <button className={classNames('ui-btn-log-out', className)} onClick={onClick}>
    {children}
  </button>
)

export const BottomPane: React.FC<SharedProps> = ({ children, className }) => (
  <div className={classNames('ui-bottom-pane', className)}>{children}</div>
)

const Layout: React.FC<LayoutProps> = props => <AntLayout {...props} />

export const Header: React.FC<HeaderProps> = ({ stagingLabel, className, ...restProps }) => {
  // const
  return <AntHeader {...restProps} />
}

Sider.defaultProps = {
  width: 208,
  theme: defaults.theme as SiderTheme
}

LogoutButton.defaultProps = {
  children: 'Log out'
}

export default Layout
