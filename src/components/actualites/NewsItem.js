import { Box } from '@mui/material';
import React from 'react';
import './news.css';

export default function NewsItem({ item }) {
  return (
    <Box sx={{ padding: '10px' }}>
      <div className='news-item'>
        <div style={{ paddingRight: '10px' }}>{item.image}</div>
        <div className='title-date'>
          <div className='title'>{item.title}</div>
          <div className='date'>{item.date}</div>
        </div>
      </div>
    </Box>
  );
}
