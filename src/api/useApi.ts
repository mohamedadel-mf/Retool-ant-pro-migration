import {
  UseMutationOptions,
  type UseQueryOptions,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { apiFetch } from './apiFetch';
import type { ApiResource } from './enums/apiResources';
import { HttpMethod } from './enums/httpMethods.enum';

export function useApiQuery<TResponse>({
  resource,
  endpoint,
  params,
  queryKey,
  options,
}: {
  resource: ApiResource;
  endpoint: string;
  params?: Record<string, string | number>;
  queryKey: (string | number)[];
  options?: Omit<UseQueryOptions<TResponse>, 'queryKey' | 'queryFn'>;
}) {
  return useQuery<TResponse>({
    queryKey,
    queryFn: () =>
      apiFetch<TResponse>({
        resource,
        endpoint,
        method: HttpMethod.GET,
        params,
      }),
    ...options,
  });
}

export function useApiMutation<TResponse, TBody = unknown>({
  resource,
  endpoint,
  method,
}: {
  resource: ApiResource;
  endpoint: string;
  method: Exclude<HttpMethod, HttpMethod.GET>;
}) {
  return useMutation<TResponse, Error, TBody>({
    mutationFn: (body) =>
      apiFetch<TResponse, TBody>({
        resource,
        endpoint,
        method,
        body,
      }),
  });
}
