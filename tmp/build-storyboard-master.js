const fs = require("fs");
const path = require("path");

const outDir = path.join(
  String.raw`C:\Users\keith\European-Corporate-Pivot`,
  "Articulate assets",
  "Storyboard Master",
);
const fontDir = path.join(String.raw`C:\Users\keith\European-Corporate-Pivot`, "public", "fonts");
const localFonts = path.join(outDir, "fonts");
fs.mkdirSync(localFonts, { recursive: true });
for (const name of [
  "open-sauce-one-latin-400-normal.woff2",
  "open-sauce-one-latin-500-normal.woff2",
  "open-sauce-one-latin-600-normal.woff2",
  "league-gothic-regular.woff2",
  "open-sauce.css",
  "league-gothic.css",
  "theme.css",
]) {
  fs.copyFileSync(path.join(fontDir, name), path.join(localFonts, name));
}

const INK = "#3B3B3B";
const PAPER = "#FFFFFF";
const DO = "#DBE0DC";
const DONT = "#E8DED5";
const STEP = "#E6E6E6";

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function nl(s) {
  return esc(s).replace(/\n/g, "<br />");
}

const css = `
  @font-face { font-family: "Open Sauce One"; font-weight: 400; src: url("fonts/open-sauce-one-latin-400-normal.woff2") format("woff2"); }
  @font-face { font-family: "Open Sauce One"; font-weight: 500; src: url("fonts/open-sauce-one-latin-500-normal.woff2") format("woff2"); }
  @font-face { font-family: "Open Sauce One"; font-weight: 600; src: url("fonts/open-sauce-one-latin-600-normal.woff2") format("woff2"); }
  @font-face { font-family: "League Gothic"; font-weight: 400; src: url("fonts/league-gothic-regular.woff2") format("woff2"); }
  @page { size: A4 landscape; margin: 10mm; }
  * { box-sizing: border-box; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { margin: 0; background: ${PAPER}; color: ${INK}; }
  .sheet, .sheet-portrait, .sheet-board {
    margin: 0 auto 10px;
    padding: 8mm 10mm 7mm;
    background: ${PAPER};
  }
  .sheet-portrait {
    width: 190mm;
    min-height: 277mm;
    page-break-after: always;
    page-break-inside: avoid;
    break-after: page;
    break-inside: avoid;
  }
  .sheet {
    width: 277mm;
    min-height: 190mm;
    page-break-after: always;
    page-break-inside: avoid;
    break-after: page;
    break-inside: avoid;
  }
  .sheet-board {
    width: 277mm;
    page-break-after: always;
  }
  .sheet-board:last-child { page-break-after: auto; }
  h1, h2, h3, p, li, td, th { margin: 0; }
  .block { page-break-inside: avoid; break-inside: avoid; }
  .block + .block { margin-top: 6mm; }
  .block-label { font-family: "League Gothic", Impact, sans-serif; letter-spacing: 0.14em; text-transform: uppercase; font-size: 16pt; font-weight: 400; padding: 4px 10px; background: ${STEP}; }
  .block-body { padding: 8px 0 10px; }
  .meta { width: 100%; border-collapse: collapse; table-layout: fixed; font-family: Calibri, "Segoe UI", sans-serif; font-size: 14pt; line-height: 1.35; }
  .meta col.label { width: 38mm; }
  .meta td { vertical-align: top; padding: 8pt 10pt; }
  .meta .k { width: 38mm; font-size: 16pt; font-weight: 700; padding-right: 10pt; background: ${STEP}; }
  .meta tr.gap td { padding: 0; height: 8pt; font-size: 4pt; line-height: 4pt; background: transparent; }
  .pair { width: 100%; border-collapse: collapse; table-layout: fixed; }
  .pair > tbody > tr > td { vertical-align: top; }
  .pair-gap { width: 10pt; font-size: 10pt; line-height: 10pt; padding: 0; }
  .fonts-block { width: 100%; border-collapse: collapse; }
  .fonts-block td { padding: 8pt 10pt; vertical-align: top; }
  .type-row { margin: 0 0 6px; text-align: left; page-break-inside: avoid; }
  .type-note { font-family: Calibri, "Segoe UI", sans-serif; font-size: 8.5pt; color: ${INK}; margin: 0 0 2px; }
  .doc-name { font-family: "League Gothic", Impact, sans-serif; font-size: 22px; letter-spacing: 0.12em; text-transform: uppercase; color: ${INK}; line-height: 1.1; }
  .main-title { font-family: "Open Sauce One", sans-serif; font-weight: 600; font-size: 28px; letter-spacing: -0.03em; color: ${INK}; line-height: 1.05; }
  .object-title { font-family: "League Gothic", Impact, sans-serif; font-size: 20px; color: ${INK}; line-height: 1.1; }
  .medium { font-family: "Open Sauce One", sans-serif; font-weight: 500; font-size: 14pt; color: ${INK}; line-height: 1.4; }
  .body-sample { font-family: "Open Sauce One", sans-serif; font-weight: 400; font-size: 11pt; line-height: 1.5; color: ${INK}; }
  .button-sample { font-family: "Open Sauce One", sans-serif; font-weight: 500; font-size: 11pt; color: ${INK}; display: inline-block; border: 2px solid ${INK}; padding: 4px 14px; }
  .caption-sample { font-family: "Open Sauce One", sans-serif; font-weight: 400; font-size: 9.5pt; color: ${INK}; }
  .swatch-table { width: 100%; border-collapse: collapse; font-family: Calibri, "Segoe UI", sans-serif; font-size: 14pt; }
  .swatch-table td { border: 1px solid ${INK}; vertical-align: middle; padding: 8pt 10pt; }
  .swatch-fill { width: 58%; height: 14mm; border: 1px solid ${INK}; padding: 8pt 10pt; }
  .swatch-code { padding: 8pt 10pt; background: ${PAPER}; }
  .swatch-code strong { display: block; font-size: 16pt; font-weight: 700; }
  .swatch-code code { font-family: Consolas, monospace; font-size: 14pt; letter-spacing: 0.04em; }
  .card-keep { break-inside: avoid; page-break-inside: avoid; }
  .card-title { font-family: Calibri, "Segoe UI", sans-serif; font-size: 16pt; font-weight: 700; margin: 0 0 8px; color: ${INK}; page-break-after: avoid; break-after: avoid; }
  .card { width: 100%; border-collapse: collapse; table-layout: fixed; font-family: Calibri, "Segoe UI", sans-serif; font-size: 14pt; line-height: 1.35; page-break-inside: avoid; break-inside: avoid; }
  .card col.label { width: 38mm; }
  .card th, .card td { border: 1px solid ${INK}; padding: 8pt 10pt; vertical-align: top; }
  .card th { background: ${STEP}; text-align: left; font-size: 16pt; font-weight: 700; width: 38mm; }
  .card td { font-size: 14pt; }
  .card .copy { white-space: pre-wrap; }
  .slide-gap { font-family: Calibri, "Segoe UI", sans-serif; font-size: 14pt; line-height: 14pt; height: 14pt; margin: 14pt 0 0; }
  .board { width: 100%; border-collapse: collapse; font-family: Calibri, "Segoe UI", sans-serif; font-size: 14pt; line-height: 1.35; }
  .board th, .board td { border: 1px solid ${INK}; padding: 7px 8px; vertical-align: top; }
  .board th { background: ${STEP}; text-align: left; font-size: 16pt; font-weight: 700; }
  .board thead { display: table-header-group; }
  .board tr { page-break-inside: avoid; break-inside: avoid; }
  .board .id { width: 8%; }
  .board .assets { width: 18%; }
  .board .format { width: 16%; }
  .board .copy { width: 30%; white-space: pre-wrap; }
  .board .ix { width: 28%; }
  .foot { font-family: Calibri, "Segoe UI", sans-serif; font-size: 14pt; text-align: center; margin-top: 8px; }
  @media print {
    body { background: ${PAPER}; }
    .sheet { margin: 0; min-height: 0; height: auto; }
  }
`;

