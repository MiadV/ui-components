import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Info } from 'phosphor-react'
import Button from '../../Button'
import { default as Result, ResultChildren, ResultProps } from '../index'

export default {
  title: 'Result',
  component: Result,
  argTypes: {
    status: {
      options: ['403', '404', '500', 'error', 'info', 'success', 'warning'],
      control: { type: 'radio' }
    }
  }
} as ComponentMeta<typeof Result>

const Template: ComponentStory<typeof Result> = (args: ResultProps) => <Result {...args} />

export const TwoButtons = Template.bind({})

TwoButtons.args = {
  status: 'info',
  title: 'Your operation has been executed.',
  subTitle: 'Check back later, it might appear.',
  extra: (
    <>
      <Button type="text" size="small">
        Retry
      </Button>
      <Button type="primary" size="small">
        Back to Home
      </Button>
    </>
  )
}

export const OneButton = Template.bind({})

OneButton.args = {
  status: 'success',
  title: 'Successfully Purchased Cloud Server!',
  subTitle: 'Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes.',
  extra: (
    <Button type="primary" size="small">
      Back to Home
    </Button>
  )
}

export const ComplexErrorFeedback = Template.bind({})

ComplexErrorFeedback.args = {
  status: 'error',
  title: 'Submission Failed.',
  subTitle: 'Please check and modify the following information before resubmitting.',
  extra: (
    <>
      <Button type="text" size="small">
        Retry
      </Button>
      <Button type="primary" size="small">
        Check again
      </Button>
    </>
  ),
  children: (
    <ResultChildren
      title={'The content you submitted has some errors:'}
      content={[
        {
          icon: <Info size={16} weight="light" />,
          text: 'Your account has been frozen.',
          button: (
            <Button type="text" size="small">
              Solve now
            </Button>
          )
        },
        {
          icon: <Info size={16} weight="light" />,
          text: 'Your account is not yet eligible to apply.',
          button: (
            <Button type="text" size="small">
              Unlock
            </Button>
          )
        }
      ]}
    />
  )
}
