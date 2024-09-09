import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {FavouriteState} from '../../models/models';

const initialState: FavouriteState = {
  favourites: [],
};

const FavouriteSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.favourites = [...state.favourites, action.payload];
    },
  },
});

export const {addFavourite} = FavouriteSlice.actions;

export default FavouriteSlice.reducer;
