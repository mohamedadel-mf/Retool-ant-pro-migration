import type { AxiosInstance } from 'axios';

export function applyLoggingInterceptor(instance: AxiosInstance) {
  instance.interceptors.request.use((config) => {
    console.log(
      '[API Request]',
      config.method?.toUpperCase(),
      config.url,
      config.params || config.data,
    );
    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      console.log(
        '[API Response]',
        response.status,
        response.config.url,
        response.data,
      );
      return response;
    },
    (error) => {
      console.error('[API Error]', error.config?.url, error.message);
      return Promise.reject(error);
    },
  );
}
