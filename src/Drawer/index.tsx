import * as React from 'react';
import { Drawer as AntDrawer, DrawerProps as AntDrawerProps } from 'antd';

import './style.css';

const drawerWidth = 384;
export type DrawerProps = AntDrawerProps & { children: React.ReactNode };

const Drawer: React.FC<DrawerProps> = props => {
  return <AntDrawer {...props} />;
};

Drawer.defaultProps = {
  closable: false,
  push: {
    distance: drawerWidth
  }
};

export default Drawer;
