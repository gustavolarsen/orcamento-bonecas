import { Card, Typography } from "@mui/material";
import type { ReactNode } from "react";

export function DetailSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Card sx={{ p: { xs: 2, sm: 2.5 }, boxShadow: "none" }}>
      <Typography variant="h5" mb={2}>
        {title}
      </Typography>
      {children}
    </Card>
  );
}
