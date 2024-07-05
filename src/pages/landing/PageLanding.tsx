import { useTheme } from '@mui/material';
import { useState } from 'react';
import './css/pagelanding.css';

import BasicGrid from '@src/components/Grid';
import Sidebar from '@src/components/sidebarPro';

export const PageLanding = () => {
  const theme = useTheme();
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <ButtonAppBar /> */}

      <div className="border">
        <BasicGrid />
      </div>
      <div className="border">
        <Sidebar />
      </div>
    </>
    // <Stack
    //   display={'flex'}
    //   flexDirection={'column'}
    //   alignItems={'center'}
    //   pt={32}
    //   height={'100vh'}
    //   bgcolor={theme.palette.background.neutral}
    // >
    //   <div>
    //     <a href="https://vitejs.dev" target="_blan k" rel="noreferrer">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank" rel="noreferrer">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <Stack display={'flex'} flexDirection={'column'} gap={'8px'}>
    //     <Button variant="contained" color="primary" onClick={() => setCount((o) => o + 1)}>
    //       count is {count}
    //     </Button>
    //     <Button variant="outlined" color="primary" onClick={() => setCount((o) => o + 1)}>
    //       count is {count}
    //     </Button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </Stack>
    //   <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    // </Stack>
  );
};
