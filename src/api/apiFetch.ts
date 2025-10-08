import { getApiClient } from './apiClient';
import type { ApiFetchParams } from './models/apiFetch.interface';

export async function apiFetch<TResponse, TBody = unknown>({
  resource,
  endpoint,
  method,
  body,
  params,
  timeout,
}: ApiFetchParams<TBody>): Promise<TResponse> {
  const client = getApiClient(resource);
  const response = await client.request<TResponse>({
    url: endpoint,
    method,
    data: body,
    params,
    timeout,
  });

  return response.data;
}
