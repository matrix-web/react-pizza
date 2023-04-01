import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import { ICartItem, IMeta, IParams } from '@/helpers/interfaces';
import { RootState } from '..';
import { CartService } from '@/api/services/CartService';
import { Statuses } from '@/helpers/enums';

interface CartState {
  totalPrice: number;
  items: ICartItem[];
  meta: IMeta;
  status: Statuses;
  isRemoveLoading: boolean;
}

const initialState: CartState = {
  totalPrice: 0,
  items: [],
  meta: {
    limit: 10,
    page: 1,
    totalCount: 1,
    totalPages: 1,
  },
  status: Statuses.IDLE,
  isRemoveLoading: false,
};

export const fetchItems = createAsyncThunk(
  'cart/fetchItems',
  async ({ page, limit }: { page: number; limit: number }) => {
    const response = await CartService.getItems({
      page,
      limit,
    });

    return response;
  },
);

export const deleteItem = createAsyncThunk(
  'cart/deleteItem',
  async (id: string) => {
    const response = await CartService.deleteItem(id);

    return response;
  },
);

export const addCartItem = createAsyncThunk(
  'cart/addItem',
  async (params: IParams) => {
    const response = await CartService.addItem(params);

    return response;
  },
);

export const updateItem = createAsyncThunk(
  'cart/updateItem',
  async (params: IParams) => {
    const response = await CartService.updateItem(params);

    return response;
  },
);

export const clearItems = createAsyncThunk('cart/clear', async () => {
  const response = await CartService.clear();

  return response;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<CartState>) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = Statuses.LOADING;
      state.items = [];
    });

    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.status = Statuses.SUCCESS;
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
      state.meta = action.payload.meta;
    });

    builder.addCase(fetchItems.rejected, (state) => {
      state.status = Statuses.ERROR;
      state.totalPrice = 0;
      state.items = [];
    });

    builder.addCase(addCartItem.pending, (state) => {
      state.status = Statuses.LOADING;
    });

    builder.addCase(addCartItem.fulfilled, (state, action) => {
      state.status = Statuses.SUCCESS;
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    });

    builder.addCase(addCartItem.rejected, (state) => {
      state.status = Statuses.ERROR;
      state.items = [];
      state.totalPrice = 0;
    });

    builder.addCase(updateItem.pending, (state) => {
      state.status = Statuses.LOADING;
    });

    builder.addCase(updateItem.fulfilled, (state, action) => {
      state.status = Statuses.SUCCESS;
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    });

    builder.addCase(updateItem.rejected, (state) => {
      state.status = Statuses.ERROR;
      state.items = [];
      state.totalPrice = 0;
    });

    builder.addCase(deleteItem.pending, (state) => {
      state.status = Statuses.LOADING;
      state.isRemoveLoading = true;
    });

    builder.addCase(deleteItem.fulfilled, (state) => {
      state.status = Statuses.SUCCESS;
      state.isRemoveLoading = false;
    });

    builder.addCase(deleteItem.rejected, (state) => {
      state.status = Statuses.ERROR;
      state.isRemoveLoading = false;
      state.totalPrice = 0;
      state.items = [];
    });

    builder.addCase(clearItems.pending, (state) => {
      state.status = Statuses.LOADING;
      state.isRemoveLoading = true;
    });

    builder.addCase(clearItems.fulfilled, (state) => {
      state.status = Statuses.SUCCESS;
      state.isRemoveLoading = false;
    });

    builder.addCase(clearItems.rejected, (state) => {
      state.status = Statuses.ERROR;
      state.items = [];
      state.totalPrice = 0;
      state.isRemoveLoading = false;
    });
  },
});

export const cartSelector = (state: RootState) => state.cart;

export default cartSlice.reducer;
