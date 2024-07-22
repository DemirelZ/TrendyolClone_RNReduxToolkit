import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from '../actions/productActions';

const initialState = {
  products: null,
  pending: false,
  error: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.pending = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        (state.pending = false), (state.products = action.payload);
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.error = true;
      });
  },
});

export default productSlice.reducer;
