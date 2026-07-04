import { CheckCircle, PhotoCameraOutlined, UploadRounded } from "@mui/icons-material";
import { Box, Button, Card, Typography } from "@mui/material";
import { palette } from "../theme/palette";
import { createImagePreview } from "../utils/createImagePreview";

export function UploadCard({
  label,
  required,
  preview,
  onChange,
  error,
}: {
  label: string;
  required: string;
  preview?: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <Box>
      <Card
        sx={{
          p: 2,
          textAlign: "center",
          minHeight: 210,
          display: "grid",
          placeItems: "center",
          border: error
            ?"2px solid #d32f2f"
            : preview
              ?`2px solid ${palette.sage}`
              : "1px dashed #cdbbb3",
          boxShadow: "none",
          bgcolor: preview ?"#f4f8e9" : "background.paper",
        }}
      >
        <Box>
          {preview ?(
            <>
              <CheckCircle sx={{ fontSize: 42, color: palette.sage }} />
              <Typography fontWeight={800} mt={1}>
                Foto adicionada
              </Typography>
              <Button size="small" onClick={() => onChange("")}>
                Trocar foto
              </Button>
            </>
          ) : (
            <>
              <PhotoCameraOutlined sx={{ fontSize: 40, color: palette.rose }} />
              <Typography fontWeight={800} mt={1}>
                {label}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {required}
              </Typography>
              <Button
                component="label"
                size="small"
                variant="outlined"
                startIcon={<UploadRounded />}
                sx={{ mt: 1.5 }}
              >
                Escolher foto
                <input
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) onChange(createImagePreview(file));
                  }}
                />
              </Button>
            </>
          )}
        </Box>
      </Card>
      {error && (
        <Typography color="error" variant="caption" display="block" mt={0.7}>
          {error}
        </Typography>
      )}
    </Box>
  );
}
