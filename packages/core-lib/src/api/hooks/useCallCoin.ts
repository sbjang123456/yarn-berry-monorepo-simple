import { useQuery } from 'react-query';
import { callGetCoinList } from '../requests/callCoin';

export const useCallGetCoin = (sliceNum?: number) => {
  return useQuery(['callGetCoinList'], callGetCoinList, {
    select: (data) => {
      if (!sliceNum) {
        return data;
      }
      // array slice값 옵션으로 전달
      const sliceData = data.slice(0, sliceNum);
      return sliceData;
    },
  });
};
