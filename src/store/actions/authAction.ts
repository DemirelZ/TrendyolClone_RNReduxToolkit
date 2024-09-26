import {createAsyncThunk} from '@reduxjs/toolkit';
import {LOGIN_URL} from '../../service/URL';
import {postRequest} from '../../service/VERB';

const userLogin = createAsyncThunk('auth/userLogin', async (params: object) => {
  const response = await postRequest(LOGIN_URL, params);
  return response.data;
});

export {userLogin};
