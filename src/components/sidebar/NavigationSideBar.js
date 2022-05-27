import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sideBar.css';

export default function NavigationSideBar({ item }) {
  return (
    <div >
      <Link to={item.lien} title={item.title} className='nav-sidebar-item'>
        <div>{item.icon}</div>
        <div className='nav-title'>{item.title}</div>
      </Link>
      <div className='space'></div>
    </div>
  );
}
