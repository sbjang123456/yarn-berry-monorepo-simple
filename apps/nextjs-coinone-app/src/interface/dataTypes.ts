export interface TableDataType {
  beta_value: Number;
  circulating_supply: Number;
  first_data_at: String;
  id: String;
  last_updated: String;
  max_supply: Number;
  name: String;
  rank: Number;
  symbol: String;
  total_supply: Number;
  quotes: {
    USD: {
      ath_date: String;
      ath_price: Number;
      market_cap: Number;
      market_cap_change_24h: Number;
      percent_change_1h: Number;
      percent_change_1y: Number;
      percent_change_6h: Number;
      percent_change_7d: Number;
      percent_change_12h: Number;
      percent_change_15m: Number;
      percent_change_24h: Number;
      percent_change_30d: Number;
      percent_change_30m: Number;
      percent_from_price_ath: Number;
      price: Number;
      volume_24h: Number;
      volume_24h_change_24h: Number;
    };
  };
}
