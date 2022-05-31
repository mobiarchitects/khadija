import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/allServices.css';

export default function ServicesAdminItem({item}) {
  return (
    <>
      <div className='all-ser-item'>
        <Link to={item.lien} style={{ textDecoration: 'none' }}>
          <div className='icon-ser'>{item.icon}</div>
          <div className='icon-tit'>{item.title}</div>
        </Link>
      </div>
    </>
  )
}
