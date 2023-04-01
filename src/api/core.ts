import axios, { AxiosRequestConfig } from 'axios';
import { Handlers } from '@/helpers/handlers';
import { ApiParams } from './types';

const URL: string = process.env.REACT_APP_BASE_URL ?? '';

export class ServiceBase {
  protected static async callApi({
    data = null,
    method,
    url,
    baseURL,
    contentType,
    params,
    headers,
  }: ApiParams) {
    const config: AxiosRequestConfig = {
      baseURL,
      data,
      method,
      url,
      params,
      withCredentials: false,
      headers,
    };

    if (!config.baseURL) config.baseURL = baseURL || URL;

    if (contentType) {
      config.headers = {
        'Content-Type': contentType,
      };
    }

    try {
      const response = await axios.request(config);
      return response.data;
    } catch (error: any) {
      if (Object.prototype.hasOwnProperty.call(error, 'response')) {
        Handlers.defaultErrorAPIHandler(
          error.response.data.error != null
            ? error.response.data.error
            : error.response.data,
          error.response.status,
        );
        throw new Error(error.reponse.data.error);
      } else if (error.request) {
        Handlers.defaultErrorHandler(
          'Произошла ошибка при отправлении запроса, либо сервер не ответил вовремя',
        );
        throw new Error(error);
      }
    }
  }
}
