"use client";

import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { ArtistPanel } from "./admin/ArtistPanel";
import { QuoteFlow } from "./client/QuoteFlow";
import { theme } from "./theme/theme";

export function DollQuoteApp() {
  const [mode, setMode] = useState<"client" | "admin">("client");

  return (
    <ThemeProvider theme={theme}>
      {mode === "client" ?<QuoteFlow onAdmin={() => setMode("admin")} /> : <ArtistPanel onClient={() => setMode("client")} />}
    </ThemeProvider>
  );
}
