import {useSelector} from 'react-redux';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Category, CategoryState} from '../../models/models';
import {getCategories, getSpesificCategory} from '../actions/categoryAction';

const initialState: CategoryState = {
  categories: [],
  productsByCategry: [],
  selectedCategory: 'electronics',
  pending: false,
  error: false,
};

const CategorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, state => {
        state.pending = true;
      })
      .addCase(
        getCategories.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          (state.pending = false), (state.categories = action.payload);
        },
      )
      .addCase(getCategories.rejected, state => {
        state.pending = false;
        state.error = true;
      })
      .addCase(getSpesificCategory.pending, state => {
        state.pending = true;
      })
      .addCase(getSpesificCategory.fulfilled, (state, action) => {
        (state.pending = false), (state.productsByCategry = action.payload);
      })
      .addCase(getSpesificCategory.rejected, state => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const {changeCategory} = CategorySlice.actions;

export default CategorySlice.reducer;
