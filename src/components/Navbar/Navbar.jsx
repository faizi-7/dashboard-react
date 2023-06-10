import { Image, Input, Typography } from 'antd'
import React from 'react'
import Logo from '../../assets/logo.png'
import Profile from '../../assets/profile.png'
import { SearchOutlined } from '@ant-design/icons'


const Navbar = () => {
  return (
    <div className='Navbar'>
      <Image
        width={120}
        src= {Logo}
      ></Image>
      <Input
        placeholder='Search...'
        prefix= {<SearchOutlined/>}
        size='large'
        style={{ width: 500 , borderRadius: 50}}
      ></Input>
      <div className='NavbarProfile'>
        <Typography.Text>Faiz Iqbal</Typography.Text>
        <Image 
          width={50}
          src= {Profile}
        ></Image>
      </div>
      
    </div>
  )
}

export default Navbar