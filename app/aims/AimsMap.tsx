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
        <g fill="none" stroke="#6fbf86" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="round">
          <path d="M72.3 331.4 L55.7 334.2 L41.6 350 L39.9 377.3 L45.8 387.3 L58.2 385.9 L72.3 374.4 L74.8 358.6 L78.1 341.4 L74.8 332.8 Z" />
          <path d="M99 279.9 L90.7 300 L95.7 328.8 L97.3 369 L94 400.5 L123.9 394.8 L147 391.9 L150.3 383.3 L151.2 364.6 L135.4 337.4 L121.3 314.4 L122.2 291.4 L110.6 279.9 Z" />
          <path d="M93.6 451 L132.3 428 L161 408.8 L194.2 382 L216.3 355.2 L236.2 316.9 L220 295 L200 270 L199.7 251.8 L201.9 202 L260.5 144.6 L302.5 36 L348 2 L498 2 L498 170 L470 198 L457.2 221.2 L437.3 228.8 L404.1 236.5 L379.8 228.8 L350 250 L320 270 L290 285 L275 310 L273.7 338 L295.8 345.6 L306.9 374.4 L304.7 420.3 L282.6 458.6 L293.6 493.1 L300.3 539 L317.9 573.5 L348.9 608 L335.6 627.1 L323.5 655.9 L306.9 600.3 L282.6 577.3 L258.3 542.9 L239.5 533.3 L214.1 539 L182 552.5 L167.7 588.8 L146.7 631 L134.5 665.4 L120.1 684.6 L83.7 692.3 L50.5 678.8 L40.6 640.5 L47.2 592.7 L42.8 552.5 L121.2 548.6 L129 500.7 L116.8 470.1 Z" />
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
