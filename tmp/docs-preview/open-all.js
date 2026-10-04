const { spawn } = require("child_process");
const http = require("http");

const origin = "http://127.0.0.1:3458";
const pages = [
  "/",
  "/action.html",
  "/theme.html",
  "/brand.html",
  "/plan.html",
  "/weeks.html",
  "/job-aid.html",
  "/page.html",
  "/canva.html",
  "/deck.html",
  "/present.html",
  "/rise.html",
  "/articulate.html",
  "/rise-sb.html",
  "/storyline-sb.html",
  "/sb-how.html",
  "/sb-filled.html",
  "/sb-brand.html",
  "/cv.html",
  "/tools.html",
  "/outreach.html",
  "/interviews.html",
  "/industry.html",
  "/skills.html",
];

function ping() {
  return new Promise((resolve, reject) => {
    const req = http.get(origin + "/", (res) => {
      res.resume();
      resolve();
    });
    req.on("error", reject);
    req.setTimeout(2000, () => {
      req.destroy();
      reject(new Error("timeout"));
    });
  });
}

function open(url) {
  spawn("cmd", ["/c", "start", "", url], { detached: true, stdio: "ignore" }).unref();
}

ping()
  .then(() => {
    for (const p of pages) open(origin + p);
    console.log("Opened " + pages.length + " windows from " + origin);
  })
  .catch(() => {
    console.error("Docs server is not running. Start: node tmp/docs-preview/serve.js");
    process.exit(1);
  });
