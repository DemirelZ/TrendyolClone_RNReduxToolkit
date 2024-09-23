import {createSlice} from '@reduxjs/toolkit';

interface authState {
  isLogin: boolean;
}

const initialState: authState = {
  isLogin: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default AuthSlice.reducer;