function brandWritten(p, { romOnly }) {
  const align = p.alignment || "Left";
  return `
<article class="sheet-portrait">
  <div class="block">
    <div class="block-label" style="background:#E6E6E6">Block 01 · Brand guideline (written)</div>
    <div class="block-body">
      <table class="meta" width="100%" cellpadding="8" cellspacing="0">
        <colgroup><col class="label" style="width:38mm" /><col /></colgroup>
        <tr class="gap"><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td class="k" bgcolor="#E6E6E6">Company</td><td>${esc(p.company)}</td></tr>
        <tr><td class="k" bgcolor="#E6E6E6">Project</td><td>${esc(p.project)}</td></tr>
        <tr><td class="k" bgcolor="#E6E6E6">Aspect Ratio</td><td>16:9 HD (1920 x 1080)</td></tr>
        <tr><td class="k" bgcolor="#E6E6E6">Project Aim</td><td>${esc(p.function)}</td></tr>
        <tr><td class="k" bgcolor="#E6E6E6">Alignment</td><td>${esc(align)} (all learner-facing text)</td></tr>
        <tr><td class="k" bgcolor="#E6E6E6">Logo / artwork</td><td>Client supplies. Do not invent a mark.</td></tr>
        <tr><td class="k" bgcolor="#E6E6E6">Notes</td><td>${nl(p.notes)}</td></tr>
      </table>
    </div>
  </div>
  <p class="foot">${esc(p.company)} · ${esc(p.project)}${romOnly ? " · Brand Guideline ROM · page 1 of 2" : " · page 1"}</p>
</article>`;
}

