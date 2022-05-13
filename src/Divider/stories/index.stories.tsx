import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { default as Divider, DividerProps } from '../index'

export default {
  title: 'Divider',
  component: Divider,
  argTypes: {
    dashed: {
      options: [true, false],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args: DividerProps, context) => {
  return (
    <Divider {...args} plain={args.plain || context.plain} orientation={args.orientation || context.orientation}>
      {args.children || context.children}
    </Divider>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  label: 'Divider'
}

Primary.decorators = [
  Story => (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Story />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Story />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
    </>
  )
]

export const Text = Template.bind({})

Text.args = {
  label: 'Divider',
  plain: true
}

Text.argTypes = {
  plain: {
    options: [true, false],
    control: { type: 'radio' }
  }
}

Text.decorators = [
  Story => (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Story>Text</Story>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Story orientation="left">Left Text</Story>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Story orientation="right">Right Text</Story>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
    </>
  )
]

export const VerticalLine = Template.bind({})

VerticalLine.args = {
  label: 'Divider'
}

VerticalLine.decorators = [
  Story => (
    <>
      Text
      <Divider type="vertical" />
      <a href="#">Link</a>
      <Divider type="vertical" />
      <a href="#">Link</a>
    </>
  )
]
