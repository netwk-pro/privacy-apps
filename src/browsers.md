<!-- =========================================================================
src/browsers.md

Copyright © 2025 Network Pro Strategies (Network Pro™)
SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================== -->

<sup>[SPDX-License-Identifier](https://spdx.dev/learn/handling-license-info/): `CC-BY-4.0 OR GPL-3.0-or-later`</sup>

<a name="top"></a>

# 🔗 Browsers

**Network Pro Strategies** (Network Pro&trade;)<br />
**Last Updated:** November 16, 2025

Privacy-focused browsers aim to reduce tracking, fingerprinting, and data collection while maintaining compatibility with modern websites. Options like Firefox (with hardened settings), Brave, and Mullvad Browser prioritize user anonymity, block intrusive ads and scripts, and offer greater control over online activity compared to mainstream browsers.

- [Firefox](#firefox)
- [Chromium](#chromium)

&nbsp;

??? info "Legend"

    | Emoji | Meaning                    |
    | :---- | :------------------------- |
    | 👑    | Privacy Community Favorite |
    | ❤️    | Top Recommendation         |
    | ⭐    | Highly Recommended         |
    | ❤    | Personal Favorite          |
    | 💲    | Paid App or Service        |
    | 🌎    | Community-maintained       |

---

<section id="firefox"></section>

## Firefox

<img src="../img/apps/firefox.png" width="20" height="20" alt="firefox" /> [Firefox](https://www.firefox.com/) 🇺🇸 <sup>US</sup> 👑 ⭐ ❤️ and its FOSS version: [Fennec](https://f-droid.org/packages/org.mozilla.fennec_fdroid/) <sup>[Repo](https://hg.mozilla.org/mozilla-central/file/tip/mobile/android)</sup>
🌎 👑 ⭐ ❤

- We highly recommend using [FFUpdater](https://f-droid.org/en/packages/de.marmaro.krt.ffupdater/) <sup>[F-Droid](https://f-droid.org/en/packages/de.marmaro.krt.ffupdater/) | [GitHub](https://github.com/Tobi823/ffupdater)</sup> to install and manage privacy-centric browsers on mobile.

!!! warning "Reality Check"

    There's a misconception that in order for Firefox to be useable, it requires lots of changes and extensions. Nothing could be further from the truth. In fact, there are only [a handful of truly useful extensions](https://github.com/arkenfox/user.js/wiki/4.1-Extensions) (uBlock Origin, CanvasBlocker, etc.).

    Realistically, Firefox is no more complicated to set up and configure than Brave, for example. However, if you feel you need a guide, you may want to take a look here:

    - [Techlore: The Ultimate Guide to Firefox Hardening! (YouTube)](https://youtu.be/F7-bW2y6lcI)
    - [Yet Another Firefox Hardening Guide (Archive.org)](https://web.archive.org/web/20221013104259/https://chrisx.xyz/blog/yet-another-firefox-hardening-guide/)

### Firefox user.js Mods

Firefox `user.js` mods typically consist of a `user.js` file, a `prefs.js` file, or both. The `user.js` file is a user-defined configuration script that enforces specific settings each time the browser starts, allowing users to create a highly customized, secure, and private browsing environment without manually navigating Firefox’s settings or `about:config`.

[Betterfox](https://github.com/yokoffing/Betterfox) 🌎 ⭐ ❤️ ❤

- Removes much of the uncertainty and ambiguity involved with crafting a custom `user.js` file.
- This project consists of the best parts of [arkenfox](https://github.com/arkenfox/user.js/wiki) and similar projects without the complexity.

[Firefox Profilemaker](https://ffprofile.com/)

- A very simple, straightforward tool for creating a custom `prefs.js` file (similar in function to `user.js`).
- If you don't mind spending a little more time setting things up, [Betterfox](https://github.com/yokoffing/Betterfox) is a significant upgrade and allows for more customization.

[arkenfox](https://github.com/arkenfox/user.js/wiki)

- The original `user.js` modification project. While highly functional, this is only recommended for extremely advanced users.
- For a visual overview, an [arkenfox GUI](https://arkenfox.github.io/gui/) is also available.

### Firefox Forks (coming soon!)

- Zen Browser
- LibreWolf

---

<section id="chromium"></section>

## Chromium

<img width="20" height="20" src="../img/apps/brave.png" alt="Brave Browser"/> [Brave](https://play.google.com/store/apps/details?id=com.brave.browser) <sup>[GitHub](https://github.com/brave/brave-browser)</sup> 🇺🇸 <sup>US</sup> 👑 ⭐ [_(How to Harden Brave Browser)_](https://brave.netwk.pro)

- Harden Brave Browser before using it! See [caveat](#chrome).
- Can be installed using [FFUpdater](https://f-droid.org/en/packages/de.marmaro.krt.ffupdater/) <sup>[F-Droid](https://f-droid.org/en/packages/de.marmaro.krt.ffupdater/) | [GitHub](https://github.com/Tobi823/ffupdater)</sup> on mobile.

<img src="../img/apps/cromite.png" width="20" height="20" alt="Cromite"> [Cromite](https://github.com/uazo/cromite/) 🌎

- If you want a Chrome interface, you may like Cromite. Similarly to Brave, it offers fairly robust privacy features, including Adblock. See [caveat](#chrome).
- Can be installed on mobile with [FFUpdater](https://f-droid.org/en/packages/de.marmaro.krt.ffupdater/) <sup>[F-Droid](https://f-droid.org/en/packages/de.marmaro.krt.ffupdater/) | [GitHub](https://github.com/Tobi823/ffupdater)</sup>.

&nbsp;

<sub>[Back to top](#top)</sub>

<a name="chrome"></a>

!!! warning "Chromium Notice"

    🚫 **_If possible, avoid using Chrome at all costs. Let your family and friends know that there are better alternatives. We recommend you let them try Cromite, as it looks very similar._**

    > Bear in mind that by utilizing Chromium-based browsers, such as Cromite and Brave, you're choosing to perpetuate Google's domination of the browser market, as well as aiding in the further proliferation of the Chromium framework.
    >
    > Cromite and Brave will significantly improve your security and better safeguard your privacy, but these browsers are, sadly, fruit of the poisonous tree. As such, you are <strong><em>strongly</em></strong> urged to utilize [Firefox](https://www.firefox.com/) or its FOSS fork, [Fennec](https://www.f-droid.org/packages/org.mozilla.fennec_fdroid/).
