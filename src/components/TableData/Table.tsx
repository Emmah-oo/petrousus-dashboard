import React from 'react';
import './Table.css';
const Table = () => {
  return (
    <table>
      <tr>
        <th></th>
        <th>Stage 1</th>
        <th>Stage 2</th>
        <th>Stage 3</th>
      </tr>
      <tr>
        <td>Amount of Token</td>
        <td>720,000</td>
        <td>300,000</td>
        <td>108,000</td>
      </tr>
      <tr>
        <td>%Allocated</td>
        <td>18</td>
        <td>7.5</td>
        <td>4.5</td>
      </tr>
      <tr>
        <td>Start Date</td>
        <td>July 2022</td>
        <td>July 2022</td>
        <td>July 2022</td>
      </tr>
      <tr>
        <td>End Date</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Weeks</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Bonuses</td>
        <td>7%</td>
        <td>5%</td>
        <td>2%</td>
      </tr>
    </table>
  );
};

export default Table;
