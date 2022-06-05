import React from 'react';
import '../styles/allServices.css';
import ServicesSocialItem from './ServicesSocialItem';

const listServSocial = [
      {
    id: 1,
    title: 'Colonies de vacances',
    icon: <img src='/assets/suitcases.svg' alt='suitcases' />,
    lien: '/demandeColoniesDeVacances',
  },
  {
    id: 2,
    title: 'Conventions tarifaires',
    icon: <img src='/assets/puzzle.svg' alt='puzzle' />,
    lien: '/demandeConventionsTarifaires',
  },
  {
    id: 3,
    title: 'Estivage',
    icon: <img src='/assets/sun.svg' alt='sun' />,
    lien: '/demandeEstivage',
  },
  {
    id: 4,
    title: 'Education',
    icon: <img src='/assets/book(1).svg' alt='book-1' />,
    lien: '/demandeEducation',
  },
]

const displayServicesSocial = () => {
  return listServSocial.map((item) => (
    <ServicesSocialItem key={item.id} item={item} />
  ));
};
export default function SocialSer() {
  return (
     <div className='allservices'>
      <div className='ser-all'>{displayServicesSocial()}</div>
    </div>
  )
}
