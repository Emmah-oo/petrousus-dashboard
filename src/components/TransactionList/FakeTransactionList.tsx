import React from 'react';
import './FakeTransactionList.css';
import Cube from '../../svg/icons/cube.png';
import Token from '../../svg/icons/Vector.png';
import BnB from '../../svg/icons/bnb.png';
import Orange from '../../svg/icons/orange.png';
import Red from '../../svg/icons/red.png';
import ETH from '../../svg/icons/eth.png';
import Green from '../../svg/icons/green.png';
import Dollar from '../../svg/icons/dollar.png';
import Pagination from '../Pagination';
import FakePagination from './FakePagination';
const FakeTransactionList = () => {
  const fakeData = [
    {
      key: '1',
      id: 43859294,
      token: '5.000 SUS',
      paymentMethod: 'BNB',
      paymentAccount: '4.12 BNB',
      baseAmount: '$ 100',
      baseCurrency: 'USD',
      status: 'Approved',
    },
    {
      key: '2',
      id: 43859294,
      token: '5.000 SUS',
      paymentMethod: 'ETH',
      paymentAccount: '0.5 ETH',
      baseAmount: '$ 100',
      baseCurrency: 'USD',
      status: 'Pending',
    },
    {
      key: '3',
      id: 43859294,
      token: '5.000 SUS',
      paymentMethod: 'BNB',
      paymentAccount: '4.12 BNB',
      baseAmount: '$ 100',
      baseCurrency: 'USD',
      status: 'Canceled',
    },
    {
      key: '4',
      id: 43859294,
      token: '5.000 SUS',
      paymentMethod: 'BNB',
      paymentAccount: '4.12 BNB',
      baseAmount: '$ 100',
      baseCurrency: 'USD',
      status: 'Approved',
    },
    {
      key: '5',
      id: 43859294,
      token: '5.000 SUS',
      paymentMethod: 'ETH',
      paymentAccount: '0.5 ETH',
      baseAmount: '$ 100',
      baseCurrency: 'USD',
      status: 'Pending',
    },
    {
      key: '6',
      id: 43859294,
      token: '5.000 SUS',
      paymentMethod: 'BNB',
      paymentAccount: '4.12 BNB',
      baseAmount: '$ 100',
      baseCurrency: 'USD',
      status: 'Canceled',
    },
    {
      key: '7',
      id: 43859294,
      token: '5.000 SUS',
      paymentMethod: 'BNB',
      paymentAccount: '4.12 BNB',
      baseAmount: '$ 100',
      baseCurrency: 'USD',
      status: 'Approved',
    },
    {
      key: '8',
      id: 43859294,
      token: '5.000 SUS',
      paymentMethod: 'ETH',
      paymentAccount: '0.5 ETH',
      baseAmount: '$ 100',
      baseCurrency: 'USD',
      status: 'Pending',
    },
    {
      key: '9',
      id: 43859294,
      token: '5.000 SUS',
      paymentMethod: 'BNB',
      paymentAccount: '4.12 BNB',
      baseAmount: '$ 100',
      baseCurrency: 'USD',
      status: 'Canceled',
    },
    {
      key: '10',
      id: 43859294,
      token: '5.000 SUS',
      paymentMethod: 'BNB',
      paymentAccount: '4.12 BNB',
      baseAmount: '$ 100',
      baseCurrency: 'USD',
      status: 'Canceled',
    },
  ];
  return (
    <div className='transaction-div'>
      <div className='flex pl-8 mb-2 pt-5 '>
        <img src={Cube} alt='' />
        <span className='pl-2'>Transaction Data</span>
      </div>
      <table>
        <tr>
          <th>ID</th>
          <th>Tokens</th>
          <th>Payment Method</th>
          <th>Payment Amount</th>
          <th>Base Amount</th>
          <th>Base Currency</th>
          <th>Status</th>
        </tr>
        {fakeData.map((item) => (
          <tr key={item.key}>
            <td>{item.id}</td>
            <td>
              <div className='flex pl-4'>
                <img src={Token} alt='' />
                <span className='pl-2'>{item.token}</span>
              </div>
            </td>
            <td>
              {' '}
              <div className='flex pl-4'>
                {item.paymentMethod == 'BNB' ? (
                  <img src={BnB} alt='' />
                ) : (
                  <img src={ETH} alt='' />
                )}
                <span className='pl-2'>{item.paymentMethod}</span>
              </div>
            </td>
            <td>
              {' '}
              <div className='flex pl-4'>
                {item.paymentAccount == '4.12BNB' ? (
                  <img src={BnB} alt='' />
                ) : (
                  <img src={ETH} alt='' />
                )}
                <span className='pl-2'>{item.paymentAccount}</span>
              </div>
            </td>
            <td>{item.baseAmount}</td>
            <td>
              <div className='flex'>
                <img src={Dollar} alt='' />
                <span>{item.baseCurrency}</span>
              </div>
            </td>
            <td>
              {' '}
              <div className='flex pl-4'>
                {item.status == 'Approved' ? (
                  <div className='flex '>
                    <img src={Green} alt='' />
                    <span className='pl-2' style={{ color: '#13B156' }}>
                      {item.status}
                    </span>
                  </div>
                ) : item.status == 'Pending' ? (
                  <div className='flex '>
                    <img src={Orange} alt='' />
                    <span className='pl-2' style={{ color: '#FFAB00' }}>
                      {item.status}
                    </span>
                  </div>
                ) : (
                  <div className='flex items-center justify-center'>
                    <img src={Red} alt='' />
                    <span className='pl-2' style={{ color: ' #FF5630' }}>
                      {item.status}
                    </span>
                  </div>
                )}
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default FakeTransactionList;
