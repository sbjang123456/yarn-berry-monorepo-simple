import { useQuery } from 'react-query';
import { callGetCoinList } from '../requests/callCoin';

export const useCallGetCoin = () => {
  return useQuery(['callGetCoinList'], callGetCoinList);
};
