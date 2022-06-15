import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

const useGetCoinList = (length: number) => {
  const queryClient = useQueryClient();
  const prevData = queryClient.getQueryData('coinList');

  const queryFn = () => axios.get('https://api.coinpaprika.com/v1/tickers');
  const queryOption = {
    enabled: Boolean(!prevData),
  };

  const { data, isLoading } = useQuery('coinList', queryFn, queryOption);

  let sliceData = [];

  if (!isLoading) {
    sliceData = data?.data.slice(0, length);
  }

  return { isLoading, data: sliceData };
};

export default useGetCoinList;