function brandVisual(p, { romOnly }) {
  const align = p.alignment || "Left";
  const s = p.samples;
  return `
<article class="sheet">
  <table class="pair" width="100%" border="0" cellpadding="0" cellspacing="0">
    <tr>
      <td valign="top">
        <table class="fonts-block" width="100%" cellpadding="8" cellspacing="0">
          <tr><td bgcolor="#E6E6E6" class="block-label">Block 02 · Fonts (visual reference)</td></tr>
          <tr>
            <td style="text-align:${align.toLowerCase()}">
            <div class="type-row">
              <p class="type-note">Document name · League Gothic · 22px · ink · UPPER CASE</p>
              <p class="doc-name">${esc(s.document)}</p>
            </div>
            <div class="type-row">
              <p class="type-note">Main Header (H1) · Open Sauce One 600 · 28px · ink · Upper and lower case</p>
              <p class="main-title">${esc(s.main)}</p>
            </div>
            <div class="type-row">
              <p class="type-note">Object Title · League Gothic · 20px · ink · Upper and lower case</p>
              <p class="object-title">${esc(s.object)}</p>
            </div>
            <div class="type-row">
              <p class="type-note">Subhead · Open Sauce One 500 · 14pt · ink · Upper and lower case</p>
              <p class="medium">${esc(s.medium)}</p>
            </div>
            <div class="type-row">
              <p class="type-note">Body Text (body) · Open Sauce One 400 · 11pt · line-height 1.5 · ink · Upper and lower case</p>
              <p class="body-sample">Body Text (body)</p>
              <p class="body-sample">${esc(s.body)}</p>
            </div>
            <div class="type-row">
              <p class="type-note">Button · Open Sauce One 500 · 11pt · ink · Upper and lower case</p>
              <p><span class="button-sample">${esc(s.button)}</span></p>
            </div>
            <div class="type-row">
              <p class="type-note">Caption · Open Sauce One 400 · 9.5pt · ink · Upper and lower case</p>
              <p class="caption-sample">${esc(s.caption)}</p>
            </div>
            </td>
          </tr>
        </table>
      </td>
      <td class="pair-gap" width="10" valign="top" style="width:10pt;font-size:10pt;line-height:10pt;font-family:Calibri,sans-serif">&nbsp;</td>
      <td valign="top">
        <table class="swatch-table" width="100%" cellpadding="8" cellspacing="0">
          <tr><td colspan="2" bgcolor="#E6E6E6" class="block-label">Block 03 · Colour scale (picker target)</td></tr>
          <tr><td colspan="2" class="type-note">Solid fills. Open this page as PDF in a browser and sample the left column into Rise 360 or Storyline 360.</td></tr>
              ${p.swatches
                .map(
                  (sw) => `<tr>
                <td class="swatch-fill" bgcolor="${sw.hex}" style="background:${sw.hex};border:1px solid ${INK}">&nbsp;</td>
                <td class="swatch-code"><strong>${esc(sw.name)}</strong><code>${esc(sw.hex)}</code><span>${esc(sw.use)}</span></td>
              </tr>`,
                )
                .join("")}
        </table>
      </td>
    </tr>
  </table>
  <p class="foot">${esc(p.company)} · ${esc(p.project)}${romOnly ? " · Brand Guideline ROM · page 2 of 2" : " · page 2"}</p>
</article>`;
}

function slideTables(tool, rows) {
  return rows
    .map(
      (r) => `
<div class="card-keep">
<p class="card-title">${esc(tool)} · ${esc(r.id)}</p>
<table class="card" width="100%" cellpadding="8" cellspacing="0">
  <colgroup><col class="label" /><col /></colgroup>
  <tr><th bgcolor="#E6E6E6">Assets</th><td>${nl(r.assets)}</td></tr>
  <tr><th bgcolor="#E6E6E6">Format</th><td>${esc(r.format)}</td></tr>
  <tr><th bgcolor="#E6E6E6">Screen Copy</th><td class="copy">${nl(r.copy)}</td></tr>
  <tr><th bgcolor="#E6E6E6">Interactions</th><td>${nl(r.ix)}</td></tr>
</table>
</div>
<p class="slide-gap">&nbsp;</p>`,
    )
    .join("");
}

