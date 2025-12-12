"use client";

import { useMemo } from "react";
import { FIAT_CURRENCIES } from "@/app/constant";
import { getLocalStorage } from "@/app/util/common";
import { Typography } from "@mui/material";


interface CryptoPriceProps {
  coin: any;
}


export default function CryptoPrice({ coin }: CryptoPriceProps) {
  const currency = getLocalStorage("preferredCurrency") || "usd";

  const symbol = useMemo(() => {
    const match = FIAT_CURRENCIES.find(f => f.symbol === currency);
    return match?.currencySymbol || "$";
  }, [currency]);

  const marketCap = coin?.market_data?.market_cap?.[currency];
  const price = coin?.market_data?.current_price?.[currency];

  return (
    <div>
      <Typography variant="h6">
        Current Price: {price ? `${symbol}${price.toLocaleString()}` : "N/A"}
      </Typography>
      <Typography variant="h6">
        Market Cap: {marketCap ? `${symbol}${marketCap.toLocaleString()}` : "N/A"}
      </Typography>
    </div>
  );
}
