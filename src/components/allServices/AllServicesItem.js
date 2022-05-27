import React from 'react';
import '../styles/allServices.css';
export default function AllServicesItem({ item }) {
  return (
    <div className='all-ser-item'>
      <div className='icon-ser'>{item.icon}</div>
      <div className='icon-tit'>{item.title}</div>
    </div>
  );
}
