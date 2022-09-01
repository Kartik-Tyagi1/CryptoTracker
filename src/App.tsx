import { Layout, Space, Typography } from 'antd';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import './App.css';
import { Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Navbar, News } from './Components';

const App = () : JSX.Element => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar/>
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path='/' element={<Homepage/>}></Route>
                            <Route path='/exchanges' element={<Exchanges/>}></Route>
                            <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}></Route>
                            <Route path='/crypto/:coinId' element={<CryptoDetails/>}></Route>
                            <Route path='/news' element={<News/>}></Route>
                        </Routes>
                    </div>
                </Layout>
                <div className='footer'>
                    <Typography.Title level={5} style={{color : 'white', textAlign : 'center'}}>
                        Crypto Tracker <br/> 
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App