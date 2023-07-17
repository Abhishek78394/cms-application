import { configureStore } from '@reduxjs/toolkit';
import { userReducer,profileReducer } from './reducers/userReducers';

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
  },
});

export default store;

export const server = 'http://localhost:4008';
