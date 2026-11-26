import type { SyntheticEvent } from "react";
import type { SocialLink } from "../../data/types";

// Kept in parts so the bundle never holds a plain address for scrapers to match.
const EMAIL_USER = "mariaalexissales";
const EMAIL_DOMAIN = ["gmail", "com"];

// Typed loosely because MUI types Button's handlers for <button> even when it renders an <a>.
function revealEmail(event: SyntheticEvent<HTMLElement>) {
  const link = event.currentTarget;
  if (link instanceof HTMLAnchorElement) {
    link.href = `mailto:${EMAIL_USER}@${EMAIL_DOMAIN.join(".")}`;
  }
}

/**
 * Anchor props for a social link. Outside links open in a new tab without an
 * opener. The email link only gets its real href once someone focuses,
 * hovers, taps or clicks it, so keyboard, mouse and touch all still work.
 */
export function socialLinkProps(social: SocialLink) {
  if (social.kind === "email") {
    return {
      href: social.href,
      onFocus: revealEmail,
      onPointerEnter: revealEmail,
      onPointerDown: revealEmail,
      onClick: revealEmail,
    };
  }

  return {
    href: social.href,
    target: "_blank",
    rel: "noopener noreferrer",
  };
}
