import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { getEnv } from '../env-helper';

import { BaseHttpClient } from './base-http-client';

class NebulaComClient extends BaseHttpClient {
  constructor() {
    super({
      baseURL: getEnv('API_BASE_URL'),
    });
  }

  // eslint-disable-next-line
  async onRequest(
    request: InternalAxiosRequestConfig<any>
  ): Promise<InternalAxiosRequestConfig<any>> {
    request.url = `${getEnv('API_BASE_URL')}/${request.url}`;

    return request;
  }

  // eslint-disable-next-line
  async onResponse(response: AxiosResponse<any>) {
    if (response.data && response.data?.code !== 'S0000') {
      return Promise.reject(response.data.message);
    }
    return response;
  }
}

export const nebulaComClient = new NebulaComClient();
