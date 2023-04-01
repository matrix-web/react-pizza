import { ServiceBase } from '../core';
import { IParams } from '@/helpers/interfaces';

export class CartService extends ServiceBase {
  public static getItems({
    page = 1,
    limit = 10,
  }: {
    page: number;
    limit: number;
  }) {
    const method = 'GET';
    const url = '/carts';

    return ServiceBase.callApi({
      method,
      url,
      contentType: 'application/json',
      params: {
        page,
        limit,
      },
    });
  }
  public static addItem(args: IParams) {
    const method = 'POST';
    const url = '/carts';

    return ServiceBase.callApi({
      method,
      url,
      data: args,
    });
  }
  public static updateItem(args: IParams) {
    const method = 'PUT';
    const url = `/carts/${args.productId}`;

    return ServiceBase.callApi({
      method,
      url,
      data: {
        type: args.type,
        size: args.size,
        count: args.count,
      },
    });
  }
  public static deleteItem(id: string) {
    const method = 'DELETE';
    const url = `/carts/${id}`;

    return ServiceBase.callApi({
      method,
      url,
    });
  }
  public static clear() {
    const method = 'DELETE';
    const url = '/carts';

    return ServiceBase.callApi({
      method,
      url,
    });
  }
}
