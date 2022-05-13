import * as React from "react";
import { PageHeader as AntPageHeader, PageHeaderProps as AntPageHeaderProps } from "antd";

import "./style.css"

export type PageHeaderProps = AntPageHeaderProps;

export type PageHeaderWrapperProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
};

export const PageHeaderWrapper : React.FC<PageHeaderWrapperProps> = (props) => {
  const { title, subtitle } = props;

  return(
    <div className='ui-page-header'>
      <span className="ui-page-header-title">{title}</span>
      { subtitle && <span className="ui-page-header-subtitle">{subtitle}</span> }
    </div>
  );
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { title, subTitle, ...restProps } = props; 
  return <AntPageHeader  title={<PageHeaderWrapper title={title} subtitle={subTitle}/>} {...restProps} />;
};

export default PageHeader;
