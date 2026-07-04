import { Box, Typography } from "@mui/material";

export function InfoGrid({ items }: { items: string[][] }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
        gap: 2,
      }}
    >
      {items.map(([label, value]) => (
        <Box key={label}>
          <Typography variant="caption" color="text.secondary">
            {label.toUpperCase()}
          </Typography>
          <Typography variant="body2" fontWeight={700}>
            {value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
