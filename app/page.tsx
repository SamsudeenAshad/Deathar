"use client";

import { FormEvent, useState } from "react";

const artists = [{ name: "DJ AKIIY", role: "HEADLINER", tone: "gold", image: "/images/dj-akil-lineup.png" }];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const [flyerOpen, setFlyerOpen] = useState(true);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const registration = Object.fromEntries(new FormData(event.currentTarget));
    const entries = JSON.parse(localStorage.getItem("deathar-registrations") || "[]");
    localStorage.setItem("deathar-registrations", JSON.stringify([...entries, { ...registration, createdAt: new Date().toISOString() }]));
    setSent(true);
  };

  return <main>
    {flyerOpen && <div className="flyer-ad" role="dialog" aria-modal="true" aria-label="DJ Akiiy event announcement"><div className="flyer-glow" /><div className="flyer-card"><button className="flyer-close" onClick={() => setFlyerOpen(false)} aria-label="Close advertisement">×</button><div className="flyer-image-wrap"><img src="/images/dj-akil-flyer.png" alt="DJ Akiiy performing artist flyer for Deathar Chapter 007" /><span className="flyer-shine" /></div><div className="flyer-actions"><div><p>CHAPTER 007 · PERFORMING ARTIST</p><h2>DJ AKIIY</h2></div><button className="primary" onClick={() => { setFlyerOpen(false); setOpen(true); }}>Grab tickets <b>→</b></button></div></div><button className="flyer-skip" onClick={() => setFlyerOpen(false)}>Enter Deathar <span>↓</span></button></div>}
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
        <div className="hero-bottom"><p>WHEN THE SUN FALLS,<br />THE SOUND RISES.</p><div className="offer-cta"><span>PRE-ORDER · <b>20% OFF</b></span><button className="primary" onClick={() => setOpen(true)}>Grab now <b>→</b></button></div></div>
      </div>
      <div className="hero-marquee" aria-hidden="true"><div>DEATHAR — THE AFTER HOUR — CHAPTER 007 — DEATHAR — THE AFTER HOUR — CHAPTER 007 — </div></div>
      <div className="date-card"><small>OCTOBER</small><strong>07</strong><span>2026</span></div>
      <p className="side-label">COLOMBO · SRI LANKA</p>
      <a className="scroll" href="#experience">SCROLL TO ENTER <span>↓</span></a>
      <button className="music-toggle" onClick={() => setMusicOn(!musicOn)}>{musicOn ? "◼ Pause sound" : "▶ Play soundtrack"}</button>
    </section>

    <section className="intro wrap" id="experience">
      <p className="section-no">01 — THE INVITATION</p>
      <div><h2>Not just a night.<br /><i>A beautiful descent.</i></h2><p className="body-copy">Deathar is an unfiltered electronic gathering where primal rhythm meets refined chaos. One night, one shared frequency, and nowhere else to be.</p></div>
      <div className="stats"><div><b>08</b><span>HOURS OF<br />SOUND</span></div><div><b>03</b><span>FEATURED<br />ARTISTS</span></div><div><b>01</b><span>UNFORGETTABLE<br />NIGHT</span></div></div>
    </section>

    <section className="performer-sign"><img src="/images/dj-akil-landscape.png" alt="DJ Akiiy at Deathar" /><div className="performer-shade" /><div className="performer-copy wrap"><p>PERFORMING ARTIST · CHAPTER 007</p><h2>DJ <i>AKIIY</i></h2><span>AFRO HOUSE · LIVE SET</span><button className="sign-link" onClick={() => setOpen(true)}>Grab your ticket <b>↗</b></button></div><div className="sign-stamp">DEATHAR<br /><b>07</b></div></section>

    <section className="lineup" id="lineup"><div className="wrap"><p className="section-no">02 — SONIC ARCHITECTS</p><div className="section-title"><h2>The ones<br />who <i>move us.</i></h2><p>Handpicked selectors. No filler.<br />Only the feeling.</p></div><div className="artist-grid">{artists.map((artist, index) => <article className={`artist ${artist.tone} artist-featured`} key={artist.name}><div className="artist-art"><span>{String(index + 1).padStart(2, "0")}</span><img src={artist.image} alt="DJ Akiiy, Deathar headliner" /></div><div className="artist-info"><p>{artist.role}</p><h3>{artist.name}</h3><a href="#tickets">Discover artist <b>↗</b></a></div></article>)}<article className="artist artist-unknown"><div className="artist-art"><span>02</span><b>?</b><i>REVEAL<br />SOON</i></div><div className="artist-info"><p>LIVE SET</p><h3>TO BE<br />ANNOUNCED</h3><a href="#tickets">Stay tuned <b>↗</b></a></div></article><article className="artist artist-unknown"><div className="artist-art"><span>03</span><b>?</b><i>REVEAL<br />SOON</i></div><div className="artist-info"><p>OPENING ACT</p><h3>TO BE<br />ANNOUNCED</h3><a href="#tickets">Stay tuned <b>↗</b></a></div></article></div></div></section>

    <section className="tickets wrap" id="tickets"><p className="section-no">03 — SECURE YOUR PLACE</p><div className="ticket-heading"><h2>Choose your<br /><i>entry point.</i></h2><p>Pre-order now and receive <b>20% off.</b><br />Limited quantities. Once a tier is gone, it&apos;s gone.</p></div><div className="ticket-grid"><article className="ticket"><p>01 / EARLY ACCESS · 20% OFF</p><h3>GRAB YOUR<br />TICKETS</h3><strong>LKR 8,000 <del>LKR 10,000</del></strong><span>Pre-order release · Limited to 100</span><button onClick={() => setOpen(true)}>Grab now <b>→</b></button></article><article className="ticket ticket-dark"><p>02 / FULL EXPERIENCE · 20% OFF</p><h3>DEATHAR<br />PASS</h3><strong>LKR 12,000 <del>LKR 15,000</del></strong><span>Pre-order · Priority entry · Event keepsake</span><button onClick={() => setOpen(true)}>Grab now <b>→</b></button></article></div></section>

    <footer><div className="wrap footer-inner"><a className="wordmark" href="#top">DEATHAR<span>®</span></a><p>AN AKIIN EXPERIENCE<br />COLOMBO, SRI LANKA</p><p>FOLLOW THE FREQUENCY<br /><a href="#top">INSTAGRAM ↗</a></p></div></footer>

    <iframe className="music-frame" title="Deathar soundtrack" src={musicOn ? "https://www.youtube.com/embed/y1k60lALpvE?list=RDy1k60lALpvE&autoplay=1" : "https://www.youtube.com/embed/y1k60lALpvE?list=RDy1k60lALpvE&mute=1"} allow="autoplay; encrypted-media" />
    {open && <div className="modal-backdrop" onMouseDown={() => setOpen(false)}><div className="modal" onMouseDown={e => e.stopPropagation()}>{sent ? <div className="success"><span>✦</span><h2>You&apos;re on<br /><i>the list.</i></h2><p>We&apos;ll send ticket details to your inbox shortly.</p><button className="primary" onClick={() => { setOpen(false); setSent(false); }}>Back to Deathar</button></div> : <><button className="close" onClick={() => setOpen(false)}>×</button><p className="section-no">CHAPTER 007 — REGISTRATION</p><h2>Enter the<br /><i>after hour.</i></h2><form onSubmit={submit}><label>Full name<input name="name" required placeholder="Your name" /></label><label>Email address<input name="email" type="email" required placeholder="you@example.com" /></label><label>Contact number<input name="phone" type="tel" required placeholder="077 123 4567" /></label><div className="form-row"><label>Age<input name="age" type="number" required min="18" max="99" placeholder="18+" /></label><label>Hometown<input name="hometown" required placeholder="Colombo" /></label></div><label>Ticket selection<select name="ticket" defaultValue=""><option value="" disabled>Select your entry</option><option>Early Access — LKR 10,000</option><option>Deathar Pass — LKR 15,000</option></select></label><button className="primary" type="submit">Request tickets <b>→</b></button></form></>}</div></div>}
  </main>;
}