function wrap(title, inner) {
  const withBreaks = inner.replace(
    /<\/article>/g,
    '</article><br clear="all" style="page-break-before:always" />',
  );
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${esc(title)}</title>
  <style>${css}</style>
</head>
<body>
${withBreaks}
</body>
</html>`;
}

const ipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const filled = {
  guidelineTitle: "Brand guideline",
  company: "Portfolio sample",
  project: "Before you paste, classify.",
  function:
    "A 10–18 minute habit module so remote EU knowledge workers classify data before any paste, prompt, or file share. Same habit in Rise 360 (blocks) and Storyline 360 (slides).",
  alignment: "Left",
  type: {
    document: "League Gothic Regular, 22px, ink #3B3B3B, UPPER CASE, letter-spacing 0.12em. Module and document names only. Never a sentence.",
    main: "Open Sauce One 600, 32px, ink #3B3B3B, Upper and lower case. The one large line. Larger than every League Gothic line on the same screen.",
    object: "League Gothic Regular, 20px, ink #3B3B3B, Upper and lower case. Labels, card titles, buttons, 01 02 03. About one third larger than body.",
    medium: "Open Sauce One 500, 14pt, ink #3B3B3B, Upper and lower case. Short emphasis under a title. Not ExtraBold.",
    body: "Open Sauce One 400, 11pt, line-height 1.5, ink #3B3B3B, Upper and lower case. Sentences. One blank line under a block title. Weights 400 / 500 / 600 only.",
    button: "Open Sauce One 500, 11pt, ink #3B3B3B, Upper and lower case. Paper fill, 2 px ink outline.",
    caption: "Open Sauce One 400, 9.5pt, ink #3B3B3B, Upper and lower case. Image alt captions and tile labels.",
  },
  colours: {
    paper: "Paper #FFFFFF — page, empty field, slide fill",
    ink: "Ink #3B3B3B — titles, body, icons, player, buttons",
    do: "Do wash #DBE0DC — allowed path, correct, continue fill",
    dont: "Don’t wash #E8DED5 — stop path, incorrect, caution",
    step: "Step wash #E6E6E6 — 01 / 02 / 03 tiles, hover, table headers",
  },
  notes:
    "Not a named client. No logo. Line icons only; no stock photo. Named ask-role still unconfirmed; on-screen copy uses “line manager or data-protection lead.” Do not use Poppins, Nunito, Outfit, Syne, Montserrat, IBM Plex, teal, cream stationery, black #000, or a red danger panel. Public site chrome stays navy / Outfit / Syne; this sheet is for the learning artefacts only.",
  samples: {
    document: "DOCUMENT NAME",
    main: "Main Header (H1)",
    object: "Object Title",
    medium: "Subhead",
    body: ipsum,
    button: "Button",
    caption: "Caption",
  },
  swatches: [
    { name: "Paper", hex: PAPER, use: "Page and empty field" },
    { name: "Ink", hex: INK, use: "Titles, body, player" },
    { name: "Do wash", hex: DO, use: "Allowed / correct" },
    { name: "Don’t wash", hex: DONT, use: "Stop / incorrect" },
    { name: "Step wash", hex: STEP, use: "Steps / hover / headers" },
  ],
  prod: {
    tool: "Articulate 360 — Rise 360 (blocks) then Storyline 360 (scenes / slides / layers)",
    author: "Keith Byne",
    schedule: "Rise: weeks 6–7 (trial days 1–14). Storyline: weeks 8–9 (trial days 15–28). Do not open the trial before week 6.",
    hours: "[TO CONFIRM]",
    dates: "Script lock 30 Sep 2026. Trial start: week 6 day 1 (not started).",
    version: "1.0 — Storyboard Master filled example",
    export: "SCORM 1.2 zip + HTML5. Host on SCORM Cloud and Netlify. Do not use Review 360 as the public URL.",
  },
};

const paperBg = "Slide / block background: solid paper #FFFFFF.";

const riseRows = [
  {
    id: "P0",
    assets: `Rise player chrome. Ink on paper. Type: Open Sauce One.\n${paperBg}`,
    format: "Rise player chrome (every lesson)",
    copy: "Menu\nSafe AI and data handling\nPrevious\nNext\nContinue",
    ix: "Default Rise player. Do not rename Continue except where a row gives a different button label. Menu lists the seven lesson titles. Tab to Continue, Enter to advance. No auto-play audio.",
  },
  {
    id: "1.0",
    assets: "",
    format: "Lesson title (sidebar)",
    copy: "Welcome",
    ix: "Lesson label only. Not a heading on the canvas except in the menu.",
  },
  {
    id: "1.1",
    assets: paperBg,
    format: "Cover / title plus body",
    copy: "Before you paste, classify.\n\nRemote work is fast. Public AI tools and personal drives are faster still. This module is not a policy lecture. It is the 30-second habit your team needs before client text, staff data, or unpublished files leave an approved system.",
    ix: "No click on the text. Heading is the cover title. Body is one paragraph under it.",
  },
  {
    id: "1.2",
    assets: "Rise default Continue button. Ink on paper.",
    format: "Continue button",
    copy: "Start with a live decision",
    ix: "Primary button. Goes to lesson 2. Only Continue label that is not the word Continue.",
  },
  {
    id: "2.0",
    assets: "",
    format: "Lesson title (sidebar)",
    copy: "Classify the data",
    ix: "Menu label. Ungraded.",
  },
  {
    id: "2.1",
    assets: paperBg,
    format: "Scenario / decision — stem (title plus body)",
    copy: "A colleague asks you to “just drop this into ChatGPT and tidy it.”\n\nThe file is a customer list with emails and contract values. What is it?",
    ix: "Read only. Then two choices. Do not score. Choice B is the distractor. The list is personal and commercial data.",
  },
  {
    id: "2.2",
    assets: "Two Rise scenario buttons.",
    format: "Scenario / decision — two buttons",
    copy: "Confidential or personal data — I must not paste it into a public AI tool.\n\nHarmless working text — public AI is fine.",
    ix: "Single choice. First button → lesson 3 (Branch A). Second button → lesson 4 (Branch B). Buttons are the full sentences. After a click, Rise jumps; do not show both branches.",
  },
  {
    id: "3.0",
    assets: "",
    format: "Lesson title (sidebar)",
    copy: "Personal and commercial data",
    ix: "Correct path only. Do wash on the block if Rise allows a coloured block.",
  },
  {
    id: "3.1",
    assets: `Block fill: don’t wash #E8DED5.\n${paperBg}`,
    format: "Title plus body (correct path)",
    copy: "Stop. This is personal and commercial data.\n\nEmails and contract values are personal data and business-confidential. Public AI tools may store prompts. Your approved path is: redacted example, internal approved tool, or no AI.",
    ix: "No extra buttons on the text.",
  },
  {
    id: "3.2",
    assets: "Rise Continue button.",
    format: "Continue button",
    copy: "See the red lines",
    ix: "Goes to lesson 5 (rejoin). Skip lesson 4.",
  },
  {
    id: "4.0",
    assets: "",
    format: "Lesson title (sidebar)",
    copy: "That list is not harmless",
    ix: "Incorrect path. Coach, do not fail the module.",
  },
  {
    id: "4.1",
    assets: "Block fill: don’t wash #E8DED5.",
    format: "Title plus body (incorrect path, coaching)",
    copy: "That list is not harmless.\n\nNames, emails, and contract values are personal data under GDPR and confidential to the company. Public AI is the wrong path. You have not failed the module. You now take the same red-line screen as everyone else.",
    ix: "No score. No “try again.” Then the same rejoin as Branch A.",
  },
  {
    id: "4.2",
    assets: "Rise Continue button.",
    format: "Continue button",
    copy: "See the red lines",
    ix: "Goes to lesson 5 (rejoin).",
  },
  {
    id: "5.0",
    assets: "",
    format: "Lesson title (sidebar)",
    copy: "Three checks",
    ix: "Both branches rejoin here.",
  },
  {
    id: "5.1",
    assets: "Three process tiles, equal width, fill step wash #E6E6E6.\nNumerals 01 02 03 in League Gothic.\nCaptions in Open Sauce One 400.",
    format: "Title plus numbered process (01 02 03 on step tiles)",
    copy: "Three checks before any AI or file share\n\n01\nWhat data is this? (public / internal / personal / customer)\n\n02\nIs this tool on the approved list?\n\n03\nIf I am unsure, I do not paste — I ask my line manager or data-protection lead.",
    ix: "If Process block: each number expands the same sentence; no extra words.",
  },
  {
    id: "5.2",
    assets: "Rise Continue button.",
    format: "Continue button",
    copy: "Try one scenario",
    ix: "Goes to lesson 6.",
  },
  {
    id: "6.0",
    assets: "",
    format: "Lesson title (sidebar)",
    copy: "One scenario",
    ix: "Only scored lesson. Leave Rise retry default.",
  },
  {
    id: "6.1",
    assets: paperBg,
    format: "Knowledge check — stem (title plus body)",
    copy: "You are drafting a process note. You want AI to improve the English. The note includes one customer email address.",
    ix: "Read the stem. Then three answers. One correct.",
  },
  {
    id: "6.2",
    assets: "Rise multiple-choice control.",
    format: "Knowledge check — multiple choice, one correct",
    copy: "Remove the email (or replace with a fake), then use the approved tool.\n\nPaste the whole note into a public tool because it is “just one email.”\n\nPut the file on a personal Google Drive so a contractor can edit it overnight.",
    ix: "First option is correct. Shuffle off. Keep this order.",
  },
  {
    id: "6.3",
    assets: "Rise Submit button.",
    format: "Knowledge check — Submit button",
    copy: "Submit",
    ix: "Reveals feedback. Do not auto-advance.",
  },
  {
    id: "6.4",
    assets: "Feedback panel fill: do wash #DBE0DC. Text ink.",
    format: "Feedback layer — correct (do wash)",
    copy: "Correct\n\nRedact first, then use an approved tool.",
    ix: "Only if the first option was submitted. Then lesson 7.",
  },
  {
    id: "6.5",
    assets: "Feedback panel fill: don’t wash #E8DED5. Text ink.",
    format: "Feedback layer — incorrect (don’t wash)",
    copy: "Not quite\n\nOne email is still personal data. Personal drives are not the contractor workaround.",
    ix: "Same feedback for both wrong answers. Continue to lesson 7. Do not lock the close.",
  },
  {
    id: "6.6",
    assets: "Rise Continue button.",
    format: "Continue after feedback",
    copy: "Continue",
    ix: "Goes to lesson 7.",
  },
  {
    id: "7.0",
    assets: "",
    format: "Lesson title (sidebar)",
    copy: "The habit is the course",
    ix: "Close. Not scored.",
  },
  {
    id: "7.1",
    assets: paperBg,
    format: "Title plus body",
    copy: "The habit is the course.\n\nClassify → approved tool or no AI → ask if unsure. Take the one-page job aid and keep it next to your desktop.",
    ix: "No quiz. Omit the link if the PDF URL is not live; keep the sentence.",
  },
  {
    id: "7.2",
    assets: "Rise default completion chrome.",
    format: "End / complete",
    copy: "You’re all done.\nDownload your certificate\nRestart this course",
    ix: "Leave Rise defaults. SCORM complete when this lesson is reached after the scored check.",
  },
];

