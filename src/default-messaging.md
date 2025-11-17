<!-- =========================================================================
src/default-messaging.md

Copyright © 2025 Network Pro Strategies (Network Pro™)
SPDX-License-Identifier: CC-BY-4.0 OR GPL-3.0-or-later
This file is part of Network Pro.
========================================================================== -->

<sup>[SPDX-License-Identifier](https://spdx.dev/learn/handling-license-info/): `CC-BY-4.0 OR GPL-3.0-or-later`</sup>

<a name="top"></a>

# <img src="../img/messaging.png" width="20" height="20" alt="Default Messaging Apps (Offline)" /> Default Messaging Apps

**Network Pro Strategies** (Network Pro&trade;)<br />
**Last Updated:** November 16, 2025

While SMS is not a secure protocol, it remains a default communication channel on most phones — especially when interacting with contacts who don't use encrypted messengers. This section highlights minimal, privacy-respecting SMS apps that avoid tracking, ads, and unnecessary permissions, offering a clean interface for managing legacy SMS/MMS messaging.

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

!!! warning "Limitations of SMS"

    While SMS remains useful for communicating with contacts who don’t use encrypted messengers, it is fundamentally **insecure and privacy-invasive** by design:

      - Messages are **not end-to-end encrypted** — they can be intercepted by carriers, governments, or attackers.
      - SMS exposes **metadata**, including sender, recipient, and timestamps.
      - Content is typically stored in plaintext on carrier infrastructure.
      - It is vulnerable to **SIM swap attacks**, **SS7 protocol exploitation**, and **carrier-level surveillance**.

    Even with the most privacy-conscious SMS app, you're only improving the **local interface**, not the security of the messages themselves.

    > For sensitive communication, use an end-to-end encrypted messaging platform such as Signal, Session, or Matrix.

---

<section id="default-messaging"></section>

<img src="../img/apps/fossifymessages.webp" width="20" height="20" alt="Fossify Messages" /> [Fossify Messages](https://f-droid.org/en/packages/org.fossify.messages/) <sup>[GitHub](https://github.com/FossifyOrg/Messages)</sup> 🌎 👑 ⭐

- Modern, open-source SMS/MMS client from the Fossify suite, focused on **minimal permissions**, **no tracking**, and **full offline operation**.
- Features dark mode, group messaging, search, archiving, scheduled messages, and multi-SIM support — all without ads or analytics.

<img src="../img/apps/qksms.png" width="20" height="20" alt="QKSMS" /> [QKSMS](https://github.com/moezbhatti/qksms) <sup>[Play Store](https://play.google.com/store/apps/details?id=com.moez.QKSMS)</sup> 🌎

- Once a popular open-source SMS/MMS app with a clean Material UI and useful features like night mode, per-contact colors, and message scheduling.
- Still functional, but **no longer actively maintained** — best used only if Fossify Messages does not meet specific needs.

<img src="../img/apps/textra.png" width="20" height="20" alt="Textra" /> [Textra](https://textra.me/) <sup>[Play Store](https://play.google.com/store/apps/details?id=com.textra)</sup> 🇦🇺 <sup>AU</sup> ❤ 💲

- Highly customizable and polished proprietary SMS app with support for delayed send, scheduled messages, blacklist/whitelist, and extensive theming.
- Closed-source, contains ads unless upgraded to Pro, and **has internet access** — **not recommended for privacy-critical use**, but often chosen for its UX.

&nbsp;

<sub>[Back to top](#top)</sub>
