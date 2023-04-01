import { createAsyncThunk, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct, IMeta } from '@/helpers/interfaces';
import { ProductService } from '@/api/services/ProductService';
import { Statuses } from '@/helpers/enums';
import { RootState } from '..';

interface ProductState {
  products: IProduct[];
  status: Statuses;
  meta: IMeta;
}

const initialState: ProductState = {
  products: [],
  status: Statuses.LOADING,
  meta: {
    limit: 4,
    page: 1,
    totalCount: 1,
    totalPages: 1,
  } as IMeta,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params: {
    categoryId: number;
    sortType: string;
    page: number;
    search?: string;
  }) => {
    const data = await ProductService.getItems(params);
    return data;
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [`${fetchProducts.pending}`]: (state) => {
      state.status = Statuses.LOADING;
      state.products = [];
      state.meta = {} as IMeta;
    },
    [`${fetchProducts.fulfilled}`]: (state, action) => {
      console.log(action.payload);
      state.products = action.payload.products;
      state.meta = action.payload.meta;
      state.status = Statuses.SUCCESS;
    },
    [`${fetchProducts.rejected}`]: (state) => {
      state.status = Statuses.ERROR;
      state.products = [];
      state.meta = {} as IMeta;
    },
  },
});

export const productsSelector = (state: RootState) => state.products;

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
