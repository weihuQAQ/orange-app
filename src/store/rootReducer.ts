import { combineReducers } from '@reduxjs/toolkit';

import { userReducer } from './user';
import { systemReducer } from './system';

const rootReducer = combineReducers({
  user: userReducer,
  system: systemReducer,
});

export default rootReducer;
