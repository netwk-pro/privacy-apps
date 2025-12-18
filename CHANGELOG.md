<!-- =====================================================================
CHANGELOG.md

Copyright © 2025 Network Pro Strategies (Network Pro™)
SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
====================================================================== -->

# Changelog

<!-- markdownlint-disable -->

All notable changes to this project will be documented in this file.

This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Version numbers use a **SemVer-inspired** `MAJOR.MINOR.PATCH` format, with
version increments reflecting both user-visible and operational impact.

---

## [Unreleased]

---

## [1.2.0] - 2025-12-17

### Added

- Introduced `vercel.json` for Vercel-based static deployment, including:
  - Explicit build instructions for MkDocs (Material for MkDocs)
  - Deployment output directory configuration (`build/`)
  - Centralized security headers and CSP reporting configuration
- Added Vercel as the primary hosting platform for this site.
- Added `VERSIONING.md` for clarity regarding how we implement versioning.

### Changed

- Migrated static site hosting from Netlify to Vercel.
- Updated security header delivery mechanism from Netlify `_headers` to Vercel `headers` configuration.
- Updated GitHub Actions workflows to use `actions/checkout@v6`:
  - `.github/workflows/backup-branch.yml`
  - `.github/workflows/dependency-review.yml`
- Bumped project version to `v1.2.0`.
- Updated frontend tooling dependencies:
  - `@eslint/js` `^9.39.1` → `^9.39.2`
  - `autoprefixer` `^10.4.22` → `^10.4.23`
  - `browserslist` `^4.28.0` → `^4.28.1`
  - `eslint` `^9.39.1` → `^9.39.2`
  - `prettier` `^3.6.2` → `^3.7.4`
  - `stylelint` `^16.25.0` → `^16.26.1`
  - `markdownlint` `^0.39.0` → `^0.40.0`
  - `markdownlint-cli2` `0.19.0` → `0.20.0`

### Removed

- Removed `netlify.toml` from the project root as Netlify is no longer the active deployment target.
- Removed explicit `mkdocs-get-deps` from `requirements.txt`, as it is a transitive dependency managed by MkDocs.
- Removed manually maintained `src/sitemap.xml` to allow Material for MkDocs to auto-generate the sitemap during build.

### Deprecated

- Netlify automated builds and deploy previews for this repository have been disabled as part of the migration to Vercel.

---

## [1.1.3] - 2025-11-19

### Added

- Image assets for Auxio, Booming Music, Breezy Weather, and QUIK SMS:
  - `src/img/apps/auxio.png`
  - `src/img/apps/booming-music.png`
  - `src/img/apps/breezy-weather.png`
  - `src/img/apps/quik-sms.png`
- Added Auxio and Booming Music to the **Music** section.
- Added Breezy Weather to the **Weather** section.
- Replaced QKSMS in **Default Messaging** with QUIK SMS.

### Changed

- Added bullet points for all apps in the **Music** and **Navigation** categories.
- Cleaned up the **Browsers** category by inserting horizontal rules and promoting titles to headings.
- Added GitHub links for numerous projects where they were previously absent.
- Modified `dev` script in `package.json` to run `mkdocs serve --livereload`, addressing an upstream issue with MkDocs.
- Bumped project version to `v1.1.3`.

### Removed

- QKSMS has been removed from the **Default Messaging** category, as it is no longer actively maintained. QUIK SMS has been added in its place.
- Removed image assets for QKSMS.

### Fixed

- Excessively small category images have now been properly sized and should be more visible.

---

## [1.1.2] - 2025-11-18

### Added

- `netlify.toml` build configuration file with:
  - Custom build command: `mkdocs build --clean --site-dir build`
  - Output directory: `build`
  - Strict security headers including Content-Security-Policy with CSP report URI
- `.python-version` specifying the Python runtime for Netlify's build environment
- Verified `requirements.txt` includes all necessary MkDocs and plugin dependencies

### Changed

- Switched hosting target from Vercel/GitHub Pages to **Netlify** for simplicity, CSP support, and automatic deployment.
- Replaced GitHub Actions-based deployment (`build-and-deploy.yml`) with native Netlify build handling.
- Bumped project version to `v1.1.2`.

### Removed

- GitHub Actions workflow `.github/workflows/build-and-deploy.yml`
- All custom Vercel deployment logic (e.g., `vercel.json`, `.vercelignore`, custom deployment branch)

---

## [1.1.1] - 2025-11-18

### Added

