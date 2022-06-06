import { Stack } from '@mui/material';
import './tableConge.css';

export default function ConfirmationParSquad({ onClickConfirmation, value }) {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: '15px',
        marginTop: '30px',
      }}>
      <input
        className='checkStyle'
        type='checkbox'
        value={value}
        onClick={(e) => onClickConfirmation(e.target.checked)}
      />
      <label>Confirmation congé par squad</label>
    </Stack>
  );
}
