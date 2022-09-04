import * as React from 'react'
import { Comment as AntComment, CommentProps as AntCommentProps, Form } from 'antd'

import './style.css'
import Avatar from '../Avatar'
import Button from '../Button'
import { TextArea } from '../Input'
import List from '../List'

export type CommentOptionalProps = {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
  value?: string
}
export type CommentLoggedInUserProps = {
  loggedInAuthor: string
  loggedInAvatar?: React.ReactElement
}
export type CommentAuthorProps = {
  author: string
  avatar?: React.ReactElement
}
export type CommentProps = AntCommentProps & CommentOptionalProps
export type CommentEditorProps = CommentLoggedInUserProps & {
  onCancel?: () => void
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
  onSubmit: () => void
  submitting: boolean
  value: string
}
export type CommentListCommentsTypes = {
  key: string
  author: string
  avatar: React.ReactElement
  children?: React.ReactNode
  content: React.ReactNode
  datetime: string
}
export type RecursiveCommentsProps = CommentProps &
  CommentLoggedInUserProps &
  CommentEditorProps &
  CommentAuthorProps & {
    key: string
    parentkey?: string
    replyToID: string
    setReplyToID: (value: string | undefined) => void
  }

export type CommentListProps = CommentLoggedInUserProps &
  CommentEditorProps & {
    comments: CommentListCommentsTypes[]
    commentsLength: number
    replyToID: string
    setReplyToID: (value: string | undefined) => void
  }

export const Comment: React.FC<CommentProps> = props => <AntComment {...props} />

const authorInitials = (name: string) => {
  // take max first two initials
  return name
    .split(' ')
    .splice(0, 2)
    .map(item => item[0])
    .join(' ')
}

export const avatarContent = (authorName: string, avatarURL?: React.ReactElement | string) => {
  if (avatarURL && typeof avatarURL === 'string') return <Avatar src={avatarURL} />
  else if (avatarURL && typeof avatarURL !== 'string') return avatarURL
  else return <Avatar>{authorInitials(authorName)}</Avatar>
}

export const CommentEditor: React.FC<CommentEditorProps> = props => {
  const { loggedInAuthor, loggedInAvatar, onChange, onSubmit, onCancel, submitting, value } = props

  return (
    <Comment
      avatar={avatarContent(loggedInAuthor, loggedInAvatar)}
      content={
        <>
          <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
          </Form.Item>
          <Form.Item>
            <Button loading={submitting} onClick={onSubmit} type="primary">
              Submit
            </Button>
            {onCancel && (
              <Button onClick={onCancel} type="text">
                Cancel
              </Button>
            )}
          </Form.Item>
        </>
      }
    />
  )
}

export const RecursiveComments: React.FC<RecursiveCommentsProps> = props => {
  const {
    parentkey,
    replyToID,
    setReplyToID,
    submitting,
    content,
    author,
    avatar,
    onChange,
    onSubmit,
    onCancel,
    value,
    loggedInAuthor,
    loggedInAvatar,
    ...restProps
  } = props
  const children = props.children as []
  const actions = parentkey && [
    <span
      key="comment-nested-reply-to"
      onClick={() => {
        if (setReplyToID) {
          setReplyToID(parentkey)
        }
      }}
    >
      Reply to
    </span>
  ]

  return (
    <Comment
      {...restProps}
      author={author}
      avatar={avatar}
      actions={actions || []}
      content={<>{content}</>}
      onChange={onChange}
      value={value}
    >
      {replyToID === parentkey && (
        <div>
          {/* nested comment's reply to comment box */}
          {/* attach logged in user details here */}
          <CommentEditor
            loggedInAuthor={loggedInAuthor}
            loggedInAvatar={loggedInAvatar}
            onChange={onChange}
            onSubmit={onSubmit}
            onCancel={onCancel}
            submitting={submitting}
            value={value}
          />
        </div>
      )}
      {children &&
        children.map((item: RecursiveCommentsProps) => {
          return (
            <RecursiveComments
              {...item}
              author={`${item.author} • ${item.datetime}`}
              avatar={avatarContent(item.author, item.avatar)}
              datetime={``}
              key={item.key}
              parentkey={item.key}
              replyToID={replyToID}
              setReplyToID={setReplyToID}
              content={<>{item.content}</>}
              onSubmit={onSubmit}
              onCancel={onCancel}
              submitting={submitting}
              loggedInAuthor={loggedInAuthor}
              loggedInAvatar={loggedInAvatar}
            />
          )
        })}
    </Comment>
  )
}

export const CommentList: React.FC<CommentListProps> = props => {
  const {
    loggedInAuthor,
    loggedInAvatar,
    comments,
    commentsLength,
    setReplyToID,
    replyToID,
    onChange,
    onSubmit,
    onCancel,
    submitting,
    value
  } = props
  return (
    <>
      <List
        bordered={false}
        dataSource={comments}
        header={`${commentsLength} ${comments.length > 1 ? 'replies' : 'reply'}`}
        itemLayout="horizontal"
        renderItem={renderProps => {
          const { author, datetime, key, avatar, ...restRenderProps } = renderProps
          // first level node always appear here
          return (
            <>
              <RecursiveComments
                {...restRenderProps}
                key={key}
                author={`${author} • ${datetime}`}
                avatar={avatarContent(author, avatar)}
                loggedInAuthor={loggedInAuthor}
                loggedInAvatar={avatarContent(loggedInAuthor, loggedInAvatar)}
                datetime={``}
                setReplyToID={setReplyToID}
                replyToID={replyToID}
                parentkey={key}
                onChange={onChange}
                onCancel={onCancel}
                onSubmit={onSubmit}
                submitting={submitting}
                value={value}
              />
            </>
          )
        }}
      />
      {/* first level comment's reply to comment box */}
      {/* attach logged in user avatar here */}
      {!replyToID && (
        <CommentEditor
          loggedInAuthor={loggedInAuthor}
          loggedInAvatar={avatarContent(loggedInAuthor, loggedInAvatar)}
          onChange={onChange}
          onSubmit={onSubmit}
          submitting={submitting}
          value={value}
        />
      )}
    </>
  )
}

export default Comment
