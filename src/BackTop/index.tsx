import * as React from "react";
import { BackTop as AntBackTop, BackTopProps as AntBackTopProps } from "antd";

import "./style.css"

export type BackTopProps = AntBackTopProps;

const BackTop: React.FC<BackTopProps> = (props) => {
  return <AntBackTop {...props} />;
};

export default BackTop;
