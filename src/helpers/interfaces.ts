export interface ISize {
  [key: string]: number;
}

export interface IColor {
  [key: string]: string;
}

export interface IMedia {
  [key: string]: string;
}

export interface IThemes {
  [key: number | string]: { [key: string]: { [key: string]: string } };
}

export type Weight = 400 | 500 | 600 | 700 | 800 | 900;

export interface IProduct {
  _id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export interface ICategory {
  id: number;
  title: string;
}

export interface ISortItem {
  id: number;
  title: string;
  value: string;
}

export interface IPaginationProps {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  siblingCount?: number;
}

export interface IProductId {
  _id: string;
}

export interface ICartItem {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  productId: IProductId;
  type: {
    id: number;
    title: string;
  };
  size: number;
  count: number;
}

export interface IParams {
  productId: string;
  type: { id: number; title: string };
  size: number;
  count: number;
}

export interface IMeta {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
}
