import { ListAlt, Menu, Search, SettingsOutlined } from "@mui/icons-material";
import { Avatar, Box, Card, Chip, CssBaseline, Drawer, IconButton, InputAdornment, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { statuses } from "../data/statuses";
import { useAdminOrders } from "../hooks/useAdminOrders";
import { palette } from "../theme/palette";
import type { Order } from "../types/order";
import { AdminNav } from "./AdminNav";
import { OrderCard } from "./OrderCard";
import { OrderDetail } from "./OrderDetail";

export function ArtistPanel({ onClient }: { onClient: () => void }) {
  const [selected, setSelected] = useState<Order | null>(null);
  const [mobileNav, setMobileNav] = useState(false);
  const [filter, setFilter] = useState("Todos");
  const [query, setQuery] = useState("");
  const filtered = useAdminOrders({ query, filter });
  const nav = <AdminNav onClient={onClient} />;
  return (
    <Box minHeight="100vh" sx={{ bgcolor: "#fffbea", display: "flex" }}>
      <CssBaseline />
      <Box
        sx={{ display: { xs: "none", md: "block" }, width: 250, flexShrink: 0 }}
      >
        {nav}
      </Box>
      <Drawer open={mobileNav} onClose={() => setMobileNav(false)}>
        {nav}
      </Drawer>
      <Box component="main" sx={{ flex: 1, minWidth: 0 }}>
        <Box
          sx={{
            height: 72,
            bgcolor: "background.paper",
            borderBottom: "1px solid #e9e1dd",
            px: { xs: 2, md: 4 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" alignItems="center" gap={1}>
            <IconButton
              sx={{ display: { md: "none" } }}
              onClick={() => setMobileNav(true)}
            >
              <Menu />
            </IconButton>
            <Box>
              <Typography fontWeight={800}>Pedidos de orçamento</Typography>
              <Typography variant="caption" color="text.secondary">
                Sexta-feira, 19 de junho
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" alignItems="center" gap={1}>
            <IconButton>
              <SettingsOutlined />
            </IconButton>
            <Avatar sx={{ bgcolor: palette.wine }}>I</Avatar>
          </Stack>
        </Box>
        {selected ?(
          <OrderDetail order={selected} onBack={() => setSelected(null)} />
        ) : (
          <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1450, mx: "auto" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr 1fr", lg: "repeat(4,1fr)" },
                gap: 1.5,
                mb: 3,
              }}
            >
              {[
                ["5", "Novos pedidos", "+2 hoje"],
                ["3", "Em análise", "1 aguardando"],
                ["R$ 4.850", "Orçamentos enviados", "Este mês"],
                ["2", "Aprovados", "Este mês"],
              ].map(([n, l, s]) => (
                <Card key={l} sx={{ p: 2.3, boxShadow: "none" }}>
                  <Typography variant="h4" fontSize={30}>
                    {n}
                  </Typography>
                  <Typography fontWeight={700} variant="body2">
                    {l}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {s}
                  </Typography>
                </Card>
              ))}
            </Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              gap={1.5}
              justifyContent="space-between"
              mb={2}
            >
              <TextField
                size="small"
                placeholder="Buscar cliente..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                sx={{ bgcolor: "background.paper", minWidth: 260 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
              <Select
                size="small"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                sx={{ bgcolor: "background.paper", minWidth: 190 }}
              >
                <MenuItem value="Todos">Todos os status</MenuItem>
                {statuses.map((x) => (
                  <MenuItem value={x} key={x}>
                    {x}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
            {filtered.length === 0 ?(
              <Card sx={{ py: 8, textAlign: "center", boxShadow: "none" }}>
                <ListAlt sx={{ fontSize: 48, color: "#cbbdb6" }} />
                <Typography variant="h5" mt={1}>
                  Nenhum pedido novo
                </Typography>
                <Typography color="text.secondary">
                  Quando chegar um pedido, ele aparece por aqui.
                </Typography>
              </Card>
            ) : (
              <Box
                sx={{
                  display: "grid",
                  gridAutoFlow: { xs: "row", xl: "column" },
                  gridAutoColumns: { xl: "minmax(285px, 1fr)" },
                  gridTemplateColumns: { xs: "1fr" },
                  gap: 2,
                  overflowX: { xl: "auto" },
                  pb: 1,
                }}
              >
                {statuses.map((status) => (
                  <Box key={status}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      mb={1.5}
                    >
                      <Typography fontWeight={800}>{status}</Typography>
                      <Chip
                        size="small"
                        label={
                          filtered.filter((o) => o.status === status).length
                        }
                      />
                    </Stack>
                    <Stack spacing={1.5}>
                      {filtered
                        .filter((o) => o.status === status)
                        .map((o) => (
                          <OrderCard
                            key={o.id}
                            order={o}
                            onClick={() => setSelected(o)}
                          />
                        ))}
                      {filtered.filter((o) => o.status === status).length ===
                        0 && (
                        <Box
                          sx={{
                            border: "1px dashed #d9ccc5",
                            borderRadius: 3,
                            py: 4,
                            textAlign: "center",
                            color: "text.secondary",
                          }}
                        >
                          <Typography variant="body2">
                            Nenhum pedido aqui
                          </Typography>
                        </Box>
                      )}
                    </Stack>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

