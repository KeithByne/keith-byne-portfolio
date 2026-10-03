/* Keep the left-column text at least 14pt on screen, and the same size as the menus when the page is scaled up. */
function fitCheck(scale) {
  if (!scale || scale < 1) scale = 1;
  var heads = document.getElementsByTagName("h3");
  for (var i = 0; i < heads.length; i++) {
    heads[i].style.setProperty("font-size", 14 * scale + "pt", "important");
  }
  var shade = document.getElementById("topShade");
  if (shade) shade.style.height = (40 * scale) + "px";
}
function fitCheckFromBanner() {
  var scale = 1;
  try {
    var frames = window.parent.document.getElementsByTagName("frame");
    for (var i = 0; i < frames.length; i++) {
      var win = frames[i].contentWindow;
      if (!win || !win.document || !win.document.getElementById("onLineCV")) continue;
      var zoom = parseFloat(win.document.documentElement.style.zoom);
      if (zoom) scale = zoom;
    }
  } catch (err) {}
  fitCheck(scale);
}
window.addEventListener("load", fitCheckFromBanner);
window.addEventListener("resize", fitCheckFromBanner);
