import { useQuery } from 'react-query';
import type { QueryFunction, QueryKey, UseQueryOptions } from 'react-query';

type TQueryFunction<T> = QueryFunction<T, QueryKey>;
type TOptions<T> = Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>;

export const useGetApi = <T>(
  queryKey: QueryKey, // string | unknown[]
  queryFn: TQueryFunction<T>, // <T>() => Promise<T>
  options?: TOptions<T>
) => {
  return useQuery(queryKey, queryFn, options);
};
