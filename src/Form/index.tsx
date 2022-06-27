import { Form as AntForm, FormProps as AntFormProps, FormItemProps as AntFormItemProps } from "antd";

import { default as FormType } from 'antd/lib/form/Form';
import { default as FormItemType } from 'antd/lib/form/FormItem';
import "./style.css"

export type FormProps = AntFormProps;
export type FormItemProps = AntFormItemProps;

export const FormItem : typeof FormItemType = AntForm.Item;
const Form : typeof FormType= AntForm;

export default Form;
