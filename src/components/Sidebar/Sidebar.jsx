import { LayoutFilled, PhoneFilled, CarryOutFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react'

const items = [
  {
    label: "Masters",
    icon: <LayoutFilled />,
    key: "/Masters",
    children: [
      {
        label: "Warehouse",
        key: "1",
      },
      {
        label: "Item",
        key: "2",
      },
      {
        label: "Item Groups",
        key: "3",
      },
      {
        label: "Vendors",
        key: "4",
      },
      {
        label: "Employees",
        key: "5",
      },
      {
        label: "Customers",
        key: "6",
      },
    ]
  },
  {
    label: "Inbound",
    icon: <PhoneFilled />,
    key: "/inbound",
    children : [
      {
        label: "Purchase Order",
        key: "7"
      },
      {
        label: "ASN",
        key: "8"
      },
      {
        label: "GRN",
        key: "9"
      },
      {
        label: "Putaway",
        key: "10"
      },
    ]
  },
  {
    label: "Outbound",
    icon: <CarryOutFilled />,
    key: "/outbound",
    children : [
      {
        label: "Warehouse",
        key: "11"
      },
      {
        label: "Warehouse",
        key: "12"
      },
      {
        label: "Warehouse",
        key: "13"
      },
      {
        label: "Warehouse",
        key: "14"
      },
      {
        label: "Warehouse",
        key: "11"
      },
      {
        label: "Warehouse",
        key: "12"
      },
      {
        label: "Warehouse",
        key: "13"
      },
      {
        label: "Warehouse",
        key: "14"
      },
    ]
  }
];
const Sidebar = () => {
    
  const onClick = (item) => {
    //Do nothing
    console.log(item)
  };
  return (
    <div className='Sidebar'>
      <Menu
        theme= "dark"
        onClick={onClick}
        mode="inline"
        items={items}
      />
    </div>
  );
    
}

export default Sidebar