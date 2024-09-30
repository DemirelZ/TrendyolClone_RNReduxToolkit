import {createAsyncThunk} from '@reduxjs/toolkit';
import {LOGIN_URL, USER_URL} from '../../service/URL';
import {getRequest, postRequest} from '../../service/VERB';
import AsyncStorage from '@react-native-async-storage/async-storage';

const userLogin = createAsyncThunk('auth/userLogin', async (params: object) => {
  const response = await postRequest(LOGIN_URL, params);
  await AsyncStorage.setItem('token', response.data.token);
  return response.data;
});

const getUserInfo = createAsyncThunk(
  'auth/getUserInfo',
  async (params: object) => {
    const response = await getRequest(`${USER_URL}/${params.userId}`, {
      params,
    });
    return response.data;
  },
);

export {userLogin, getUserInfo};
