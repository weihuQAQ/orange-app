import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  isLogin: boolean;
  token: string;
}

const initialState: UserState = {
  isLogin: false,
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserState(state, action: PayloadAction<UserState>) {
      state.isLogin = action.payload.isLogin;
      state.token = action.payload.token;
    },
  },
});
export const userReducer = userSlice.reducer;
