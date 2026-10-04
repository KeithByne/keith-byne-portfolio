import { routes } from "./scene";

const stars = [
  { x: 91.25, y: 13.68, delay: "0s", dur: "2.6s" },
  { x: 44.53, y: 15.72, delay: "1.1s", dur: "3.2s" },
  { x: 67.66, y: 21.46, delay: "0.4s", dur: "2.9s" },
  { x: 92.5, y: 29.17, delay: "1.7s", dur: "3.4s" },
  { x: 86.09, y: 29.87, delay: "0.8s", dur: "2.4s" },
];

export function AimsMap() {
  return (
    <figure className="aims-map" role="img" aria-label="Routes from Ireland, the United Kingdom, Norway, Sweden, Finland, Poland, Germany, Austria, France, and Italy arriving in Seville">
      <img src="/aims/map.png?v=2" alt="" />
      {stars.map((star) => (
        <span
          key={`${star.x}-${star.y}`}
          className="aims-star"
          style={{ left: `${star.x}%`, top: `${star.y}%`, animationDelay: star.delay, animationDuration: star.dur }}
        />
      ))}
      <svg
        viewBox="0 0 500 760"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <filter id="route-glow" x="-35%" y="-35%" width="170%" height="170%" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.3" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.63 0" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="aims-pulses" filter="url(#route-glow)" fill="none" stroke="#d5deff" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="8 108">
          {routes.map((route) => (
            <path key={route.d} d={route.d}>
              <animate attributeName="stroke-dashoffset" from={route.from} to={route.to} dur="2.8s" repeatCount="indefinite" />
            </path>
          ))}
        </g>
      </svg>
    </figure>
  );
}
