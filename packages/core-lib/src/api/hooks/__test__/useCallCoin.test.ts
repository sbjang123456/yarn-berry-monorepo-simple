import { renderHook, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { useCallGetCoin } from '../useCallCoin';
import { createWrapper } from './test-utils';

const server = setupServer(
  rest.get('*/tickers', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 'btc-bitcoin',
          name: 'Bitcoin',
        },
        {
          id: 'eth-ethereum',
          name: 'Ethereum',
        },
      ])
    );
  })
);

describe('useCallCoin', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('useCallGetCoin', async () => {
    const { result } = renderHook(() => useCallGetCoin(2), {
      wrapper: createWrapper(),
    });

    // then: 요청 중 체크
    expect(result.current.isFetching).toBe(true);
    // then: 응답 성공 체크
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    // not null 체크
    expect(result.current.data).not.toBeNull();
    // not undefined 체크
    expect(result.current.data).not.toBeUndefined();
    // 응답 결과 데이터 체크
    expect(result.current.data?.length).toBe(2);
  });
});