- Introduced GitHub Actions workflow `build-and-deploy.yml` to automate MkDocs builds and deploy output to `vercel-deploy` branch.
- Added `vercel.json` with strict Content Security Policy, referrer policy, and secure headers for production deploys.
- Created `.vercelignore` to prevent non-essential files from being uploaded to Vercel during deploy.
- Configured Vercel to ignore builds on all branches except `vercel-deploy` using a custom ignored build step.
- Enabled CSP violation reporting via existing endpoint at `https://csp.netwk.pro/.netlify/functions/csp-report`.

### Changed

- Updated `mkdocs.yml` to use `site_dir: build/` for alignment with Vercel static deploy requirements.
- Disabled external fonts and scripts via the Material for MkDocs privacy plugin.
- Refined CSP `font-src` and `style-src` directives to allow self-hosted and inline assets only.

### Fixed

- Restored `actions: read` permission in `build-and-deploy.yml` to allow the `check-codeql` reusable workflow to execute successfully.

---

## [1.1.0] - 2025-11-16

### Added

- Introduced `simple-git-hooks` devDependency and set up commit and push hooks.
- Added all image assets locally, such that the site is no longer dependent upon third-party assets.
- Added `robots.txt` and `sitemap.xml` for crawlers.

### Changed

- Updated `.markdownlint.mjs` to ignore rule `MD060`, which is unnecessarily strict and doesn't affect render output.
- Optimized all images for thumbnail-size display and removed metadata.
- Broke out sections into nested pages for cleaner separation and navigation.
- Bumped project version to `v1.1.0`.
- Updated dependencies:
  - `markdownlint-cli` `^0.18.1` → `^0.19.0`

---

## [1.0.4] - 2025-11-11

### Added

- Introduced **Sav PDF Viewer** into the **PDF Readers** category.
  - Added `src/img/apps/sav-pdf.png` image asset.
  - Updated the entry in both `src/index.md` and `README.md`.

### Changed

- Added a link to the [Privacy & Security Apps and Services](https://apps.netwk.pro) site.
- Updated `mkdocs.yml` to display social media icons/links in the footer.
- Bumped project version to `v1.0.4`.
- Updated dependencies:
  - `autoprefixer` `^10.4.21` → `^10.4.22`
  - `browserslist` `^4.27.0` → `^4.28.0`
  - `mkdocs-material` `9.6.23` → `9.7.0`

---

## [1.0.3] - 2025-11-08

### Changed

- Modified emoji used for **Instant Messaging** section to one that is universally supported:
  - `README.md`
  - `src/index.md`
- Bumped version to `v1.0.3`.

### Fixed

- Corrected link in `README.md` for [apps.netwk.pro](https://apps.netwk.pro).

---

## [1.0.2] - 2025-11-07

### Added

- Added links to GitHub Discussions and create a new issue in `README.md` and `src/index.md`.

### Changed

- Updated `README.md` and `src/index.md` such that every entry has either an F-Droid or Play Store link, where appropriate.
- Bumped project version to `v1.0.2`.

---

## [1.0.1] - 2025-11-07

### Changed

- Bumped project version to `v1.0.1`.

### Fixed

- Corrected images in `README.md` to point to [jsDelivr](https://www.jsdelivr.com/) instead of using relative paths.

---

## [1.0.0] – 2025-11-07

### Added

- Material for MkDocs structure and supporting files.
- All third-party images have been downloaded and optimized, and are now served locally from `src/img`.

### Changed

- Completely refactored both `README.md` and `src/index.md`.
  - The latter uses admonitions and collapsibles to present a significantly cleaner look.
- Updated all dependencies.
- Bumped project version to `v1.0.0`.

---

<!-- Link references -->

[Unreleased]: https://github.com/netwk-pro/privacy-apps/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/netwk-pro/privacy-apps/releases/tag/v1.2.0
[1.1.3]: https://github.com/netwk-pro/privacy-apps/releases/tag/v1.1.3
[1.1.2]: https://github.com/netwk-pro/privacy-apps/releases/tag/v1.1.2
[1.1.1]: https://github.com/netwk-pro/privacy-apps/releases/tag/v1.1.1
[1.1.0]: https://github.com/netwk-pro/privacy-apps/releases/tag/v1.1.0
[1.0.4]: https://github.com/netwk-pro/privacy-apps/releases/tag/v1.0.4
[1.0.3]: https://github.com/netwk-pro/privacy-apps/releases/tag/v1.0.3
[1.0.2]: https://github.com/netwk-pro/privacy-apps/releases/tag/v1.0.2
[1.0.1]: https://github.com/netwk-pro/privacy-apps/releases/tag/v1.0.1
[1.0.0]: https://github.com/netwk-pro/privacy-apps/releases/tag/v1.0.0
