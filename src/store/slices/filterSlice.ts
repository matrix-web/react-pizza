import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICategory, ISortItem } from '@/helpers/interfaces';
import { sortList, categoriesList } from '@/data';
import { RootState } from '..';

interface FilterState {
  search: string;
  category: ICategory;
  sort: ISortItem;
  currentPage: number;
}

type FilterPayload = Omit<FilterState, 'search'>;

const initialState: FilterState = {
  category: categoriesList[0],
  sort: sortList[0],
  currentPage: 1,
  search: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<ICategory>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<ISortItem>) => {
      state.sort = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setFilters: (state, action: PayloadAction<FilterPayload>) => {
      state.category = action.payload.category;
      state.currentPage = action.payload.currentPage;
      state.sort = action.payload.sort;
    },
  },
});

export const filterSelector = (state: RootState) => state.filter;

export const { setCategory, setSort, setCurrentPage, setFilters, setSearch } =
  filterSlice.actions;

export default filterSlice.reducer;
