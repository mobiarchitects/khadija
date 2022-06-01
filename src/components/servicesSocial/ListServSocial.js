import React from 'react';
import '../styles/allServices.css';

export default function ListServSocial() {
  return (
     <div className='list-ser-admin'>
      <div className='list-title'>
          <p className='title'>Mes demandes</p>
          <a className='lien' href='/'>Voir tous</a>
      </div>
      <div className='box'></div>
      <div >
        <table style={{width:'100%'}}>
          <thead>
            <tr>
              <th>Date de demande</th>
              <th>Type d’attestation</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>08/02/2019</td>
              <td>Attestation de travail</td>
              <td>en cours</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
