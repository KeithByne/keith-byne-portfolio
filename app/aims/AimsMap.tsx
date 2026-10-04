import { coastPaths } from "./coast";

export function AimsMap() {
  return (
    <figure className="aims-map">
      <svg
        viewBox="0 0 500 760"
        role="img"
        aria-label="Routes from the British Isles, northern Europe, and France arriving in Seville"
      >
        <defs>
          <clipPath id="aims-frame">
            <rect x="4" y="4" width="492" height="752" />
          </clipPath>
          <filter id="route-glow" x="-35%" y="-35%" width="170%" height="170%" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.3" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.63 0" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect width="500" height="760" fill="#0b1024" />
        <g clipPath="url(#aims-frame)">
        <g transform="rotate(-25 250 380)">
        <g fill="#6fbf86" fillOpacity="0.16" stroke="#6fbf86" strokeWidth="1.15" strokeLinejoin="round" strokeLinecap="round">
          {coastPaths.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
        <g filter="url(#route-glow)" fill="none" strokeWidth="1.6" strokeLinecap="round">
          <path d="M59.9 358.6 C 28 470, 36 580, 79.5 666" stroke="#8b9cff" />
          <path d="M126.3 363.2 C 168 480, 145 580, 79.5 666" stroke="#9aa6d4" />
          <path d="M240.6 171.4 C 214 220, 236 265, 262.7 298" stroke="#8b9cff" />
          <path d="M315.7 205.8 C 348 248, 304 278, 262.7 298" stroke="#8b9cff" />
          <path d="M432.9 165.6 C 470 230, 360 270, 262.7 298" stroke="#8b9cff" />
          <path d="M262.7 298 C 248 345, 252 378, 260.5 405" stroke="#8b9cff" />
          <path d="M260.5 405 C 240 440, 210 460, 176 488" stroke="#8b9cff" />
          <path d="M176 488 C 150 545, 120 600, 79.5 666" stroke="#8b9cff" />
          <circle cx="79.5" cy="666" r="16" stroke="#8b9cff" strokeWidth="1.2" />
        </g>
        <g className="aims-pulses" filter="url(#route-glow)" fill="none" stroke="#d5deff" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="8 108">
          <path d="M59.9 358.6 C 28 470, 36 580, 79.5 666">
            <animate attributeName="stroke-dashoffset" from="0" to="-116" dur="2.8s" repeatCount="indefinite" />
          </path>
          <path d="M126.3 363.2 C 168 480, 145 580, 79.5 666">
            <animate attributeName="stroke-dashoffset" from="0" to="-116" dur="2.8s" repeatCount="indefinite" />
          </path>
          <path d="M240.6 171.4 C 214 220, 236 265, 262.7 298">
            <animate attributeName="stroke-dashoffset" from="94.71" to="-21.29" dur="2.8s" repeatCount="indefinite" />
          </path>
          <path d="M315.7 205.8 C 348 248, 304 278, 262.7 298">
            <animate attributeName="stroke-dashoffset" from="105.98" to="-10.02" dur="2.8s" repeatCount="indefinite" />
          </path>
          <path d="M432.9 165.6 C 470 230, 360 270, 262.7 298">
            <animate attributeName="stroke-dashoffset" from="103.7" to="-12.3" dur="2.8s" repeatCount="indefinite" />
          </path>
          <path d="M262.7 298 C 248 345, 252 378, 260.5 405">
            <animate attributeName="stroke-dashoffset" from="0" to="-116" dur="2.8s" repeatCount="indefinite" />
          </path>
          <path d="M260.5 405 C 240 440, 210 460, 176 488">
            <animate attributeName="stroke-dashoffset" from="7.16" to="-108.84" dur="2.8s" repeatCount="indefinite" />
          </path>
          <path d="M176 488 C 150 545, 120 600, 79.5 666">
            <animate attributeName="stroke-dashoffset" from="3.97" to="-112.03" dur="2.8s" repeatCount="indefinite" />
          </path>
        </g>
        <g fill="#e8ecff">
          <circle cx="59.9" cy="358.6" r="3.5" />
          <circle cx="126.3" cy="363.2" r="3.5" />
          <circle cx="240.6" cy="171.4" r="4" />
          <circle cx="315.7" cy="205.8" r="4" />
          <circle cx="432.9" cy="165.6" r="4" />
          <circle cx="262.7" cy="298" r="3.2" />
          <circle cx="260.5" cy="405" r="4" />
          <circle cx="176" cy="488" r="4" />
          <circle cx="79.5" cy="666" r="5.5" />
        </g>
        <text x="102" y="670" fill="#e8ecff" fontFamily="var(--font-sans), sans-serif" fontSize="16">Seville</text>
        </g>
        </g>
        <rect x="2" y="2" width="496" height="756" fill="none" stroke="#6fbf86" strokeWidth="4" />
      </svg>
    </figure>
  );
}
