import React, { FC, useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import Fullback from '@pages/Fullback';
import { createMuiTheme } from '@theme';
import { useSelector } from 'react-redux';
import { RootState } from '@store';

const App: FC = () => {
  const themeMode = useSelector((state: RootState) => state.system.themeMode);

  const theme = useMemo(() => {
    return createMuiTheme(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} fallbackElement={<Fullback />} />
    </ThemeProvider>
  );
};

export default App;
