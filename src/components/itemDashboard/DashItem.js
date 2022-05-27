import React from 'react';
import '../styles/dash.css';

export default function DashItem({ item }) {
  return (
    <>
      <div className='dash-group'>
        <div className='icon'>{item.icon}</div>
        <div className='title-dash-item'>{item.title}</div>
        <div className='number'>{item.counter}</div>
      </div>
    </>
  );
}
