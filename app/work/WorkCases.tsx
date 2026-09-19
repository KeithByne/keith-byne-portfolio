"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

function PhoneLoop({
  src,
  poster,
  alt,
}: {
  src: string;
  poster?: string;
  alt: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.pause();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play();
        else el.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={alt}
    />
  );
}

function Shot({
  src,
  alt,
  caption,
  video,
  poster,
}: {
  src: string;
  alt: string;
  caption: string;
  video?: boolean;
  poster?: string;
}) {
  const [ok, setOk] = useState(true);
  const [enlarged, setEnlarged] = useState(false);
  if (!ok) return null;
  const media = video ? (
    <PhoneLoop src={src} poster={poster} alt={alt} />
  ) : (
    <img src={src} alt={alt} onError={() => setOk(false)} />
  );
  return (
    <figure
      className="case-shot"
      onMouseEnter={() => setEnlarged(true)}
      onMouseLeave={() => setEnlarged(false)}
    >
      <button
        type="button"
        className="case-shot-hit"
        aria-label={`${caption}. Hover or focus to enlarge.`}
        onFocus={() => setEnlarged(true)}
        onBlur={() => setEnlarged(false)}
      >
        {media}
      </button>
      <figcaption>{caption}</figcaption>
      {enlarged
        ? createPortal(
            <div className="case-shot-zoom" aria-hidden="true">
              {video ? (
                <PhoneLoop src={src} poster={poster} alt="" />
              ) : (
                <img src={src} alt="" />
              )}
            </div>,
            document.body,
          )
        : null}
    </figure>
  );
}

const pieces = [
  {
    n: "01",
    title: "Job aid and stakeholder deck",
    status: "Next",
    note: "One-page reference plus a short deck. Same audience as the Rise module: remote teams, data handling, and safe AI use.",
  },
  {
    n: "02",
    title: "Safe AI and data handling",
    status: "In build",
    note: "Branching Articulate Rise module, 10-15 minutes. Classify the data, then take the approved path. Storyboard is written.",
  },
  {
    n: "03",
    title: "Storyline scenario",
    status: "Planned",
    note: "One interactive manager conversation with variables and states. Published as SCORM 1.2 once the Articulate trial is live.",
  },
  {
    n: "04",
    title: "90-day onboarding framework",
    status: "Planned",
    note: "Needs analysis and hybrid onboarding map - the L&D-manager artefact, not a course.",
  },
];

