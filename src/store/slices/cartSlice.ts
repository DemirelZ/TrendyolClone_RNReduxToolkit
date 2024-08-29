import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cart, CartState} from '../../models/models';
import {getCart} from '../actions/cartActions';
import {act} from 'react';

const initialState: CartState = {
  cart: [],
  pending: false,
  error: false,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setTotalPrice: (state, action) => {
      console.log('action', action.payload);
      state.totalPrice += action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCart.pending, state => {
        state.pending = true;
      })
      .addCase(getCart.fulfilled, (state, action: PayloadAction<Cart[]>) => {
        (state.pending = false), (state.cart = action.payload);
        //console.log(state.cart);
      })
      .addCase(getCart.rejected, state => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const {setTotalPrice} = CartSlice.actions;

export default CartSlice.reducer;
