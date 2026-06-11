"use client";
import Link from "next/link";
import useReveal from "../../components/useReveal";

const beliefs = [
  { num: "01", text: "Every ceremony deserves its own words — borrowed scripts steal what should be yours." },
  { num: "02", text: "Calmness is contagious. A settled celebrant makes for settled couples." },
  { num: "03", text: "Tasmania's landscapes aren't backdrops. They're participants." },
  { num: "04", text: "The paperwork should be the least memorable thing about your day." },
];

export default function AboutPage() {
  const ref1 = useReveal(), ref2 = useReveal(), ref3 = useReveal();

  return (
    <div style={{ paddingTop: 72 }}>
      <style>{`
        @media(max-width:768px){.about-story{grid-template-columns:1fr!important; gap:40px!important}}
        @media(max-width:600px){.beliefs-grid{grid-template-columns:1fr!important}}
        @media(max-width:600px){.cred-grid{grid-template-columns:1fr!important}}
      `}</style>

      {/* Hero */}
      <section style={{ background: "#1C2826", padding: "80px 0 0" }}>
        <div className="container">
          <div style={{ maxWidth: 640 }}>
            <div className="eyebrow" style={{ color: "#4A6741", marginBottom: 20 }}>About</div>
            <h1 className="display fade-up" style={{ fontSize: "clamp(36px, 5vw, 68px)", color: "#F7F5F1", lineHeight: 1.08 }}>
              Nat Weaver,<br />Marriage Celebrant.
            </h1>
          </div>
        </div>
        <div style={{ marginTop: 64, height: 480, overflow: "hidden", position: "relative" }}>
          <img
            src="/ceremony-heritage.png"
            alt="Nat at a ceremony"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(28,40,38,0.5) 0%, transparent 60%)" }} />
        </div>
      </section>

      {/* Story */}
      <section className="section-pad" style={{ background: "#F7F5F1" }}>
        <div className="container">
          <div ref={ref1} className="reveal about-story" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 100 }}>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Her story</div>
              <div style={{ width: 40, height: 1, background: "#C4A882" }} />
            </div>
            <div>
              <p style={{ fontSize: 18, color: "#1C2826", lineHeight: 1.85, marginBottom: 28, fontWeight: 300 }}>
                Nat has always believed that the words spoken at a wedding matter more than almost anything else on the day. Not the flowers, not the cake — the moment when two people turn to face each other and say the thing that changes everything.
              </p>
              <p style={{ fontSize: 16, color: "#5A6360", lineHeight: 1.85, marginBottom: 28, fontWeight: 300 }}>
                Based at Oyster Cove on the southern coast of Tasmania, Nat travels across the island for ceremonies — from the walled gardens of historic homesteads to the windswept shores of Bruny Island, from the alpine lakes of the Central Highlands to intimate city courtyards in Hobart.
              </p>
              <p style={{ fontSize: 16, color: "#5A6360", lineHeight: 1.85, marginBottom: 28, fontWeight: 300 }}>
                Her approach begins months before your wedding day. She'll learn how you met, how you became you, what makes you laugh — and then she'll write a ceremony that sounds so specifically like the two of you that guests will wonder if she's known you for years.
              </p>
              <p style={{ fontSize: 16, color: "#5A6360", lineHeight: 1.85, fontWeight: 300 }}>
                On the day itself, you'll barely notice she's there. That's the point. The ceremony belongs to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="section-pad" style={{ background: "#F0EBE2" }}>
        <div className="container">
          <div ref={ref2} className="reveal">
            <div className="eyebrow" style={{ marginBottom: 48, textAlign: "center" }}>What Nat believes</div>
            <div className="beliefs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
              {beliefs.map((b) => (
                <div key={b.num} style={{ padding: "32px", background: "#F7F5F1", borderRadius: 2 }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 36, color: "#C4A882", marginBottom: 16 }}>{b.num}</div>
                  <p className="display" style={{ fontSize: 18, color: "#1C2826", lineHeight: 1.4 }}>{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-pad-sm" style={{ background: "#1C2826" }}>
        <div className="container">
          <div ref={ref3} className="reveal cred-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40, textAlign: "center" }}>
            {[
              { num: "5.0", label: "Google Rating", sub: "Perfect score across all reviews" },
              { num: "TAS", label: "Island Coverage", sub: "Heritage · Wilderness · Coastal · Island" },
              { num: "AG", label: "ABIA Registered", sub: "Commonwealth registered celebrant" },
            ].map((c) => (
              <div key={c.num} style={{ padding: 32 }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 48, color: "#C4A882", lineHeight: 1 }}>{c.num}</div>
                <div style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#4A6741", marginTop: 12, marginBottom: 8 }}>{c.label}</div>
                <div style={{ fontSize: 14, color: "#8FA89C" }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad-sm" style={{ background: "#F7F5F1", textAlign: "center" }}>
        <div className="container">
          <p className="display" style={{ fontSize: "clamp(20px, 3vw, 36px)", color: "#1C2826", marginBottom: 32, maxWidth: 600, margin: "0 auto 32px" }}>
            If this sounds like what you've been looking for — let's talk.
          </p>
          <Link href="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </section>
    </div>
  );
}
