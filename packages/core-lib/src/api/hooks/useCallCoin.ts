import { callGetCoinList } from '../requests/callCoin';
import { useGetApi } from './useApi';

export const useCallGetCoin = (limit: number) => {
  return useGetApi(['callGetCoinList'], () => callGetCoinList(limit));
};
