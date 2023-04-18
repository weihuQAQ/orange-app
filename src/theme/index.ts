import { createTheme } from '@mui/material';

import { createShadows } from '@theme/create-shadows';
import { createTypography } from '@theme/create-typography';
import { createPalette } from '@theme/create-palette';
import { createComponents } from '@theme/create-components';

export const createMuiTheme = () => {
  const palette = createPalette();

  return createTheme({
    palette: createPalette(),
    components: createComponents(palette),
    shadows: createShadows(),
    typography: createTypography(),
    shape: {
      borderRadius: 8,
    },
  });
};
