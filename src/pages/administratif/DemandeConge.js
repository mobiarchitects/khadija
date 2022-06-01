import React from 'react';
import FormConge from '../../components/servicesAdministratif/FormConge';

export default function DemandeConge() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '27px',
        marginTop: '32px',
      }}>
      <div
        style={{ display: 'flex', flexDirection: 'row', marginBottom: '25px' }}>
        <a
          style={{ textDecoration: 'none', color: '#81869A', fontSize: '14px' }}
          href='/Administratif'>
          Services&nbsp;&gt;&nbsp;
        </a>
        <a
          style={{ textDecoration: 'none', color: '#81869A', fontSize: '14px' }}
          href='/demandeAbsence'>
          Demandes d'absences
        </a>
      </div>
      <div>
        <FormConge />
      </div>
      <div></div>
    </div>
  );
}
