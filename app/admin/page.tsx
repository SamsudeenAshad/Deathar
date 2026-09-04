"use client";

import { useEffect, useState } from "react";
import "./admin.css";

type Registration = { name: string; email: string; phone: string; age: string; hometown: string; ticket: string; createdAt: string };
const defaultArtists = ["DJ AKIL", "MALINDA", "K!NO"];

export default function AdminPage() {
  const [tab, setTab] = useState("Overview");
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [artists, setArtists] = useState(defaultArtists);
  const [saved, setSaved] = useState(false);

  useEffect(() => setRegistrations(JSON.parse(localStorage.getItem("deathar-registrations") || "[]")), []);
  const removeRegistration = (index: number) => { const next = registrations.filter((_, i) => i !== index); setRegistrations(next); localStorage.setItem("deathar-registrations", JSON.stringify(next)); };
  const save = () => { setSaved(true); window.setTimeout(() => setSaved(false), 2200); };
  const ticketCount = (term: string) => registrations.filter(r => r.ticket?.includes(term)).length;

  return <main className="admin-shell">
    <aside className="admin-side"><a href="/" className="admin-brand">DEATHAR<span>®</span></a><p>CHAPTER 007<br />CONTROL ROOM</p><nav>{["Overview", "Registrations", "Tickets", "Lineup", "Event settings"].map(item => <button key={item} className={tab === item ? "active" : ""} onClick={() => setTab(item)}><span>{item === "Overview" ? "◈" : item === "Registrations" ? "◎" : item === "Tickets" ? "◇" : item === "Lineup" ? "✦" : "⊞"}</span>{item}</button>)}</nav><div className="side-foot"><a href="/">← View live site</a><small>LOCAL ADMIN MODE</small></div></aside>
    <section className="admin-content"><header><div><p className="admin-kicker">DEATHAR / ADMIN</p><h1>{tab}</h1></div><div className="admin-user"><span>AK</span><div><b>Event manager</b><small>Administrator</small></div></div></header>
      {tab === "Overview" && <><div className="admin-cards"><Stat label="Total registrations" value={String(registrations.length).padStart(2, "0")} trend="Live count"/><Stat label="Early access" value={String(ticketCount("Early")).padStart(2, "0")} trend="20% pre-order"/><Stat label="Deathar passes" value={String(ticketCount("Pass")).padStart(2, "0")} trend="20% pre-order"/></div><div className="admin-panel"><div className="panel-heading"><div><p>LIVE ACTIVITY</p><h2>Recent registrations</h2></div><button onClick={() => setTab("Registrations")}>View all →</button></div>{registrations.length ? <RegistrationTable entries={registrations.slice(-5).reverse()} /> : <Empty text="No registrations have arrived yet. Test the ticket form on the live site." />}</div></>}
      {tab === "Registrations" && <div className="admin-panel"><div className="panel-heading"><div><p>ATTENDEE LIST</p><h2>{registrations.length} registrations</h2></div><button onClick={() => { localStorage.setItem("deathar-registrations", "[]"); setRegistrations([]); }}>Clear list</button></div>{registrations.length ? <RegistrationTable entries={registrations} remove={removeRegistration} /> : <Empty text="Your registration list is currently empty." />}</div>}
      {tab === "Tickets" && <div className="admin-panel"><p className="admin-kicker">INVENTORY & PRICING</p><h2>Ticket releases</h2><div className="manage-grid"><TicketCard title="Early Access" sold={ticketCount("Early")} price="LKR 8,000" original="LKR 10,000" /><TicketCard title="Deathar Pass" sold={ticketCount("Pass")} price="LKR 12,000" original="LKR 15,000" /></div><button className="save" onClick={save}>{saved ? "Saved ✓" : "Save ticket settings"}</button></div>}
      {tab === "Lineup" && <div className="admin-panel"><p className="admin-kicker">SONIC ARCHITECTS</p><h2>Artist lineup</h2><div className="artist-manage">{artists.map((artist, index) => <div key={artist}><span>{String(index + 1).padStart(2, "0")}</span><input value={artist} onChange={e => setArtists(artists.map((a, i) => i === index ? e.target.value : a))}/><button onClick={() => setArtists(artists.filter((_, i) => i !== index))}>Remove</button></div>)}</div><button className="add" onClick={() => setArtists([...artists, "NEW ARTIST"])}>+ Add artist</button><button className="save" onClick={save}>{saved ? "Saved ✓" : "Save lineup"}</button></div>}
      {tab === "Event settings" && <div className="admin-panel"><p className="admin-kicker">EVENT CONFIGURATION</p><h2>Chapter details</h2><div className="settings"><label>Event title<input defaultValue="DEATHAR — Chapter 007" /></label><label>Event date<input type="date" defaultValue="2026-10-07" /></label><label>Location<input defaultValue="Colombo, Sri Lanka" /></label><label>Pre-order offer<select defaultValue="20% off"><option>20% off</option><option>15% off</option><option>No offer</option></select></label></div><button className="save" onClick={save}>{saved ? "Saved ✓" : "Save event settings"}</button></div>}
    </section>
  </main>;
}

function Stat({ label, value, trend }: { label: string; value: string; trend: string }) { return <article className="stat"><p>{label}</p><strong>{value}</strong><span>● {trend}</span></article>; }
function Empty({ text }: { text: string }) { return <p className="empty">{text}</p>; }
function TicketCard({ title, sold, price, original }: { title: string; sold: number; price: string; original: string }) { return <article className="ticket-card"><p>{title}</p><h3>{price} <del>{original}</del></h3><div><span>{sold} sold</span><span>{100 - sold} available</span></div><i><b style={{ width: `${Math.min(sold, 100)}%` }} /></i><small>PRE-ORDER · 20% OFF</small></article>; }
function RegistrationTable({ entries, remove }: { entries: Registration[]; remove?: (index: number) => void }) { return <div className="reg-table"><div className="tr th"><span>Guest</span><span>Contact</span><span>Ticket</span><span>From</span>{remove && <span />}</div>{entries.map((entry, index) => <div className="tr" key={`${entry.email}-${index}`}><span><b>{entry.name}</b><small>{entry.email}</small></span><span><b>{entry.phone}</b><small>Age {entry.age}</small></span><span>{entry.ticket}</span><span>{entry.hometown}</span>{remove && <button onClick={() => remove(index)}>×</button>}</div>)}</div>; }
