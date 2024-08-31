import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest, updateRequest} from '../../service/VERB';
import {CART_URL, CARTBYUSER_URL} from '../../service/URL';
import {Alert} from 'react-native';

const getCart = createAsyncThunk('cart/getCart', async (params: object) => {
  const response = await getRequest(`${CARTBYUSER_URL}${params.userId}`, {
    params,
  });
  //console.log(response.data[0].products);
  return response.data[0].products;
});

const updateCart = createAsyncThunk(
  'cart/updateCart',
  async (params: object) => {
    const response = await updateRequest(
      `${CART_URL}${String(params.userId)}`,

      params,
    );
    if (response.status == 200) {
      Alert.alert('Info', 'Product successfully added to basket', [
        {
          text: 'Cancel',
          // onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK', // onPress: () => console.log('OK Pressed')
        },
      ]);
    }
    return response.data.products[0];
  },
);

export {getCart, updateCart};
