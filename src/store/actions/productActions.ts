import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/VERB';
import {PRODUCTS_URL} from '../../service/URL';

const getProducts = createAsyncThunk(
  'products/getRequest',
  async (limit: number) => {
    const response = await getRequest(PRODUCTS_URL, {limit: limit});
    return response.data;
  },
);

export {getProducts};
