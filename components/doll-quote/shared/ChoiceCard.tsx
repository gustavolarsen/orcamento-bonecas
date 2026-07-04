import { CheckCircle } from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { palette } from "../theme/palette";

export function ChoiceCard({
  selected,
  title,
  description,
  onClick,
  icon,
}: {
  selected: boolean;
  title: string;
  description?: string;
  onClick: () => void;
  icon?: ReactNode;
}) {
  return (
    <Card
      onClick={onClick}
      sx={{
        p: 2,
        cursor: "pointer",
        position: "relative",
        height: "100%",
        border: selected ?`2px solid ${palette.wine}` : "1px solid #e9dfda",
        bgcolor: selected ?"#fff3f6" : "background.paper",
        boxShadow: selected ?"0 8px 24px rgba(233,0,70,.12)" : "none",
        transition: ".2s",
        "&:hover": { transform: "translateY(-2px)", borderColor: palette.rose },
      }}
    >
      {selected && (
        <CheckCircle
          sx={{
            position: "absolute",
            right: 12,
            top: 12,
            color: palette.wine,
            fontSize: 21,
          }}
        />
      )}
      {icon && <Box sx={{ color: palette.rose, mb: 1 }}>{icon}</Box>}
      <Typography fontWeight={700} pr={3}>
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body2"
          color="text.secondary"
          mt={0.7}
          lineHeight={1.45}
        >
          {description}
        </Typography>
      )}
    </Card>
  );
}
