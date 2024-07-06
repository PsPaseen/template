import { CardContent, CardMedia, Paper, Typography, styled, Grid } from '@mui/material';
import React from 'react';

const CustomCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  textAlign: 'center',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  borderRadius: 25,
  border: '2px solid whitesmoke',
  height: '350px',
  width: '350px',
}));

function DogCard() {
  return (
    <CustomCard>
      <CardMedia
        component="img"
        alt="dog"
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
          ทดสอบความยาวววววววววววววววววววววววววววววววววววววววววววววว
        </Typography>
      </CardContent>
    </CustomCard>
  );
}

function SetCard() {
  return (
    <CustomCard>
      <CardMedia
        component="img"
        alt="dog"
        height="200"
        image="https://tvblog-static.tradingview.com/uploads/2018/08/set_logo_4-1024x512.png"
        sx={{ borderRadius: 2 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Set
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The Exchange of Thailand greennnnnnnnnnnnnn
        </Typography>
      </CardContent>
    </CustomCard>
  );
}

export default function WorkAtU() {
  const dogCards = Array(1).fill(<DogCard />);
  const setCards = Array(1).fill(<SetCard />);

  return (
    <Grid container spacing={1.5}>
      {dogCards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          {card}
        </Grid>
      ))}
      {setCards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          {card}
        </Grid>
      ))}
    </Grid>
  );
}
