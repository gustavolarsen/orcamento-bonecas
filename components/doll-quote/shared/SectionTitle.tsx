import { Box, Typography } from "@mui/material";

export function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <Box mb={3}>
      <Typography
        variant="overline"
        color="primary"
        fontWeight={800}
        letterSpacing={1.4}
      >
        {eyebrow}
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: 34, sm: 42 }, lineHeight: 1.05, mt: 0.5 }}
      >
        {title}
      </Typography>
      {text && (
        <Typography color="text.secondary" mt={1.2} maxWidth={620}>
          {text}
        </Typography>
      )}
    </Box>
  );
}
