import { ICartItem } from './interfaces';

export const formatPrice = (
  price: number,
  options?: Intl.NumberFormatOptions,
): string => {
  const formatter = new Intl.NumberFormat('ru', {
    ...options,
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  });

  return formatter.format(price);
};

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');

  return data ? JSON.parse(data) : [];
};

export const calculateTotalPrice = (items: ICartItem[]) =>
  items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
