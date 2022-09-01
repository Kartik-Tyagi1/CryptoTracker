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
            </div>
            <div className='footer'>
                
            </div>
        </div>
    )
}

export default App