import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Avatar from '../../Avatar'
import { default as Comment, CommentProps, CommentList, CommentListCommentsTypes, avatarContent } from '../index'

export default {
  title: 'Comment',
  component: Comment
} as ComponentMeta<typeof Comment>

const Template: ComponentStory<typeof Comment> = (args: CommentProps) => <Comment {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Comment',
  author: 'Han Solo • A few seconds ago',
  avatar: <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />,
  content: (
    <p>
      We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),
      to help people create their product prototypes beautifully and efficiently.
    </p>
  )
}

type ReducerPropsType = {
  commentsLength: number
  comments: CommentProps[]
  submitting: boolean
  value: string
  replyToId: string | undefined
}

type ReducerActionsType = 'handleSubmit' | 'setValue' | 'setIsSubmit' | 'setReplyToID'

export const CommentsSection: React.FC = () => {
  const initialValues = {
    commentsLength: 7,
    comments: [
      {
        key: '1',
        author: 'Katelyn',
        // avatar: <Avatar>KS</Avatar>,
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        datetime: 'A few seconds ago',
        children: [
          {
            key: '1-1',
            author: 'Han Solo',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            datetime: 'A few seconds ago',
            children: [
              {
                key: '1-1-1',
                author: 'Katelyn',
                // avatar: <Avatar>KS</Avatar>,
                content:
                  'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                datetime: 'A few seconds ago',
                children: [
                  {
                    key: '1-1-1-1',
                    author: 'Han Solo',
                    avatar: 'https://joeschmoe.io/api/v1/random',
                    content:
                      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    datetime: 'A few seconds ago'
                  }
                ]
              },
              {
                key: '1-1-2',
                author: 'Han Solo',
                avatar: 'https://joeschmoe.io/api/v1/random',
                content:
                  'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                datetime: 'A few seconds ago'
              }
            ]
          },
          {
            key: '1-2',
            author: 'Han Solo',
            avatar: 'https://joeschmoe.io/api/v1/random',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            datetime: 'A few seconds ago'
          }
        ]
      },
      {
        key: '2',
        author: 'Han Solo With No Profile Picture',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        datetime: 'A few seconds ago'
      }
    ],
    submitting: false,
    value: '',
    replyToId: undefined
  }

  const reducer = (state: ReducerPropsType, action: { type: ReducerActionsType; payload: any }) => {
    switch (action.type) {
      case 'handleSubmit':
        return {
          ...state,
          ...action.payload,
          commentsLength: state.commentsLength + 1
        }
      case 'setValue':
        return {
          ...state,
          value: action.payload
        }
      case 'setIsSubmit':
        return {
          ...state,
          submitting: action.payload
        }
      case 'setReplyToID':
        return {
          ...state,
          replyToId: action.payload
        }
    }
  }

  const [{ comments, commentsLength, submitting, value, replyToId }, dispatch] = React.useReducer(
    reducer,
    initialValues
  )

  const loggedInPersonAvatar = 'https://joeschmoe.io/api/v1/random'

  const handleChange = e => {
    dispatch({ type: 'setValue', payload: e.target.value })
  }

  const setReplyToID = (e: string) => {
    dispatch({ type: 'setReplyToID', payload: e })
  }

  const handleSubmit = () => {
    if (!value) {
      return
    }
    dispatch({ type: 'setIsSubmit', payload: true })
    const level = replyToId && replyToId.split('-')

    const attachCommentToParent = (commentArray: CommentListCommentsTypes[], commentLevel?: number) => {
      const currentLevel = commentLevel || 0
      if (replyToId) {
        const newComments = [...commentArray]
        return newComments.map(item => {
          if (item.key.split('-')[currentLevel] === level[currentLevel]) {
            if (item.key === replyToId) {
              if (!item.children) {
                item.children = []
              }
              item.children.push({
                key: `${item.key}-${item.children.length + 1}`,
                author: 'Nested Level Authors',
                avatar: <Avatar>AL</Avatar>,
                content: value,
                datetime: 'A few seconds ago'
              })
              return item
            } else {
              return { ...item, children: attachCommentToParent(item.children, currentLevel + 1) }
            }
          } else {
            return item
          }
        })
      } else {
        return [
          ...comments,
          {
            key: `${comments.length + 1}`,
            author: 'First Level Authors',
            avatar: <Avatar>AL</Avatar>,
            content: value,
            datetime: 'A few seconds ago'
          }
        ]
      }
    }

    setTimeout(() => {
      dispatch({
        type: 'handleSubmit',
        payload: {
          submitting: false,
          value: '',
          comments: attachCommentToParent(comments)
        }
      })
      setReplyToID(undefined)
    }, 1000)
  }

  return (
    <>
      {comments.length > 0 && (
        <CommentList
          loggedInAuthor={'Logged In Author Name'}
          loggedInAvatar={avatarContent('Logged In Author Name', loggedInPersonAvatar)}
          comments={comments}
          commentsLength={commentsLength}
          replyToID={replyToId}
          setReplyToID={(e: string | undefined) => setReplyToID(e)}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={() => setReplyToID(undefined)}
          submitting={submitting}
          value={value}
        />
      )}
    </>
  )
}
