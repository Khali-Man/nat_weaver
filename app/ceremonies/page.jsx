"use client";
import Link from "next/link";
import useReveal from "../../components/useReveal";

const types = [
  {
    title: "Wedding Ceremony",
    sub: "Full ceremony · Legal & bespoke",
    desc: "A complete wedding ceremony, written entirely from scratch. From the processional to the final blessing — every word is yours. Nat handles all legal requirements so you can focus on being present.",
    icon: "♡",
  },
  {
    title: "Elopement",
    sub: "Intimate · Location-led",
    desc: "For couples who want the moment without the crowd. Elopement ceremonies can be held at sunrise at Wineglass Bay, lakeside in Cradle Mountain, or in a secret garden only you know about.",
    icon: "◇",
  },
  {
    title: "Vow Renewal",
    sub: "Recommitment · Celebration",
    desc: "A ceremony to mark a milestone, revisit your vows with new meaning, or simply celebrate the years together in front of the people who matter most. Always as bespoke as the first time.",
    icon: "○",
  },
];

const process = [
  { num: "01", title: "The Initial Conversation", body: "A relaxed, no-obligation chat about your vision — the venue, the feeling, the details that matter to you. This is where Nat starts listening." },
  { num: "02", title: "Your Story", body: "Nat sends you a beautifully crafted questionnaire and spends time getting to know you as individuals and as a couple. This research becomes the foundation of your ceremony script." },
  { num: "03", title: "Script Crafting & Revisions", body: "Your ceremony is written and shared with you. You'll have unlimited rounds of feedback until every word feels exactly right. Nothing is finalised without your blessing." },
  { num: "04", title: "Rehearsal & Your Day", body: "A rehearsal ensures the flow feels natural. On the day, Nat arrives early, coordinates with your other vendors, and delivers your ceremony with the calm and warmth your guests will remember for years." },
];

const included = [
  "Custom ceremony script, researched and written from scratch",
  "Unlimited script revisions until you're completely happy",
  "All legal paperwork and lodgement with the Registry",
  "Ceremony rehearsal at the venue",
  "Day-of coordination with your other vendors",
  "A keepsake printed copy of your ceremony script",
  "Nat's personal availability on your wedding day",
];

export default function CeremoniesPage() {
  const ref1 = useReveal(), ref2 = useReveal(), ref3 = useReveal();

  return (
    <div style={{ paddingTop: 72 }}>
      <style>{`
        @media(max-width:768px){.ceremony-types{grid-template-columns:1fr!important}}
        @media(max-width:768px){.included-grid{grid-template-columns:1fr!important; gap:32px!important}}
      `}</style>

      {/* Hero */}
      <section style={{ position: "relative", height: 520, overflow: "hidden" }}>
        <img
          src="/ceremony-wilderness.png"
          alt="Ceremony in progress"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="img-overlay" />
        <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", alignItems: "flex-end", padding: "0 0 64px" }}>
          <div className="container">
            <div className="eyebrow" style={{ color: "#C4A882", marginBottom: 16 }}>What Nat offers</div>
            <h1 className="display" style={{ fontSize: "clamp(36px, 5vw, 68px)", color: "#F7F5F1" }}>
              Ceremony types &amp;<br />the experience.
            </h1>
          </div>
        </div>
      </section>

      {/* Ceremony types */}
      <section className="section-pad" style={{ background: "#F7F5F1" }}>
        <div className="container">
          <div ref={ref1} className="reveal">
            <div className="ceremony-types" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {types.map((t) => (
                <div key={t.title} className="ceremony-card">
                  <div style={{ fontSize: 28, color: "#C4A882", marginBottom: 20 }}>{t.icon}</div>
                  <div className="eyebrow" style={{ marginBottom: 12, color: "#8FA89C" }}>{t.sub}</div>
                  <h3 className="serif" style={{ fontSize: 22, color: "#1C2826", marginBottom: 16 }}>{t.title}</h3>
                  <p style={{ fontSize: 15, color: "#5A6360", lineHeight: 1.8, fontWeight: 300 }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad" style={{ background: "#1C2826" }}>
        <div className="container">
          <div ref={ref2} className="reveal">
            <div className="eyebrow" style={{ color: "#4A6741", marginBottom: 48, textAlign: "center" }}>The experience</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 56, maxWidth: 720, margin: "0 auto" }}>
              {process.map((p, i) => (
                <div key={i} className="process-step">
                  <div className="step-number">{p.num}</div>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#F7F5F1", marginBottom: 12 }}>{p.title}</h3>
                    <p style={{ fontSize: 15, color: "#8FA89C", lineHeight: 1.8, fontWeight: 300 }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-pad" style={{ background: "#F0EBE2" }}>
        <div className="container">
          <div ref={ref3} className="reveal included-grid" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}>Every ceremony includes</div>
              <h2 className="serif" style={{ fontSize: 32, color: "#1C2826" }}>Nothing left out. Nothing added on.</h2>
            </div>
            <div>
              {included.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", gap: 16, alignItems: "flex-start",
                    paddingBottom: 20,
                    borderBottom: i < included.length - 1 ? "1px solid #E8E2D9" : "none",
                    marginBottom: i < included.length - 1 ? 20 : 0,
                  }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4A6741", marginTop: 9, flexShrink: 0 }} />
                  <p style={{ fontSize: 15, color: "#5A6360", lineHeight: 1.75, fontWeight: 300 }}>{item}</p>
                </div>
              ))}
              <div style={{ marginTop: 40 }}>
                <Link href="/contact" className="btn-primary">Check Availability →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
