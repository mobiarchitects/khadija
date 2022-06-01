import React from 'react';
import '../styles/allServices.css';

export default function FormConge() {
  return (
    <>
      <div className='form-global'>
        <div className='form'>
          <div className='dire'>
            <label htmlFor='absence-select' className='tit-form'>
              Type d’absence :
            </label>
            <select className='input-form' name='absences' id='absence-select'>
              <option value='conge annuel'>Annuel</option>
              <option value='Conge annuel'>Mensuel</option>
            </select>
          </div>
          <div className='dire'>
            <label htmlFor='Date début' className='tit-form'>
              Date début :
            </label>
            <input className='input-form' type='date' />
          </div>
          <div className='dire'>
            <label htmlFor='Date fin' className='tit-form'>
              Date fin :
            </label>
            <input className='input-form' type='date' />
          </div>
        </div>
        <div className='form'>
          <div className='dire'>
            <label htmlFor='absence-select' className='tit-form'>
              Projet :
            </label>
            <select className='input-form' name='absences' id='absence-select'>
              
              <option value='conge annuel'>TA7ALIL</option>
              <option value='Conge annuel'>RH</option>
              <option value='Conge annuel'>Audit</option>
            </select>
          </div>
          <div className='dire'>
            <label htmlFor='Date début' className='tit-form'>
              Votre situation sur le projet :
            </label>
            <select className='input-form' name='absences' id='absence-select'>
              <option value='conge annuel'>Livraison_partielle</option>
              <option value='Conge annuel'>Livraison_complete</option>
            </select>
          </div>
          <div className='dire'>
            <label htmlFor='Date fin' className='tit-form'>
              Confirmation squad :
            </label>
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
