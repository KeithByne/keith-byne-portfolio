# Articulate assets

Working kit for **Articulate 360** (the paid suite). Drop new Rise, Storyline, audio, images, fonts notes, and published zips **in this folder**. Add notes under **Add later** at the bottom, or put the file here and write one line in the inventory.

This file is the index. Production tables (every word, interactions, slide format) also live here as HTML and Word:

- [rise-storyboard.html](rise-storyboard.html) / [rise-storyboard.docx](rise-storyboard.docx)
- [storyline-storyboard.html](storyline-storyboard.html) / [storyline-storyboard.docx](storyline-storyboard.docx)

Printable theme sheet for day one of the trial: [brand-guideline.pdf](brand-guideline.pdf) (copy of the public module visual system). HTML source: [../public/work/theme/brand-guideline.html](../public/work/theme/brand-guideline.html). Do not invent a second look.

---

## How to add a file

1. Put it in `Articulate assets/` (this folder).
2. Add one row to **Inventory** below: date, what it is, filename.
3. Do not put Articulate working files on the public site until the matching row in [cv-skills-log.md](../cv-skills-log.md) is done and a live URL exists.

---

## Inventory

| Date | What | File |
|------|------|------|
| 28 Sep 2026 | This index | `Articulate assets.md` |
| 28 Sep 2026 | Rise 360 production storyboard (table) | `rise-storyboard.html`, `rise-storyboard.docx` |
| 28 Sep 2026 | Storyline 360 production storyboard (table) | `storyline-storyboard.html`, `storyline-storyboard.docx` |
| 30 Sep 2026 | Storyboard Master (blank + filled Safe AI example + Brand Guideline ROM PDF). Formatting locked; cell wording editable. | `Storyboard Master/` |

Older scripts still in the repo (do not duplicate; this folder is now the working home):

- Rise outline: [portfolio/rise-safe-ai/storyboard.md](../portfolio/rise-safe-ai/storyboard.md)
- Storyline lock: [portfolio/storyline-safe-ai/storyboard.md](../portfolio/storyline-safe-ai/storyboard.md)
- Live brand sheet on the site: [public/work/theme/brand-guideline.pdf](../public/work/theme/brand-guideline.pdf)

---

## Do not start the trial yet

Articulate 360 is a **30-day trial, no card**. **One clock** for Rise 360 and Storyline 360. Opening it to “have a look” wastes the only window.

- **Start:** day 1 of **week 6**, after Case A (job aid + deck) is live and both scripts in this folder are locked.
- **Not week 5.** Week 5 is the dummy Sharable Content Object Reference Model (SCORM) Cloud upload only.
- Same login does Rise and Storyline. Use the 30 days as two blocks.

| Days | Build |
|------|--------|
| 1–14 (weeks 6–7) | **Rise 360** from the Rise table in this folder. Host on SCORM Cloud and/or a web export. |
| 15–28 (weeks 8–9) | **Storyline 360** from the Storyline table. Export SCORM 1.2 + HTML5. Host on SCORM Cloud **and** Netlify. |
| Before day 30 | Copy everything off Review 360. Write the Work-page paragraphs for Cases A, B, and C (problem, limit, choice, link). |

**Review 360** (Articulate’s share link) **dies with the trial.** Never use it as the portfolio URL. Keep a Netlify or SCORM Cloud copy.

