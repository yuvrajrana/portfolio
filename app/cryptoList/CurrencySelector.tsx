"use client";

import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { FIAT_CURRENCIES } from "../constant";
interface Props {
  currency: string;
  setCurrency: (value: string) => void;
}

export default function CurrencySelector({ currency, setCurrency }: Props) {
  return (
    <Autocomplete
      fullWidth
      autoHighlight
      options={FIAT_CURRENCIES}
      getOptionLabel={(option) => `${option.fullName} (${option.symbol.toUpperCase()})`}
      value={FIAT_CURRENCIES.find((c) => c.symbol === currency) || null}
      onChange={(_, newValue) => {
        if (newValue) setCurrency(newValue.symbol);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select Currency"
          placeholder="Search currency…"
        />
      )}
    />
  );
}
