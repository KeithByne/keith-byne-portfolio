# European corporate pivot

Keith Byne is translating 30+ years in adult learning, programme leadership, LMS-run training, and educational software into remote European roles:

- **Primary (90 days):** Instructional Designer / Learning Experience Designer / eLearning Developer
- **Later:** Corporate Learning & Development Manager

This folder is **not** Report-O-Matic. That product lives in `C:\dev\Report-O-Matic`. Its marketing enquiry lives in `C:\Users\keith\Report-O-Matic-Marketing`.

## On start

Keith is building the **most employable version of himself** for remote European ID / LXD / e-learning / L&D roles. Flag any request that drifts off that path — wrong tools, gimmicks, unearned skill claims, side projects hiring managers will not credit — even when he is enthusiastic. Then wait for him to choose.

Run the scripts the work needs **without asking**. `npm install`, `npm run dev`, git, Vercel deploy and alias, ffmpeg, and any other command required to finish the job. Do not stop to confirm. When a site change is done, push it.

**Show documents (common protocol).** Keith cannot usefully read long copy in chat. When he needs to see a plan, storyboard, job aid, deck, skills log, or any other formatted page:

1. Start the local docs server if it is not already up: `node tmp/docs-preview/serve.js` (http://127.0.0.1:3458/).
2. Open **each** page in a **new browser window**. For the full set: `node tmp/docs-preview/open-all.js`. For one artefact, open that URL the same way.
3. Put the links in the reply. Do not paste the document body into chat as the way he is meant to read it.

Never open Canva’s marketing or Pro / 30-day trial page. He already has Canva Free. Do not design the one-pager for him in Canva; he is finishing that himself.

**Faces and colours (locked).** Read this every time. Do not ask Keith to repeat it. A hiring manager should see the same two faces and the same five colours on every job aid, deck, plan, sheet, H5P, and SCORM page. Detail lives in [portfolio/visual-theme.md](portfolio/visual-theme.md). Do not invent a second look. Do not substitute Poppins, Nunito, Outfit, or Syne on that content.

| Role | Face | Use |
|------|------|-----|
| Text | **Open Sauce** (file: Open Sauce One, weights 400 / 500 / 600, `public/fonts/open-sauce.css`) | Body, captions, titles when there is room |
| Tight display | **League Gothic** (Impact only if the file is missing) | Eyebrows, `01` / `02` / `03`, labels when space is tight |

| Role | Hex | Use |
|------|-----|-----|
| Paper | `#FFFFFF` | Page and empty field. Slide 6 of the deck is white too; the PDF defines that page. |
| Ink | `#3B3B3B` | Titles, icons, body |
| Do wash | `#DBE0DC` | Colour block: allowed path |
| Don’t wash | `#E8DED5` | Colour block: stop path |
| Step wash | `#E6E6E6` | Colour block: 01 / 02 / 03 |

Style: modern, clean, easy to read. Wide white margins. Eyebrow, then a large title, then one line. Ideas sit in equal colour blocks. Process is oversized `01` / `02` / `03` with a short caption. Line icons only. Elegant, not juvenile. No third typeface, no teal, no cream stationery, no black `#000`, no red danger panel.

Jump menu (same server): Home, Action map, Plan, Weeks, Cheat sheet, One-pager, 8 slides, Presenter view, Rise, Tools, Skills log, plus SCORM Cloud.

## How to advise on new ideas

When Keith suggests adding something (a video, an avatar, a page, a skill line, a photo, a tool), **do not build it first**. Say:

1. **The best option** — what he should actually do, even if it is not his suggestion.
2. **How a hiring manager will read it** — the probable interpretation from the target audience: remote European instructional design, e-learning, LXD, and L&D people scanning a portfolio in a few minutes.

Be blunt. If an idea will look like a gimmick, ESL classroom residue, unearned tool claim, or overselling, say that. Then wait for him to choose.

## How to use this folder

| File | What it is |
|------|------------|
| [cv.md](cv.md) | Industry-format CV. Send this. Skills grow only via the log. |
| [cover-letter.md](cover-letter.md) | Introduction letter. Swap the tokens per application. |
| [cv-skills-log.md](cv-skills-log.md) | Which course module unlocks which CV line. |
| Formatted docs (local) | [http://127.0.0.1:3458/](http://127.0.0.1:3458/) — clickable menu. Open all windows with `node tmp/docs-preview/open-all.js`. |
| [portfolio-plan.md](portfolio-plan.md) | Overview, glossary, and staged build order. Read this first. |
| [platforms.md](platforms.md) | Tools to learn, in hiring order, free vs trial vs skip. |
| [three-month-course.md](three-month-course.md) | 12-week checklist. Follows the plan. Articulate trial starts week 6. |
| [open-questions.md](open-questions.md) | Facts still needed (dates, phone, LMS name). |
| [universal-english-case.md](universal-english-case.md) | Draft copy for the Universal English Work case. |
| [ardmore-case.md](ardmore-case.md) | Draft copy for the Ardmore Work case. Edit here, then put it on the site. |
| [report-o-matic-case.md](report-o-matic-case.md) | Draft copy for the Report-O-Matic Work case. |
| [fire-list-o-matic-case.md](fire-list-o-matic-case.md) | Draft copy for the FireList-O-Matic Work case. |
| [portfolio/safe-ai-action-map.md](portfolio/safe-ai-action-map.md) | Stage 1: who, problem, do this, how we would notice. |
| [portfolio/job-aid-safe-ai/storyboard.md](portfolio/job-aid-safe-ai/storyboard.md) | Case A: one-page job aid + 8-slide stakeholder deck (same Safe AI audience). |
| [portfolio/visual-theme.md](portfolio/visual-theme.md) | Locked look from the Canva job aid. Use on later media. |
| [portfolio/job-aid-safe-ai/job-aid-sample.pdf](portfolio/job-aid-safe-ai/job-aid-sample.pdf) | Keith’s Canva job aid (working file). |
| [portfolio/job-aid-safe-ai/deck.html](portfolio/job-aid-safe-ai/deck.html) | Working 8-slide talk (HTML prototype). Remake in PowerPoint later. |
| [portfolio/job-aid-safe-ai/presenter-view.html](portfolio/job-aid-safe-ai/presenter-view.html) | How to put “You say” in Notes and give the talk (Presenter view). |
| [portfolio/rise-safe-ai/storyboard.md](portfolio/rise-safe-ai/storyboard.md) | Branching script for the first Rise module. |
| [SCORM Cloud](https://cloud.scorm.com/) | Portfolio LMS host. Free Trial account already open; no time limit. Dummy upload in Week 5. |

## Portfolio site (Vercel)

The public site is a Next.js app at the repo root (`app/`, `public/portraits/`, `public/studio/`).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Pages: Home, [Work](/work), [Studio](/studio), [About](/about), [Contact](/contact).

To put it on Vercel: import this GitHub repo, leave the root directory as `.`, framework Next.js. After the first deploy, put the live URL on the CV where it says `[TO CONFIRM: portfolio URL]`.

## Site motion preset

Use this for any expand/collapse on the site (Work cases now; FAQs, details, extra copy later). The eye is already on the title that was clicked. Do not make the page jump.

- **Slide, do not jump.** Keep the panel in the DOM. Open and close with a height fold, not mount/unmount.
- **Duration:** 0.9s (`--fold-duration`) with `--fold-ease: cubic-bezier(0.4, 0, 0.2, 1)`. Slow enough to read. Not snappy chrome.
- **No scroll-snap.** Do not `scrollIntoView` the title when it opens. That fights the slide and feels jerky.
- **Both sides animate.** If opening one row closes another, both panels use the same fold so the list does not snap.
- **Classes:** `.fold` > `.fold-inner` > `.fold-body`, plus `.is-open` on the parent. Reuse these. Do not invent a new jump-open pattern.
- **Reduced motion:** honour `prefers-reduced-motion` (already in `app/globals.css`).

## 90-day done looks like

Four public artefacts with case-study writeups, this site as the index, a CV that matches those artefacts, and applications going out. Not a job offer by default.