const cases: {
  id: string;
  title: string;
  subtitle: string;
  logo?: { src: string; href?: string; alt: string; cta?: string };
  body: ReactNode;
}[] = [
  {
    id: "universal-english",
    title: "Universal English S.L.",
    subtitle:
      "Director and Director of Studies · curriculum, teams, and the public learning site · 2015–present",
    logo: {
      src: "/work/universal-english/logo.png",
      href: "https://www.universal-english.com/",
      alt: "Universal English",
      cta: "Live site",
    },
    body: (
      <>
        <h3>The whole operation</h3>
        <p>
          A training organisation does not only run classes. Since 2015 the
          role has been Director and Director of Studies of Universal English
          S.L. in Tomares: curriculum, course development, staffing, budgets,
          marketing, and web content.
        </p>
        <h3>Online, then hybrid</h3>
        <p>
          The academy was first in the area to offer online classes, then
          hybrid. International online technology training for teachers ran
          on Zoom, with face-to-face trainer programmes as well, and ongoing
          content work with Teachertrainingvideos.com / Russell Stannard.
        </p>
        <h3>The public site</h3>
        <p>
          The public site is part of the job, not a separate freelance.
          Specified, designed, and still updated at universal-english.com:
          marketing, web design, and content writing, including a free
          CEFR-aligned level test.
        </p>
        <ul className="roles">
          <li>
            Live site
            <span>
              <a href="https://www.universal-english.com/" rel="noreferrer">
                universal-english.com
              </a>
            </span>
          </li>
          <li>
            Director / DoS
            <span>
              Curriculum, course development, staffing, budgets, and
              resource management
            </span>
          </li>
          <li>
            Hybrid and online
            <span>
              First in the area to offer online classes, then hybrid
            </span>
          </li>
          <li>
            Teacher training
            <span>
              International Zoom programmes; face-to-face trainer programmes;
              content with Teachertrainingvideos.com
            </span>
          </li>
          <li>
            Web
            <span>
              Design, content, and ongoing updates of the public site,
              including the{" "}
              <a
                href="https://www.universal-english.com/level-test.php/"
                rel="noreferrer"
              >
                CEFR level test
              </a>
            </span>
          </li>
          <li>
            iPALABRA
            <span>
              Free learning websites, plus content writing for private ESL
              platforms
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ardmore",
    title: "Ardmore Summer School, Hertfordshire",
    subtitle:
      "Covid-19 remote content, then seasonal centre operations · sharing centre-management duties",
    logo: {
      src: "/work/ardmore/logo.png",
      alt: "Ardmore",
    },
    body: (
      <>
        <h3>First Contact</h3>
        <p>
          The relationship with Ardmore began during the Covid-19 pandemic.
          The brief was to research, create, and deploy educational content
          for language learners on ArdmoreX, the organisation&apos;s new
          remote learning platform.
        </p>
        <h3>Operational Experience</h3>
        <p>
          At the Hertfordshire residential centre the role was operations:
          intensive programmes, a large staff team, shared
          centre-management, support across every department, and day-to-day
          contact with visiting institutions agents and representatives
          sending groups in. The management team had been built for 200
          students. Geopolitical unrest in the Middle East led to the
          collapse of another company at the same university, and an
          unexpected influx of those students. At peak the centre flexed up
          to more than 400.
        </p>
        <h3>Changing Conditions</h3>
        <p>
          The flex put a natural strain on the team. The job description of
          Administrator was open enough that the Centre Manager could keep
          the behind-the-scenes adaptations to the higher numbers on his
          desk, and define a wide brief — having a long working background —
          where the day required it: Rooming, Activity, Academic, and Centre
          Management, was supported while administration still had to be
          held. The definition of those admin tasks changed during the
          employment period.
        </p>
        <ul className="roles">
          <li>
            ArdmoreX
            <span>
              Research, create, and deploy language-learner content on the
              remote platform during Covid-19
            </span>
          </li>
          <li>
            Scale
            <span>
              Built for 200 students; unexpected intake after another company
              at the same university collapsed; flexed to more than 400 at
              peak
            </span>
          </li>
          <li>
            Support to management
            <span>
              Open brief under the Centre Manager: Rooming, Activity,
              Academic, and Centre Management, plus administration whose
              tasks shifted through the season
            </span>
          </li>
          <li>
            B2B
            <span>Contact with visiting institutions sending groups to the centre</span>
          </li>
          <li>
            Learning operations
            <span>
              Digital recording support for the Director of Studies; staff
              support; first aid and safeguarding
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "report-o-matic",
    title: "Report-O-Matic",
    subtitle:
      "Student handling environment · multi-level access · a series of operational problems, solved in a live product",
    logo: {
      src: "/work/report-o-matic/logo-night.png",
      href: "https://www.report-o-matic.online/landing.html",
      alt: "Report-O-Matic",
    },
    body: (
      <>
        <h3>The whole operation, not one form</h3>
        <p>
          A school does not only write reports. It places students, takes
          registers, builds timetables, allocates rooms and people, and
          sometimes has to move a student at short notice. The first problem
          was treating that as one environment, not a stack of separate
          tools.
        </p>
        <h3>Who is allowed to see what</h3>
        <p>
          Owners, department heads, and teachers do not need the same desk.
          The second problem was multi-level access: enough authority to do
          the job, and a hard stop at everyone else&apos;s data.
        </p>
        <h3>Reports that can be found again</h3>
        <p>
          Generation is only half of reporting. The third problem was the
          life of the document: write it, store it, and be able to reference
          it later — including a branded PDF that can leave the building.
        </p>
        <h3>The language the family reads</h3>
        <p>
          The interface and the parent-facing report can each run in 13
          languages. A teacher can work in one language and still send the
          PDF in the student&apos;s own language, so parents can read it.
        </p>
        <h3>Time, rooms, and people</h3>
        <p>
          Registers only work if the timetable is real. The fourth problem
          was timetable development and resource allocation: who is where,
          with what, and whether they were present.
        </p>
        <h3>When students have to move</h3>
        <p>
          Groups change. The fifth problem was relocation: a service for
          moving students without losing the register, the timetable, or the
          report trail that already exists.
        </p>
        <h3>What shipped</h3>
        <p>
          Specified, designed, and developed a complete student-handling
          environment as multi-tenant SaaS. REPORT-O-MATIC LTD. Demo School
          (18 Sep 2026) is a working example. Signed-in screens are shown
          here as stills rather than login-walled links.
        </p>
        <ul className="roles">
          <li>
            Live product
            <span>
              <a href="https://www.report-o-matic.online" rel="noreferrer">
                report-o-matic.online
              </a>
            </span>
          </li>
          <li>
            Access
            <span>Multi-level access for owners, department heads, and teachers</span>
          </li>
          <li>
            Reports
            <span>Generation, storage, reference, and PDF export</span>
          </li>
          <li>
            Languages
            <span>
              13-language UI and 13-language report output, so the PDF can
              go home in the language the family reads
            </span>
          </li>
          <li>
            Operations
            <span>Registers, timetable development, resource allocation, and relocation</span>
          </li>
          <li>
            Demo School
            <span>Class list, a written report, and the PDF export · 18 Sep 2026</span>
          </li>
          <li>
            Sample PDF
            <span>
              <a href="/work/report-o-matic/david-alan-byne-garcia.pdf">
                DAVID-ALAN-BYNE-GARCIA.pdf
              </a>
            </span>
          </li>
        </ul>
        <div className="case-shots">
          <Shot
            src="/work/report-o-matic/students.png"
            alt="Report-O-Matic class roster with add, move, and place student actions"
            caption="Students"
          />
          <Shot
            src="/work/report-o-matic/report.png"
            alt="Report-O-Matic parent comment in English and teacher preview in Spanish for David Alan Byne García"
            caption="Parent comment and teacher preview"
          />
          <Shot
            src="/work/report-o-matic/export.png"
            alt="Universal English branded Report-O-Matic PDF for David Alan Byne García"
            caption="Exported report"
          />
        </div>
      </>
    ),
  },
  {
    id: "fire-list-o-matic",
    title: "FireList-O-Matic",
    subtitle:
      "Phone-first residential accountability · Night Log and FIRE · a series of operational problems, solved in a live product",
    logo: {
      src: "/work/fire-list-o-matic/logo.png",
      href: "https://fire-list-o-matic.vercel.app/login",
      alt: "FireList-O-Matic",
    },
    body: (
      <>
        <h3>The whole operation, not a paper list</h3>
        <p>
          A residential centre does not only keep a fire clipboard. It has a
          Centre Manager, Group Leaders, Home Staff, and visiting student
          groups that change through the season. The first problem was
          treating that as one accountability environment.
        </p>
        <h3>Who is allowed to do what</h3>
        <p>
          Those roles do not need the same phone. The second problem was
          multi-level access: who can declare FIRE, who reports Night Log
          presence, and who only scans a visitor QR.
        </p>
        <h3>Onboarding has to happen at the gate</h3>
        <p>
          Staff do not sit at a desktop to join. The third problem was QR
          onboarding: issue a Group Leader QR and a Home Staff QR from a
          phone, then let group leaders and students scan the same visitor
          QR.
        </p>
        <h3>Night is not the same as FIRE</h3>
        <p>
          Who is on campus tonight is a different job from a live muster.
          The fourth problem was two modes: Night Log for campus presence,
          and FIRE for live muster — still in rooms, not accounted, or at
          fire points.
        </p>
        <h3>The map has to be real</h3>
        <p>
          A muster is useless if the zones are guessed. The fifth problem
          was drawing the site: campus, assembly, accommodation, buildings,
          and fire safety on a large screen, then running the same map from
          a phone.
        </p>
        <h3>What shipped</h3>
        <p>
          Specified, designed, and developed a phone-first emergency
          accountability product as multi-tenant SaaS. Live at
          fire-list-o-matic.vercel.app. Night Log and FIRE are the public
          phone preview; Map & zones is a looping capture from the signed-in
          phone view.
        </p>
        <ul className="roles">
          <li>
            Live product
            <span>
              <a href="https://fire-list-o-matic.vercel.app/" rel="noreferrer">
                fire-list-o-matic.vercel.app
              </a>
            </span>
          </li>
          <li>
            Access
            <span>
              Centre Manager, Group Leader, Home Staff, and student visitor
              QRs
            </span>
          </li>
          <li>
            Night Log
            <span>Who is on campus tonight</span>
          </li>
          <li>
            FIRE
            <span>Live muster: in rooms, not accounted, fire points</span>
          </li>
          <li>
            Zones
            <span>
              Draw campus, assembly, accommodation, buildings, and fire
              safety on desktop; run from the phone
            </span>
          </li>
        </ul>
        <div className="case-shots case-shots-phones">
          <Shot
            src="/work/fire-list-o-matic/night-log.png"
            alt="FireList-O-Matic phone preview in Night Log mode, showing campus zones and on-campus count"
            caption="Night Log"
          />
          <Shot
            src="/work/fire-list-o-matic/fire.png"
            alt="FireList-O-Matic phone preview in FIRE mode, showing campus zones and mustered count"
            caption="FIRE"
          />
          <Shot
            src="/work/fire-list-o-matic/map-zones.mp4?v=frame"
            poster="/work/fire-list-o-matic/map-zones-poster.png"
            alt="FireList-O-Matic Map and zones on a phone, with drawn campus polygons on a live map"
            caption="Map & zones"
            video
          />
        </div>
      </>
    ),
  },
  {
    id: "modules",
    title: "E-learning modules",
    subtitle: "Four artefacts in build · not live yet",
    body: (
      <div className="work-list">
        {pieces.map((piece) => (
          <article className="work-item" key={piece.n}>
            <span className="idx">{piece.n}</span>
            <div>
              <strong>{piece.title}</strong>
              <span className="status">{piece.status}</span>
              <p>{piece.note}</p>
            </div>
          </article>
        ))}
      </div>
    ),
  },
];

export function WorkCases() {
  const [openId, setOpenId] = useState<string | null>("universal-english");

  return (
    <main className="band">
      <h1>Work</h1>
      <p className="lede">
        A short list of cases. Open one to read it; opening another closes
        the first.
      </p>

      <div className="case-list">
        {cases.map((item) => {
          const open = openId === item.id;
          return (
            <article
              className={open ? "case-row is-open" : "case-row"}
              key={item.id}
              id={`case-${item.id}`}
            >
            <div className="case-head">
              {item.logo ? (
                item.logo.href ? (
                <a
                  className="case-logo"
                  href={item.logo.href}
                  rel="noreferrer"
                  target="_blank"
                  aria-label={
                    item.logo.cta
                      ? `Open the live ${item.logo.alt} website`
                      : `Open the live ${item.logo.alt} sign-in page`
                  }
                >
                  <img src={item.logo.src} alt="" />
                  <span>{item.logo.cta ?? "Live sign in"}</span>
                </a>
                ) : (
                <div className="case-logo">
                  <img src={item.logo.src} alt={item.logo.alt} />
                </div>
                )
              ) : null}
              <h2>
                <button
                  type="button"
                  className="case-toggle"
                  aria-expanded={open}
                  aria-controls={`case-panel-${item.id}`}
                  onClick={() =>
                    setOpenId((current) => (current === item.id ? null : item.id))
                  }
                >
                  <span className="case-toggle-title">{item.title}</span>
                  <span className="case-toggle-sub">{item.subtitle}</span>
                </button>
              </h2>
            </div>
              <div
                className="fold"
                id={`case-panel-${item.id}`}
                role="region"
                aria-hidden={!open}
                inert={!open || undefined}
              >
                <div className="fold-inner">
                  <div className="fold-body case-panel">{item.body}</div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="lede" style={{ marginTop: "2.5rem" }}>
        Role history is also on the <Link href="/about">About</Link> page.
      </p>
    </main>
  );
}
