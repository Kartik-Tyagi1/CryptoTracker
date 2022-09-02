import { Col, Row, Statistic, Typography } from 'antd';
import millify from 'millify';
import React from 'react';
import { Link } from 'react-router-dom';

import { Cryptocurrencies, News } from '../Components';
import { useGetCryptosQuery } from '../services/cryptoApi';

const {Title } = Typography; // Can use this and type <Title> instead of <Typography.Title>

const Homepage = () => {
    const {data, isFetching} = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if(isFetching) return(<div> Loading ... </div>)
            
    return (
        <>
        <Title level={2} className='heading'>Global Crypto Stats</Title>
        <Row>
            {/* Ant Design total width is 24 so col will take half */}
            <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
            <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
        </Row>
        <div className='home-heading-container'>
            <Title level={2} className='home-title'>Top 10 Cryptocurrencies</Title>
            <Title level={2} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
        </div>
        <Cryptocurrencies simplified/>
        <div className='home-heading-container'>
            <Title level={2} className='home-title'>Lastest Crypto News</Title>
            <Title level={2} className='show-more'><Link to='/news'>Show More</Link></Title>
        </div>
        <News />
        </>
    )
}

export default Homepage