# European corporate pivot

Keith Byne is translating 30+ years in adult learning, programme leadership, LMS-run training, and educational software into remote European roles:

- **Primary (90 days):** Instructional Designer / Learning Experience Designer / eLearning Developer
- **Later:** Corporate Learning & Development Manager

This folder is **not** Report-O-Matic. That product lives in `C:\dev\Report-O-Matic`. Its marketing enquiry lives in `C:\Users\keith\Report-O-Matic-Marketing`.

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
| [platforms.md](platforms.md) | Tools to learn, in hiring order, free vs trial vs skip. |
| [three-month-course.md](three-month-course.md) | 12-week skills course. Homework is the portfolio. |
| [open-questions.md](open-questions.md) | Facts still needed (dates, phone, LMS name). |
| [ardmore-case.md](ardmore-case.md) | Draft copy for the Ardmore Work case. Edit here, then put it on the site. |
| [report-o-matic-case.md](report-o-matic-case.md) | Draft copy for the Report-O-Matic Work case. |
| [fire-list-o-matic-case.md](fire-list-o-matic-case.md) | Draft copy for the FireList-O-Matic Work case. |
| [portfolio/rise-safe-ai/storyboard.md](portfolio/rise-safe-ai/storyboard.md) | Branching script for the first Rise module. |

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
