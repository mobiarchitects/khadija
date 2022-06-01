import { useState } from 'react';
import '../styles/allServices.css';
import InputProjet from './InputProjet';

export default function FormConge() {
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [absence, setAbsence] = useState('Mensuel');

  console.log(absence);
  return (
    <>
      <div className='form-global'>
        <div className='form'>
          <div className='dire'>
            <label className='tit-form'>Type d’absence :</label>
            <select
              className='input-form'
              value={absence}
              onChange={(e) => setAbsence(e.target.value)}>
              <option value='Annuel'>Annuel</option>
              <option value='Mensuel'>Mensuel</option>
            </select>
          </div>
          <div className='dire'>
            <label className='tit-form'>Date début :</label>
            <input
              className='input-form'
              type='date'
              value={dateDebut}
              onChange={(e) => setDateDebut(e.target.value)}
            />
          </div>
          <div className='dire'>
            <label className='tit-form'>Date fin :</label>
            <input
              className='input-form'
              type='date'
              value={dateFin}
              onChange={(e) => setDateFin(e.target.value)}
            />
          </div>
        </div>
        <div className='form'>
          <div className='dire'>
            <InputProjet />
          </div>
          <div className='dire'>
            <label className='tit-form'>Votre situation sur le projet :</label>
            <select className='input-form'>
              <option value='conge annuel'>Livraison_partielle</option>
              <option value='Conge annuel'>Livraison_complete</option>
            </select>
          </div>
          <div className='dire'>
            <label className='tit-form'>Confirmation squad :</label>
            <div className='squad'>
              <input className='squad-input' type='checkbox' />
              <label>Confirmation congé par squad</label>
            </div>
          </div>
          <button className='btn-conge' type='submit'>
            Envoyer la demande
          </button>
        </div>
      </div>
    </>
  );
}
