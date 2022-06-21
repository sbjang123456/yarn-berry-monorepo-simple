import request, { HOST_COINPAPRIKA_API } from '../../request';
import { callGetCoinList } from '../callCoin';

const mockedAxios = request as jest.Mocked<typeof request>;
jest.mock('../../request');

describe('callCoin', () => {
  it('callGetCoinList', async () => {
    // 가데이터
    const coinList = [
      {
        id: 'btc-bitcoin',
        name: 'Bitcoin',
      },
      {
        id: 'eth-ethereum',
        name: 'Ethereum',
      },
    ];

    // 응답 결과 가데이터로 셋팅
    mockedAxios.get.mockResolvedValue(coinList);

    // 요청
    const limit = 2;
    const data = await callGetCoinList(limit);
    // then: 결과 데이터 비교 (요청 후 응답 성공 테스트)
    expect(data).toStrictEqual(coinList);

    // 위와 같은 다른 방법
    // mockedAxios.get.mockImplementationOnce(() => Promise.resolve(coinList));
    // await expect(callGetCoinList(limit)).resolves.toEqual(coinList);

    // then: 요청 시 uri 및 parameter 체크
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${HOST_COINPAPRIKA_API}/tickers`,
      {
        params: {
          limit,
          quotes: 'KRW',
        },
      }
    );
  });
});
