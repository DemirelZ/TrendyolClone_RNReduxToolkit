import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cart, CartState} from '../../models/models';
import {getCart} from '../actions/cartActions';

const initialState: CartState = {
  cart: [],
  pending: false,
  error: false,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCart.pending, state => {
        state.pending = true;
      })
      .addCase(getCart.fulfilled, (state, action: PayloadAction<Cart[]>) => {
        (state.pending = false), (state.cart = action.payload);
      })
      .addCase(getCart.rejected, state => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default CartSlice.reducer;