const slRows = [
  {
    id: "1.0",
    assets: "Storyline player chrome: Menu, Resources, Exit, Prev, Next. Ink on paper.",
    format: "Player chrome (all slides)",
    copy: "Menu\nResources\nExit\nPrev\nNext",
    ix: "Menu titles match M2. Resources empty until the job-aid PDF is attached. Next disabled until the required click. Prev allowed except on 1.1.",
  },
  {
    id: "1.1",
    assets: `${paperBg}\nStart button: rectangle, paper fill, 2 px ink outline.`,
    format: "Title slide (welcome)",
    copy: "Before you paste, classify.\n\nA 12-minute conversation. Same habit as the job aid.\n\nStart",
    ix: "Start jumps to 1.2. Hide player Next. Animation ≤ 0.4s. Start is a button.",
  },
  {
    id: "1.2",
    assets: paperBg,
    format: "Title plus body",
    copy: "How this works\n\nYou follow Jordan (line manager) and Alex (remote staff). You choose what Jordan says. Wrong choices are coached. One answer is scored at the end.\n\nContinue",
    ix: "Continue → 2.1. No other buttons.",
  },
  {
    id: "2.1",
    assets: `${paperBg}\nCaption: Alex, remote staff.\nTwo choice buttons.`,
    format: "Conversation — caption plus body (Alex speaks)",
    copy: "Alex\n\nI’ll just drop this into ChatGPT and tidy the English. It’s a customer list. Emails and contract values. Should be quick.\n\nWhat should Jordan say?\n\nDon’t paste that. Name the data first.\n\nPublic AI is fine if you delete the chat afterwards.",
    ix: "First button → 2.2, classifiedCorrect = True. Second → 2.3, False. Next disabled until a choice. Caption “Alex” is not a button.",
  },
  {
    id: "2.2",
    assets: "Captions: Jordan, line manager, and Alex, remote staff.\nReply bar fill: do wash #DBE0DC.",
    format: "Conversation — caption plus body, do wash on the reply bar",
    copy: "Jordan\n\nDon’t paste that. Emails and contract values are personal data and commercial data. Public tools may keep prompts. Classify first.\n\nAlex\n\nRight. So what do I do with it?\n\nContinue",
    ix: "Only if classifiedCorrect is True. Continue → 2.4.",
  },
  {
    id: "2.3",
    assets: "Captions: Alex, remote staff, and Jordan, line manager.\nReply bar fill: don’t wash #E8DED5.",
    format: "Conversation — caption plus body, don’t wash on the reply bar",
    copy: "Alex\n\nI’ll delete the chat. Nobody will see it.\n\nJordan\n\nDeleting the chat does not make the paste safe. Names, emails, and contract values are personal data under GDPR and confidential to the company. You have not failed. We classify it now, same as everyone else.\n\nContinue",
    ix: "Only if classifiedCorrect is False. Continue → 2.4. No fail screen.",
  },
  {
    id: "2.4",
    assets: `${paperBg}\nFour type buttons: Public, Internal, Personal, Customer.\nSubmit button.\nStates: Normal, Hover (step wash), Selected (do wash), Visited (ink underline), Disabled (ink 50%).`,
    format: "Title plus four choice buttons (classify)",
    copy: "What data is this?\n\nPublic\nInternal\nPersonal\nCustomer\n\nSubmit",
    ix: "One selection. Personal and Customer both acceptable. Public and Internal wrong. Submit: Personal or Customer → classifiedCorrect True + layer L-right. Else False + L-wrong. Submit disabled until one type.",
  },
  {
    id: "2.4 L-right",
    assets: "Layer panel fill: do wash #DBE0DC. Dim on the base slide.",
    format: "Feedback layer — correct (do wash)",
    copy: "Correct\n\nThis list is personal data and customer data. It is not public. It is not merely internal working text.\n\nContinue",
    ix: "Continue hides the layer and jumps to 2.5.",
  },
  {
    id: "2.4 L-wrong",
    assets: "Layer panel fill: don’t wash #E8DED5. Dim base slide.",
    format: "Feedback layer — incorrect (don’t wash)",
    copy: "Not public. Not merely internal.\n\nEmails and contract values are personal data and customer data. Classify it as that, then choose the tool.\n\nContinue",
    ix: "Continue → 2.5. Same destination as correct. Do not loop unless Prev.",
  },
  {
    id: "2.5",
    assets: "Three rectangles, equal, fill step wash #E6E6E6.\nNumerals 01 02 03 in League Gothic.",
    format: "Title plus three step tiles (01 02 03)",
    copy: "Three checks before any AI or file share\n\n01\nWhat data is this? (public / internal / personal / customer)\n\n02\nIs this tool on the approved list?\n\n03\nIf I am unsure, I do not paste — I ask my line manager or data-protection lead.\n\nContinue",
    ix: "Optional selected state, same words. Continue → 2.6. Clicking tile 03 sets askedIfUnsure = True.",
  },
  {
    id: "2.6",
    assets: "Captions: Alex, remote staff, and Jordan, line manager.\nThree choice buttons.",
    format: "Conversation — caption plus three choices (scored)",
    copy: "Alex\n\nOK. I still want better English. What is the approved move?\n\nJordan — choose one\n\nStrip the emails (or use a fake), then use the approved tool.\n\nPaste it. It’s only one list.\n\nPut it on my personal Drive so a contractor can edit overnight.",
    ix: "First: ScorePercent = 100 → 2.7. Second or third: 0 → 2.8. Same three choices even if classifiedCorrect was False.",
  },
  {
    id: "2.7",
    assets: "Panel fill: do wash #DBE0DC.",
    format: "Title plus body (correct close of conversation, do wash)",
    copy: "Correct\n\nRedact first, then use an approved tool. That is the whole habit.\n\nContinue",
    ix: "Continue → 3.1.",
  },
  {
    id: "2.8",
    assets: "Panel fill: don’t wash #E8DED5.",
    format: "Title plus body (incorrect close of conversation, don’t wash)",
    copy: "Not quite\n\nOne list with emails is still personal data. Personal drives are not the contractor workaround. Redact first, or do not use AI.\n\nContinue",
    ix: "Same slide for both wrong answers. Continue → 3.1. Score stays 0.",
  },
  {
    id: "3.1",
    assets: paperBg,
    format: "Title plus body (close)",
    copy: "The habit is the course\n\nClassify → approved tool or no AI → ask if unsure.\n\nTake the one-page job aid and keep it next to your desktop.\n\nFinish",
    ix: "Same close whether askedIfUnsure is True or False. Finish completes the course and goes to 3.2.",
  },
  {
    id: "3.2",
    assets: "Results slide. Score variable: %ScorePercent%.",
    format: "Results / complete",
    copy: "You’re done.\n\nYour score: %ScorePercent%%\n\nReview\nExit",
    ix: "Always success (habit module; score is shown, not a pass mark). Review → 2.6. Exit closes the player. SCORM 1.2 complete when 3.1 Finish is clicked.",
  },
  {
    id: "M1",
    assets: "Button fills: paper (Normal), step wash (Hover), do wash (Selected), ink at 50% (Disabled), 1 px ink underline (Visited).",
    format: "Button states (all choice buttons)",
    copy: "Normal: ink text on paper\nHover: ink text on step #E6E6E6\nSelected: ink text on do #DBE0DC\nDisabled: ink at 50%\nVisited: same as Normal with a 1 px ink underline",
    ix: "Apply to every choice button.",
  },
  {
    id: "M2",
    assets: "Menu labels.",
    format: "Menu titles (exact)",
    copy: "Welcome\nHow this works\nAlex asks\nJordan — don’t paste\nJordan — coach\nClassify the file\nThree checks\nThe approved move\nCorrect\nNot quite\nThe habit is the course\nYou’re done",
    ix: "Show 2.2 only if classifiedCorrect is True; 2.3 only if False — or restrict navigation to previously viewed.",
  },
  {
    id: "M3",
    assets: "Screen-reader names, matching the visible labels.",
    format: "Accessibility names (not visible; screen reader)",
    copy: "Start\nContinue\nDon’t paste that. Name the data first.\nPublic AI is fine if you delete the chat afterwards.\nPublic\nInternal\nPersonal\nCustomer\nSubmit\nStrip the emails (or use a fake), then use the approved tool.\nPaste it. It’s only one list.\nPut it on my personal Drive so a contractor can edit overnight.\nFinish\nReview\nExit",
    ix: "No “click here.” Character alt: Jordan, line manager / Alex, remote staff.",
  },
];

