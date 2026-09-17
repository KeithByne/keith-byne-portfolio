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
        Case studies go up when there is a live artefact. Nothing here is
        dressed as finished client work until it is.
      </p>
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
        Selected history sits on the{" "}
        <Link href="/about">About</Link> page until the modules are public.
      </p>
    </main>
  );
}