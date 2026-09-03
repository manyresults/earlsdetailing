# Earl's Proper Detailing — Website

Static marketing site for **Earl's Proper Detailing** (Langhorne, PA), built with
[Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) and deployed
to SiteGround via GitHub Actions (SFTP). This replaces the previous WordPress site.

## Tech stack

- **Astro** — static site generator (outputs plain HTML/CSS/JS to `dist/`)
- **Tailwind CSS v4** — styling (dark theme + red accent)
- **@astrojs/sitemap** — `sitemap-index.xml` generated on every build
- Built-in Astro image optimization (`astro:assets`) — source photos are
  compressed to responsive WebP at build time

## Project structure

```
src/
  assets/images/      # source images (optimized at build time)
    work/             # gallery / completed-work photos
  components/         # Header, Footer, SEO, Icon, ServiceCard, ServicesGrid, CTASection, ContactButtons, PageHeader
  data/site.ts        # single source of truth: business info, nav, services, specials
  layouts/BaseLayout.astro
  pages/              # index, services, about, gallery, contact, specials
  styles/global.css   # Tailwind import + brand theme tokens
public/
  robots.txt          # points crawlers to the sitemap
  favicon.png
  og-image.jpg        # social share card
.github/workflows/deploy.yml   # CI build + SFTP deploy
```

Business content (phone, address, services, etc.) lives in **`src/data/site.ts`** —
edit there and every page + the SEO/JSON-LD updates automatically.

## Local development

```bash
npm install       # install dependencies
npm run dev        # start dev server at http://localhost:4321
npm run build      # production build to dist/
npm run preview    # preview the production build locally
```

Requires Node.js 20.3+ or 22+.

## Deployment

Pushing to **`main`** triggers `.github/workflows/deploy.yml`, which builds the site
and uploads `dist/` to SiteGround over SFTP. It can also be run manually from the
repo's **Actions** tab (**Build & Deploy to SiteGround → Run workflow**).

### Required GitHub repo Secrets

Add these under **Settings → Secrets and variables → Actions → New repository secret**:

| Secret name        | Value                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------- |
| `SFTP_HOST`        | Your SiteGround SFTP hostname or server IP (from Site Tools → **Devs → SSH Keys Manager / FTP Accounts**). |
| `SFTP_USERNAME`    | The SFTP/SSH username for the account.                                                     |
| `SFTP_PASSWORD`    | That user's SFTP/SSH password.                                                             |
| `SFTP_PORT`        | SiteGround's SFTP port — normally **`18765`**.                                             |
| `SFTP_REMOTE_PATH` | Absolute path to the web root, e.g. `/home/customer/www/earlsdetailing.com/public_html`.  |

> **Security:** credentials are only ever read from these secrets at run time — they
> are never stored in the repository or workflow file.

### Notes

- The deploy uses [`wlixcc/SFTP-Deploy-Action`](https://github.com/wlixcc/SFTP-Deploy-Action)
  (`sftp_only: true`) — true SFTP over SSH, which is what SiteGround provides.
- `delete_remote_files` is `false` by default so a deploy never deletes anything
  unexpectedly. Once you've confirmed the site is correct, you can flip it to `true`
  in the workflow to prune files that were removed from the build.
- Prefer SSH-key auth over a password? Swap `password:` for
  `ssh_private_key: ${{ secrets.SFTP_SSH_KEY }}` in the workflow and add that secret.
