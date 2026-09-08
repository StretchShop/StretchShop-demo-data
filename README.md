# StretchShop-demo-data

Demo content for [StretchShop](https://github.com/StretchShop/StretchShop): MongoDB seed data, a compiled Vue storefront under `public/`, shop `resources/`, and thin Moleculer service wrappers.

StretchShop loads this repository from `demo/demo.js` (via `npm run demo` / `postinstall` when `public`, `resources`, or `services` are missing).

## Contents

| Path | Purpose |
|------|---------|
| `db/json/` | Seed collections (`users`, `products`, `categories`, `pages`, `orders`) |
| `db/demo_data.js` | MongoDB importer (`npm run import` in `db/`) |
| `public/` | Built SPA + assets + `project_dictionary.json` |
| `resources/` | Settings, navigation, emails, page templates, routes, PDF templates |
| `services/` | Thin wrappers that mixin services from the `stretchshop` npm package |

## Requirements

- Node.js **22.23+**
- MongoDB **7** (default DB name `stretchshop_demo`)

## Import demo data

```bash
cd db
npm install
npm run import
```

Connection options:

- `MONGO_URI` environment variable (preferred), or
- `node demo_data.js <user> <password>` for localhost admin auth, or
- default `mongodb://localhost:27017/stretchshop_demo`

Re-running import **replaces** each seeded collection (`deleteMany` then `insertMany`).

Validate JSON only:

```bash
cd db && npm run validate
```

## Demo accounts

| User | Email | Password | Role |
|------|-------|----------|------|
| Superadmin | `admin@example.tld` | `az09bycxdw` | admin |
| DemoBuyer | `buyer@example.tld` | `az09bycxdw` | user |

## Versioning

Git tags (e.g. `v0.7.6`) track StretchShop releases, especially the compiled frontend in `public/app/`. Keep `db/package.json` version aligned with the latest tag when cutting a release.

## Syncing resources from StretchShop

Treat StretchShop `resources/` as the source of truth for routes, emails, settings, and templates. From a StretchShop checkout:

```bash
DEMO_DATA_DIR=../StretchShop-demo-data ./copyToDemoData.sh
```

Then review demo-only overrides (navigation links, branding) before committing here.

## License

GPL-3.0 — see [LICENSE](LICENSE).
