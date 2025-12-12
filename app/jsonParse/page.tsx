"use client";

import React, { useState } from "react";
import { Box, Button, Typography, TextField, Alert } from "@mui/material";
import { JsonView } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

export default function JsonParser() {
  const [input, setInput] = useState("");
  const [parsed, setParsed] = useState<any | null>(null);
  const [error, setError] = useState("");

  const handleParse = () => {
    try {
      const json = JSON.parse(input);
      setParsed(json);
      setError("");
    } catch (err: any) {
      setError(err.message);
      setParsed(null);
    }
  };

  const copy = () => {
    if (!parsed) return;
    navigator.clipboard.writeText(JSON.stringify(parsed, null, 2));
  };

  const collapseAll = () => {
    setParsed({ ...parsed });
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 900, mx: "auto", mt: 4 }}>
      <TextField
        label="Paste JSON here"
        multiline
        minRows={8}
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <Button variant="contained" onClick={handleParse}>
          Parse JSON
        </Button>
        <Button variant="outlined" onClick={copy} disabled={!parsed}>
          Copy JSON
        </Button>
        <Button variant="outlined" onClick={collapseAll} disabled={!parsed}>
          Refresh
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          Invalid JSON: {error}
        </Alert>
      )}

      {parsed && (
        <Box sx={{ mt: 3, p: 2, borderRadius: 2, border: "1px solid #ddd" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Parsed JSON
          </Typography>

         <JsonView data={parsed} />
        </Box>
      )}
    </Box>
  );
}
