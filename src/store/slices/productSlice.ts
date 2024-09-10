import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getProducts} from '../actions/productActions';
import {Product, ProductState} from '../../models/models';

const initialState: ProductState = {
  products: [],
  pending: false,
  error: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addFavouriteProduct: (state, action) => {
      state.products = state.products.map(product =>
        product.id === action.payload.id
          ? {...product, isFavourite: true}
          : product,
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.pending = true;
      })
      .addCase(
        getProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          (state.pending = false), (state.products = action.payload);
        },
      )
      .addCase(getProducts.rejected, (state, action) => {
        state.pending = false;
        state.error = true;
      });
  },
});
export const {addFavouriteProduct} = productSlice.actions;
export default productSlice.reducer;
