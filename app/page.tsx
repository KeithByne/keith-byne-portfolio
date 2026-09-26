import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div>
          <p className="eyebrow">Learning experience design</p>
          <h1>
            Adult learning,
            <em> designed as a system.</em>
          </h1>
          <p className="lede">
            Keith Byne is a programme director, instructional designer, and
            educational software builder in Seville. Thirty years of adult
            capability programmes, visual communication, and digital learning
            systems — now a public portfolio for remote European L&amp;D and
            e-learning roles.
          </p>
          <div className="actions">
            <Link className="btn" href="/work">
              See the work
            </Link>
            <Link className="btn ghost" href="/about">
              About
            </Link>
          </div>
        </div>
        <figure className="portrait">
          <img
            src="/portraits/turtleneck-front.png"
            alt="Keith Byne, short white hair, black turtleneck, looking slightly off camera"
          />
          <figcaption className="caption">
            Director, Universal English S.L. · Educational management software developer · Online teacher training in educational technology · Fine Art · Sculpture · Serigraphy · Computer graphic design
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
