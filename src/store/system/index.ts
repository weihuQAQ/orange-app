import { createSlice } from '@reduxjs/toolkit';
import { PaletteMode } from '@mui/material';

export interface SystemState {
  themeMode: PaletteMode;
}

const initialState: SystemState = {
  themeMode: matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
};

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    changeThemeMode(state) {
      state.themeMode = state.themeMode === 'light' ? 'dark' : 'light';
    },
  },
});

export const systemReducer = systemSlice.reducer;
export const { changeThemeMode } = systemSlice.actions;
