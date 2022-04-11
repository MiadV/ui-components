import React, { useEffect, useState } from 'react'
import { ComponentMeta, Story } from '@storybook/react'

import { default as Steps, Step, StepProps, StepsProps } from '../index'

const stepList: StepProps[] = [
  {
    title: 'Completed step',
    description: 'This is a description'
  },
  {
    title: 'Current step',
    description: 'This is a description'
  },
  {
    title: 'Step 3',
    description: 'This is a description'
  },
  {
    title: 'Step 4',
    description: 'This is a description'
  }
]

export default {
  title: 'Steps',
  component: Steps,
  argTypes: {
    size: {
      control: {
        type: 'check'
      },
      options: ['small']
    },
    direction: {
      default: 'horizontal',
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' }
    },
    status: {
      default: 'process',
      options: ['process', 'error', 'wait', 'finish'],
      control: { type: 'radio' }
    },
    current: {
      control: {
        type: 'range',
        min: 0,
        max: stepList.length - 1,
        step: 1
      }
    },
    percent: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      }
    }
  }
} as ComponentMeta<typeof Steps>

type Args = StepsProps & {
  label: string
  text?: string
  showDescription?: boolean
  steps: StepProps[]
}

const args: Args = {
  direction: 'horizontal',
  current: 1,
  status: 'process',
  showDescription: true,
  size: 'small',
  label: 'Steps',
  steps: stepList
}

const createSteps = (steps: StepProps[], useDesc: boolean = false) => (
  <>
    {steps.map(({ description, ...restStep }, index) => {
      const desc = useDesc ? description : undefined

      return <Step key={index} description={desc} {...restStep} />
    })}
  </>
)

const Template: Story<Args> = ({ steps, current, showDescription, ...restArgs }: Args) => {
  const [currentStep, setCurrerntStep] = useState(0)

  useEffect(() => {
    setCurrerntStep(current)
  }, [current, setCurrerntStep])

  const handleChange = restArgs.type === 'navigation' ? (newIndex: number) => setCurrerntStep(newIndex) : undefined

  return (
    <Steps {...restArgs} current={currentStep} onChange={handleChange}>
      {createSteps(steps, showDescription)}
    </Steps>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  ...args
}

export const Dot = Template.bind({})

Dot.args = {
  ...args,
  progressDot: true
}

export const Navigation = Template.bind({})

Navigation.args = {
  ...args,
  type: 'navigation'
}

export const WithProgress = Template.bind({})

WithProgress.args = {
  ...args,
  percent: 60
}
