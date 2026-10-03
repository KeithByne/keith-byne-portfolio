/* Scale a fixed 1999 page so it fits the browser frame. */
(function () {
  var lock = false;
  var current = 0;

  function contentRight() {
    var max = 0;
    var nodes = document.body.querySelectorAll("img, table, div, form, span, h4, p");
    for (var i = 0; i < nodes.length; i++) {
      var right = nodes[i].getBoundingClientRect().right;
      if (right > max) max = right;
    }
    return max;
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
      var max = contentRight();
      if (max < 80) {
        lock = false;
        return;
      }
      scale = window.innerWidth / max;
      if (scale > 2) scale = 2;
      if (scale < 1) scale = 1;
      if (Math.abs(scale - 1) < 0.05) scale = 1;
    }
    current = scale;
    root.style.zoom = String(scale);
    setTimeout(function () {
      lock = false;
    }, 200);
  }

  window.addEventListener("resize", fit);
  window.addEventListener("load", fit);
  if (document.readyState !== "loading") fit();
})();
