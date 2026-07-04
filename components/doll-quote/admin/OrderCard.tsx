import { MoreHoriz } from "@mui/icons-material";
import { Avatar, Box, Card, Chip, Divider, IconButton, Stack, Typography } from "@mui/material";
import { palette } from "../theme/palette";
import type { Order } from "../types/order";

export function OrderCard({ order, onClick }: { order: Order; onClick: () => void }) {
  const complexityColor =
    order.complexity === "Alta"
      ?"#a94c55"
      : order.complexity === "Média"
        ?"#af7c35"
        : "#5e8068";
  return (
    <Card
      onClick={onClick}
      sx={{
        p: 2.2,
        boxShadow: "none",
        cursor: "pointer",
        "&:hover": {
          borderColor: palette.rose,
          boxShadow: "0 8px 25px rgba(70,45,42,.08)",
        },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Stack direction="row" gap={1.2}>
          <Avatar
            sx={{ bgcolor: order.color, width: 40, height: 40, fontSize: 14 }}
          >
            {order.initials}
          </Avatar>
          <Box>
            <Typography fontWeight={800}>{order.name}</Typography>
            <Typography variant="caption" color="text.secondary">
              #{order.id} · {order.date}
            </Typography>
          </Box>
        </Stack>
        <IconButton size="small">
          <MoreHoriz />
        </IconButton>
      </Stack>
      <Divider sx={{ my: 1.5 }} />
      <Typography variant="caption" color="text.secondary">
        BONECA
      </Typography>
      <Typography variant="body2" fontWeight={700}>
        {order.doll}
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={0.6} my={1.5}>
        {order.services.map((x) => (
          <Chip size="small" label={x} key={x} sx={{ bgcolor: "#f3ece8" }} />
        ))}
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="caption" color="text.secondary">
          Complexidade
        </Typography>
        <Chip
          size="small"
          label={order.complexity}
          sx={{
            bgcolor: `${complexityColor}18`,
            color: complexityColor,
            fontWeight: 800,
          }}
        />
      </Stack>
    </Card>
  );
}
