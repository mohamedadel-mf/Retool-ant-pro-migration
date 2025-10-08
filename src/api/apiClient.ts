import axios, { type AxiosInstance, type AxiosRequestHeaders } from 'axios';
import { apiConfigs } from './apiConfigs';
import type { ApiResource } from './enums/apiResources';
import { applyInterceptors } from './interceptors';

const clients: Partial<Record<ApiResource, AxiosInstance>> = {};

export function getApiClient(resource: ApiResource): AxiosInstance {
  if (!clients[resource]) {
    const { baseUrl, timeout, getHeaders } = apiConfigs[resource];

    const instance = axios.create({
      baseURL: baseUrl,
      timeout: timeout ?? 0, // defaults to no timeout if undefined
      headers: getHeaders() as AxiosRequestHeaders,
    });

    applyInterceptors(instance);

    clients[resource] = instance;
  }

  return clients[resource]!;
}
