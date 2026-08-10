import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useColorScheme } from "@mui/material/styles";

export default function ThemeToggle() {
  const { mode, systemMode, setMode } = useColorScheme();

  if (!mode) {
    return <IconButton disabled aria-hidden sx={{ width: 40, height: 40 }} />;
  }

  const resolved = mode === "system" ? (systemMode ?? "dark") : mode;
  const next = resolved === "dark" ? "light" : "dark";
  const label = `Switch to ${next} mode`;

  return (
    <Tooltip title={label}>
      <IconButton
        onClick={() => setMode(next)}
        aria-label={label}
        color="inherit"
      >
        {resolved === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
      </IconButton>
    </Tooltip>
  );
}
