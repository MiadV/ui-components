import React, { useState } from 'react'
import { ComponentMeta } from '@storybook/react'

import { default as Breadcrumb, BreadcrumbItem } from '../index'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb
} as ComponentMeta<typeof Breadcrumb>

export const basic = () => {

  const [path, setPath] = useState([
    "Home",
    "My Merchants",
    "Add New Merchants"
  ])

  const breadcrumbClickHandle = (item, e: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    const currentIndex = path.indexOf(item);

    const newPath = path.filter((item,index) => index <= currentIndex);
    setPath(newPath);
  }


  return (
    <Breadcrumb>
      {
        path.map((Item,index) => (
          <BreadcrumbItem 
            onClick={(e) => breadcrumbClickHandle(Item,e)}
            key={index}
            href=""
          >
            {Item}
          </BreadcrumbItem>
        ))
      }
    </Breadcrumb>
  )
}
