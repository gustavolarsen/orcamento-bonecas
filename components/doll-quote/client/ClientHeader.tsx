import { DashboardRounded } from "@mui/icons-material";
import { AppBar, Box, Button, Container, Stack, Typography } from "@mui/material";
import { palette } from "../theme/palette";

export function ClientHeader({ onAdmin }: { onAdmin: () => void }) {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(255,253,240,.95)",
        color: palette.ink,
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #f3d5dd",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          height={68}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center" gap={1.2}>
            <Box
              component="img"
              src="/by-ivi-logo.png"
              alt="Logo By Ivi"
              sx={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <Box>
              <Typography
                fontFamily="Georgia, serif"
                fontSize={22}
                fontWeight={700}
                lineHeight={1}
              >
                By Ivi
              </Typography>
              <Typography variant="caption" color="text.secondary">
                por Ivi Dias Weber
              </Typography>
            </Box>
          </Stack>
          <Button
            size="small"
            color="inherit"
            startIcon={<DashboardRounded />}
            onClick={onAdmin}
          >
            Área da artista
          </Button>
        </Stack>
      </Container>
    </AppBar>
  );
}
