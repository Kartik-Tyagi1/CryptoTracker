import { Card, Col, Input, Row } from 'antd';
import millify from 'millify';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

interface CryptocurrenciesProps {
    simplified? : boolean
}

const Cryptocurrencies = ({simplified} : CryptocurrenciesProps) : JSX.Element => {
    const count = simplified ? 10 : 100;
    const {data : cryptoList, isFetching} = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
    const [searchTerm, setSearchTerm] = useState('');

    // Filter the cryptocurrencies when a user searches 
    useEffect(() => {
        const filteredData = cryptoList?.data?.coins.filter((coin : any) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCryptos(filteredData);
    }, [cryptoList, searchTerm])

    if(isFetching) return(<div> Loading ... </div>)

    return (
      <>
        {/* Only show the search bar if we are not on the homepage */}
        {!simplified && (
            <div className='search-crypto'>
              <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
        )}
        <Row  gutter={[32, 32]} className='crypto-card-container'>
            {cryptos?.map((currency : any) => (
                <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
                    <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                        <Card 
                        title={`${currency.rank}. ${currency.name}`} 
                        extra={<img className='crypto-image' src={currency.iconUrl}/>}
                        hoverable
                        >
                            <p>Price: {millify(currency.price)}</p>
                            <p>Market Cap: {millify(currency.marketCap)}</p>
                            <p>Daily Change: {millify(currency.change)}%</p>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
      </>
    )
}

export default Cryptocurrencies