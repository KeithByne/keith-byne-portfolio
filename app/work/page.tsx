import Link from "next/link";

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

export default function WorkPage() {
  return (
    <main className="band">
      <h1>Work</h1>
      <p className="lede">
        Lived operations sit here now. E-learning modules go up when there
        is a live artefact.
      </p>

      <article className="case">
        <p className="eyebrow">Lived operations</p>
        <h2>Ardmore Summer School, Hertfordshire</h2>
        <p className="case-meta">Seasonal · centre administrator, sharing centre-management duties</p>
        <p>
          Intensive residential programmes with up to 400 participants at a
          time. The work was not classroom delivery. It was keeping a large
          operation moving: a big staff team, support to management across
          departments, and the B2B relationship with visiting institutions.
        </p>
        <p>
          That is stakeholder management, scale, and calm under volume — the
          same muscles a corporate L&amp;D or enablement role uses, without
          dressing the summer school up as something it was not.
        </p>
        <ul className="roles">
          <li>
            Scale
            <span>Up to 400 concurrent participants; large operational team</span>
          </li>
          <li>
            Support to management
            <span>Shared centre-manager duties; helped all departments keep the programme running</span>
          </li>
          <li>
            B2B
            <span>Contact with visiting institutions sending groups to the centre</span>
          </li>
          <li>
            Learning operations
            <span>Digital recording support for the Director of Studies; staff support; first aid and safeguarding</span>
          </li>
        </ul>
      </article>

      <h2 className="subhead">Modules in build</h2>
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
      <p className="lede" style={{ marginTop: "2.5rem" }}>
        Role history is also on the{" "}
        <Link href="/about">About</Link> page.
      </p>
    </main>
  );
}