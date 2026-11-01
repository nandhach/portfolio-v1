# Archived server entrypoints

Next.js ignores this private `_legacy` folder. These files are preserved source,
not active routes. Their modules/dependencies remain in the repository.

- `api/`: former `/api/*` handlers, including local-content endpoints.
- `[locale]/`: Chat, Contents, Dashboard, Smart Talk and template legal pages.
- `middleware.ts`: former locale middleware; static hosting has no middleware.

GitHub Pages serves only the exported portfolio. Restoring these entrypoints
requires a server-capable host, removal of `output: "export"`, and a separate
review of integrations, credentials, template copy and publication permissions.
Moving files back alone is not a supported deployment procedure.
