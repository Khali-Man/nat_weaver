"use client";

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body {
        background: #F7F5F1;
        color: #1C2826;
        font-family: 'Jost', sans-serif;
        font-weight: 400;
        line-height: 1.75;
        -webkit-font-smoothing: antialiased;
      }

      .display {
        font-family: 'Playfair Display', Georgia, serif;
        font-style: italic;
        font-weight: 400;
        line-height: 1.1;
        letter-spacing: -0.01em;
      }
      .serif { font-family: 'Playfair Display', Georgia, serif; font-weight: 400; line-height: 1.2; }
      .eyebrow {
        font-family: 'Jost', sans-serif;
        font-weight: 300;
        font-size: 11px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #9E8C7A;
      }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(24px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to   { opacity: 1; }
      }
      @keyframes kenBurns {
        from { transform: scale(1.0); }
        to   { transform: scale(1.04); }
      }

      .fade-up { animation: fadeUp 0.7s ease-out both; }
      .fade-in { animation: fadeIn 0.6s ease-out both; }

      .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
      .reveal.visible { opacity: 1; transform: translateY(0); }

      a { color: inherit; text-decoration: none; }

      .nav-link {
        font-family: 'Jost', sans-serif;
        font-weight: 300;
        font-size: 13px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #F7F5F1;
        opacity: 0.85;
        transition: opacity 0.2s;
        cursor: pointer;
      }
      .nav-link:hover { opacity: 1; }

      .btn-primary {
        display: inline-block;
        padding: 14px 36px;
        background: #1C2826;
        color: #F7F5F1;
        font-family: 'Jost', sans-serif;
        font-weight: 400;
        font-size: 12px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        border: none;
        border-radius: 1px;
        cursor: pointer;
        transition: background 0.25s, transform 0.15s;
      }
      .btn-primary:hover { background: #2D3F3C; transform: translateY(-1px); }

      .btn-outline {
        display: inline-block;
        padding: 13px 34px;
        background: transparent;
        color: #F7F5F1;
        font-family: 'Jost', sans-serif;
        font-weight: 400;
        font-size: 12px;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        border: 1px solid rgba(247,245,241,0.5);
        border-radius: 1px;
        cursor: pointer;
        transition: border-color 0.25s, background 0.25s;
      }
      .btn-outline:hover { border-color: #F7F5F1; background: rgba(247,245,241,0.08); }

      .btn-ghost {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background: none;
        border: none;
        border-bottom: 1px solid #4A6741;
        padding: 2px 0 4px;
        color: #4A6741;
        font-family: 'Jost', sans-serif;
        font-weight: 400;
        font-size: 13px;
        letter-spacing: 0.06em;
        cursor: pointer;
        transition: gap 0.2s;
      }
      .btn-ghost:hover { gap: 14px; }

      input, textarea, select {
        width: 100%;
        padding: 14px 0;
        background: transparent;
        border: none;
        border-bottom: 1px solid #C4A882;
        border-radius: 0;
        font-family: 'Jost', sans-serif;
        font-weight: 300;
        font-size: 15px;
        color: #1C2826;
        outline: none;
        transition: border-color 0.2s;
        -webkit-appearance: none;
      }
      input::placeholder, textarea::placeholder { color: #9E8C7A; }
      input:focus, textarea:focus { border-bottom-color: #4A6741; }
      label {
        display: block;
        font-family: 'Jost', sans-serif;
        font-size: 10px;
        font-weight: 400;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: #9E8C7A;
        margin-bottom: 4px;
      }
      textarea { resize: vertical; min-height: 100px; line-height: 1.6; }

      .divider { width: 40px; height: 1px; background: #C4A882; margin: 24px 0; }
      .stars { color: #C4A882; font-size: 14px; letter-spacing: 2px; }

      .img-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(28,40,38,0.7) 0%, rgba(28,40,38,0.1) 60%, transparent 100%);
      }

      .section-pad { padding: 96px 0; }
      .section-pad-sm { padding: 64px 0; }

      .container { max-width: 1280px; margin: 0 auto; padding: 0 48px; }
      @media (max-width: 768px) { .container { padding: 0 24px; } }
      @media (max-width: 480px) { .container { padding: 0 20px; } }
      @media (max-width: 768px) { .section-pad { padding: 64px 0; } .section-pad-sm { padding: 48px 0; } }

      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: #F0EBE2; }
      ::-webkit-scrollbar-thumb { background: #8FA89C; border-radius: 2px; }

      .mobile-nav {
        position: fixed;
        inset: 0;
        background: #1C2826;
        z-index: 200;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 40px;
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(0.77,0,0.175,1);
      }
      .mobile-nav.open { transform: translateX(0); }
      .mobile-nav-link {
        font-family: 'Playfair Display', serif;
        font-style: italic;
        font-size: 32px;
        color: #F7F5F1;
        opacity: 0.9;
        cursor: pointer;
        transition: opacity 0.2s;
      }
      .mobile-nav-link:hover { opacity: 1; }

      .testimonial-card {
        background: #F0EBE2;
        padding: 40px;
        border-radius: 2px;
      }
      @media (max-width: 480px) { .testimonial-card { padding: 28px 24px; } }

      .story-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition: transform 0.6s ease;
      }
      .story-item:hover .story-img { transform: scale(1.03); }
      .story-item { overflow: hidden; cursor: pointer; position: relative; }

      .process-step { display: flex; gap: 32px; align-items: flex-start; }
      .step-number {
        font-family: 'Playfair Display', serif;
        font-style: italic;
        font-size: 48px;
        color: #C4A882;
        line-height: 1;
        min-width: 48px;
      }

      .ceremony-card {
        border: 1px solid #E8E2D9;
        padding: 40px;
        border-radius: 2px;
        background: #FAFAF8;
        transition: border-color 0.3s, transform 0.3s;
      }
      .ceremony-card:hover { border-color: #8FA89C; transform: translateY(-4px); }

      .faq-item { border-bottom: 1px solid #E8E2D9; }
      .faq-q {
        width: 100%;
        background: none;
        border: none;
        text-align: left;
        padding: 24px 0;
        font-family: 'Jost', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #1C2826;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
      }
      .faq-a { padding-bottom: 24px; font-size: 15px; color: #5A6360; line-height: 1.8; }

      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
      }
    `}</style>
  );
}
