import type { ApiResource } from '../enums/apiResources';
import type { HttpMethod } from '../enums/httpMethods.enum';

export interface ApiFetchParams<TBody = never> {
  resource: ApiResource;
  endpoint: string;
  method: HttpMethod;
  body?: TBody;
  params?: Record<string, string | number>;
  timeout?: number;
}
