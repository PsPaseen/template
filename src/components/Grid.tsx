/* eslint-disable import/order */
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
// eslint-disable-next-line import/order
import { styled } from '@mui/material/styles';
import avatarpray from '@src/components/static/images/avatar/1.jpg';

import './css/Grid.css';
import * as React from 'react';
// eslint-disable-next-line import/order
import { Avatar, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'whitesmoke',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: 20,
}));

const Profile = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 250,
  borderRadius: 25,
}));

const PRow = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  color: theme.palette.text.secondary,
  justifyContent: 'space-between',
  borderRadius: 20,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid xs={12}>
          <Profile
            sx={{
              border: 3,
              borderColor: 'whitesmoke',
              backgroundImage: `url("https://media.set.or.th/set/Images/2024/May/Cover-WEBSET_web_1920x360_2.jpg")`,
              boxShadow: 10,
            }}
          >
            <PRow>
              <Box display={'flex'} flexDirection={'row'} gap={'30px'}>
                <Avatar
                  alt="Pray"
                  src={avatarpray}
                  className="Avatar"
                  sx={{ width: 180, height: 180, marginLeft: 4, marginBottom: 1 }}
                />
                <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 'bold',
                      color: 'white',
                      position: 'absolute',
                      marginBottom: 3,
                    }}
                  >
                    Paseen
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'white', marginTop: 3.5, marginLeft: 0.2 }}>
                    sangarung
                  </Typography>
                </Box>
              </Box>
              <div></div>
            </PRow>
          </Profile>
        </Grid>
      </Grid>
    </Box>
  );
}
