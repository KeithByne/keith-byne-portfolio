export default function AboutPage() {
  return (
    <main className="about-grid">
      <div>
        <p className="eyebrow">About</p>
        <h1>Programme lead with a designer&apos;s eye.</h1>
        <figure className="portrait">
          <img
            src="/portraits/desk.png"
            alt="Keith Byne at a desk, short white hair, looking toward the camera"
          />
        </figure>
      </div>
      <div className="prose">
        <p>
          Based in Espartinas, Seville. Director and Director of Studies of
          Universal English S.L. since 2015: curriculum, budgets, teams, and
          hybrid/online delivery. Open to EU remote employment or a Spanish
          B2B / autónomo contract.
        </p>
        <p>
          Before the academy: eleven years writing digital materials for
          Teachertrainingvideos.com, including New Standard English (China)
          and the BBC&apos;s Get into Spanish; ESP/EAP in Paris for enterprise
          accounts; and twelve years as a graphic designer, including CAD-CAM
          and brand work.
        </p>
        <p>
          Visual training is a BA (Hons) Fine Art, 1st Class, Norwich School of
          Art. Adult-learning credentials: Cambridge CELTA and Trinity TESOL.
        </p>
        <ul className="roles">
          <li>
            Universal English S.L. — Director / DoS
            <span>Tomares, Spain · 2015–present</span>
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
