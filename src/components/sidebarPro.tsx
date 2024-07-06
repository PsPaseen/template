import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
  styled,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React, { useState } from 'react';

import Contact from './Contact';
import Github from './GIthub';
import Internship from './Internship';
import PVP from './PVP';
import Roadmap from './Roadmap';
import Showcase from './Showcase';
import WorkAtU from './WorkAtU';

const Profile = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  textAlign: 'center',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  borderRadius: 25,
}));

export default function Sidebar() {
  const [activeComponent, setActiveComponent] = useState('');

  const handleListItemClick = (component: React.SetStateAction<string>) => {
    setActiveComponent(component);
  };

  return (
    <Grid container spacing={2.5}>
      <Grid xs={2.5}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Profile sx={{ border: 2, borderColor: 'whitesmoke', boxShadow: 3 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'start',
                marginLeft: 1.5,
                marginTop: 1,
              }}
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: 24, marginBottom: 2 }}>
                About
              </Typography>
              <Typography sx={{ fontSize: 17, marginBottom: 2 }}>
                Lorem ipsum ??? ทดสอบภาษาไทย ฟหกฟกหฟ เห้ยมันลงมาด้วยได้ไงงงง สุดโหดดดดดด
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <EmailIcon />
                <Typography sx={{ fontSize: 15, marginBottom: 2 }}>paseen.san@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <LocationOnIcon />
                <Typography sx={{ fontSize: 15, marginBottom: 2 }}>
                  SET The Exchange of Thailand
                </Typography>
              </Box>
            </Box>
          </Profile>

          <Profile sx={{ border: 2, borderColor: 'whitesmoke', boxShadow: 3 }}>
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleListItemClick('showcase')}>
                  <ListItemText primary="Showcase" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleListItemClick('work')}>
                  <ListItemText primary="Work at University" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleListItemClick('internship')}>
                  <ListItemText primary="Internship" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleListItemClick('roadmap')}>
                  <ListItemText primary="Roadmap" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleListItemClick('pvp')}>
                  <ListItemText primary="PVP" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleListItemClick('github')}>
                  <ListItemText secondary="Github" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleListItemClick('contact')}>
                  <ListItemText secondary="Contact" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleListItemClick('question')}>
                  <ListItemText secondary="???" />
                </ListItemButton>
              </ListItem>
            </List>
          </Profile>
        </Box>
      </Grid>
      <Grid xs={9.5}>
        <Profile sx={{ border: 2, borderColor: 'whitesmoke', boxShadow: 3 }}>
          {activeComponent === 'showcase' && <Showcase />}
          {activeComponent === 'work' && <WorkAtU />}
          {activeComponent === 'internship' && <Internship />}
          {activeComponent === 'roadmap' && <Roadmap />}
          {activeComponent === 'pvp' && <PVP />}
          {activeComponent === 'github' && <Github />}
          {activeComponent === 'contact' && <Contact />}
          {activeComponent === 'question' && <div>???</div>}
        </Profile>
      </Grid>
    </Grid>
  );
}
