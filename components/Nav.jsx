"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Ceremonies", href: "/ceremonies" },
  { label: "Stories", href: "/stories" },
  { label: "Kind Words", href: "/kind-words" },
  { label: "FAQ", href: "/faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setMenuOpen(false);
    router.push(href);
  };

  return (
    <>
      <style>{`
        @media(max-width:768px){.desktop-nav{display:none!important}}
        .hamburger{display:none!important}
        @media(max-width:768px){.hamburger{display:block!important}}
      `}</style>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 48px",
        height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(28,40,38,0.97)",
        backdropFilter: "blur(8px)",
      }}>
        <Link href="/" style={{ background: "none", border: "none", cursor: "pointer", padding: 0, textDecoration: "none" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 20, color: "#F7F5F1", letterSpacing: "0.02em" }}>
            Nat Weaver
          </div>
          <div className="eyebrow" style={{ fontSize: 9, letterSpacing: "0.2em", color: "#8FA89C", marginTop: 1 }}>
            Marriage Celebrant · Tasmania
          </div>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="desktop-nav">
          {navItems.map((n) => (
            <Link key={n.href} href={n.href} className="nav-link">{n.label}</Link>
          ))}
          <Link href="/contact" className="btn-outline" style={{ padding: "10px 24px", fontSize: 11 }}>
            Get in Touch
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
          className="hamburger"
          aria-label="Menu"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ width: 24, height: 1, background: "#F7F5F1", borderRadius: 1 }} />
            ))}
          </div>
        </button>
      </nav>

      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <button
          onClick={() => setMenuOpen(false)}
          style={{ position: "absolute", top: 28, right: 28, background: "none", border: "none", cursor: "pointer", color: "#F7F5F1", fontSize: 28 }}
        >✕</button>
        {navItems.map((n) => (
          <span key={n.href} className="mobile-nav-link" onClick={() => go(n.href)}>{n.label}</span>
        ))}
        <button className="btn-primary" onClick={() => go("/contact")} style={{ marginTop: 8 }}>Get in Touch</button>
      </div>
    </>
  );
}
