import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Alert from '../../Alert';
import { default as Affix } from '../index'
export default {
  title: 'Affix',
  component: Affix,
} as ComponentMeta<typeof Affix>;


var indents = [];
for (var i = 0; i < 5; i++) {
  indents.push(<div key={i}>Only for Testing Purpose (Scroll Down)</div>);
}

export const Navbar = () =>{

  const navStyle = {
    height:"60px",
    padding:"10px",
    backgroundColor: 'darkseagreen',
    display:"flex"
  };

  return(
    <div style={{ height:"600vh" }}>
      <Affix offsetTop={0}>
        <div style={navStyle}>
          <span style={{ alignSelf:"center" }}>Nav Bar (Affix Top)</span>
        </div>
      </Affix>
      {indents}
    </div>
  );
}

export const NotificationBar = () =>{

  const notificationStyle = {
    height:"60px",
    width:"150px",
    padding:"10px",
    backgroundColor: 'darkseagreen',
    display:"flex",
    marginLeft:"auto",
    marginRight:"0",
  };

  return(
    <div style={{ height:"600vh" }}>
      <Affix offsetTop={0}>
        <div style={notificationStyle}>
          <span style={{ alignSelf:"center" }}>Notification (Affix Top Right)</span>
        </div>
      </Affix>
      {indents}
    </div>
  );
}

export const AlertBar = () =>{

  const message = 'Success Text (Affix Top 32px)';
  const type = 'success';

  return(
    <div style={{ height:"600vh" }}>
      {indents}
      <Affix offsetTop={32}>
        <Alert
          message={message}
          type={type}
          showIcon={false}
          closable={false}
          banner={false}
        />
      </Affix>
      {indents}
    </div>
  );
}
