const chapters = [
  ["01","The Forest Cabin","The story begins at a quiet cabin in the forest.","the-forest-cabin"],
  ["02","Strange Tracks","Something has been moving through the woods.","strange-tracks"],
  ["03","The Hidden Egg","Milo discovers something impossible hidden nearby.","the-hidden-egg"],
  ["04","Ember Hatches","A new life begins — and with it, a mystery.","ember-hatches"],
  ["05","The First Flight","Milo discovers that the impossible may be learning to fly.","the-first-flight"],
  ["06","A Dragon's Secret","The creature beside Milo knows more than it should.","a-dragons-secret"],
  ["07","Into the Ancient Forest","The path leads deeper into a forest older than memory.","into-the-ancient-forest"],
  ["08","Meeting Verdant & Azuren","Milo encounters two guardians of a much larger world.","meeting-verdant-and-azuren"],
  ["09","The Shadow Stirs","Something in the darkness has noticed Milo.","the-shadow-stirs"],
  ["10","The Journey Begins","The quiet life Milo knew is no longer possible.","the-journey-begins"],
  ["11","The Portal Opening","The boundary between worlds begins to give way.","the-portal-opening"],
];

export default function Home() {
  return <main>
    <nav><a href="/" className="brand">MILO'S STORY</a><span>Guardians of the Elements</span></nav>

    <section className="hero">
      <div className="eyebrow">A FANTASY ADVENTURE</div>
      <h1>Guardians<br/><i>of the Elements</i></h1>
      <p className="lead">Every world has a story waiting beneath its surface. Milo is about to discover his.</p>
      <a className="button" href="#chapters">Enter the story ↓</a>
    </section>

    <section className="about">
      <div><div className="eyebrow">THE JOURNEY</div><h2>A story still being written.</h2></div>
      <p>Milo's Story is the living home of <em>Guardians of the Elements</em> — a fantasy novel built chapter by chapter, with a world of lore, characters, creatures and elemental magic waiting to unfold.</p>
    </section>

    <section id="chapters" className="chapters">
      <div className="eyebrow">THE MANUSCRIPT</div>
      <h2>Chapters</h2>
      {chapters.map(([n,t,d,slug]) => <a className="chapter-card" href={`/chapter/${slug}`} key={n}>
        <span>{n}</span>
        <div><h3>{t}</h3><p>{d}</p></div>
        <b>↗</b>
      </a>)}
    </section>

    <footer><span>MILO'S STORY</span><span>Guardians of the Elements</span><span>© {new Date().getFullYear()}</span></footer>
  </main>;
}
