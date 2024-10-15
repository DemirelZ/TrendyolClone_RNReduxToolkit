import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/VERB';
import {PRODUCTS_URL} from '../../service/URL';

const getProducts = createAsyncThunk(
  'products/getRequest',
  async (limit: number) => {
    const response = await getRequest(PRODUCTS_URL, {limit: limit});
    const productsWithFavourite = response.data.map(product => ({
      ...product,
      isFavourite: false,
    }));

    return productsWithFavourite;
  },
);

const getSingleProduct = createAsyncThunk(
  'products/getSingleProduct',
  async (params: {id: number; queryParam?: string}) => {
    const response = await getRequest(`${PRODUCTS_URL}/${params.id}`, {
      params: {queryParam: params.queryParam},
    });
    //console.log(response.data);
    return response.data;
  },
);

export {getProducts, getSingleProduct};