const blank = {
  ...filled,
  guidelineTitle: "Brand guideline",
  company: "[Company name]",
  project: "[Project name]",
  function: "[Short description of what this project must make people able to do.]",
  notes: "[Paste definitions from meeting notes or the client’s brand sheet. Faces, sizes, casing, alignment, colours, what not to use.]",
  samples: {
    document: "DOCUMENT NAME",
    main: "Main Header (H1)",
    object: "Object Title",
    medium: "Subhead",
    body: ipsum,
    button: "Button",
    caption: "Caption",
  },
  type: {
    document: "[Face, size, colour, casing]",
    main: "[Face, size, colour, casing]",
    object: "[Face, size, colour, casing]",
    medium: "[Face, size, colour, casing]",
    body: "[Face, size, colour, casing]",
    button: "[Face, size, colour, casing]",
    caption: "[Face, size, colour, casing]",
  },
  colours: {
    paper: "[Name] [#HEX] — [use]",
    ink: "[Name] [#HEX] — [use]",
    do: "[Name] [#HEX] — [use]",
    dont: "[Name] [#HEX] — [use]",
    step: "[Name] [#HEX] — [use]",
  },
  swatches: [
    { name: "[Paper]", hex: PAPER, use: "[use]" },
    { name: "[Ink]", hex: INK, use: "[use]" },
    { name: "[Do / accent]", hex: DO, use: "[use]" },
    { name: "[Don’t / caution]", hex: DONT, use: "[use]" },
    { name: "[Step / neutral]", hex: STEP, use: "[use]" },
  ],
  prod: {
    tool: "[Rise 360 / Storyline 360 / other — use that tool’s word: block, scene, slide, layer]",
    author: "[Name]",
    schedule: "[Stages and dates]",
    hours: "[Hours]",
    dates: "[Start] — [Due]",
    version: "[0.1 draft]",
    export: "[SCORM 1.2 / HTML5 / host]",
  },
};

