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
    </div>
  )
}

export default Navbar