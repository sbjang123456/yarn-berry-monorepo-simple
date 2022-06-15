import type { ICoin } from '../../interface/Coin';
import request, { HOST_COINPAPRIKA_API } from '../request';

export const callGetCoinList = () => {
  return request.get<ICoin[]>(`${HOST_COINPAPRIKA_API}/tickers`, {
    params: { quotes: 'KRW' },
  });
};
