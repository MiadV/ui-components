import * as React from "react";
import { Affix as AntAffix, AffixProps as AntAffixProps } from "antd";

import "./style.css"

export type AffixProps = AntAffixProps;

const Affix: React.FC<AffixProps> = (props) => {
  return <AntAffix {...props} />;
};

export default Affix;
