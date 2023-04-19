import { PaletteOptions } from '@mui/material/styles/createPalette';
import { PaletteMode } from '@mui/material';

export const createPalette = (mode: PaletteMode): PaletteOptions => {
  return {
    divider: '#F2F4F7',
    mode: mode,
  };
};
