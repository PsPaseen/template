/* eslint-disable import/order */
// eslint-disable-next-line import/order
import { Box, CardContent, CardMedia, Paper, Typography, styled } from '@mui/material';
// eslint-disable-next-line import/order
import * as React from 'react';

const Card = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  textAlign: 'center',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  borderRadius: 25,
}));

export default function Showcase2() {
  return (
    <>
      <Box sx={{ textAlign: 'start', display: 'flex', flexDirection: 'row' }}>
        <Card sx={{ maxWidth: 345, border: 2, borderColor: 'whitesmoke', margin: 2 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image="https://s.isanook.com/wo/0/ud/4/20927/d21.jpg?ip/resize/w850/q80/jpg"
            sx={{ borderRadius: 2 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              น้องหมา
            </Typography>
            <Typography variant="body2" color="text.secondary">
              น้องหมาไงงงง ''' ' asdddddddsssssssss
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345, border: 2, borderColor: 'whitesmoke', margin: 2 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image="https://s.isanook.com/wo/0/ud/4/20927/d21.jpg?ip/resize/w850/q80/jpg"
            sx={{ borderRadius: 2 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              น้องหมา
            </Typography>
            <Typography variant="body2" color="text.secondary">
              น้องหมาไงงงง ''' ' asdddddddsssssssss
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345, border: 2, borderColor: 'whitesmoke', margin: 2 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            image="https://s.isanook.com/wo/0/ud/4/20927/d21.jpg?ip/resize/w850/q80/jpg"
            sx={{ borderRadius: 2 }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              น้องหมา
            </Typography>
            <Typography variant="body2" color="text.secondary">
              น้องหมาไงงงง ''' ' asdddddddsssssssss
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
