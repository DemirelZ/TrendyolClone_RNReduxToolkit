import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/VERB';
import {CARTBYUSER_URL} from '../../service/URL';

const getCart = createAsyncThunk('cart/getCart', async (params: object) => {
  const response = await getRequest(`${CARTBYUSER_URL}${params.userId}`, {
    params,
  });
  //console.log(response.data[0].products);
  return response.data[0].products;
});

export {getCart};
