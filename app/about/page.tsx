import Link from "next/link";

export default function AboutPage() {
  const shots = [
    {
      src: "/portraits/turtleneck.png",
      alt: "Keith Byne, black turtleneck, looking slightly off camera",
    },
    {
      src: "/portraits/headshot.png?v=4",
      alt: "Keith Byne, short grey hair and beard, looking at the camera",
    },
    {
      src: "/portraits/informal.jpg",
      alt: "Keith Byne, short white hair combed forward, glasses, hand at his chin",
    },
    {
      src: "/portraits/lecture-theatre.jpg",
      alt: "Keith Byne, curly hair and beard, white t-shirt, looking at the camera",
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
        <p>Open to EU remote employment.</p>
        <p>
          British citizen. UK passport. Born in Essex. Native English. Based
          in Seville.
        </p>
        <p>
          My working attitude stems from a generation that left school
          expecting a job for life and found an employment wasteland. ITC was
          never on the syllabus. First processors, then computers, arrived on
          the work benches. Courses were demos by salesmen. My generation
          learned them ad hoc, building bridges from analogue to digital one
          step at a time. Lifelong learning evolved through circumstance.
          Learn the next tool on the job became routine. Expressions like
          &apos;Flexibility&apos;, &apos;Mobility&apos; and &apos;Learning
          Curve&apos; nudged into our conversations by the coffee machine.
        </p>
        <p>
          So, who am I now? Essentially a problem solver rather than a crowd
          pleaser. Able to work alone for long periods, a little obsessive. I
          look and listen carefully. I find friction points and ease them.
          Taking on new skills is a constant that began the day I left
          school. Ernest Shackleton is my leadership model. I understand
          management as a supporting role. I never give up, I do not blame, I
          redirect. I see things &apos;in-the-round&apos;. I listen to my
          team before I decide but then, I decide.
        </p>
        <p>
          Currently directing adult learning programmes: curriculum, teams,
          and hybrid delivery, including training teachers in all aspects,
          including educational technology.
        </p>
        <p>
          Before the academy: Among other things, contributing to digital
          materials for Teachertrainingvideos.com, including New Standard
          English (China) and the BBC&apos;s Get into Spanish; ESP/EAP in
          Paris for enterprise accounts; and twelve years as a graphic
          designer, including CAD-CAM and brand work.
        </p>
        <p>
          Visual training was a BA (Hons) Fine Art, Norwich School of Art. A
          short selection of prints and process is on the{" "}
          <Link href="/studio">Studio</Link> page; originals and catalogue
          stay at{" "}
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