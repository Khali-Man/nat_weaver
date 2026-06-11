"use client";
import Link from "next/link";

export default function MobileCtaBanner() {
  return (
    <>
      <style>{`.mobile-cta{display:none!important}@media(max-width:768px){.mobile-cta{display:flex!important; align-items:center; justify-content:space-between;}}`}</style>
      <div
        className="mobile-cta"
        style={{
          position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 90,
          background: "#1C2826", padding: "12px 24px",
          borderTop: "1px solid rgba(196,168,130,0.2)",
        }}
      >
        <div>
          <div style={{ fontSize: 11, color: "#8FA89C", letterSpacing: "0.08em" }}>NAT WEAVER · CELEBRANT</div>
          <div className="stars" style={{ fontSize: 12 }}>★★★★★</div>
        </div>
        <Link href="/contact" className="btn-primary" style={{ padding: "10px 20px", fontSize: 11 }}>
          Get in Touch
        </Link>
      </div>
    </>
  );
}
