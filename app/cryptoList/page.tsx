"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  CircularProgress,
  Pagination,
  Typography,
  Grid,
} from "@mui/material";
import CurrencySelector from "./CurrencySelector";
import { FIAT_CURRENCIES } from "../constant";
import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "../util/common";
import { get } from "http";


interface Crypto {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}



export default function  CryptoListPage() {
  const [data, setData] = useState<Crypto[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [currency, setCurrency] = useState(getLocalStorage("preferredCurrency") || "usd");

  const setCurrencyVal = (val: string) => {
    setCurrency(val);
 

    setLocalStorage("preferredCurrency", val);
  }

  const fetchCrypto = async (pageNumber: number) => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&per_page=10&page=${pageNumber}`
      );
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("API Fetch Error:", error);
    }

    setLoading(false);
  };

  
  const symbol = useMemo(() => FIAT_CURRENCIES.filter(f=> f.symbol === currency)[0].currencySymbol, [currency]);

  useEffect(() => {
    fetchCrypto(page);
  }, [page, currency]);

  return (
    <Box p={4}>
      <Typography variant="h4" mb={3} fontWeight="bold">
        Cryptocurrency List
      </Typography>
      <Grid container justifyContent="flex-end" mb={2}>
        <Grid item xs={12} md={3}>
            <CurrencySelector currency={currency} setCurrency={setCurrencyVal}/>
        </Grid>
     </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Logo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Symbol</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Market Cap</TableCell>
              <TableCell>24h Change</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : (
              data.map((coin) => (
                <TableRow key={coin.id}>
                  <TableCell>
                  
                    <img src={coin.image} width={30} alt={coin.name} />
                  </TableCell>
                  <TableCell><Link href={{
                    pathname: `/coin/${coin.id}`,
                    query: { currency: currency  } // this will appear as ?currency=eur
                  }} >{coin.name}</Link></TableCell>
                  <TableCell>{coin.symbol.toUpperCase()}</TableCell>
                  <TableCell>{symbol} {coin.current_price.toLocaleString()}</TableCell>
                  <TableCell>{symbol} {coin.market_cap.toLocaleString()}</TableCell>
                  <TableCell
                    sx={{
                      color:
                        coin.price_change_percentage_24h > 0
                          ? "green"
                          : "red",
                    }}
                  >
                    {coin.price_change_percentage_24h !== null
                    ? `${coin.price_change_percentage_24h.toFixed(2)}%`
                    : "--"}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination
          count={100} 
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
        />
      </Box>
    </Box>
  );
}
