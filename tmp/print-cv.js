const fs = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const dir = path.join(
  "C:",
  "Users",
  "keith",
  "European-Corporate-Pivot",
  "public",
  "work",
  "cv",
);
const pdf = path.join(dir, "keith-byne-cv.pdf");
const pdfNew = path.join(dir, "keith-byne-cv-new.pdf");
const printHtml = path.join(dir, "_print-" + Date.now() + ".html");
const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const photo = fs.readFileSync(path.join(dir, "front.jpg")).toString("base64");
let html = fs.readFileSync(path.join(dir, "keith-byne-cv.html"), "utf8");
html = html.replace(
  /src="front\.jpg"/,
  `src="data:image/jpeg;base64,${photo}"`,
);
if (!html.includes("data:image/jpeg;base64,")) {
  console.error("Portrait was not embedded");
  process.exit(1);
}
fs.writeFileSync(printHtml, html);
if (fs.existsSync(pdfNew)) fs.unlinkSync(pdfNew);

const fileUrl = "file:///" + printHtml.replace(/\\/g, "/");
const child = spawn(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--user-data-dir=" + path.join("C:", "Users", "keith", "European-Corporate-Pivot", "tmp", "chrome-cv-profile"),
    "--allow-file-access-from-files",
    "--virtual-time-budget=20000",
    "--run-all-compositor-stages-before-draw",
    `--print-to-pdf=${pdfNew}`,
    fileUrl,
  ],
  { stdio: "inherit" },
);
child.on("exit", (code) => {
  try {
    fs.unlinkSync(printHtml);
  } catch {}
  if (!fs.existsSync(pdfNew)) {
    console.error("PDF was not written");
    process.exit(1);
  }
  try {
    fs.copyFileSync(pdfNew, pdf);
    fs.unlinkSync(pdfNew);
  } catch (err) {
    console.error("Could not replace the open PDF. Left " + pdfNew);
    console.error(err.message);
    process.exit(1);
  }
  const bytes = fs.readFileSync(pdf);
  const text = bytes.toString("latin1");
  const jpeg = (text.match(/JFIF/g) || []).length;
  const images = (text.match(/\/Image/g) || []).length;
  console.log("Wrote " + pdf + " (" + bytes.length + " bytes) jfif=" + jpeg + " image=" + images + " exit=" + code);
});
