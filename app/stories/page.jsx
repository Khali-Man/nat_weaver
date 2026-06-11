"use client";
import { useState } from "react";
import useReveal from "../../components/useReveal";

const filters = ["All", "Heritage", "Wilderness", "Coastal", "Island"];

const stories = [
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80", tag: "Heritage", name: "Laura & James", loc: "Rosedale Estate, Hobart" },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80", tag: "Wilderness", name: "Ashleigh & Simon", loc: "Cradle Mountain" },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80", tag: "Coastal", name: "Charlotte & Ben", loc: "Bicheno, East Coast" },
  { src: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=800&q=80", tag: "Island", name: "Jess & Tom", loc: "Bruny Island" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80", tag: "Heritage", name: "Sarah & Michael", loc: "Franklin Manor, Strahan" },
  { src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80", tag: "Wilderness", name: "Mia & Ethan", loc: "Lake St Clair" },
];

export default function StoriesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref1 = useReveal();

  const filtered = activeFilter === "All" ? stories : stories.filter((s) => s.tag === activeFilter);

  return (
    <div style={{ paddingTop: 72 }}>
      <style>{`
        @media(max-width:768px){.stories-grid{grid-template-columns:1fr 1fr!important}}
        @media(max-width:480px){.stories-grid{grid-template-columns:1fr!important}}
      `}</style>

      <section style={{ background: "#1C2826", padding: "80px 0 64px" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "#4A6741", marginBottom: 20 }}>Wedding Stories</div>
          <h1 className="display" style={{ fontSize: "clamp(36px, 5vw, 68px)", color: "#F7F5F1", marginBottom: 48 }}>
            Ceremonies<br />across Tasmania.
          </h1>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: "8px 20px", borderRadius: 1, border: "1px solid",
                  borderColor: activeFilter === f ? "#C4A882" : "rgba(196,168,130,0.3)",
                  background: activeFilter === f ? "rgba(196,168,130,0.12)" : "transparent",
                  color: activeFilter === f ? "#C4A882" : "#8FA89C",
                  fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                  cursor: "pointer", transition: "all 0.2s",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-sm" style={{ background: "#F7F5F1" }}>
        <div className="container">
          <div ref={ref1} className="reveal">
            <div className="stories-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {filtered.map((s, i) => (
                <div key={i} className="story-item" style={{ borderRadius: 2, overflow: "hidden", background: "#1C2826" }}>
                  <div style={{ position: "relative", aspectRatio: i % 3 === 1 ? "4/5" : "3/4" }}>
                    <img className="story-img" src={s.src} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div className="img-overlay" />
                    <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
                      <div className="eyebrow" style={{ color: "#C4A882", marginBottom: 4 }}>{s.tag}</div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 16, color: "#F7F5F1" }}>{s.name}</div>
                      <div style={{ fontSize: 12, color: "rgba(247,245,241,0.6)", marginTop: 2 }}>{s.loc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
