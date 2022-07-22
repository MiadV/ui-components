import * as React from "react";
import { Descriptions as AntDescriptions, DescriptionsProps as AntDescriptionsProps } from "antd";
import { DescriptionsItemProps as AntDescriptionsItemProps } from "antd/lib/descriptions/Item";

import "./style.css"

export type DescriptionsProps = AntDescriptionsProps;
export type DescriptionsItemProps = AntDescriptionsItemProps;

export const DescriptionsItem: React.FC<DescriptionsItemProps> = props => {
  return <AntDescriptions.Item {...props} />;
};

const Descriptions: React.FC<DescriptionsProps> = (props) => {
  return <AntDescriptions {...props} />;
};

Descriptions.defaultProps = {
  contentStyle: { minWidth: "224px" },
  labelStyle: { minWidth: "224px" }
};

export default Descriptions;
