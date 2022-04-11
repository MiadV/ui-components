import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { default as Descriptions,DescriptionsItem } from '../index'

export default {
  title: 'Descriptions',
  component: Descriptions,
} as ComponentMeta<typeof Descriptions>;


export const Basic = () =>{

  const description = [
    {
      label : "Business registration name",
      content : "Puma Sdn Bhd"
    },
    {
      label : "Business registration number",
      content : "11223344X"
    },
    {
      label : "Business registration address",
      content : "Lot 123-A, Jalan Sungai Besar 45, Seksyen Sungai Besar, 67890 Sungai Besar, Kuala Lumpur."
    },
    {
      label : "SST/GST/VAT registration number",
      content : "123450000"
    },
    {
      label : "Business brand name",
      content : "Puma"
    },
    {
      label : "Business type",
      content : "Online merchant (e-commerce)"
    },
    {
      label : "Website",
      content : "www.puma.com.my"
    },
    {
      label : "Category",
      content : "Retail"
    },
    {
      label : "Reporting category",
      content : "Sportswear / Athletic"
    },
    {
      label : "Merchanr's MCC",
      content : "1000 - Fashion retail"
    }
  ]

  return(
    <Descriptions title="Business Details" layout="vertical" colon={false}>
      {
        description.map((Item,index) =>(
          <DescriptionsItem key={index} label={Item.label}>{Item.content}</DescriptionsItem>
        ))
      }
    </Descriptions>
  );
}
