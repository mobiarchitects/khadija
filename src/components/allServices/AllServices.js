import React from 'react';
import '../styles/allServices.css';
import AllServicesItem from './AllServicesItem';

const listServices = [
  {
    id: 1,
    title: 'Demande congé',
    icon: <img src='/assets/calendar(1).svg' alt='Absences' />,
    lien: '/demandeAbsence',
  },
  {
    id: 2,
    title: 'Demande Attestation',
    icon: <img src='/assets/man(1).svg' alt='man-1' />,
    lien: '/demandeInfosPersonnelles',
  },
  {
    id: 3,
    title: 'Déplacement client',
    icon: <img src='/assets/team.svg' alt='team' />,
    lien: '/demandeDelegations',
  },
  {
    id: 4,
    title: 'Réclamation interne',
    icon: <img src='/assets/paper.svg' alt='paper' />,
    lien: '/demandeAttestations',
  },
  {
    id: 5,
    title: 'Projets Client',
    icon: <img src='/assets/wallet.svg' alt='wallet' />,
    lien: '/demandeRecoresurPrime',
  },
  {
    id: 6,
    title: 'Espace stagaires',
    icon: <img src='/assets/grandfather.svg' alt='grandfather' />,
    lien: '/demandeRCAR',
  },
  {
    id: 7,
    title: 'Donnée Personnelles',
    icon: <img src='/assets/books.svg' alt='books' />,
    lien: '/demandeRecore',
  },
  {
    id: 8,
    title: 'Délégations',
    icon: <img src='/assets/approved.svg' alt='approved' />,
    lien: '/demandeBulletinsDePaie',
  },
  {
    id: 9,
    title: 'Bulletins de paie',
    icon: <img src='/assets/suitcases.svg' alt='suitcases' />,
    lien: '/demandeAbsence',
  },
  {
    id: 10,
    title: 'RCAR',
    icon: <img src='/assets/puzzle.svg' alt='puzzle' />,
    lien: '/demandeAbsence',
  },
  {
    id: 11,
    title: 'Recore',
    icon: <img src='/assets/sun.svg' alt='sun' />,
    lien: '/demandeAbsence',
  },
  {
    id: 12,
    title: 'Recore sur prime',
    icon: <img src='/assets/book(1).svg' alt='book-1' />,
    lien: '/demandeAbsence',
  },
  {
    id: 13,
    title: 'Colonies de vacances',
    icon: <img src='/assets/Group 7.svg' alt='group-7' />,
    lien: '/demandeAbsence',
  },
  {
    id: 14,
    title: 'Conventions tarifaires',
    icon: <img src='/assets/shopping-bag(1).svg' alt='shopping-bag(1)' />,
    lien: '/demandeAbsence',
  },
  {
    id: 15,
    title: 'Estivages',
    icon: <img src='/assets/cutlery.svg' alt='cutlery' />,
    lien: '/demandeAbsence',
  },
  {
    id: 16,
    title: 'Education',
    icon: <img src='/assets/leader.svg' alt='leader' />,
    lien: '/demandeAbsence',
  },
  {
    id: 17,
    title: 'Cliniques agréées',
    icon: <img src='/assets/key.svg' alt='key' />,
    lien: '/demandeAbsence',
  },
  {
    id: 18,
    title: 'Couvertures médicales',
    icon: <img src='/assets/hospital.svg' alt='hospital' />,
    lien: '/demandeAbsence',
  },
  {
    id: 19,
    title: 'Mes dossiers',
    icon: <img src='/assets/medical-file.svg' alt='Gmedical-file' />,
    lien: '/demandeAbsence',
  },
  {
    id: 20,
    title: 'Colonies de vacances',
    icon: <img src='/assets/medical-file.svg' alt='Gmedical-file' />,
    lien: '/demandeAbsence',
  },
  {
    id: 21,
    title: 'Conventions tarifaires',
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
