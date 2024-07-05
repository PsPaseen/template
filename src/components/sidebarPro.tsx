/* eslint-disable import/order */
import Grid from '@mui/material/Unstable_Grid2';
// eslint-disable-next-line import/order
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  styled,
} from '@mui/material';

import Showcase from './Showcase';

// eslint-disable-next-line import/order
import * as React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Profile = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  textAlign: 'center',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  // textAlign: 'center',
  borderRadius: 25,
}));

export default function Sidebar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={2.5}>
      <Grid xs={2.5}>
        {/* <Box
            display={'flex'}
            flexDirection={'column'}
            gap={'8px'}
            backgroundColor={'black'}
            marginLeft={'8px'}
          >
            <div>5555</div>
            <div>1000</div>
            <div>jing</div>
          </Box> */}
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
                <EmailIcon></EmailIcon>
                <Typography sx={{ fontSize: 15, marginBottom: 2 }}>paseen.san@gmail.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <LocationOnIcon></LocationOnIcon>
                <Typography sx={{ fontSize: 15, marginBottom: 2 }}>
                  SET The Exchange of Thailand
                </Typography>
              </Box>
            </Box>
          </Profile>

          <Profile sx={{ border: 2, borderColor: 'whitesmoke', boxShadow: 3 }}>
            <List>
              {['Showcase', 'Work at University', 'Internship', 'Roadmap', 'PVP'].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{}</ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                  // {index % 2 === 0 ? <Showcase /> : <Showcase2 />}
                )
              )}
            </List>
            <Divider />
            <List>
              {['Github', 'Contact', '???'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText secondary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Profile>
        </Box>
      </Grid>
      <Grid xs={9.5}>
        <Profile sx={{ border: 2, borderColor: 'whitesmoke', boxShadow: 3 }}>
          <div>
            <Showcase />
          </div>
        </Profile>
      </Grid>
    </Grid>
  );
}
