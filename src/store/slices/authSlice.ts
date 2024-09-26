import {act} from 'react';
import {createSlice} from '@reduxjs/toolkit';
import {userLogin} from '../actions/authAction';

interface authState {
  isLogin: boolean;
  pending: boolean;
  error: boolean;
  token: string;
}

const initialState: authState = {
  isLogin: false,
  pending: false,
  error: false,
  token: '',
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(userLogin.pending, state => {
        state.pending = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        (state.pending = false),
          (state.isLogin = true),
          (state.token = action.payload);
      })
      .addCase(userLogin.rejected, state => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default AuthSlice.reducer;
