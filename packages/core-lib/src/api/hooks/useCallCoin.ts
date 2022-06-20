import { useQuery } from 'react-query';
import { callGetCoinList } from '../requests/callCoin';

export const useCallGetCoin = (limit: number) => {
  return useQuery(['callGetCoinList'], () => callGetCoinList(limit));
};
