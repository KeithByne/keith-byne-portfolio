import Link from "next/link";

export default function AboutPage() {
  const shots = [
    {
      src: "/portraits/turtleneck.png",
      alt: "Keith Byne, black turtleneck, looking slightly off camera",
    },
    {
      src: "/portraits/studio.png",
      alt: "Keith Byne pulling a silk-screen print in his garage studio",
    },
    {
      src: "/portraits/using-cursor.png",
      alt: "Keith Byne using Cursor to write software",
    },
    {
      src: "/portraits/lecture-theatre.png",
      alt: "Lecture theatre seen from the back row, Keith Byne teaching at the front",
      className: "from-back",
    },
  ];

  return (
    <main className="about-grid">
      <div>
        <p className="eyebrow">About</p>
        <h1>Programme lead with a designer&apos;s eye.</h1>
        <div className="photo-grid">
          {shots.map((shot) => (
            <img key={shot.src} src={shot.src} alt={shot.alt} className={shot.className} />
          ))}
        </div>
      </div>
      <div className="prose">
        <p>
          Based in Espartinas, Seville. Director and Director of Studies of
          Universal English S.L. since 2015: curriculum, budgets, teams, and
          hybrid/online delivery, including online teacher training in
          educational technology. Live classes have run on Zoom since 2019;
          on Covid-19 closure, staff were trained in three hours and no
          session was missed. Open to EU remote employment or a Spanish
          B2B / autónomo contract. Software development is through
          REPORT-O-MATIC LTD, a British registered company.
        </p>
        <p>
          Before the academy: eleven years contributing to digital materials for
          Teachertrainingvideos.com, including New Standard English (China)
          and the BBC&apos;s Get into Spanish; ESP/EAP in Paris for enterprise
          accounts; and twelve years as a graphic designer, including CAD-CAM
          and brand work.
        </p>
        <p>
          Visual training is a BA (Hons) Fine Art, Norwich School of
          Art. A short selection of prints and process is on the{" "}
          <Link href="/studio">Studio</Link> page; originals and the full
          catalogue stay at{" "}
          <a href="https://kbyne.com" rel="noreferrer">
            kbyne.com
          </a>
          . Adult-learning credentials: Cambridge CELTA and Trinity TESOL.
        </p>
        <ul className="roles">
          <li>
            Universal English S.L. — Director / DoS
            <span>Tomares, Spain · 2015–present</span>
          </li>
          <li>
            Ardmore Summer School — Centre administrator
            <span>Hertfordshire, UK · seasonal · 200-capacity team, 400+ at peak</span>
          </li>
          <li>
            Teachertrainingvideos.com — Materials developer
            <span>UK · 2002–2013</span>
          </li>
          <li>
            English Club — ESP/EAP, major accounts
            <span>Paris · 2000–2002</span>
          </li>
          <li>
            Graphic design studios
            <span>UK · 1984–1996</span>
          </li>
        </ul>
      </div>
    </main>
  );
}