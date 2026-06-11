"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import useReveal from "../components/useReveal";

const img1 = "/ceremony-heritage.png";
const img2 = "/ceremony-wilderness.png";
const img3 = "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&q=80";
const img4 = "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=900&q=80";

export default function HomePage() {
  const ref1 = useReveal(), ref2 = useReveal(), ref3 = useReveal(), ref4 = useReveal(), ref5 = useReveal();

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <img
            src={img1}
            alt="Heritage estate wedding ceremony in Tasmania"
            style={{ width: "100%", height: "100%", objectFit: "cover", animation: "kenBurns 12s ease-out both" }}
          />
        </div>
        <div className="img-overlay" />
        <div style={{
          position: "relative", zIndex: 2, height: "100%",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "0 24px",
        }}>
          <div className="eyebrow fade-in" style={{ color: "#C4A882", animationDelay: "0.2s", marginBottom: 24 }}>
            Marriage Celebrant · Tasmania
          </div>
          <h1 className="display fade-up" style={{ fontSize: "clamp(40px, 6vw, 84px)", color: "#F7F5F1", maxWidth: 800, animationDelay: "0.4s", lineHeight: 1.05 }}>
            Your ceremony,<br />in your own words.
          </h1>
          <p className="fade-up" style={{ color: "rgba(247,245,241,0.75)", fontSize: "clamp(15px,1.8vw,18px)", maxWidth: 520, marginTop: 24, fontWeight: 300, animationDelay: "0.6s" }}>
            Ceremonies written entirely for you — crafted with warmth, delivered with calm — across Tasmania's most extraordinary landscapes.
          </p>
          <div className="fade-up" style={{ display: "flex", gap: 16, marginTop: 40, flexWrap: "wrap", justifyContent: "center", animationDelay: "0.8s" }}>
            <Link href="/contact" className="btn-primary">Begin Your Ceremony</Link>
            <Link href="/stories" className="btn-outline">See Wedding Stories</Link>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", zIndex: 2, textAlign: "center" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(247,245,241,0.4)", marginBottom: 8 }}>Scroll</div>
          <div style={{ width: 1, height: 40, background: "rgba(196,168,130,0.4)", margin: "0 auto" }} />
        </div>
      </section>

      {/* Opening statement */}
      <section className="section-pad" style={{ background: "#F7F5F1" }}>
        <div className="container">
          <div ref={ref1} className="reveal" style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <div className="eyebrow" style={{ marginBottom: 24 }}>The craft of ceremony</div>
            <h2 className="display" style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "#1C2826", lineHeight: 1.15 }}>
              Some people write speeches.<br />Nat writes ceremonies that<br />sound like you.
            </h2>
            <div className="divider" style={{ margin: "32px auto" }} />
            <p style={{ fontSize: 17, color: "#5A6360", lineHeight: 1.85, fontWeight: 300 }}>
              Every ceremony is built from scratch — researched, tailored, and refined until it reflects exactly who you are as a couple. When your guests listen, they won't hear a script. They'll hear your story.
            </p>
          </div>
        </div>
      </section>

      {/* Landscape duet */}
      <section style={{ background: "#1C2826", overflow: "hidden" }}>
        <style>{`@media(max-width:600px){.landscape-duet{grid-template-columns:1fr!important}}`}</style>
        <div ref={ref2} className="reveal landscape-duet" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {[
            { src: img1, label: "Heritage & Estate" },
            { src: img2, label: "Wilderness & Lake" },
          ].map((item, i) => (
            <div key={i} style={{ position: "relative", height: 480, overflow: "hidden" }}>
              <img
                src={item.src}
                alt={item.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.04)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              />
              <div style={{ position: "absolute", bottom: 24, left: 24 }}>
                <div className="eyebrow" style={{ color: "#C4A882" }}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: "40px 48px", textAlign: "center" }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 18, color: "#8FA89C" }}>
            From heritage homesteads to alpine lakes — wherever your ceremony lives, so does Nat.
          </p>
        </div>
      </section>

      {/* Mini about */}
      <section className="section-pad" style={{ background: "#F0EBE2" }}>
        <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important; gap:40px!important}}`}</style>
        <div className="container">
          <div ref={ref3} className="reveal about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ aspectRatio: "3/4", background: "#C4A882", borderRadius: 2, overflow: "hidden" }}>
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80" alt="Nat Weaver" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "absolute", bottom: -20, right: -20, width: 120, height: 120, background: "#4A6741", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <div style={{ fontSize: 28, fontFamily: "'Playfair Display', serif", color: "#F7F5F1", fontWeight: 400 }}>5.0</div>
                <div style={{ color: "#C4A882", fontSize: 13, letterSpacing: 1 }}>★★★★★</div>
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Meet Nat</div>
              <h2 className="serif" style={{ fontSize: "clamp(26px, 3vw, 38px)", color: "#1C2826", marginBottom: 24, lineHeight: 1.2 }}>A calm presence on the most meaningful day of your life.</h2>
              <p style={{ fontSize: 16, color: "#5A6360", lineHeight: 1.85, marginBottom: 32, fontWeight: 300 }}>
                Based in Oyster Cove, Nat has officiated ceremonies across Tasmania — from grand heritage estates to remote island coastlines. Her ceremonies are known for one thing above all else: they sound like the people who asked for them.
              </p>
              <Link href="/about" className="btn-ghost">Nat's Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured testimonial */}
      <section className="section-pad" style={{ background: "#F7F5F1" }}>
        <div className="container">
          <div ref={ref4} className="reveal" style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: 56, color: "#C4A882", fontFamily: "'Playfair Display', serif", lineHeight: 0.8, marginBottom: 24 }}>"</div>
            <blockquote className="display" style={{ fontSize: "clamp(20px, 2.8vw, 30px)", color: "#1C2826", lineHeight: 1.4, fontStyle: "italic" }}>
              The ceremony and script was tailored to suit us and was written with so much love — it reflected exactly who we are. You will not regret your decision to have Nat as part of your special day.
            </blockquote>
            <div className="divider" style={{ margin: "32px auto" }} />
            <div className="eyebrow">Emily &amp; Partner · Tasmania</div>
            <div className="stars" style={{ marginTop: 12 }}>★★★★★</div>
          </div>
        </div>
      </section>

      {/* Stories preview */}
      <section className="section-pad-sm" style={{ background: "#1C2826" }}>
        <style>{`@media(max-width:600px){.stories-preview{grid-template-columns:1fr!important}}`}</style>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
            <div>
              <div className="eyebrow" style={{ color: "#4A6741", marginBottom: 12 }}>Wedding Stories</div>
              <h2 className="serif" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#F7F5F1" }}>Ceremonies across Tasmania</h2>
            </div>
            <Link href="/stories" className="btn-ghost" style={{ color: "#8FA89C", borderBottomColor: "#8FA89C", whiteSpace: "nowrap" }}>View all →</Link>
          </div>
          <div ref={ref5} className="reveal stories-preview" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[img1, img2, img3].map((src, i) => (
              <Link key={i} href="/stories" className="story-item" style={{ height: 360, borderRadius: 2, display: "block" }}>
                <img className="story-img" src={src} alt={`Wedding story ${i + 1}`} />
                <div className="img-overlay" />
                <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                  <div className="eyebrow" style={{ color: "#C4A882" }}>{["Heritage", "Wilderness", "Coastal"][i]}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "#4A6741", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.06 }}>
          <img src={img4} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow" style={{ color: "#C4A882", marginBottom: 24 }}>Ready to begin?</div>
          <h2 className="display" style={{ fontSize: "clamp(28px, 4vw, 52px)", color: "#F7F5F1", marginBottom: 20 }}>
            Your ceremony begins<br />with a conversation.
          </h2>
          <p style={{ color: "rgba(247,245,241,0.75)", fontSize: 17, maxWidth: 480, margin: "0 auto 40px", fontWeight: 300 }}>
            Reach out to check availability for your date — no obligation, just a warm chat about what you're imagining.
          </p>
          <Link href="/contact" className="btn-primary" style={{ background: "#1C2826", fontSize: 12 }}>
            Check Nat's Availability →
          </Link>
        </div>
      </section>
    </div>
  );
}
