import React from 'react';
import './news.css';

export default function NewsItem({item}) {
  return (
    <div className='news-item'>
        <div>{item.image}</div>
        <div className='title-date'>
            <div className='title'>{item.title}</div>
            <div className='date'>{item.date}</div>
        </div>
      
    </div>
  )
}
