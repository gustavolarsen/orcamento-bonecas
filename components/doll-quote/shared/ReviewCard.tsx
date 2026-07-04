import { EditOutlined } from "@mui/icons-material";
import { Button, Card, Chip, Stack, Typography } from "@mui/material";

export function ReviewCard({
  title,
  lines = [],
  chips = [],
  onEdit,
  empty,
}: {
  title: string;
  lines?: string[];
  chips?: string[];
  onEdit: () => void;
  empty?: string;
}) {
  return (
    <Card sx={{ p: 2.5, boxShadow: "none" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontWeight={800}>{title}</Typography>
        <Button size="small" startIcon={<EditOutlined />} onClick={onEdit}>
          Editar
        </Button>
      </Stack>
      <Stack
        direction="row"
        gap={0.7}
        flexWrap="wrap"
        my={chips.length ?1.3 : 0}
      >
        {chips.map((x) => (
          <Chip key={x} size="small" label={x} />
        ))}
      </Stack>
      {lines.map((line, i) => (
        <Typography
          key={i}
          variant="body2"
          color="text.secondary"
          sx={{ overflowWrap: "anywhere", mt: 0.4 }}
        >
          {line}
        </Typography>
      ))}
      {!lines.length && !chips.length && (
        <Typography variant="body2" color="text.secondary">
          {empty}
        </Typography>
      )}
    </Card>
  );
}
