import { DashboardRounded, ListAlt, SettingsOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { palette } from "../theme/palette";

export function AdminNav({ onClient }: { onClient: () => void }) {
  return (
    <Box
      sx={{
        width: 250,
        height: "100vh",
        bgcolor: "#FFF79A",
        color: palette.ink,
        p: 2,
        position: "fixed",
      }}
    >
      <Stack direction="row" gap={1.2} alignItems="center" p={1} mb={4}>
        <Box
          component="img"
          src="/by-ivi-logo.png"
          alt="Logo By Ivi"
          sx={{
            width: 54,
            height: 54,
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid white",
          }}
        />
        <Box>
          <Typography
            fontFamily="Georgia, serif"
            fontWeight={700}
            fontSize={22}
          >
            By Ivi
          </Typography>
          <Typography variant="caption" sx={{ color: "#65565b" }}>
            Ivi Dias Weber
          </Typography>
        </Box>
      </Stack>
      <Stack spacing={0.7}>
        <Button
          variant="contained"
          startIcon={<DashboardRounded />}
          sx={{
            justifyContent: "flex-start",
            bgcolor: palette.wine,
            color: "white",
            "&:hover": { bgcolor: "#c8003c" },
          }}
        >
          Visão geral
        </Button>
        <Button
          color="inherit"
          startIcon={<ListAlt />}
          sx={{ justifyContent: "flex-start", color: palette.ink }}
        >
          Pedidos
        </Button>
        <Button
          color="inherit"
          startIcon={<SettingsOutlined />}
          sx={{ justifyContent: "flex-start", color: palette.ink }}
        >
          Configurações
        </Button>
      </Stack>
      <Box sx={{ position: "absolute", bottom: 24, left: 16, right: 16 }}>
        <Button
          fullWidth
          variant="outlined"
          color="inherit"
          onClick={onClient}
          sx={{ borderColor: palette.rose, color: palette.ink }}
        >
          Ver área da cliente
        </Button>
      </Box>
    </Box>
  );
}