SCORM Cloud: [https://cloud.scorm.com/](https://cloud.scorm.com/). Free Trial account already open (22 Sep 2026); no calendar expiry. Leave idle until Week 5 dummy. Do not add a card.

---

## What sits inside Articulate 360

| Product | What it is | This portfolio |
|---------|------------|----------------|
| **Rise 360** | Form-based, scrolling blocks. Faster. | Case B. 10–15 minutes. One branch. One scored check. |
| **Storyline 360** | Slides, layers, button states, variables (the screen remembers choices). Senior instructional design (ID) ads often name it. | Case C. One manager/staff conversation. Same Safe AI habit. |
| **Review 360** | Comment/share link. | Temporary only. Export off it. |

There is **no** separate Articulate “storyboard app.” Storyboards stay as Word/HTML in this folder. Do not burn trial days writing the story inside Storyline.

Saved clicks tutorial (watch; do not open the trial to follow along until week 6): [Articulate Storyline 360 Tutorial (2026) \| Full Course for Beginners](https://www.youtube.com/watch?v=yu30DqR6RnI) — Georg Volmer. Player, audio, markers, click-to-reveal, a quiz. Learn clicks. Build **our** Safe AI conversation from the locked table here, not his information-security demo. Do not copy his Montserrat look.

---

## Cases (same habit)

**Working title (both modules):** Before you paste, classify.

**Audience:** Knowledge workers on a distributed EU team (office staff, not teachers).

**Business problem:** People paste client data into public AI tools and share files on personal devices.

**Required behaviour:** Before any paste, prompt, or file share: name the data → approved tool, stripped example, or no AI → if unsure, stop and ask.

**Metric for the case-study page:** Fewer unapproved AI pastes / fewer personal-drive shares. Do not invent a percentage.

**Portfolio sample.** Not a named employer. No fake company logo. Named ask-role is still unconfirmed; on-screen copy uses “line manager or data-protection lead.”

**Case B — Rise.** Menu name: Safe AI and data handling. Map: Welcome → Classify (branch) → Branch A or B → Rejoin three checks → Scored scenario → Close.

**Case C — Storyline.** Project name: Safe AI — the classify conversation. 16:9. Characters: Jordan (line manager), Alex (remote staff). First names only. Illustrated characters or caption bars until Keith supplies photos.

---

## Visual (paste on day one)

Same two faces and five colours as the job aid. Shopfront of the public site stays navy / Outfit / Syne. **These values are for the modules only.**

| Role | Hex | Use |
|------|-----|-----|
| Paper | `#FFFFFF` | Page, empty field, slide fill |
| Ink | `#3B3B3B` | Titles, icons, body, buttons, player |
| Do wash | `#DBE0DC` | Allowed path / correct |
| Don’t wash | `#E8DED5` | Stop path / incorrect |
| Step wash | `#E6E6E6` | `01` / `02` / `03` tiles; hover |

**Rise — Theme → colors**

```
Page / background    #FFFFFF
Headings and body    #3B3B3B
Accent / buttons     #3B3B3B
Block — allowed      #DBE0DC
Block — stop         #E8DED5
Block — steps        #E6E6E6
```

Upload Open Sauce One if the trial lets you add a font. If it does not, closest sans for body; League Gothic for `01 02 03` only when you can embed it. No decorative Rise template.

**Storyline — slide and player**

```
Slide fill             #FFFFFF
Text                   #3B3B3B
Player / menu          #3B3B3B on #FFFFFF
Correct / continue     fill #DBE0DC, text #3B3B3B
Incorrect / stop       fill #E8DED5, text #3B3B3B
Neutral tiles          #E6E6E6
Focus / selected       2 px ink outline, not a new colour
```

Install Open Sauce One and League Gothic on Windows **before** week 6. Storyline can use installed faces. Embed on publish so the SCORM zip still looks right.

Font files already in the repo:

- Open Sauce One: `public/fonts/open-sauce.css` and the `.woff2` files next to it
- League Gothic Regular: `public/fonts/league-gothic-regular.woff2` (also `tmp/league-gothic/`)

**Type:** Open Sauce One 400 / 500 / 600 for sentences and the large title. League Gothic for document names, object titles, and `01 02 03` — never for a sentence. Line spacing 1.5. One line of space between a block title and the body.

**Layout:** Wide white margins. Eyebrow → large title → one-line deck. Equal colour blocks. Line icons only. No stock photo, no fake logo, no teal, no Poppins, Nunito, Outfit, Syne, Montserrat, or IBM Plex on these modules.

Player (Storyline): Menu on. Seekbar off. Hide volume until audio exists. Closed captions off until audio exists. Tab order: heading, body, buttons left to right.

---

## Storyline variables

| Name | Type | Default |
|------|------|---------|
| classifiedCorrect | True/False | False |
| askedIfUnsure | True/False | False |
| ScorePercent | Number | 0 |

SCORM 1.2: complete when Finish is clicked on slide 3.1. Score is `ScorePercent`. Quiz question name: `Q1_approved_move`.

---

## CV (do not claim yet)

| When | Proof | Line on `cv.md` | Status |
|------|--------|-----------------|--------|
| Week 7 | Rise hosted (SCORM Cloud and/or Netlify) | Authoring: Articulate Rise 360 — live module URL | Not started |
| Week 9 | Storyline hosted, SCORM 1.2 zip | Authoring: Articulate Storyline 360; SCORM 1.2 — live URL | Not started |

---

## Words that must not appear on screens

students, classroom, teacher, pupils, kids, 40% fewer leaks, a named client, a fake company logo, teal, Poppins, Montserrat, “try again” on the coach path, “you have failed.”

---

## Rise 360 — every word, interaction, format

Build **only** these words. Do not add extra sentences in Rise.

### P0 — Rise player chrome (every lesson)

**Format:** Rise player  
**On-screen:** Menu · Safe AI and data handling · Previous · Next · Continue  
**Interactions:** Default player. Do not rename Continue except where a row below gives a different button label. Menu lists the seven lesson titles. Tab to Continue, Enter to advance. No auto-play audio.

### 1.0 Welcome (sidebar)

**Format:** Lesson title  
**On-screen:** Welcome  
**Interactions:** Menu label only.

### 1.1 Cover

**Format:** Cover / title plus body  
**On-screen:**  
Before you paste, classify.  
Remote work is fast. Public AI tools and personal drives are faster still. This module is not a policy lecture. It is the 30-second habit your team needs before client text, staff data, or unpublished files leave an approved system.  
**Interactions:** No click on the text. No image, or a line icon only (alt text then required).

### 1.2 Continue

**Format:** Continue button  
**On-screen:** Start with a live decision  
**Interactions:** Goes to lesson 2. Only Continue label that is not the word Continue.

### 2.0 Classify the data (sidebar)

**Format:** Lesson title  
**On-screen:** Classify the data  
**Interactions:** Ungraded.

### 2.1 Scenario stem

**Format:** Scenario / decision — title plus body  
**On-screen:**  
A colleague asks you to “just drop this into ChatGPT and tidy it.”  
The file is a customer list with emails and contract values. What is it?  
**Interactions:** Read only. Do not score. Choice B is the distractor. The list is personal and commercial data.

### 2.2 Two buttons

**Format:** Scenario / decision — two buttons  
**On-screen:**  
Confidential or personal data — I must not paste it into a public AI tool.  
Harmless working text — public AI is fine.  
**Interactions:** Single choice. First → lesson 3. Second → lesson 4. After a click, Rise jumps; do not show both branches.

### 3.0 Personal and commercial data (sidebar)

**Format:** Lesson title  
**On-screen:** Personal and commercial data  
**Interactions:** Correct path only. Do wash on the block if Rise allows it.

### 3.1 Correct path

**Format:** Title plus body  
**On-screen:**  
Stop. This is personal and commercial data.  
Emails and contract values are personal data and business-confidential. Public AI tools may store prompts. Your approved path is: redacted example, internal approved tool, or no AI.  
**Interactions:** Don’t wash behind “Stop.” if a coloured block is used.

### 3.2 Continue

**Format:** Continue button  
**On-screen:** See the red lines  
**Interactions:** Goes to lesson 5. Skip lesson 4.

### 4.0 That list is not harmless (sidebar)

**Format:** Lesson title  
**On-screen:** That list is not harmless  
**Interactions:** Incorrect path. Coach, do not fail the module.

### 4.1 Coach path

**Format:** Title plus body  
**On-screen:**  
That list is not harmless.  
Names, emails, and contract values are personal data under GDPR and confidential to the company. Public AI is the wrong path. You have not failed the module. You now take the same red-line screen as everyone else.  
**Interactions:** No score. No “try again.” Then the same rejoin as Branch A.

### 4.2 Continue

**Format:** Continue button  
**On-screen:** See the red lines  
**Interactions:** Goes to lesson 5.

### 5.0 Three checks (sidebar)

**Format:** Lesson title  
**On-screen:** Three checks  
**Interactions:** Both branches rejoin.

### 5.1 Process tiles

**Format:** Title plus numbered process (`01` `02` `03` on step tiles)  
**On-screen:**  
Three checks before any AI or file share  
01 What data is this? (public / internal / personal / customer)  
02 Is this tool on the approved list?  
03 If I am unsure, I do not paste — I ask my line manager or data-protection lead.  
**Interactions:** If Process block: each number expands the same sentence; no extra words. Step wash on the tiles. League Gothic for 01 02 03.

### 5.2 Continue

**Format:** Continue button  
**On-screen:** Try one scenario  
**Interactions:** Goes to lesson 6.

### 6.0 One scenario (sidebar)

**Format:** Lesson title  
**On-screen:** One scenario  
**Interactions:** Only scored lesson. Leave Rise retry default. Track completion in SCORM 1.2 later.

### 6.1 Knowledge-check stem

**Format:** Knowledge check — title plus body  
**On-screen:** You are drafting a process note. You want AI to improve the English. The note includes one customer email address.  
**Interactions:** Then three answers. One correct.

### 6.2 Answers

**Format:** Knowledge check — multiple choice, one correct  
**On-screen:**  
Remove the email (or replace with a fake), then use the approved tool.  
Paste the whole note into a public tool because it is “just one email.”  
Put the file on a personal Google Drive so a contractor can edit it overnight.  
**Interactions:** First is correct. Shuffle off. Keep this order.

### 6.3 Submit

**Format:** Knowledge check — Submit button  
**On-screen:** Submit  
**Interactions:** Reveals feedback. Do not auto-advance.

### 6.4 Correct feedback

**Format:** Feedback — correct (do wash)  
**On-screen:**  
Correct  
Redact first, then use an approved tool.  
**Interactions:** Only if the first option was submitted. Then lesson 7.

### 6.5 Incorrect feedback

**Format:** Feedback — incorrect (don’t wash)  
**On-screen:**  
Not quite  
One email is still personal data. Personal drives are not the contractor workaround.  
**Interactions:** Same feedback for both wrong answers. Continue to lesson 7. Do not lock the close.

### 6.6 Continue

**Format:** Continue after feedback  
**On-screen:** Continue  
**Interactions:** Goes to lesson 7.

### 7.0 The habit is the course (sidebar)

**Format:** Lesson title  
**On-screen:** The habit is the course  
**Interactions:** Close. Not scored.

### 7.1 Close body

**Format:** Title plus body  
**On-screen:**  
The habit is the course.  
Classify → approved tool or no AI → ask if unsure. Take the one-page job aid and keep it next to your desktop.  
**Interactions:** Optional link “Open the job aid” only if the PDF URL is live; otherwise omit the link and keep the sentence.

### 7.2 Rise end screen

**Format:** End / complete  
**On-screen:** You’re all done. · Download your certificate · Restart this course  
**Interactions:** Leave Rise defaults. Do not write a fake certificate. SCORM complete when this lesson is reached after the scored check.

---

## Storyline 360 — every word, interaction, format

Build **only** these words. Do not add extra sentences in Storyline.

### 1.0 Player chrome (all slides)

**Format:** Storyline player  
**On-screen:** Menu · Resources · Exit · Prev · Next  
**Interactions:** Menu titles match the list in M2. Resources empty until the job-aid PDF is attached. Next disabled until the required click. Prev allowed except on 1.1.

### 1.1 Title (welcome)

**Format:** Title slide (welcome)  
**On-screen:**  
Before you paste, classify.  
A 12-minute conversation. Same habit as the job aid.  
Start  
**Interactions:** Start jumps to 1.2. Hide player Next. Animation ≤ 0.4s. Start is a button.

### 1.2 How this works

**Format:** Title plus body  
**On-screen:**  
How this works  
You follow Jordan (line manager) and Alex (remote staff). You choose what Jordan says. Wrong choices are coached. One answer is scored at the end.  
Continue  
**Interactions:** Continue → 2.1. No audio yet; if audio is added later, these words are the script.

### 2.1 Alex asks

**Format:** Conversation — caption plus body  
**On-screen:**  
Alex  
I’ll just drop this into ChatGPT and tidy the English. It’s a customer list. Emails and contract values. Should be quick.  
What should Jordan say?  
Don’t paste that. Name the data first.  
Public AI is fine if you delete the chat afterwards.  
**Interactions:** First button → 2.2, set classifiedCorrect = True. Second → 2.3, False. Next disabled until a choice. Caption “Alex” is not a button.

### 2.2 Jordan — don’t paste

**Format:** Conversation — caption plus body, do wash on the reply bar  
**On-screen:**  
Jordan  
Don’t paste that. Emails and contract values are personal data and commercial data. Public tools may keep prompts. Classify first.  
Alex  
Right. So what do I do with it?  
Continue  
**Interactions:** Only if classifiedCorrect is True. Continue → 2.4.

### 2.3 Jordan — coach

**Format:** Conversation — caption plus body, don’t wash on the reply bar  
**On-screen:**  
Alex  
I’ll delete the chat. Nobody will see it.  
Jordan  
Deleting the chat does not make the paste safe. Names, emails, and contract values are personal data under GDPR and confidential to the company. You have not failed. We classify it now, same as everyone else.  
Continue  
**Interactions:** Only if classifiedCorrect is False. Continue → 2.4. No fail screen.

### 2.4 Classify the file

**Format:** Title plus four choice buttons  
**On-screen:**  
What data is this?  
Public · Internal · Personal · Customer  
Submit  
**Interactions:** One selection. Personal and Customer both acceptable. Public and Internal wrong. Submit: Personal or Customer → classifiedCorrect True + layer L-right. Public or Internal → False + L-wrong. Submit disabled until one type. States: Normal, Hover, Selected, Visited.

### 2.4 L-right

**Format:** Feedback layer — correct (do wash)  
**On-screen:**  
Correct  
This list is personal data and customer data. It is not public. It is not merely internal working text.  
Continue  
**Interactions:** Continue hides layer, jumps to 2.5. Dim the base. No close X.

### 2.4 L-wrong

**Format:** Feedback layer — incorrect (don’t wash)  
**On-screen:**  
Not public. Not merely internal.  
Emails and contract values are personal data and customer data. Classify it as that, then choose the tool.  
Continue  
**Interactions:** Continue → 2.5. Same destination as correct. Do not loop unless Prev.

### 2.5 Three checks

**Format:** Title plus three step tiles (`01` `02` `03`)  
**On-screen:**  
Three checks before any AI or file share  
01 What data is this? (public / internal / personal / customer)  
02 Is this tool on the approved list?  
03 If I am unsure, I do not paste — I ask my line manager or data-protection lead.  
Continue  
**Interactions:** Step wash. League Gothic on numbers. Optional selected state, same words. Continue → 2.6. Clicking tile 03 sets askedIfUnsure = True.

### 2.6 The approved move (scored)

**Format:** Conversation — caption plus three choices  
**On-screen:**  
Alex  
OK. I still want better English. What is the approved move?  
Jordan — choose one  
Strip the emails (or use a fake), then use the approved tool.  
Paste it. It’s only one list.  
Put it on my personal Drive so a contractor can edit overnight.  
**Interactions:** First: ScorePercent = 100 → 2.7. Second or third: ScorePercent = 0 → 2.8. Same three choices even if classifiedCorrect was False.

### 2.7 Correct

**Format:** Title plus body (do wash)  
**On-screen:**  
Correct  
Redact first, then use an approved tool. That is the whole habit.  
Continue  
**Interactions:** Continue → 3.1.

### 2.8 Not quite

**Format:** Title plus body (don’t wash)  
**On-screen:**  
Not quite  
One list with emails is still personal data. Personal drives are not the contractor workaround. Redact first, or do not use AI.  
Continue  
**Interactions:** Same slide for both wrong answers. Continue → 3.1. Score stays 0.

### 3.1 Close

**Format:** Title plus body  
**On-screen:**  
The habit is the course  
Classify → approved tool or no AI → ask if unsure.  
Take the one-page job aid and keep it next to your desktop.  
Finish  
**Interactions:** Same close whether askedIfUnsure is True or False. Finish completes the course and goes to 3.2. Optional player resource: Job aid (PDF). No URL on the slide until live.

### 3.2 Results

**Format:** Results / complete  
**On-screen:**  
You’re done.  
Your score: `%ScorePercent%%`  
Review · Exit  
**Interactions:** Always success (habit module; score is shown, not a pass mark). Review → 2.6. Exit closes the player. Hide Storyline “Success” / “Failure” headings. Variable reference for the score.

### M1 Button states

**Format:** Button states (all choice buttons)  
**On-screen (not extra words):** Normal = ink on paper. Hover = ink on step `#E6E6E6`. Selected = ink on do `#DBE0DC`. Disabled = ink at 50%. Visited = Normal plus 1 px ink underline.  
**Interactions:** Don’t wash is only for incorrect feedback layers, not hover.

### M2 Menu titles (exact)

Welcome · How this works · Alex asks · Jordan — don’t paste · Jordan — coach · Classify the file · Three checks · The approved move · Correct · Not quite · The habit is the course · You’re done  

Layers are not in the menu. Show 2.2 only if classifiedCorrect is True; 2.3 only if False — or restrict navigation to previously viewed.

### M3 Screen-reader names

Match the visible labels. No “click here.” Character alt: “Jordan, line manager” / “Alex, remote staff.”

---

## Hosting after publish

- Export **SCORM 1.2** from Storyline (and Rise if the trial offers it).
- HTML5 web export to **Netlify** (free) so the link survives when the trial dies.
- Upload the zip to **SCORM Cloud** as well.
- Do not rely on Review 360.

---

## Open questions that affect these modules

- Named ask-role beyond “line manager or data-protection lead” — [TO CONFIRM]
- Live job-aid URL on the close screens — only after the public PDF is the one you want linked
- Character photographs — none until Keith supplies them

---

## Add later

Keith adds rows and files here.

| Date | What | File |
|------|------|------|
| | | |
