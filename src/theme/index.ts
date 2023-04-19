import { createTheme, PaletteMode } from '@mui/material';

import { createShadows } from '@theme/create-shadows';
import { createTypography } from '@theme/create-typography';
import { createPalette } from '@theme/create-palette';
import { createComponents } from '@theme/create-components';

export const createMuiTheme = (mode: PaletteMode) => {
  const palette = createPalette(mode);

  return createTheme({
    palette: palette,
    components: createComponents(palette),
    shadows: createShadows(),
    typography: createTypography(),
    shape: {
      borderRadius: 8,
    },
  });
};
