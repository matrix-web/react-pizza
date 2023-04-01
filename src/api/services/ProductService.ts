import { ServiceBase } from '@/api/core';
import { IProduct } from '@/helpers/interfaces';

export class ProductService extends ServiceBase {
  public static getItems({
    categoryId,
    sortType,
    search,
    page,
    limit = 4,
  }: {
    categoryId?: number | null;
    sortType?: string | null;
    search?: string | null;
    page?: number | null;
    limit?: number;
  }): Promise<IProduct[]> {
    const method = 'GET';
    const url = `/products`;
    const params: any = {};

    params.category = categoryId !== 1 ? categoryId : null;
    params.sortBy = sortType || null;
    params.order = sortType ? 'desc' : null;
    params.search = search ? search : null;
    params.page = page ? page : null;
    params.limit = limit;

    return ServiceBase.callApi({
      method,
      url,
      contentType: 'application/json',
      params,
    });
  }
}
