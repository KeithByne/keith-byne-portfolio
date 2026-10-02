const http = require("http");
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
const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const mime = {
  ".html": "text/html; charset=utf-8",
  ".jpg": "image/jpeg",
  ".css": "text/css",
};

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent((req.url || "/").split("?")[0]).replace(/^\/+/, "");
  const file = path.join(dir, rel || "keith-byne-cv.html");
  if (!file.startsWith(dir)) {
    res.writeHead(403);
    return res.end();
  }
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end("not found");
    }
    res.writeHead(200, { "Content-Type": mime[path.extname(file)] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(3471, "127.0.0.1", () => {
  if (fs.existsSync(pdf)) fs.unlinkSync(pdf);
  const child = spawn(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--no-first-run",
      "--virtual-time-budget=12000",
      `--print-to-pdf=${pdf}`,
      "http://127.0.0.1:3471/keith-byne-cv.html",
    ],
    { stdio: "inherit" },
  );
  child.on("exit", (code) => {
    server.close();
    if (!fs.existsSync(pdf)) {
      console.error("PDF was not written");
      process.exit(1);
    }
    console.log("Wrote " + pdf + " (" + fs.statSync(pdf).size + " bytes) exit=" + code);
  });
});
