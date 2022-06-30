/* lib, type */
import { useCallGetCoin } from '@sb/core-lib/api/hooks/useCallCoin';
import type { ICoin } from '@sb/core-lib/interface/Coin';
import { Table, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/lib/table';

/* next */
import Image from 'next/image';
import type { FC } from 'react';

/* hooks,components */

/* style */
import { cssMainRankTitle, cssMainRankTable } from './Main.style';

const columns: ColumnsType<ICoin> = [
  {
    title: () => (
      <Tooltip title="등락률: 9시(KST) 기준 등락 표시 거래대금: 24시간 기준 표시">
        표시기준
      </Tooltip>
    ),
    dataIndex: 'id',
    className: 'table-name',
    render: (value, record) => {
      return (
        <>
          <h3>{record.symbol}</h3>
          <h6>{record.name}</h6>
        </>
      );
    },
  },
  {
    title: '현재가',
    dataIndex: ['quotes', 'KRW', 'ath_price'],
    className: 'table-gray',
    sorter: {
      compare: (a, b) =>
        Number(a.quotes.KRW.ath_price) - Number(b.quotes.KRW.ath_price),
      multiple: 3,
    },
    render: (value) => {
      return Number(value).toFixed(2).toLocaleString();
    },
    showSorterTooltip: false,
  },
  {
    title: '등락률',
    dataIndex: 'beta_value',
    className: 'table-gray',
    sorter: {
      compare: (a, b) => Number(a.beta_value) - Number(b.beta_value),
      multiple: 2,
    },
    align: 'right',
    render: (value) => {
      return Number(value).toFixed(2).toLocaleString();
    },
    showSorterTooltip: false,
  },
  {
    title: '거래량',
    dataIndex: 'total_supply',
    className: 'table-gray',
    sorter: {
      compare: (a, b) => Number(a.total_supply) - Number(b.total_supply),
      multiple: 1,
    },
    align: 'right',
    render: (value) => {
      return Number(value).toLocaleString();
    },
    showSorterTooltip: false,
  },
];

export const MainRank: FC = () => {
  const { data, isLoading } = useCallGetCoin(10);

  return (
    <article>
      <div css={cssMainRankTitle}>
        <Image src="/main-coin-ranking.svg" width="20" height="23" />
        <div>가상자산 랭킹 Top 10</div>
      </div>
      {!isLoading && (
        <Table
          rowKey="name"
          css={cssMainRankTable}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      )}
    </article>
  );
};
