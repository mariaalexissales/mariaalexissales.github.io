import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages can't set response headers, so the policy ships as a meta tag.
// frame-ancestors is ignored in a meta tag. style-src needs 'unsafe-inline'
// because Emotion injects <style> tags at runtime. Build only: the dev server
// injects inline scripts for hot reload that this policy would block.
const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  "upgrade-insecure-requests",
].join("; ");

function contentSecurityPolicy(): Plugin {
  return {
    name: "content-security-policy",
    apply: "build",
    transformIndexHtml() {
      return [
        {
          tag: "meta",
          attrs: {
            "http-equiv": "Content-Security-Policy",
            content: CONTENT_SECURITY_POLICY,
          },
          injectTo: "head-prepend",
        },
      ];
    },
  };
}

export default defineConfig({
  plugins: [react(), contentSecurityPolicy()],
});
