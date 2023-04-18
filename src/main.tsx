import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import Fullback from '@pages/Fullback';
import { createMuiTheme } from '@theme';

import './index.css';

import { router } from './router';

const theme = createMuiTheme();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<Fullback />} />
    </ThemeProvider>
  </React.StrictMode>,
);
