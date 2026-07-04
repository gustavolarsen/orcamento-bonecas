import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { palette } from "../theme/palette";

export function OptionToggles({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={(_, v) => v && onChange(v)}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid #ded2cc !important",
          borderRadius: "12px !important",
          px: 2,
          textTransform: "none",
          "&.Mui-selected": {
            bgcolor: "#ffe3eb",
            color: palette.wine,
            borderColor: `${palette.wine} !important`,
          },
        },
      }}
    >
      {options.map((x) => (
        <ToggleButton key={x} value={x}>
          {x}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
