import * as React from "react";
import { default as AntMentions, MentionProps as AntMentionsProps, OptionProps as AntOptionProps } from "antd/lib/mentions";

import "./style.css"

export type MentionsProps = AntMentionsProps;
export type OptionProps = AntOptionProps;

export const MentionOption: React.FC<OptionProps> = (props) => {
  return <AntMentions.Option {...props} />;
};

const Mentions: React.FC<MentionsProps> = (props) => {
  return <AntMentions {...props} />;
};

export default Mentions;
