import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/VERB';
import {CATEGORIES_URL, SPESIFIK_CATEGORY_URL} from '../../service/URL';

const getCategories = createAsyncThunk('categories/getCategories', async () => {
  const response = await getRequest(CATEGORIES_URL, {});
  return response.data;
});

const getSpesificCategory = createAsyncThunk(
  'categories/getSpesificCategory',
  async endPoint => {
    const spesificCategory = `${SPESIFIK_CATEGORY_URL}${endPoint}`;
    const response = await getRequest(spesificCategory, {});
    return response.data;
  },
);

export {getCategories, getSpesificCategory};
