import { QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { PropsWithChildren, useCallback, useEffect } from 'react';

export const queryClientGlobal = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      gcTime: 1000 * 60 * 5, // 5 minute
      staleTime: 1000 * 60 * 5, // 5 minute,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

export const ReactQueryProvider = (props: PropsWithChildren) => {
  const showErrorNotification = useCallback((error: unknown) => {
    const message = String(error);

    if (error instanceof AxiosError) {
      // skip show toast api error no data
      const isIgnoreResponseStatus = [0, 401, 403].includes(error.response?.status as number);
      if (isIgnoreResponseStatus) return;

      // message = error.message;
    }
    console.error({
      message: 'Error',
      description: message || 'description',
      duration: 3, // in second
      placement: 'top',
    });
  }, []);

  const handleError = useCallback((error: any) => {
    if (error instanceof AxiosError && [0, 401].includes(error.response?.status as number)) {
      // removeToken();
      // queryClient.removeQueries({
      //   predicate: (query) => !query.queryHash.includes(USER_URL),
      // });
      // queryClient.resetQueries({
      //   fetchStatus: 'idle',
      //   type: 'active',
      // });
      // window.location.reload();
    }
  }, []);

  useEffect(() => {
    queryClientGlobal.setDefaultOptions({
      queries: {
        retry: 0,
        retryDelay: 100,
        gcTime: 1000 * 60 * 5, // 5 minute
        staleTime: 1000 * 60 * 5, // 5 minute,
        refetchOnWindowFocus: false,
        throwOnError: (error: unknown) => {
          handleError(error);
          showErrorNotification(error);
          return false;
        },
      },
      mutations: {
        retry: 0,
        onError: (error: unknown) => {
          handleError(error);
          showErrorNotification(error);
        },
      },
    });
  }, [handleError, showErrorNotification]);

  return <div>{props?.children}</div>;
};
