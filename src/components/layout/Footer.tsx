import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SocialIcon from "../common/SocialIcon";
import { hero } from "../../data/hero";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        borderTop: `1px solid ${theme.vars.palette.divider}`,
        py: 5,
      })}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} {hero.name}
          </Typography>

          <Stack direction="row" spacing={0.5}>
            {hero.socials.map((social) => (
              <IconButton
                key={social.kind}
                href={social.href}
                aria-label={social.label}
                target={social.kind === "email" ? undefined : "_blank"}
                rel={
                  social.kind === "email" ? undefined : "noopener noreferrer"
                }
                size="small"
              >
                <SocialIcon kind={social.kind} />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
