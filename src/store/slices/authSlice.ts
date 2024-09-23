import {createSlice} from '@reduxjs/toolkit';

interface authState {
  isLogin: boolean;
  pending: boolean;
}

const initialState: authState = {
  isLogin: false,
  pending: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default AuthSlice.reducer;
