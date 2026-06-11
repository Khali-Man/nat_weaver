"use client";
import { useState } from "react";
import Link from "next/link";
import useReveal from "../../components/useReveal";

const faqs = [
  {
    q: "How far in advance should I book?",
    a: "Popular dates — especially summer weekends and long weekends — book 12–18 months out. That said, Nat sometimes has availability at shorter notice, so it's always worth reaching out. The sooner you enquire, the better chance of securing your date.",
  },
  {
    q: "Does Nat travel outside Hobart?",
    a: "Yes — Nat travels across Tasmania for ceremonies, including Bruny Island, the East Coast, Strahan, the Huon Valley, Launceston, and the Tasmanian Highlands. Travel fees may apply for remote or extended-distance ceremonies.",
  },
  {
    q: "How long does a ceremony typically run?",
    a: "Most wedding ceremonies are between 20 and 35 minutes, depending on how many readings, rituals, or personal elements you'd like to include. Elopements can be as intimate as 10–15 minutes. Nat will help you find the right length for your vision.",
  },
  {
    q: "What's involved in the ceremony writing process?",
    a: "After your initial conversation, Nat will send you a detailed questionnaire about your relationship, your story, and the tone you're after. She'll then write a first draft of your ceremony script, share it with you, and refine it through as many rounds of feedback as you need. Nothing is finalised until you love every word.",
  },
  {
    q: "Can we write our own vows?",
    a: "Absolutely — and Nat encourages it. She can guide you through the process of writing vows that feel authentic without being overwhelming. She'll also let you know the legal requirements so you can be creative within them.",
  },
  {
    q: "Does Nat handle the legal paperwork?",
    a: "Yes. All legal requirements — including the Notice of Intended Marriage, the Declaration of No Legal Impediment, and lodgement with the Registry of Births, Deaths and Marriages — are handled by Nat. You won't need to think about any of it.",
  },
  {
    q: "What happens if Nat is ill or unable to attend?",
    a: "In the very unlikely event of an emergency, Nat has a trusted network of fellow celebrants in Tasmania who can step in. She takes her commitment to your day extremely seriously and has contingency plans in place.",
  },
  {
    q: "How much does a ceremony with Nat cost?",
    a: "Pricing is tailored to the ceremony type, location, and any travel involved. Nat is transparent about all costs from your very first conversation. To receive a personalised quote, reach out via the contact page.",
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState(null);
  const ref1 = useReveal();

  return (
    <div style={{ paddingTop: 72 }}>
      <section style={{ background: "#1C2826", padding: "80px 0 64px" }}>
        <div className="container">
          <div className="eyebrow" style={{ color: "#4A6741", marginBottom: 20 }}>Frequently asked</div>
          <h1 className="display" style={{ fontSize: "clamp(36px, 5vw, 68px)", color: "#F7F5F1" }}>
            Questions<br />answered.
          </h1>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#F7F5F1" }}>
        <div className="container">
          <div ref={ref1} className="reveal" style={{ maxWidth: 820, margin: "0 auto" }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                  <span style={{ fontSize: 16, fontWeight: 400, color: "#1C2826" }}>{faq.q}</span>
                  <span
                    style={{
                      fontSize: 22, color: "#C4A882",
                      transform: open === i ? "rotate(45deg)" : "none",
                      transition: "transform 0.3s",
                      flexShrink: 0,
                      display: "inline-block",
                    }}
                  >+</span>
                </button>
                {open === i && <div className="faq-a">{faq.a}</div>}
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 64 }}>
            <p style={{ color: "#5A6360", fontSize: 16, marginBottom: 24 }}>Have a question not answered here?</p>
            <Link href="/contact" className="btn-primary">Ask Nat directly →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
