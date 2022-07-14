import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Component } from '../../types/Util';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import './PriceChart.css';
import {
  capitalize,
  formatDollar,
  formatNumber,
  PriceChartPeriod,
  usePriceChartRequest,
  zeroPad,
} from '../../util';
import { ThemeContext } from '../../context/ThemeContext';
import Card, { CardTitle } from '../Card';
import Button from '../Button';
import { Loadable, Loader } from '../Loader';
import LoaderBar from '../LoaderBar';
import Cube from '../../svg/icons/cube.png';

const PriceChart: Component = () => {
  const [period, setPeriod] = useState<PriceChartPeriod>('day');
  const priceChartRequest = usePriceChartRequest();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    priceChartRequest.sendRequest(period);
  }, [period]);

  // const dataset = useMemo(() => {
  // 	return (priceChartRequest.data?.price_chart || [])
  // 		.map((dataItem, i) => ({date: new Date(dataItem.date), price: dataItem.price}))
  // 		.sort((a, b) => a.date.getTime() - b.date.getTime())
  // }, [priceChartRequest.data])
  const dataset = [
    { name: 'Page A', uv: 200 },
    { name: 'Page B', uv: 1000 },
    { name: 'Page C', uv: 3000 },
    { name: 'Page D', uv: 6000 },
    { name: 'Page E', uv: 6890 },
    { name: 'Page F', uv: 7390 },
    { name: 'Page G', uv: 7490 },
  ];

  const tooltipDateFormatter = (value: any): string => {
    if (period === 'day')
      return new Date(value).toLocaleString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    return new Date(value).toLocaleDateString();
  };

  //const max = Math.max(...dataset.map((item) => item.price))

  //const labelStyles = {fontSize: "0.8rem", fill: theme.text?.muted}
  return (
    <Loader loading={priceChartRequest.fetching}>
      <Card className='price-chart-container'>
        <CardTitle className='px-0 py-0 pb-4 text-lg flex'>
          <div className='title flex justify-between w-full'>
            <div className='flex'>
              <img src={Cube} alt='' />
              <span className='pl-4'>Price Chart</span>
            </div>
            <select name='select' className='language-select'>
              <option value='eng'>Last Seven Days</option>
              <option value='esp'>Spanish</option>
              <option value='ita'>Italian</option>
              <option value='ger'>German</option>
              <option value='frn'>French</option>
            </select>
          </div>
        </CardTitle>
        <LoaderBar />
        <div className='chart-container'>
          <Loadable variant='block' loadClass='h-full w-full'>
            <ResponsiveContainer
              width={'100%'}
              height={'100%'}
              className='responsive-container'>
              <LineChart width={500} height={200} data={dataset}>
                <XAxis dataKey='name' />
                <YAxis />
                <Line
                  style={{ boxShadow: 'rgba(0, 0, 0, 9) 0px 2px 5px' }}
                  dot={false}
                  opacity={4}
                  type='natural'
                  dataKey='uv'
                  stroke='#6CB47B'
                  fill='#6CB47B'
                />
              </LineChart>
            </ResponsiveContainer>
          </Loadable>
        </div>
      </Card>
    </Loader>
  );
};

export default PriceChart;
