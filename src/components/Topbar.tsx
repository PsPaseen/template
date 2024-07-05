import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './css/Topbar.css';
// eslint-disable-next-line import/order
import { Avatar, Stack, useTheme } from '@mui/material';
import * as React from 'react';

import avatarpray from '@src/components/static/images/avatar/1.jpg';

import TemporaryDrawer from './Sidebar';

export default function ButtonAppBar() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }} className="Toolbar">
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <TemporaryDrawer />
          </Typography>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Pray" src={avatarpray} className="Avatar" />
            <Button color="inherit">ได้ไง</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
