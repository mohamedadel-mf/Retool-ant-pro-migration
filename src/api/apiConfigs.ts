import type { ApiResource } from './enums/apiResources';

export const apiConfigs: Record<
  ApiResource,
  { baseUrl: string; timeout?: number; getHeaders: () => HeadersInit }
> = {
  RETOOL_API: {
    // baseUrl: import.meta.env.VITE_RETOOL_API_URL,
    baseUrl: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    getHeaders: () => ({
      // Authorization: `Bearer ${import.meta.env.VITE_RETOOL_TOKEN}`,
      'Content-Type': 'application/json',
    }),
  },
  MF_ADMIN: {
    baseUrl: 'http://localhost:8000/',
    timeout: 30000,
    getHeaders: () => ({
      Authorization: `WmEnjr/S5eiLCveyATuEDw==:Gc6tuzv9l65kfRBsQlfBJt6eNN1EV/LzHx8Fdd+NYLfnMP5g/ODcEPj22I2Sabmg`,
      'Content-Type': 'application/json',
    }),
  },
};
