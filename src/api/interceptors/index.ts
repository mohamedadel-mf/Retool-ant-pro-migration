import type { AxiosInstance } from 'axios';
import { applyLoggingInterceptor } from './logging.interceptor';

export function applyInterceptors(instance: AxiosInstance) {
  applyLoggingInterceptor(instance);
}
