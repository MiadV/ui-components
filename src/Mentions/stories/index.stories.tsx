import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { default as Mentions, MentionOption } from '../index'

export default {
  title: 'Mentions',
  component: Mentions,
} as ComponentMeta<typeof Mentions>;

const options = [
  { 
    key  :"Singapore",
    value:"Singapore"
  },
  { 
    key  :"Malaysia",
    value:"Malaysia"
  },
  { 
    key  :"Indonesia",
    value:"Indoneisa"
  },
  { 
    key  :"Thailand",
    value:"Thailand"
  },
  { 
    key  :"India",
    value:"India"
  },
]

export const basic = () =>{

  function onChange(value) {
    // eslint-disable-next-line no-console
    console.log('Change:', value);
  }
  
  function onSelect(option) {
    // eslint-disable-next-line no-console
    console.log('select', option);
  }

  return(
    <Mentions
      style={{ width: '320px' }}
      onChange={onChange}
      onSelect={onSelect}
      placement={"bottom"}
    >
      {
        options.map((item,index)=>(
          <MentionOption key={index} value={item.value}>{item.key}</MentionOption>
        ))
      }
    </Mentions>
  );
}
