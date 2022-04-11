import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CheckCircle } from 'phosphor-react'
import { default as Modal, ModalProps, ModalFunctions } from '../index'

export default {
  title: 'Modal',
  component: Modal
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => <Modal {...args} />


const content = "This is the content of the modal. Depends on what you want to convey, it’s best to keep it short. Else it’ll be too long.";

export const Basic = Template.bind({})

Basic.args = {
  modalFunc: ()=>ModalFunctions.confirm({
    title: 'Modal Title',
    content: content,
    okText:"Confirm",
    cancelText:"Button",
    confirmMode: false,
    hasIcon:false,
  })
}

export const BasicInfo = Template.bind({})

BasicInfo.args = {
  modalFunc: ()=>ModalFunctions.info({
    title: 'Modal Title',
    content: content,
    okText:"Confirm",
    cancelText:"Button",
    confirmMode: true,
    hasIcon:true,
  })
}

export const Success = Template.bind({})

Success.args = {
  modalFunc: ()=>ModalFunctions.info({
    title: 'Modal Title',
    content: content,
    okText:"Confirm",
    cancelText:"Button",
    icon: <CheckCircle size={24} color={'#10B981'} />,
    confirmMode: true,
    hasIcon:true,
  })
}

export const Error = Template.bind({})

Error.args = {
  modalFunc: ()=>ModalFunctions.error({
    title: 'Modal Title',
    content: content,
    okText:"Confirm",
    cancelText:"Button",
    confirmMode: true,
    hasIcon:true,
  })
}

export const Warning = Template.bind({})

Warning.args = {
  modalFunc: ()=>ModalFunctions.warning({
    title: 'Modal Title',
    content: content,
    okText:"Confirm",
    cancelText:"Button",
    confirmMode: false,
    hasIcon:true,
  })
}
