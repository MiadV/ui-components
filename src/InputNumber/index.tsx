import * as React from "react";
import { InputNumber as AntInputNumber, InputNumberProps as AntInputNumberProps } from "antd";

import "./style.css"

export type InputNumberProps = AntInputNumberProps;

const InputNumber: React.FC<InputNumberProps> = (props) => {
  return <AntInputNumber {...props} />;
};

export default InputNumber;
