import { Avatar, Card, Col, Row, Select, Typography } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const {Text, Title} = Typography;
const {Option} = Select;

interface NewsProps {
	simplified? : boolean
}

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

const News = ({simplified} : NewsProps) : JSX.Element => {
		const [newsCategory, setNewsCategory] = useState('All');
  	const { data : cryptoNews} = useGetCryptoNewsQuery({ newsCategory : newsCategory, count : simplified ? 6 : 12 });
		const { data } = useGetCryptosQuery(100 );
		
    return (
        <Row  gutter={[24, 24]}>
						{!simplified && (
							<Col span={24}>
								<Select
									showSearch
									className='select-news'
									placeholder='Select a Cryptocurrency'
									optionFilterProp='children'
									onChange={(value) => setNewsCategory(value)}
									filterOption={(input, option : any) => option?.children?.toString()?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0}
								>
										<Option value='All'>All Cryptocurrencies</Option>
										{data?.data?.coins.map((currency : any) => <Option value={currency.name}>{currency.name}</Option>)}
								</Select>
							</Col>
						)}
            {cryptoNews?.value.map((article : any, i : number) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className='news-card'>
                        <a href={article.url} target='_blank' rel='noreferrer'>
													<div className='news-image-container'>
														<Title className='news-title' level={4}>{article.name}</Title>
														<img style={{maxWidth:'200px', maxHeight:'100px'}} src={ article?.image?.thumbnail?.contentUrl || demoImage }  alt='news'/>
													</div>
													<p>
														{article.description.length > 400 ? `${article.description.substring(0, 400)}...` : article.description}
													</p>
													<div className='provider-container'>
															<div>
																	<Avatar src={article?.provider[0]?.image?.thumbnail?.contentUrl || demoImage} size={32} alt=''/>
																	<Text className='provider-name'>{article?.provider[0]?.name}</Text>
															</div>
															
															<Text>{moment(article?.datePublished).startOf('s').fromNow()}</Text>
													</div>
												</a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News