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
// import { fetchCongePaginations } from '../../redux/congePaginationSlice';

export default function TableConge({ handlePaginationClick }) {
  const congesPaginations = useSelector((state) => state.congePations.data);

  console.log(congesPaginations);
  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date1 - date2);
    return diffInMs / (1000 * 60 * 60 * 24);
  }
  // const handlePageClick = async (data) => {
  //   let currentPage = data.selected + 1;
  //   console.log(currentPage);
  //   fetchCongePaginations();
  // };

  // const conges = useSelector((state) => state.conges.data);

  const rowConges = congesPaginations.map((conge) => {
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
        <TableContainer
          sx={{ boxShadow: 'none', marginBottom: '10px' }}
          component={Paper}>
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
      <Stack spacing={2}>
        <ReactPaginate
          previousLabel={' < '}
          breakLabel={'...'}
          pageCount={10}
          nextLabel={' > '}
          marginPagesDisplayed={2}
          onPageChange={(data) => handlePaginationClick(data)}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </Stack>
    </Box>
  );
}
