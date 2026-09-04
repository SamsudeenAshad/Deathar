"use client";

import { FormEvent, useState } from "react";

const artists = [
  { name: "DJ AKIL", role: "HEADLINER", tone: "gold" },
  { name: "MALINDA", role: "LIVE SET", tone: "red" },
  { name: "K!NO", role: "OPENING ACT", tone: "stone" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };

  return <main>
    <nav className="nav wrap">
      <a className="wordmark" href="#top">DEATHAR<span>®</span></a>
      <div className="nav-links"><a href="#experience">Experience</a><a href="#lineup">Lineup</a><a href="#tickets">Tickets</a></div>
      <button className="nav-ticket" onClick={() => setOpen(true)}>Get tickets <i>↗</i></button>
    </nav>

    <section className="hero" id="top">
      <div className="grain" /><div className="sun" /><div className="mountain mountain-one" /><div className="mountain mountain-two" />
      <div className="rose rose-one">✦</div><div className="rose rose-two">✦</div><div className="rose rose-three">✦</div>
      <div className="hero-copy wrap">
        <p className="eyebrow">AKIIN PRESENTS <span /> CHAPTER 007</p>
        <h1>THE<br /><em>AFTER</em><br />HOUR</h1>
        <div className="hero-bottom"><p>WHEN THE SUN FALLS,<br />THE SOUND RISES.</p><button className="primary" onClick={() => setOpen(true)}>Reserve your night <b>→</b></button></div>
      </div>
      <div className="date-card"><small>OCTOBER</small><strong>07</strong><span>2026</span></div>
      <p className="side-label">COLOMBO · SRI LANKA</p>
      <a className="scroll" href="#experience">SCROLL TO ENTER <span>↓</span></a>
    </section>

    <section className="intro wrap" id="experience">
      <p className="section-no">01 — THE INVITATION</p>
      <div><h2>Not just a night.<br /><i>A beautiful descent.</i></h2><p className="body-copy">Deathar is an unfiltered electronic gathering where primal rhythm meets refined chaos. One night, one shared frequency, and nowhere else to be.</p></div>
      <div className="stats"><div><b>08</b><span>HOURS OF<br />SOUND</span></div><div><b>03</b><span>FEATURED<br />ARTISTS</span></div><div><b>01</b><span>UNFORGETTABLE<br />NIGHT</span></div></div>
    </section>

    <section className="lineup" id="lineup"><div className="wrap"><p className="section-no">02 — SONIC ARCHITECTS</p><div className="section-title"><h2>The ones<br />who <i>move us.</i></h2><p>Handpicked selectors. No filler.<br />Only the feeling.</p></div><div className="artist-grid">{artists.map((artist, index) => <article className={`artist ${artist.tone}`} key={artist.name}><div className="artist-art"><span>{String(index + 1).padStart(2, "0")}</span><div className="orb" /></div><div className="artist-info"><p>{artist.role}</p><h3>{artist.name}</h3><a href="#tickets">Discover artist <b>↗</b></a></div></article>)}</div></div></section>

    <section className="tickets wrap" id="tickets"><p className="section-no">03 — SECURE YOUR PLACE</p><div className="ticket-heading"><h2>Choose your<br /><i>entry point.</i></h2><p>Limited quantities. Once a tier is gone,<br />it&apos;s gone for good.</p></div><div className="ticket-grid"><article className="ticket"><p>01 / EARLY ACCESS</p><h3>GRAB YOUR<br />TICKETS</h3><strong>LKR 10,000</strong><span>First release · Limited to 100</span><button onClick={() => setOpen(true)}>Claim access <b>→</b></button></article><article className="ticket ticket-dark"><p>02 / FULL EXPERIENCE</p><h3>DEATHAR<br />PASS</h3><strong>LKR 15,000</strong><span>Priority entry · Event keepsake</span><button onClick={() => setOpen(true)}>Claim access <b>→</b></button></article></div></section>

    <footer><div className="wrap footer-inner"><a className="wordmark" href="#top">DEATHAR<span>®</span></a><p>AN AKIIN EXPERIENCE<br />COLOMBO, SRI LANKA</p><p>FOLLOW THE FREQUENCY<br /><a href="#top">INSTAGRAM ↗</a></p></div></footer>

    {open && <div className="modal-backdrop" onMouseDown={() => setOpen(false)}><div className="modal" onMouseDown={e => e.stopPropagation()}>{sent ? <div className="success"><span>✦</span><h2>You&apos;re on<br /><i>the list.</i></h2><p>We&apos;ll send ticket details to your inbox shortly.</p><button className="primary" onClick={() => { setOpen(false); setSent(false); }}>Back to Deathar</button></div> : <><button className="close" onClick={() => setOpen(false)}>×</button><p className="section-no">CHAPTER 007 — REGISTRATION</p><h2>Enter the<br /><i>after hour.</i></h2><form onSubmit={submit}><label>Full name<input required placeholder="Your name" /></label><label>Email address<input type="email" required placeholder="you@example.com" /></label><label>Ticket selection<select defaultValue=""><option value="" disabled>Select your entry</option><option>Early Access — LKR 10,000</option><option>Deathar Pass — LKR 15,000</option></select></label><button className="primary" type="submit">Request tickets <b>→</b></button></form></>}</div></div>}
  </main>;
}
