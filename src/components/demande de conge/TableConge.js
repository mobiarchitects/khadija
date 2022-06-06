import {
  Box,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import './tableConge.css';
import moment from 'moment';
import ReactPaginate from 'react-paginate';

export default function TableConge() {
  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date1 - date2);
    return diffInMs / (1000 * 60 * 60 * 24);
  }
  const handlePageClick = (data) => {
    console.log(data.selected);
  };
  const conges = useSelector((state) => state.conges.data);

  const rowConges = conges.map((conge) => {
    const dateDebut = moment(conge.startDate).format('DD/MM/YYYY');
    const dateFin = moment(conge.endDate).format('DD/MM/YYYY');
    const dateD = new Date(conge.startDate);
    const datef = new Date(conge.endDate);
    const styleStatus =
      conge.labelStatus === 'En_cours' ? (
        <TableCell
          sx={{ fontSize: '15px', fontWeight: '600', color: '#000000' }}
          align='center'
          style={{ color: '#D75E11' }}>
          {conge.labelStatus}
        </TableCell>
      ) : (
        <TableCell
          sx={{ fontSize: '15px', fontWeight: '600', color: '#000000' }}
          align='center'
          style={{ color: '#11C948' }}>
          {conge.labelStatus}
        </TableCell>
      );

    return (
      <TableRow key={conge.id}>
        <TableCell
          sx={{
            padding: '24px',
            fontSize: '15px',
            fontWeight: '600',
            color: '#000000',
          }}
          align='center'>
          {dateDebut}
        </TableCell>
        <TableCell
          sx={{ fontSize: '15px', fontWeight: '600', color: '#000000' }}
          align='center'>
          {dateFin}
        </TableCell>
        <TableCell
          sx={{ fontSize: '15px', fontWeight: '600', color: '#000000' }}
          align='center'>
          {getDifferenceInDays(dateD, datef)}
        </TableCell>
        <TableCell
          sx={{ fontSize: '15px', fontWeight: '600', color: '#000000' }}
          align='center'>
          {conge.labelType}
        </TableCell>
        {styleStatus}
      </TableRow>
    );
  });
  return (
    <Box>
      <Stack>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <p className='row-cell'>Date de début</p>
                </TableCell>
                <TableCell>
                  <p className='row-cell'>Date de fin</p>
                </TableCell>
                <TableCell>
                  <p className='row-cell'>Jours</p>
                </TableCell>
                <TableCell>
                  <p className='row-cell'>Type d’absence</p>
                </TableCell>
                <TableCell>
                  <p className='row-cell'>Statut</p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{rowConges}</TableBody>
          </Table>
        </TableContainer>
      </Stack>
      <Stack>
        <ReactPaginate
          previousLabel={' < '}
          breakLabel={'...'}
          pageCount={25}
          nextLabel={' > '}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakLinkClassName={'page-link'}
        />
      </Stack>
    </Box>
  );
}
