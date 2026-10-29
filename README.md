# Mardiyyah Apampa · Portfolio

A desktop-style portfolio built with [Astro](https://astro.build) and Tailwind CSS, deployed to GitHub Pages.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Where things live

| What you want to change | File |
|---|---|
| Name, email, links, bio, education, experience, skills | `src/data/site.ts` |
| Projects (also shown on Robotics if tagged `Robotics`) | `src/content/projects/*.md` |
| Learning log entries | `src/content/log/*.md` |
| Resume PDF | `public/Mardiyyah_Apampa_Resume.pdf` |
| Colours and fonts | `src/styles/global.css` |
| Top bar / taskbar / terminal | `src/components/` |

### Add a project

Create a new file in `src/content/projects/`, e.g. `my-new-project.md`:

```md
---
title: My New Project
summary: One sentence about it.
categories: [AI, Software]   # any of: AI, Robotics, Software, Data
tools: [Python, PyTorch]
date: 2026-10-01
cover: code                  # robot | chart | code | chat
github: https://github.com/Mardiyyah-Apampa/my-new-project
order: 4
---

## Overview

Write about the project here.
```

### Add a learning-log entry

Create a new file in `src/content/log/`:

```md
---
title: What I learned this week
date: 2026-10-29
tags: [AI]
takeaways:
  - First takeaway
  - Second takeaway
---

Your notes here.
```

## Contact form

1. Create a free form at https://formspree.io.
2. Copy its form ID (the part after `/f/`).
3. Paste it into `formspreeId` in `src/data/site.ts`.

Until then, the form opens the visitor's email app with the message filled in.

## Deploy

Pushing to `main` deploys automatically through `.github/workflows/deploy.yml`.
In the GitHub repo, set **Settings → Pages → Source** to **GitHub Actions**.
