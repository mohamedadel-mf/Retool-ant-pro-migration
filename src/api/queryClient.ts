import { type DefaultOptions, QueryClient } from '@tanstack/react-query';

const defaultQueryOptions: DefaultOptions = {
  queries: {
    staleTime: 1000 * 60 * 5, // 5 minutes — data considered fresh for this long
    gcTime: 1000 * 60 * 30, // 30 minutes — how long inactive data stays in cache
    refetchOnWindowFocus: false, // prevent refetching on tab focus (configurable)
    refetchOnReconnect: true,
    refetchOnMount: false,
    retry: 2, // retry failed requests twice
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30_000),
  },
  mutations: {
    retry: 1, // retry once on mutation failure
  },
};

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryOptions,
});
