import Link from "next/link";

const processShot = {
  src: "/studio/process-penguins-drying.jpg",
  alt: "Edition of penguin silk-screen prints hanging to dry beside the screen in the studio",
  title: "Prints drying",
  medium: "Studio process · hand-pulled silk screen",
};

const works = [
  {
    src: "/studio/chet-baker.jpg",
    alt: "Blue Jazz No.1 silk-screen print of Chet Baker playing trumpet, titled Almost Blue",
    title: "Blue Jazz No.1 — Chet Baker",
    medium: "Hand-pulled silk screen · limited edition of 10 · 2023",
  },
  {
    src: "/studio/dizzy-gillespie.jpg",
    alt: "Blue Jazz No.2 silk-screen print of Dizzy Gillespie playing trumpet, titled Dizzy's Blues",
    title: "Blue Jazz No.2 — Dizzy Gillespie",
    medium: "Hand-pulled silk screen · limited edition of 10 · 2022",
  },
  {
    src: "/studio/miles-davis.jpg",
    alt: "Blue Jazz No.3 silk-screen print of Miles Davis playing trumpet, titled Kind of Blue",
    title: "Blue Jazz No.3 — Miles Davis",
    medium: "Hand-pulled silk screen · limited edition of 10 · 2023",
  },
  {
    src: "/studio/penguins.jpg",
    alt: "Black and white silk-screen print of penguins, titled Animal Magic",
    title: "Penguins (Animal Magic)",
    medium: "Hand-pulled silk screen · limited edition of 10 · 2023",
  },
  {
    src: "/studio/zebra-print.jpg",
    alt: "Black and white silk-screen print of zebras, titled Animal Magic",
    title: "Zebras (Animal Magic)",
    medium: "Hand-pulled silk screen · limited edition of 10",
  },
  {
    src: "/studio/reflections-blue.jpg",
    alt: "Three-colour blue silk-screen print of ripples in water, titled Reflections",
    title: "Reflections in Blue",
    medium: "Hand-pulled silk screen · three colours · limited edition of 10",
  },
];

export default function StudioPage() {
  return (
    <main className="band">
      <p className="eyebrow">Studio</p>
      <h1>Visual craft, still in practice.</h1>
      <p className="lede">
        Visual training is a BA (Hons) Fine Art, Norwich School of Art, then
        twelve years as a graphic designer. The current studio practice is silk
        screen: hand-pulled editions of ten, on machines of his own design.
        That is visual judgement under constraint — the same muscle learning
        design uses. This page is a short selection, not a shop.
      </p>
      <p className="lede">
        Full studio and originals:{" "}
        <a href="https://kbyne.com" rel="noreferrer">
          kbyne.com
        </a>
        .
      </p>

      <figure className="studio-process">
        <img src={processShot.src} alt={processShot.alt} />
        <figcaption>
          <strong>{processShot.title}</strong>
          <span>{processShot.medium}</span>
        </figcaption>
      </figure>

      <div className="studio-grid">
        {works.map((work) => (
          <figure className="studio-work" key={work.src}>
            <img src={work.src} alt={work.alt} />
            <figcaption>
              <strong>{work.title}</strong>
              <span>{work.medium}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <p className="lede" style={{ marginTop: "2.5rem" }}>
        Lived operations and modules in build are on{" "}
        <Link href="/work">Work</Link>. Role history is on{" "}
        <Link href="/about">About</Link>.
      </p>
    </main>
  );
}
