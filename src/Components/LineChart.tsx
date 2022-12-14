import { Col, Row, Typography } from 'antd';
import React from 'react';
import { Line } from 'react-chartjs-2';

import {
    CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title,
    Tooltip
} from "chart.js";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );



interface LineChartProps {
    coinHistory : any,
    currentPrice : any,
    coinName : any
}

const LineChart = ({coinHistory, currentPrice, coinName} : LineChartProps) : JSX.Element => {

    const coinPrice = [];
    const coinTimeStamp=[];

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinPrice.push(coinHistory?.data?.history[i]?.price);
      coinTimeStamp.push(
        new Date(
          coinHistory?.data?.history[i]?.timestamp * 1000
        ).toLocaleDateString()
      );
    }

    const data = {
        // X-Axis
        labels: coinTimeStamp,
        // Y-Axis
        datasets: [
          {
            label: `Price in USD ($)`,
            data: coinPrice,
            fill: false,
            backgroundColor: "#0071bd",
            borderColor: "#0071bd",
          },
        ],
      };

    const options : any = {
        scales: {
            yAxes: [{
                ticks : {
                    beginAtZero: true
                }
            }]
        }
    }
     

      return (
          <>
            <Row className="chart-header">
              <Typography.Title level={2} className="chart-title">
                {coinName} 24h Price Chart
              </Typography.Title>
              <Col className="price-container">
                <Typography.Title level={5} className="price-change">
                  {coinHistory?.data?.change}%
                </Typography.Title>
                <Typography.Title level={5} className="current-price">
                  {coinName} Price: ${currentPrice}
                </Typography.Title>
              </Col>
            </Row>
            <Line data={data} options={options} />
          </>
        );
}

export default LineChart