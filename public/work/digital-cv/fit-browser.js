/* Scale a fixed 1999 page so it fits the browser frame. */
(function () {
  var lock = false;
  var current = 0;

  function contentBox() {
    var maxR = 0;
    var maxB = 0;
    var nodes = document.body.querySelectorAll("img, table, div, form, span, h4, p");
    for (var i = 0; i < nodes.length; i++) {
      var rect = nodes[i].getBoundingClientRect();
      if (rect.right > maxR) maxR = rect.right;
      if (rect.bottom > maxB) maxB = rect.bottom;
    }
    return { right: maxR, bottom: maxB };
  }

  function paintCorner(scale) {
    if (window.name !== "bottomFrameEn" && window.name !== "bottomFrameEs") return;
    var bg = "url(\"img/1999-background.png\")";
    var size = (800 / scale) + "px " + (450 / scale) + "px";
    var root = document.documentElement;
    root.style.backgroundColor = "#cfcfcf";
    root.style.backgroundImage = bg;
    root.style.backgroundRepeat = "no-repeat";
    root.style.backgroundPosition = "right bottom";
    root.style.backgroundAttachment = "fixed";
    root.style.backgroundSize = size;
    document.body.style.backgroundColor = "transparent";
    document.body.style.backgroundImage = bg;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "right bottom";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = size;
  }

  function fit() {
    if (lock || document.getElementById("door") || !document.body) return;
    lock = true;
    var root = document.documentElement;
    root.style.zoom = "1";
    var scale;
    if (document.getElementById("onLineCV")) {
      document.body.style.overflow = "hidden";
      document.body.style.margin = "0";
      scale = window.innerWidth / 980;
    } else {
      var box = contentBox();
      if (box.right < 80) {
        paintCorner(1);
        lock = false;
        return;
      }
      if (document.body.className.indexOf("fit-frame") !== -1) {
        document.body.style.overflow = "hidden";
        document.body.style.margin = "0";
        var scaleW = (window.innerWidth - 16) / box.right;
        var scaleH = (window.innerHeight - 16) / Math.max(box.bottom, 40);
        scale = Math.min(scaleW, scaleH);
        if (scale > 1.35) scale = 1.35;
        if (scale < 0.55) scale = 0.55;
      } else {
        scale = window.innerWidth / box.right;
        if (scale > 2) scale = 2;
        if (scale < 1) scale = 1;
        if (Math.abs(scale - 1) < 0.05) scale = 1;
      }
    }
    current = scale;
    root.style.zoom = String(scale);
    paintCorner(scale);
    if (document.getElementById("onLineCV")) {
      var pt = scale < 1 ? 14 / scale : 14;
      var links = document.querySelectorAll(".menu a");
      for (var n = 0; n < links.length; n++) {
        links[n].style.setProperty("font-size", pt + "pt", "important");
      }
      try {
        var frames = window.parent.frames;
        for (var f = 0; f < frames.length; f++) {
          if (frames[f] && frames[f].fitCheck) frames[f].fitCheck(scale);
        }
      } catch (err) {}
    }
    setTimeout(function () {
      lock = false;
    }, 200);
  }

  window.addEventListener("resize", fit);
  window.addEventListener("load", fit);
  if (document.readyState !== "loading") fit();
})();