const blankRows = [
  {
    id: "[1.1]",
    assets: "[Only assets this slide uses.]",
    format: "[Welcome / title plus body / process / knowledge check / conversation / layer / …]",
    copy: "[Every word on screen, including buttons]",
    ix: "[Clicks, jumps, variables, states, score]",
  },
  {
    id: "[1.2]",
    assets: "[ ]",
    format: "[ ]",
    copy: "[ ]",
    ix: "[ ]",
  },
];

const brandOnly = wrap(
  "Brand Guideline ROM — Portfolio sample_Before you paste classify",
  brandWritten(filled, { romOnly: true }) + '<a name="LANDSCAPE"></a>' + brandVisual(filled, { romOnly: true }),
);

const filledDoc = wrap(
  "Storyboard — Portfolio sample_Before you paste classify",
  brandWritten(filled, { romOnly: false }) +
    '<a name="LANDSCAPE"></a>' +
    brandVisual(filled, { romOnly: false }) +
    `<article class="sheet-board">
      <p class="card-title">Rise 360 — blocks</p>
      ${slideTables("Rise 360", riseRows)}
      <p class="foot">${esc(filled.company)} · ${esc(filled.project)}</p>
    </article>
    <article class="sheet-board">
      <p class="card-title">Storyline 360 — scenes, slides, layers</p>
      ${slideTables("Storyline 360", slRows)}
      <p class="foot">${esc(filled.company)} · ${esc(filled.project)}</p>
    </article>`,
);

