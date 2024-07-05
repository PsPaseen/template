import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from 'axios';
import dayjs from 'dayjs';
import { get, set } from 'lodash';
import qs from 'qs';

export enum ContentType {
  X_WWW_FORM_URLENCODED = 'application/x-www-form-urlencoded',
  JSON = 'application/json',
  FORM_DATA = 'multipart/form-data',
}

export const getContentTypeHeader = (contentType: ContentType) => ({ 'Content-Type': contentType });

export class BaseHttpClient {
  private readonly ax: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.ax = axios.create(config);
    this.ax.interceptors.request.use(async (request: InternalAxiosRequestConfig) => {
      set(request, 'headers.Content-Type', get(request, 'headers.Content-Type', ContentType.JSON));
      request.data = this.deepLoop(request.data, this.normalizeRequestData);
      if (request.headers?.['Content-Type'] === ContentType.FORM_DATA) {
        this.parseDataToFormData(request);
      } else if (request.headers?.['Content-Type'] === ContentType.X_WWW_FORM_URLENCODED) {
        this.parseDataToString(request);
      }
      return this.onRequest(request);
    });
    this.ax.interceptors.response.use(
      async (response: AxiosResponse) => {
        return this.onResponse(response);
      },
      async (error: AxiosError) => {
        return this.onError(error);
      }
    );
  }

  // eslint-disable-next-line
  private parseDataToString(request: AxiosRequestConfig) {
    if (request.data) {
      request.data = qs.stringify(request.data);
    }
  }

  // eslint-disable-next-line
  private parseDataToFormData(request: AxiosRequestConfig) {
    if (request.data && !(request.data instanceof FormData)) {
      const formData = new FormData();
      Object.entries(request.data).forEach(([key, value]: any[]) => {
        if (value !== undefined) {
          if (value instanceof Array) {
            value.forEach((val) => {
              formData.append(`${key}`, val);
            });
          } else {
            formData.append(key, value);
          }
        }
      });
      request.data = formData;
    }
  }

  private deepLoop(data: any, func: (d: any) => any): any {
    if (data instanceof Blob) {
      return func(data);
    }
    if (dayjs.isDayjs(data)) {
      return func(data);
    }
    if (data instanceof Date) {
      return func(data);
    }
    if (data instanceof Array) {
      return data.map((d) => this.deepLoop(d, func));
    }
    if (data instanceof Object) {
      const formatData: any = {};
      Object.keys(data).forEach((key) => {
        formatData[key] = this.deepLoop(data[key], func);
      });
      return formatData;
    }
    return func(data);
  }

  // eslint-disable-next-line
  protected async onRequest(
    request: InternalAxiosRequestConfig<any>
  ): Promise<InternalAxiosRequestConfig<any>> {
    return request;
  }

  // eslint-disable-next-line
  protected async onResponse(response: AxiosResponse<any>): Promise<AxiosResponse<any>> {
    return response;
  }

  // eslint-disable-next-line
  protected onError(error: AxiosError): any {
    return Promise.reject(error);
  }

  // eslint-disable-next-line
  protected normalizeRequestData(value: any) {
    return value;
  }

  // eslint-disable-next-line
  protected normalizeResponseData(value: any) {
    return value;
  }

  get<T>(url: string, data?: any, config?: AxiosRequestConfig<T>): Promise<AxiosResponse<T, any>> {
    return this.ax.get<T>(url, { ...config, params: data });
  }

  post<T>(url: string, data?: any, config?: AxiosRequestConfig<T>): Promise<AxiosResponse<T, any>> {
    return this.ax.post<T>(url, data, config);
  }

  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T, any>> {
    return this.ax.put<T>(url, data, config);
  }

  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T, any>> {
    return this.ax.patch<T>(url, data, config);
  }

  delete<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any>
  ): Promise<AxiosResponse<T, any>> {
    return this.ax.delete<T>(url, { ...config, params: data });
  }

  getBlob<T extends Blob>(
    url: string,
    config?: AxiosRequestConfig<Text>
  ): Promise<AxiosResponse<T, any>> {
    return this.ax.get<T>(url, {
      responseType: 'blob',
      ...config,
    });
  }

  postGetFile<T extends Blob>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig & { contentType?: ContentType }
  ): Promise<AxiosResponse<T, any>> {
    return this.ax.post<T>(url, data, {
      responseType: 'blob',
      ...config,
    });
  }
}
