import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const DemoPaper = styled(Paper)(({ theme }) => ({
  maxWidth: 800,
  height: 320,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: 'white',
}));

export default function Profile() {
  return (
    <Stack direction="row" spacing={2} justifyContent={'center'}>
      <DemoPaper square={false}>rounded corners</DemoPaper>
    </Stack>
  );
}
