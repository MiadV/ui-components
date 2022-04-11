import * as React from 'react';
import {
  Collapse as AntCollapse,
  CollapsePanelProps as AntCollapsePanepProps,
  CollapseProps as AntCollapseProps
} from 'antd';
import { CaretDown } from 'phosphor-react';

import './style.css';

export type CollapseProps = AntCollapseProps;
export type CollapsePanelProps = AntCollapsePanepProps;

export const CollapsePanel: React.FC<CollapsePanelProps> = props => {
  return <AntCollapse.Panel {...props} />;
};

const Collapse: React.FC<CollapseProps> = props => {
  return <AntCollapse {...props} />;
};

Collapse.defaultProps = {
  expandIconPosition: 'right',
  expandIcon: ({ isActive }) => (
    <span className={`ant-collapse-arrow`}>
      <CaretDown
        style={{ transform: isActive && 'rotate(-180deg)' }}
        size={16}
      />
    </span>
  )
};

export default Collapse;
