import React from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  CircularProgress,
  Button
} from "@mui/material";
import Link from "next/link";
import CryptoPrice from "./Price";

async function getCoinDetails(id: string) {
  if (!id) throw new Error("Invalid coin ID");

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch coin details");
  return res.json();
}

// app/coin/[id]/page.tsx
interface CoinPageProps {
  params: { id: string };
}

export default async function CoinDetailsPage({ params }: CoinPageProps) {



  const { id } = await params;

  if (!id) return <Typography>Invalid coin ID</Typography>;

  let coin;
  try {
    coin = await getCoinDetails(id);
  } catch (err) {
    return (
      <Typography color="error">
        Error fetching coin: {(err as Error).message}
      </Typography>
    );
  }


  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Back Button */}
      <Box sx={{ mb: 2 }}>
        <Link href="/cryptoList" passHref>
          <Button >&larr; Back</Button>
        </Link>
      </Box>

      <Paper sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {/* Coin Image */}
          <Grid item xs={12} sm={3}>
            {coin.image?.large ? (
              <Box
                component="img"
                src={coin.image.large}
                alt={coin.name}
                sx={{ width: "100%", borderRadius: 2 }}
              />
            ) : (
              <CircularProgress />
            )}
          </Grid>

          {/* Coin Details */}
          <Grid item xs={12} sm={9}>
            <Typography variant="h4" gutterBottom>
              {coin.name} ({coin.symbol.toUpperCase()})
            </Typography>

            {coin.description?.en && (
              <Typography
                variant="body2"
                color="text.secondary"
                dangerouslySetInnerHTML={{ __html: coin.description.en }}
                sx={{ mb: 2 }}
              />
            )}

           <CryptoPrice coin={coin} />

          
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
