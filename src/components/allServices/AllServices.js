import React from 'react';
import '../styles/allServices.css';
import AllServicesItem from './AllServicesItem';

const listServices = [
  {
    id: 1,
    title: 'Absences',
    icon: <img src='/assets/calendar(1).svg' alt='Absences' />,
    lien: '/demandeAbsence',
  },
  {
    id: 2,
    title: 'infos personnelles',
    icon: <img src='/assets/man(1).svg' alt='man-1' />,
    lien: '/demandeInfosPersonnelles',
  },
  {
    id: 3,
    title: 'Délégations',
    icon: <img src='/assets/team.svg' alt='team' />,
    lien: '/demandeDelegations',
  },
  {
    id: 4,
    title: 'Attestations',
    icon: <img src='/assets/paper.svg' alt='paper' />,
    lien: '/demandeAttestations',
  },
  {
    id: 5,
    title: 'Recore sur Prime',
    icon: <img src='/assets/wallet.svg' alt='wallet' />,
    lien: '/demandeRecoresurPrime',
  },
  {
    id: 6,
    title: 'RCAR',
    icon: <img src='/assets/grandfather.svg' alt='grandfather' />,
    lien: '/demandeRCAR',
  },
  {
    id: 7,
    title: 'Recore',
    icon: <img src='/assets/books.svg' alt='books' />,
    lien: '/demandeRecore',
  },
  {
    id: 8,
    title: 'Bulletins de paie',
    icon: <img src='/assets/approved.svg' alt='approved' />,
    lien: '/demandeBulletinsDePaie',
  },
  {
    id: 9,
    title: 'Colonies de vacances',
    icon: <img src='/assets/suitcases.svg' alt='suitcases' />,
    lien: '/demandeAbsence',
  },
  {
    id: 10,
    title: 'Conventions tarifaires',
    icon: <img src='/assets/puzzle.svg' alt='puzzle' />,
    lien: '/demandeAbsence',
  },
  {
    id: 11,
    title: 'Estivage',
    icon: <img src='/assets/sun.svg' alt='sun' />,
    lien: '/demandeAbsence',
  },
  {
    id: 12,
    title: 'Education',
    icon: <img src='/assets/book(1).svg' alt='book-1' />,
    lien: '/demandeAbsence',
  },
  {
    id: 13,
    title: 'Bibliothéque',
    icon: <img src='/assets/Group 7.svg' alt='group-7' />,
    lien: '/demandeAbsence',
  },
  {
    id: 14,
    title: 'E-commerce',
    icon: <img src='/assets/shopping-bag(1).svg' alt='shopping-bag(1)' />,
    lien: '/demandeAbsence',
  },
  {
    id: 15,
    title: 'Restaurant',
    icon: <img src='/assets/cutlery.svg' alt='cutlery' />,
    lien: '/demandeAbsence',
  },
  {
    id: 16,
    title: 'Salle de la réunion',
    icon: <img src='/assets/leader.svg' alt='leader' />,
    lien: '/demandeAbsence',
  },
  {
    id: 17,
    title: 'Accès site',
    icon: <img src='/assets/key.svg' alt='key' />,
    lien: '/demandeAbsence',
  },
  {
    id: 18,
    title: 'Cliniques agrées',
    icon: <img src='/assets/hospital.svg' alt='hospital' />,
    lien: '/demandeAbsence',
  },
  {
    id: 19,
    title: 'Couverture médical',
    icon: <img src='/assets/medical-file.svg' alt='Gmedical-file' />,
    lien: '/demandeAbsence',
  },
];

const displayServices = () => {
  return listServices.map((item) => (
    <AllServicesItem key={item.id} item={item} />
  ));
};
export default function AllServices() {
  return (
    <div className='allservices'>
      <div className='ser-all'>{displayServices()}</div>
    </div>
  );
}