const blankDoc = wrap(
  "Storyboard Master — blank",
  brandWritten(blank, { romOnly: false }) +
    '<a name="LANDSCAPE"></a>' +
    brandVisual(blank, { romOnly: false }) +
    `<article class="sheet-board">
      <p class="card-title">[Rise 360 blocks / Storyline 360 scenes and slides]</p>
      ${slideTables("[Tool]", blankRows)}
      <p class="foot">${esc(blank.company)} · ${esc(blank.project)}</p>
    </article>`,
);

fs.writeFileSync(path.join(outDir, "Portfolio sample_Before you paste classify.html"), filledDoc);
fs.writeFileSync(path.join(outDir, "Portfolio sample_Before you paste classify - brand.html"), brandOnly);
fs.writeFileSync(path.join(outDir, "Storyboard Master - blank.html"), blankDoc);
const portfolioHtml = filledDoc.replaceAll('url("fonts/', 'url("/fonts/');
const portfolioPath = path.join(
  String.raw`C:\Users\keith\European-Corporate-Pivot`,
  "public",
  "work",
  "safe-ai",
  "storyboard.html",
);
fs.writeFileSync(portfolioPath, portfolioHtml);
console.log("Wrote HTML to " + outDir);
console.log("Wrote portfolio copy to " + portfolioPath);
