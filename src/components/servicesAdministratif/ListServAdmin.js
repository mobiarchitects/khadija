import { useEffect } from 'react';
import '../styles/allServices.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchConges } from '../../redux/congesSlice';
import moment from 'moment';
import { Box } from '@mui/material';

export default function ListServAdmin() {
  const conges = useSelector((state) => state.conges.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchConges());
  }, [dispatch]);

  useEffect(() => {
    console.log('conges :', conges);
  }, [conges]);

  return (
    <Box sx={{ margin: '0px 75px 0px 0px' }}>
      <div className='list-ser-admin'>
        <div className='list-title'>
          <p className='title-admin'>Mes demandes</p>
          <a className='lien' href='/'>
            Voir tous
          </a>
        </div>
        <div className='box'></div>
        <div>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Date de demande</th>
                <th>Type d’attestation</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {conges.map((item, index) => {
                const styleStatus =
                  item.labelStatus === 'En_cours' ? (
                    <td style={{ color: '#D75E11' }}>{item.labelStatus}</td>
                  ) : (
                    <td style={{ color: '#11C948' }}>{item.labelStatus}</td>
                  );
                return (
                  <tr key={index}>
                    <td
                      style={{
                        paddingLeft: '26px',
                        paddingTop: '21px',
                        paddingBottom: '25px',
                        fontSize: '14px',
                      }}>
                      {moment(item.startDate).format('DD/MM/YYYY')}
                    </td>
                    <td>{item.labelType}</td>
                    {styleStatus}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Box>
  );
}
