"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

function Shot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;
  return (
    <figure className="case-shot">
      <img src={src} alt={alt} onError={() => setOk(false)} />
      <figcaption>{caption}</figcaption>
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
  body: ReactNode;
}[] = [
  {
    id: "ardmore",
    title: "Ardmore Summer School, Hertfordshire",
    subtitle:
      "Covid-19 remote content, then seasonal centre operations · sharing centre-management duties",
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
              <a href="/work/report-o-matic/alex-martinez.pdf">
                Alex Martinez — First Term
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
            alt="Report-O-Matic generated parent comment and teacher preview for Alex Martinez"
            caption="Report comments"
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
  const [openId, setOpenId] = useState<string | null>("ardmore");
  const skipScroll = useRef(true);

  useEffect(() => {
    if (skipScroll.current) {
      skipScroll.current = false;
      return;
    }
    if (!openId) return;
    const node = document.getElementById(`case-${openId}`);
    requestAnimationFrame(() => {
      node?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [openId]);

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
              {open ? (
                <div
                  className="case-panel"
                  id={`case-panel-${item.id}`}
                  role="region"
                >
                  {item.body}
                </div>
              ) : null}
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
