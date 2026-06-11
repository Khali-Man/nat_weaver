"use client";
import { useState } from "react";
import useReveal from "../../components/useReveal";

export default function ContactPage() {
  const [form, setForm] = useState({
    yourName: "", partnerName: "", date: "", venue: "", how: "", message: "",
  });
  const [sent, setSent] = useState(false);
  const ref1 = useReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{ paddingTop: 72 }}>
      <style>{`
        @media(max-width:768px){.contact-grid{grid-template-columns:1fr!important; gap:48px!important}}
        @media(max-width:480px){.name-grid{grid-template-columns:1fr!important}}
      `}</style>

      <section style={{ background: "#1C2826", padding: "80px 0 64px" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "#4A6741", marginBottom: 20 }}>Let's talk</div>
          <h1 className="display" style={{ fontSize: "clamp(36px, 5vw, 68px)", color: "#F7F5F1", maxWidth: 600, lineHeight: 1.08 }}>
            Your ceremony begins with a conversation.
          </h1>
          <p style={{ color: "#8FA89C", fontSize: 16, maxWidth: 520, marginTop: 24, fontWeight: 300, lineHeight: 1.75 }}>
            Reach out to check Nat's availability for your date. No obligation — just a warm, relaxed chat about what you're imagining for your ceremony.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#F7F5F1" }}>
        <div className="container">
          <div ref={ref1} className="reveal contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

            {/* Form */}
            <div>
              {!sent ? (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                  <div className="name-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                    <div>
                      <label>Your name</label>
                      <input
                        value={form.yourName}
                        onChange={(e) => setForm({ ...form, yourName: e.target.value })}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label>Partner's name</label>
                      <input
                        value={form.partnerName}
                        onChange={(e) => setForm({ ...form, partnerName: e.target.value })}
                        placeholder="Partner's name"
                      />
                    </div>
                  </div>
                  <div>
                    <label>Wedding date (or approximate)</label>
                    <input
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      placeholder="e.g. March 2026"
                      required
                    />
                  </div>
                  <div>
                    <label>Venue or location idea</label>
                    <input
                      value={form.venue}
                      onChange={(e) => setForm({ ...form, venue: e.target.value })}
                      placeholder="e.g. Bruny Island, or still deciding"
                    />
                  </div>
                  <div>
                    <label>How did you find Nat?</label>
                    <input
                      value={form.how}
                      onChange={(e) => setForm({ ...form, how: e.target.value })}
                      placeholder="e.g. Google, venue referral, Instagram..."
                    />
                  </div>
                  <div>
                    <label>Tell Nat about your day</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Whatever feels right — the venue, the vibe, what matters most to you..."
                      style={{ minHeight: 120 }}
                    />
                  </div>
                  <div>
                    <button type="submit" className="btn-primary" style={{ width: "100%", padding: "16px", textAlign: "center" }}>
                      Send my enquiry →
                    </button>
                  </div>
                </form>
              ) : (
                <div style={{ background: "#F0EBE2", padding: 48, borderRadius: 2, textAlign: "center" }}>
                  <div style={{ fontSize: 40, marginBottom: 20 }}>♡</div>
                  <h2 className="serif" style={{ fontSize: 28, color: "#1C2826", marginBottom: 16 }}>Thank you for reaching out.</h2>
                  <p style={{ fontSize: 16, color: "#5A6360", lineHeight: 1.8 }}>
                    Nat will be in touch within 48 hours. In the meantime, feel free to look through the wedding stories for a little inspiration.
                  </p>
                </div>
              )}
            </div>

            {/* Contact details */}
            <div>
              <div className="eyebrow" style={{ marginBottom: 32 }}>Get in touch directly</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                <div>
                  <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9E8C7A", marginBottom: 8 }}>Phone</div>
                  <a href="tel:+61405687136" style={{ fontSize: 18, color: "#1C2826", fontFamily: "'Playfair Display', serif" }}>
                    +61 405 687 136
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9E8C7A", marginBottom: 8 }}>Email</div>
                  <a href="mailto:nat@natweaver.com.au" style={{ fontSize: 16, color: "#4A6741", borderBottom: "1px solid #4A6741", paddingBottom: 2 }}>
                    nat@natweaver.com.au
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9E8C7A", marginBottom: 8 }}>Location</div>
                  <p style={{ fontSize: 15, color: "#5A6360", lineHeight: 1.7 }}>
                    105 Palmers Road<br />
                    Oyster Cove, TAS 7150<br />
                    Tasmania, Australia
                  </p>
                </div>
                <div style={{ borderTop: "1px solid #E8E2D9", paddingTop: 32 }}>
                  <div className="stars" style={{ marginBottom: 8 }}>★★★★★</div>
                  <p style={{ fontSize: 14, color: "#9E8C7A" }}>
                    5.0 on Google Reviews<br />
                    Registered Civil Marriage Celebrant<br />
                    Commonwealth of Australia
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
