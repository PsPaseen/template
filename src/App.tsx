import { LocalizationProvider } from '@mui/x-date-pickers';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Router from './router';
import { ReactQueryProvider, queryClientGlobal } from './utils/react-query/provider';
import { MotionLazy } from './utils/settings/animate/motion-lazy';
import SettingsDrawer from './utils/settings/settings-drawer/settings-drawer';
import { SettingsProvider } from './utils/settings/settings-provider';
import { SnackbarProvider } from './utils/settings/snackbar';
import ThemeProvider from './utils/theme';

export const App = () => {
  return (
    <QueryClientProvider client={queryClientGlobal}>
      <ReactQueryProvider>
        <ReactQueryDevtools initialIsOpen />
        <LocalizationProvider>
          <SettingsProvider
            defaultSettings={{
              themeMode: 'light', // 'light' | 'dark'
              themeDirection: 'ltr', //  'rtl' | 'ltr'
              themeContrast: 'default', // 'default' | 'bold'
              themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
              themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
              themeStretch: false,
            }}
          >
            <ThemeProvider>
              <MotionLazy>
                <SnackbarProvider>
                  <SettingsDrawer />
                  <Router />
                </SnackbarProvider>
              </MotionLazy>
            </ThemeProvider>
          </SettingsProvider>
        </LocalizationProvider>
      </ReactQueryProvider>
    </QueryClientProvider>
  );
};
