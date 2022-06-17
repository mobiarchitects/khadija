import React from 'react';
import '../styles/allServices.css';
import ServicesAdminItem from './ServicesAdminItem';


const listServicesAdmin = [
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
  },];

  const displayServicesAdmin = () => {
  return listServicesAdmin.map((item) => (
    <ServicesAdminItem key={item.id} item={item} />
  ));
};

export default function AdministratifSer() {
  return (
 
   <div className='allservices'>
      <div className='ser-all'>{displayServicesAdmin()}</div>
    </div>
  )
}
