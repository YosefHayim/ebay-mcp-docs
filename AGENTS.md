# Repository Guidelines

## Project Structure & Organization
- Documentation content lives in `*.mdx` files at the root (`index.mdx`, `quickstart.mdx`, etc.) and in topic folders like `authentication/`, `features/`, `guides/`, `mcp/`, `api-reference/`, `advanced/`, and `support/`.
- Mintlify configuration is defined in `docs.json`; site-wide styles are in `styles.css`.
- Branding, contribution, security, and deployment information live in `BRANDING.md`, `CONTRIBUTING.md`, `SECURITY.md`, and `DEPLOYMENT.md`.

## Build, Test, and Development Commands
- `mintlify dev` — Run the docs site locally at `http://localhost:3000`. Requires the Mintlify CLI (`npm install -g mintlify`).
- `bash validate-local.sh` — Run local validation (JSON syntax, `docs.json` structure, MDX frontmatter, code blocks, and optional broken links).
- Prefer running `bash validate-local.sh` before opening a pull request.

## Coding Style & Naming Conventions
- Follow `.editorconfig`: LF line endings, UTF-8, and 2-space indentation for MDX, JSON, YAML, JS/TS, CSS, and shell scripts.
- Use clear, descriptive file names in `kebab-case` (for example, `order-fulfillment.mdx`, `testing.mdx`).
- Keep headings concise and hierarchical; favor short paragraphs, bullet lists, and Mintlify components where appropriate.

## Testing Guidelines
- Treat `bash validate-local.sh` as the primary “test suite” for docs changes.
- Ensure all new `*.mdx` files include frontmatter with at least `title` and `description`.
- Label all fenced code blocks with a language (for example, ```ts, ```bash).

## Commit & Pull Request Guidelines
- Write descriptive commit messages (e.g., `docs: clarify quickstart auth flow`).
- For pull requests, include a short summary, list of key changes, and links to affected pages (for example, `quickstart.mdx`, `authentication/oauth-setup.mdx`).
- Note any validation steps performed (for example, `bash validate-local.sh`) and add screenshots only when visual changes are significant.

