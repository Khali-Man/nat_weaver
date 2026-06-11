"use client";
import Link from "next/link";
import useReveal from "../../components/useReveal";

const reviews = [
  {
    name: "Jamie Pope",
    stars: 5,
    text: "Nat was a terrific celebrant. Her calmness, tone, subtle humor and storytelling skills made our special day even better. Highly recommend her services.",
    detail: "Wedding ceremony · Rosedale Estate",
  },
  {
    name: "Emily Hampson",
    stars: 5,
    text: "Nat is truly the most wonderful person we have had the pleasure of meeting. We feel so blessed to have had Nat help us tie the knot on our very special day. She is such a breeze to communicate with and genuinely so lovely, it just made our day so perfect. The ceremony and script was tailored to suit us and was written with so much love and reflected exactly who we are. I highly recommend Nat! You will not regret your decision to have her as part of your special day, I can assure you.",
    detail: "Wedding ceremony · Tasmania",
  },
  {
    name: "Ash & Simon",
    stars: 5,
    text: "Nat was the celebrant for our unforgettable wedding on Bruny Island. We really appreciated her warm, relaxed and professional approach. Nat made the admin of getting married so seamless and took care of all the paperwork which was a huge help while we were preoccupied with all the other aspects of having a wedding. Our favourite part was the beautiful ceremony that she put together — we always felt involved in the decisions but Nat made wonderful suggestions about vows, readings and the ring warming ceremony that we had never thought about. These really captured the feeling we wanted.",
    detail: "Wedding ceremony · Bruny Island",
  },
  {
    name: "Claire & Lachlan",
    stars: 5,
    text: "We cannot thank Nat enough for everything she brought to our day. From our very first conversation she understood exactly what we wanted — which was a ceremony that felt like us, not like a template. She delivered that in spades. Every word was perfect.",
    detail: "Elopement · Cradle Mountain",
  },
  {
    name: "Rebecca T.",
    stars: 5,
    text: "Nat has this rare gift of making you feel completely at ease the moment you meet her. By the time our wedding day arrived, she felt like a trusted friend. The ceremony itself was breathtaking — deeply personal and beautifully delivered.",
    detail: "Wedding ceremony · Hobart",
  },
];

export default function KindWordsPage() {
  const ref1 = useReveal();

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ background: "#1C2826", padding: "80px 0 64px" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "#4A6741", marginBottom: 20 }}>Kind Words</div>
          <h1 className="display" style={{ fontSize: "clamp(36px, 5vw, 68px)", color: "#F7F5F1", maxWidth: 640 }}>
            What couples<br />say about Nat.
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 32 }}>
            <div className="stars" style={{ fontSize: 18 }}>★★★★★</div>
            <div style={{ fontSize: 15, color: "#8FA89C" }}>5.0 · Google Reviews · Every. Single. One.</div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#F7F5F1" }}>
        <div className="container">
          <div ref={ref1} className="reveal" style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 860, margin: "0 auto" }}>
            {reviews.map((r, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars" style={{ marginBottom: 16 }}>{"★".repeat(r.stars)}</div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "clamp(16px, 2vw, 20px)", color: "#1C2826", lineHeight: 1.6, marginBottom: 24 }}>
                  "{r.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: 14, color: "#1C2826" }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: "#9E8C7A", letterSpacing: "0.06em", marginTop: 2 }}>{r.detail}</div>
                  </div>
                  <div style={{ fontSize: 11, color: "#9E8C7A", letterSpacing: "0.08em", textTransform: "uppercase" }}>Verified · Google</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <p className="display" style={{ fontSize: 28, color: "#1C2826", marginBottom: 28 }}>Ready to add your story?</p>
            <Link href="/contact" className="btn-primary">Get in Touch →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
