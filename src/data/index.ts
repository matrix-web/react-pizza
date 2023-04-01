import { ICategory, ISortItem } from '@/helpers/interfaces';

export const categoriesList: ICategory[] = [
  {
    id: 1,
    title: 'Все',
  },
  {
    id: 2,
    title: 'Мясные',
  },
  {
    id: 3,
    title: 'Вегетарианские',
  },
  {
    id: 4,
    title: 'Гриль',
  },
  {
    id: 5,
    title: 'Острые',
  },
  {
    id: 6,
    title: 'Закрытые',
  },
];

export const sortList: ISortItem[] = [
  { id: 1, title: 'Популярности', value: 'rating' },
  { id: 2, title: 'Цене', value: 'price' },
  { id: 3, title: 'Алфавиту', value: 'title' },
];
