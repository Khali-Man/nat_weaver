"use client";
import Link from "next/link";

const pages = [
  { id: "about", label: "About", href: "/about" },
  { id: "ceremonies", label: "Ceremonies", href: "/ceremonies" },
  { id: "stories", label: "Stories", href: "/stories" },
  { id: "kindwords", label: "Kind Words", href: "/kind-words" },
  { id: "faq", label: "FAQ", href: "/faq" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1C2826", color: "#8FA89C", padding: "64px 0 40px" }}>
      <style>{`@media(max-width:600px){.footer-grid{grid-template-columns:1fr!important}}`}</style>
      <div className="container">
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 22, color: "#F7F5F1", marginBottom: 12 }}>Nat Weaver</div>
            <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#8FA89C", marginBottom: 16 }}>Marriage Celebrant</div>
            <div style={{ fontSize: 14, color: "#8FA89C", lineHeight: 1.7 }}>Oyster Cove, Tasmania<br />Ceremonies across TAS &amp; beyond</div>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A6741", marginBottom: 20 }}>Pages</div>
            {pages.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                style={{ display: "block", fontSize: 14, color: "#8FA89C", marginBottom: 10, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F7F5F1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8FA89C")}
              >
                {p.label}
              </Link>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4A6741", marginBottom: 20 }}>Get in Touch</div>
            <div style={{ fontSize: 14, color: "#8FA89C", lineHeight: 1.8 }}>
              <a
                href="tel:+61405687136"
                style={{ display: "block", marginBottom: 8, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F7F5F1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8FA89C")}
              >
                +61 405 687 136
              </a>
              <a
                href="mailto:nat@natweaver.com.au"
                style={{ display: "block", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F7F5F1")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8FA89C")}
              >
                nat@natweaver.com.au
              </a>
              <div style={{ marginTop: 20, fontSize: 12 }}>⭐⭐⭐⭐⭐ 5.0 · Google Reviews</div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: 12, color: "#4A6741" }}>© 2026 Nat Weaver Celebrant. All rights reserved.</div>
          <div style={{ fontSize: 12, color: "#4A6741" }}>Registered Civil Marriage Celebrant · Commonwealth of Australia</div>
        </div>
      </div>
    </footer>
  );
}
