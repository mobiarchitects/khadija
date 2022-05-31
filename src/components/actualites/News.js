import React from 'react';
import './news.css';
import NewsItem from './NewsItem';

const listActualites = [
  {
    id: 1 ,
    title:"Le Ministre de l’Economie, des Financeset de la Réforme " ,
    image: <img style={{height: '90px', width:' 90px'}} src='/assets/ministre.jpg' alt='ministre' />,
    date: '2022/05/31',
  },
  {
    id:2 ,
    title:"Bank Al-Maghrib organise une série de webinaires dans le cadre de la Journée…" ,
    image : <img style={{height: '90px', width:' 90px'}}  src='/assets/rma.jpg' alt='rma' />,
    date: '2022/04/18',
  },
  {
    id:3 ,
    title: "Risques liés à l'investissement dans les cryptomonnaies comme le Bitcoin…",
    image : <img style={{height: '90px', width:' 90px'}}  src='/assets/bitcoin.jpg' alt='bitcoin' />,
    date: '2022/05/30',
  }
];
const displayActualites = () => {
  return listActualites.map((item) => (
    <NewsItem key={item.id} item={item}/>
  ))
  }

export default function News() {
  return <div className='news'>
    <div className='actualites'>
      <p>Actualités</p>
      <a className='lien' href='/'>Voir tous</a>
    </div>
    <div>
      {displayActualites()}
    </div>
  </div>;
}
