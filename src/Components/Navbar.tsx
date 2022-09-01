import { BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import { Avatar, Button, Menu, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () : JSX.Element => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src='https://i.ibb.co/Z11pcGG/cryptocurrency.png' size='large'/>
            <Typography.Title level={2} className='logo'>
                <Link to="/">Crypto Tracker</Link>
            </Typography.Title>
            {/* <Button className='menu-control-container'>

            </Button> */}
        </div>
        <Menu theme='dark'>
            <Menu.Item icon={<HomeOutlined/>}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined/>}>
              <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined/>}>
              <Link to='/exchanges'>Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>}>
              <Link to='/news'>News</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar