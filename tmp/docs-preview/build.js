const fs = require("fs");
const path = require("path");

const root = String.raw`C:\Users\keith\European-Corporate-Pivot`;
const outDir = path.join(root, "tmp", "docs-preview");

const docs = [
  {
    id: "action",
    menu: "Action map",
    title: "Action map",
    blurb: "Who, what is going wrong, what they must do, how we would notice.",
    src: "portfolio/safe-ai-action-map.md",
  },
  {
    id: "theme",
    menu: "Theme",
    title: "Visual theme",
    blurb: "Locked look from the Canva job aid. Use this on later media.",
    src: "portfolio/visual-theme.md",
  },
  {
    id: "brand",
    menu: "Brand sheet",
    title: "Module visual system",
    blurb: "Printable faces, colours, and Rise / Storyline paste values.",
    htmlSrc: "public/work/theme/brand-guideline.html",
  },
  {
    id: "plan",
    menu: "Plan",
    title: "Portfolio plan",
    blurb: "Overview, glossary, and the staged order of work. Start here.",
    src: "portfolio-plan.md",
  },
  {
    id: "weeks",
    menu: "Weeks",
    title: "12-week checklist",
    blurb: "The same stages as a week-by-week list.",
    src: "three-month-course.md",
  },
  {
    id: "job-aid",
    menu: "Cheat sheet",
    title: "Cheat sheet + slides script",
    blurb: "Case A storyboard, in plain English.",
    src: "portfolio/job-aid-safe-ai/storyboard.md",
  },
  {
    id: "page",
    menu: "One-pager",
    title: "One-page cheat sheet (prototype)",
    blurb: "Printable A4. Ctrl+P to save a PDF. Remake in Canva later to unlock the CV line.",
    htmlSrc: "portfolio/job-aid-safe-ai/page.html",
  },
  {
    id: "canva",
    menu: "Canva build",
    title: "Canva build sheet",
    blurb: "Clicks, fonts, colours, and paste blocks for the A4 one-pager.",
    htmlSrc: "portfolio/job-aid-safe-ai/canva-setup.html",
  },
  {
    id: "deck",
    menu: "8 slides",
    title: "Eight-slide talk (prototype)",
    blurb: "Working deck with speaker notes. Remake in PowerPoint later to unlock the CV line.",
    htmlSrc: "portfolio/job-aid-safe-ai/deck.html",
  },
  {
    id: "present",
    menu: "Presenter view",
    title: "Presenter view and notes",
    blurb: "How to put the “You say” lines in Notes and give the eight-slide talk.",
    htmlSrc: "portfolio/job-aid-safe-ai/presenter-view.html",
  },
  {
    id: "rise",
    menu: "Rise",
    title: "Rise module script",
    blurb: "Case B storyboard for the 10–15 minute module.",
    src: "portfolio/rise-safe-ai/storyboard.md",
  },
  {
    id: "articulate",
    menu: "Articulate assets",
    title: "Articulate assets",
    blurb: "Trial clock, theme paste, Rise and Storyline storyboards. Drop new files in that folder.",
    src: "Articulate assets/Articulate assets.md",
  },
  {
    id: "rise-sb",
    menu: "Rise table",
    title: "Rise 360 production storyboard",
    blurb: "Every on-screen word, interactions, block format.",
    htmlSrc: "Articulate assets/rise-storyboard.html",
  },
  {
    id: "storyline-sb",
    menu: "Storyline table",
    title: "Storyline 360 production storyboard",
    blurb: "Every on-screen word, interactions, slide format.",
    htmlSrc: "Articulate assets/storyline-storyboard.html",
  },
  {
    id: "sb-how",
    menu: "Storyboard Master",
    title: "Storyboard Master",
    blurb: "Page-one brand sheet, then production tables with assets first. Use for every project.",
    src: "Articulate assets/Storyboard Master/how-to.md",
  },
  {
    id: "sb-filled",
    menu: "Master example",
    title: "Storyboard Master — filled example",
    blurb: "Safe AI. Page one is the brand guideline. Then Rise and Storyline tables.",
    htmlSrc: "Articulate assets/Storyboard Master/Portfolio sample_Before you paste classify.html",
  },
  {
    id: "sb-brand",
    menu: "Brand ROM",
    title: "Brand Guideline ROM",
    blurb: "Page one only. Open in a browser to pick colours into Rise or Storyline.",
    htmlSrc: "Articulate assets/Storyboard Master/Portfolio sample_Before you paste classify - brand.html",
  },
  {
    id: "cv",
    menu: "CV (branded)",
    title: "Branded curriculum vitae",
    blurb: "Same navy, Syne, and Outfit as the public site. Send cv.md to Applicant Tracking Systems.",
    htmlSrc: "public/work/cv/keith-byne-cv.html",
  },
  {
    id: "tools",
    menu: "Tools",
    title: "Tools (free vs trial)",
    blurb: "When to open each account. Articulate not before week 6.",
    src: "platforms.md",
  },
  {
    id: "outreach",
    menu: "Outreach",
    title: "After the portfolio: get in front of the right person",
    blurb: "Be findable, then write to named people. Not a mail blast.",
    src: "outreach-plan.md",
  },
  {
    id: "industry",
    menu: "How they hire",
    title: "How this industry works in Europe",
    blurb: "Remote vs hybrid, employed vs freelance, what they pay, how to package.",
    src: "how-industry-works.md",
  },
  {
    id: "skills",
    menu: "Skills log",
    title: "CV skills log",
    blurb: "A skill goes on the CV only after a public file exists.",
    src: "cv-skills-log.md",
  },
];

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(s) {
  return escapeHtml(s)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function mdToHtml(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim().startsWith("```")) {
      const buf = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        buf.push(lines[i]);
        i++;
      }
      i++;
      out.push("<pre><code>" + escapeHtml(buf.join("\n")) + "</code></pre>");
      continue;
    }
    if (line.startsWith("|") && i + 1 < lines.length && /^\|?\s*:?-/.test(lines[i + 1])) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        rows.push(
          lines[i]
            .split("|")
            .slice(1, -1)
            .map((c) => c.trim()),
        );
        i++;
      }
      const head = rows.shift();
      rows.shift();
      out.push("<table><thead><tr>" + head.map((c) => "<th>" + inline(c) + "</th>").join("") + "</tr></thead><tbody>");
      for (const r of rows) {
        out.push("<tr>" + r.map((c) => "<td>" + inline(c) + "</td>").join("") + "</tr>");
      }
      out.push("</tbody></table>");
      continue;
    }
    if (line.trim() === "---") {
      out.push("<hr />");
      i++;
      continue;
    }
    if (line.startsWith("#### ")) {
      out.push("<h4>" + inline(line.slice(5)) + "</h4>");
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      out.push("<h3>" + inline(line.slice(4)) + "</h3>");
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      out.push("<h2>" + inline(line.slice(3)) + "</h2>");
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      out.push("<h1>" + inline(line.slice(2)) + "</h1>");
      i++;
      continue;
    }
    if (/^\d+\.\s/.test(line)) {
      out.push("<ol>");
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        out.push("<li>" + inline(lines[i].replace(/^\d+\.\s/, "")) + "</li>");
        i++;
      }
      out.push("</ol>");
      continue;
    }
    if (line.startsWith("- ") || line.startsWith("* ")) {
      out.push("<ul>");
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
        out.push("<li>" + inline(lines[i].slice(2)) + "</li>");
        i++;
      }
      out.push("</ul>");
      continue;
    }
    if (line.startsWith("> ")) {
      const buf = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        buf.push(lines[i].slice(2));
        i++;
      }
      out.push("<blockquote><p>" + buf.map(inline).join(" ") + "</p></blockquote>");
      continue;
    }
    if (line.trim() === "") {
      i++;
      continue;
    }
    const para = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !/^(#{1,4} |---|[-*|]|\d+\. |> |```)/.test(lines[i])
    ) {
      para.push(lines[i]);
      i++;
    }
    out.push("<p>" + para.map(inline).join(" ") + "</p>");
  }
  return out.join("\n");
}

const css = `* { box-sizing: border-box; }
body { margin: 0; background: #f4f1ea; color: #1c1917; font: 18px/1.55 Georgia, "Times New Roman", serif; }
.layout { display: flex; min-height: 100vh; align-items: stretch; }
nav.menu { width: 15rem; flex-shrink: 0; background: #1c1917; color: #f4f1ea; padding: 1.25rem 0 3rem; position: sticky; top: 0; height: 100vh; overflow: auto; }
nav.menu .brand { display: block; padding: 0.35rem 1.2rem 1rem; font: 650 0.95rem/1.3 system-ui, sans-serif; color: #fff; text-decoration: none; }
nav.menu p { margin: 0 1.2rem 0.6rem; font: 12px/1.3 system-ui, sans-serif; letter-spacing: 0.06em; text-transform: uppercase; color: #a8a29e; }
nav.menu a.item { display: block; padding: 0.55rem 1.2rem; color: #e7e0d4; text-decoration: none; font: 15px/1.3 system-ui, sans-serif; border-left: 3px solid transparent; }
nav.menu a.item:hover { background: #292524; }
nav.menu a.item.here { background: #292524; border-left-color: #f4f1ea; color: #fff; }
.page { flex: 1; min-width: 0; }
main { max-width: 44rem; margin: 0 auto; padding: 2rem 1.5rem 5rem; }
h1 { font-size: 2.05rem; font-weight: 400; line-height: 1.2; margin: 0 0 1rem; }
h2 { margin-top: 2.4rem; font-size: 1.35rem; }
h3 { margin-top: 1.6rem; font-size: 1.12rem; }
h4 { margin-top: 1.2rem; font-size: 1rem; }
p, li { max-width: 42rem; }
table { border-collapse: collapse; width: 100%; margin: 1rem 0 1.5rem; font-size: 0.92rem; background: #fff; }
th, td { border: 1px solid #d6d0c4; padding: 0.5rem 0.65rem; text-align: left; vertical-align: top; }
th { background: #ece6da; }
hr { border: 0; border-top: 1px solid #d6d0c4; margin: 2.2rem 0; }
code { font-family: ui-monospace, Consolas, monospace; font-size: 0.88em; background: #ece6da; padding: 0.05em 0.3em; }
pre { background: #1c1917; color: #f4f1ea; padding: 1rem 1.1rem; overflow: auto; font-size: 0.88rem; }
pre code { background: none; color: inherit; padding: 0; }
blockquote { margin: 1rem 0; padding: 0.2rem 0 0.2rem 1rem; border-left: 3px solid #1c1917; }
.cards { display: grid; gap: 1rem; margin-top: 1.5rem; }
.card { display: block; background: #fff; border: 1px solid #d6d0c4; padding: 1.1rem 1.2rem; text-decoration: none; color: inherit; }
.card h2 { margin: 0 0 0.35rem; font-size: 1.2rem; }
.card p { margin: 0; color: #444; }
.pager { display: flex; justify-content: space-between; gap: 1rem; margin-top: 3rem; padding-top: 1.25rem; border-top: 1px solid #d6d0c4; font: 15px/1.3 system-ui, sans-serif; }
.pager a { color: #1c1917; }
@media (max-width: 800px) {
  .layout { display: block; }
  nav.menu { width: auto; height: auto; position: sticky; top: 0; z-index: 2; padding: 0.6rem 0 0.75rem; }
  nav.menu p { display: none; }
  nav.menu a.item { display: inline-block; border-left: 0; padding: 0.4rem 0.75rem; }
}
@media print {
  nav.menu, .pager { display: none; }
  body { background: #fff; }
  a { color: inherit; text-decoration: none; }
}`;

function nav(active) {
  const items = [
    `<a class="brand" href="index.html">Portfolio documents</a>`,
    `<p>Jump to</p>`,
    `<a class="item${active === "index" ? " here" : ""}" href="index.html">Home</a>`,
  ].concat(
    docs.map((d) => {
      const cls = d.id === active ? " here" : "";
      return `<a class="item${cls}" href="${d.id}.html">${escapeHtml(d.menu)}</a>`;
    }),
  );
  items.push(
    `<p>Host later</p>`,
    `<a class="item" href="https://cloud.scorm.com/" target="_blank" rel="noreferrer">SCORM Cloud ↗</a>`,
  );
  return `<nav class="menu" aria-label="Documents">${items.join("\n")}</nav>`;
}

function injectJump(html, active) {
  const css = `
    nav.jump { position: sticky; top: 0; z-index: 3; display: flex; flex-wrap: wrap; gap: 0.35rem 0.9rem; align-items: center; background: #1c1917; color: #f4f1ea; padding: 0.55rem 1rem; font: 14px/1.3 system-ui, sans-serif; }
    nav.jump a { color: #e7e0d4; text-decoration: none; }
    nav.jump a.here { color: #fff; font-weight: 650; }
    @media print { nav.jump { display: none; } }
  `;
  const bar = `<nav class="jump" aria-label="Documents">
    <a href="index.html">Documents</a>
    <a href="action.html">Action map</a>
    <a class="${active === "page" ? "here" : ""}" href="page.html">One-pager</a>
    <a class="${active === "canva" ? "here" : ""}" href="canva.html">Canva build</a>
    <a class="${active === "deck" ? "here" : ""}" href="deck.html">8 slides</a>
    <a class="${active === "present" ? "here" : ""}" href="present.html">Presenter view</a>
    <a href="https://cloud.scorm.com/" target="_blank" rel="noreferrer">SCORM Cloud ↗</a>
  </nav>`;
  return html
    .replace("</head>", `<style>${css}</style>\n</head>`)
    .replace("<body>", `<body>\n${bar}`);
}

function pager(active) {
  const ids = docs.map((d) => d.id);
  const i = ids.indexOf(active);
  if (i < 0) return "";
  const prev = i > 0 ? docs[i - 1] : null;
  const next = i < docs.length - 1 ? docs[i + 1] : null;
  const left = prev ? `<a href="${prev.id}.html">← ${escapeHtml(prev.menu)}</a>` : "<span></span>";
  const right = next ? `<a href="${next.id}.html">${escapeHtml(next.menu)} →</a>` : "<span></span>";
  return `<nav class="pager">${left}${right}</nav>`;
}

function page(title, body, active) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
<div class="layout">
${nav(active)}
<div class="page">
<main>
${body}
${pager(active)}
</main>
</div>
</div>
</body>
</html>
`;
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "styles.css"), css);

const fontsSrc = path.join(root, "public", "fonts");
const fontsOut = path.join(outDir, "fonts");
fs.mkdirSync(fontsOut, { recursive: true });
for (const name of fs.readdirSync(fontsSrc)) {
  fs.copyFileSync(path.join(fontsSrc, name), path.join(fontsOut, name));
}

const indexBody = `<h1>Formatted documents</h1>
<p>These are local pages for reading. They are not on the public site. Print from the browser if you want a paper copy (Ctrl+P).</p>
<div class="cards">
${docs
  .map(
    (d) =>
      `<a class="card" href="${d.id}.html"><h2>${escapeHtml(d.title)}</h2><p>${escapeHtml(d.blurb)}</p></a>`,
  )
  .join("\n")}
<a class="card" href="https://cloud.scorm.com/" target="_blank" rel="noreferrer"><h2>SCORM Cloud</h2><p>Free Trial already open. No calendar expiry. Leave idle until the Week 5 dummy upload. Do not add a card.</p></a>
</div>`;

fs.writeFileSync(path.join(outDir, "index.html"), page("Portfolio documents", indexBody, "index"));

for (const d of docs) {
  if (d.htmlSrc) {
    const raw = fs.readFileSync(path.join(root, d.htmlSrc), "utf8");
    fs.writeFileSync(path.join(outDir, d.id + ".html"), injectJump(raw, d.id));
    if (d.id === "cv") {
      fs.copyFileSync(
        path.join(root, "public", "work", "cv", "front.jpg"),
        path.join(outDir, "front.jpg"),
      );
      fs.copyFileSync(
        path.join(root, "public", "work", "cv", "keith-byne-cv.pdf"),
        path.join(outDir, "keith-byne-cv.pdf"),
      );
    }
  } else {
    const md = fs.readFileSync(path.join(root, d.src), "utf8");
    fs.writeFileSync(path.join(outDir, d.id + ".html"), page(d.title, mdToHtml(md), d.id));
  }
}

console.log("Wrote HTML to " + outDir);
