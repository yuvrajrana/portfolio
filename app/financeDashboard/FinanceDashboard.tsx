"use client";

import React, { useEffect, useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Button } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import Loader from "../components/Loader";
import Link from "next/link";

interface TimeSeries {
  [date: string]: {
    "1. open": string;
    "2. high": string;
    "3. low": string;
    "4. close": string;
    "5. volume": string;
  };
}

const symbols = ["IBM", "AAPL", "MSFT", "GOOGL"];
const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

export default function FinanceDashboard() {
  const [symbol, setSymbol] = useState("IBM");
  const [data, setData] = useState<TimeSeries | null>(null);
  const [loading, setLoading] = useState(true);

  const handleChange = (event: SelectChangeEvent) => {
    setSymbol(event.target.value);
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${apiKey}`
    )
      .then((res) => res.json())
      .then((json) => {
        setData(json["Time Series (Daily)"]);
        setLoading(false);
      })
      .catch(console.error);
  }, [symbol]);

  if (loading) return <Loader />;
  if (!data) return (<>
    {/* Back Button */}
      <Box sx={{ mb: 3 }}>
        <Link href="/" passHref>
          <Button variant="outlined">&larr; Back</Button>
        </Link>
      </Box>
  <div>No data available</div></>
  );

  const chartData = Object.entries(data)
    .map(([date, values]) => ({
      date,
      close: parseFloat(values["4. close"]),
    }))
    .reverse();

  return (
    <Box sx={{ width: "100%", maxWidth: 1200, mx: "auto", py: 4 }}>
    
      {/* Back Button */}
      <Box sx={{ mb: 3 }}>
        <Link href="/" passHref>
          <Button variant="outlined">&larr; Back</Button>
        </Link>
      </Box>
      {/* Symbol Selector */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'right', mt: "-70px" }}>
        <FormControl sx={{ mb: 2, minWidth: 120, mr: 2 }}>
          <InputLabel>Symbol</InputLabel>
          <Select value={symbol} label="Symbol" onChange={handleChange}>
            {symbols.map((s) => (
              <MenuItem key={s} value={s}>
                {s}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="close" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
