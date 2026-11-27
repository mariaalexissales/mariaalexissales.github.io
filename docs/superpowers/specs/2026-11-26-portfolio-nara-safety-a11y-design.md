# Portfolio: Nara Benefits entry, safety, accessibility

## Intent
The Nara Benefits role on the timeline had no bullet points. Fill it with what I shipped there, and make the
site safe (no employer-confidential detail, hardened, privacy-respecting) and accessible (WCAG 2.2 AA).

## Goals
- Three outcome-level bullets for Nara, sourced from my merged PR titles in the org (no Nara code read).
- OWASP Top 10:2025 pass over the site and its CI, with fixes.
- Email address not shipped as a plain `mailto:` string. Resume PDF checked for personal data.
- Accessibility audit with fixes, without changing the visual design.

## Non-goals / anti-goals
- No vendor names, internal system names, AWS account or role details, or pre-fix vulnerability detail.
  Naming any of these on a public page is a failure even if the page looks right.
- Not a redesign of the site.

Added later in the same PR: the resume moved to a one-page LaTeX source (`resume/`) that CI builds with
Tectonic. It adds Nara, ends USG in April 2026 and leaves the phone number off.

## Approaches considered
- **Content detail level**: specific with names / public product names only / fully generic.
  Picked: public product names only (member portal, provider portal, CRM, "the AI chat assistant"),
  trimmed to 3 bullets. The assistant's name is not confirmed public, so it is omitted.
- **Security headers**: GitHub Pages can't set response headers, so a CSP `<meta>` is the only option.
  `frame-ancestors` is ignored in meta, so clickjacking protection is out of reach on Pages.
- **Email obfuscation**: build the address at runtime from parts, instead of a plain string in the bundle.

## Left to the builder
Exact CSP directives (verified in the browser), and a11y fixes chosen from the audit's findings.
