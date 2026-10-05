import { routes } from "./scene";

type Point = [number, number];

const gap = 14;
const taper = 36;

function pointsOf(d: string): Point[] {
  const pts: Point[] = [];
  for (const match of d.matchAll(/[ML]\s*(-?\d+(?:\.\d+)?)\s+(-?\d+(?:\.\d+)?)/g)) {
    pts.push([Number(match[1]), Number(match[2])]);
  }
  return pts;
}

function parallel(points: Point[]): Point[] {
  const seg: number[] = [];
  let total = 0;
  for (let i = 1; i < points.length; i++) {
    const w = Math.hypot(points[i][0] - points[i - 1][0], points[i][1] - points[i - 1][1]);
    seg.push(w);
    total += w;
  }
  const edge = Math.min(taper, total * 0.34);
  let walked = 0;
  return points.map((point, i) => {
    if (i === 0 || i === points.length - 1) return point;
    walked += seg[i - 1];
    const fromStart = walked;
    const fromEnd = total - walked;
    let scale = 1;
    if (fromStart < edge) scale = Math.sin((fromStart / edge) * Math.PI / 2);
    if (fromEnd < edge) scale = Math.min(scale, Math.sin((fromEnd / edge) * Math.PI / 2));
    const prev = points[i - 1];
    const next = points[i + 1];
    const dx = next[0] - prev[0];
    const dy = next[1] - prev[1];
    const len = Math.hypot(dx, dy) || 1;
    return [point[0] + (-dy / len) * gap * scale, point[1] + (dx / len) * gap * scale];
  });
}

function pathOf(points: Point[]): string {
  return points.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
}

export const redRoutes = routes.map((route) => ({
  ...route,
  d: pathOf(parallel(pointsOf(route.d))),
}));
