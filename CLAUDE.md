# CLAUDE.md — landing

The aerocater.ca marketing site. Written 2 August 2026.

One static page, `index.html`, plus `images/`. No build step, no dependencies,
no JavaScript framework. Edit the file and deploy it.

Canonical URL is `https://aerocater.ca/`, and the page carries real SEO and
Open Graph metadata targeting in-flight catering dispatch. Keep the canonical,
`og:*` and `twitter:*` tags in sync with any copy change — they are the point of
the page, not decoration.

## Related repos

| Folder | Role |
|---|---|
| `~/landing` | **This one.** Marketing page |
| `~/aerocater_deploy` | v1 ops board + driver PWA — the live production app |
| `~/aerocater-ops-v2` | React rebuild, mock data, not connected to production |

Each is a separate git repo as of 2026-08-02.

Claims made on this page are marketing claims about the product in
`~/aerocater_deploy`. Before promising a capability here, check it actually
works there — as of today the driver PWA's data path is broken in production
(see `../aerocater-ops-v2/SECURITY-REVIEW-2026-08-02.md`, finding 1).

## Backups

No remote. Local-only, on one machine.
