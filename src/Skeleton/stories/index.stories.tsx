import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { default as Avatar } from '../../Avatar'
import { default as List, ListItem, ListItemMeta } from '../../List'
import {
  default as Skeleton,
  SkeletonAvatar,
  SkeletonButton,
  SkeletonImage,
  SkeletonInput,
  SkeletonProps
} from '../index'

export default {
  title: 'Skeleton',
  component: Skeleton
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args: SkeletonProps) => <Skeleton {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'Skeleton',
  active: true,
  avatar: false
}
export const LoadingAvatar: React.FC = () => <SkeletonAvatar active={true} />
export const LoadingButton: React.FC = () => <SkeletonButton active={true} />
export const LoadingInput: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <SkeletonInput active={true} />
  </div>
)
export const LoadingImage: React.FC = () => <SkeletonImage />

export const SkeletonList: React.FC = () => {
  const loading = true
  const listData = [
    {
      href: 'https://ant.design',
      key: 1,
      title: `ant design part 1`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    },
    {
      href: 'https://ant.design',
      key: 2,
      title: `ant design part 1`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    },
    {
      href: 'https://ant.design',
      key: 3,
      title: `ant design part 1`,
      avatar: 'https://joeschmoe.io/api/v1/random',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    }
  ]
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={listData}
      renderItem={item => (
        <ListItem key={item.key}>
          <Skeleton loading={loading} active={true} avatar={true}>
            <ListItemMeta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </Skeleton>
        </ListItem>
      )}
    />
  )
}
