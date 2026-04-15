import type { Metadata } from "next";
import ContactForm from "./contactForm";

export const metadata: Metadata = {
  title: "TeamJFK — Real Estate Redefined",
  description:
    "Toronto's premier real estate duo. Buying or selling, we deliver results that move you.",
};

export default function HomePage() {
  return (
    <main className="site-root">
      {/* ─── NAV ─────────────────────────────────────────── */}
      <nav className="nav">
        <span className="nav-logo">
          TEAM<em>JFK</em>
        </span>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#listings">Listings</a>
          </li>
          <li>
            <a href="#results">Results</a>
          </li>
          <li>
            <a href="#contact" className="nav-cta">
              Connect
            </a>
          </li>
        </ul>
      </nav>

      {/* ─── HERO ────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-grain" />
          <div className="hero-glow" />
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">Real Estate · Built on Trust</p>
          <h1 className="hero-headline">
            Your Home.
            <br />
            <span className="hero-accent">Our Mission.</span>
          </h1>
          <p className="hero-sub">
            Two agents. One vision. Whether you&rsquo;re buying your first home
            or scaling your portfolio, TeamJFK brings expertise you can feel in
            every negotiation.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Get a Free Consultation
            </a>
            <a href="#listings" className="btn-ghost">
              Browse Listings →
            </a>
          </div>
        </div>
        <div className="hero-badge" aria-hidden="true">
          <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="60"
              cy="60"
              r="55"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 3"
            />
            <text
              x="50%"
              y="38%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="badge-top"
            >
              TOP
            </text>
            <text
              x="50%"
              y="54%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="badge-main"
            >
              1%
            </text>
            <text
              x="50%"
              y="70%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="badge-bot"
            >
              AGENTS
            </text>
          </svg>
        </div>
      </section>

      {/* ─── STATS ───────────────────────────────────────── */}
      <section className="stats" id="results">
        {[
          { n: "$2.4B+", label: "Total Sales Volume" },
          { n: "850+", label: "Homes Sold" },
          { n: "98%", label: "List-to-Sale Ratio" },
          { n: "14", label: "Years Combined" },
        ].map((s) => (
          <div className="stat-card" key={s.label}>
            <span className="stat-number">{s.n}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ─── AGENTS ──────────────────────────────────────── */}
      <section className="agents" id="about">
        <div className="section-header">
          <p className="section-eyebrow">The Team</p>
          <h2 className="section-title">
            Two Experts. <br />
            One Commitment.
          </h2>
        </div>
        <div className="agents-grid">
          {/* Agent 1 */}
          <div className="agent-card">
            <div className="agent-photo agent-photo--1">
              <div className="agent-photo-inner" />
              <span className="agent-initial">J</span>
            </div>
            <div className="agent-info">
              <h3 className="agent-name">Jabed Khan</h3>
              <p className="agent-title">Buyer Specialist · Luxury Division</p>
              <p className="agent-bio">
                With 8 years navigating Toronto&rsquo;s competitive market,
                James specializes in helping first-time buyers and luxury
                clientele find exactly what they&rsquo;re looking for — often
                before it hits the public listings.
              </p>
              <ul className="agent-badges">
                <li>Luxury Certified</li>
                <li>Top Producer 2023</li>
                <li>TRREB Member</li>
              </ul>
            </div>
          </div>

          {/* Agent 2 */}
          <div className="agent-card agent-card--alt">
            <div className="agent-photo agent-photo--2">
              <div className="agent-photo-inner" />
              <span className="agent-initial">F</span>
            </div>
            <div className="agent-info">
              <h3 className="agent-name">Amy Farzana Islam</h3>
              <p className="agent-title">
                Listing Specialist · Investor Relations
              </p>
              <p className="agent-bio">
                Amy&rsquo;s background in marketing and data-driven pricing
                consistently gets sellers top dollar with minimal days on
                market. Her investor network is unmatched in the GTA.
              </p>
              <ul className="agent-badges">
                <li>Negotiation Expert</li>
                <li>Investor Network</li>
                <li>RE/MAX Hall of Fame</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LISTINGS TEASER ──────────────────────────────── */}
      <section className="listings" id="listings">
        <div className="section-header section-header--center">
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-title">Featured Listings</h2>
        </div>
        <div className="listings-grid">
          {[
            {
              addr: "42 Monarch Ridge Dr",
              city: "Toronto, ON",
              price: "$1,850,000",
              beds: 4,
              baths: 3,
              sqft: "3,200",
              tag: "Active",
            },
            {
              addr: "881 Lakeshore Blvd W",
              city: "Mississauga, ON",
              price: "$975,000",
              beds: 2,
              baths: 2,
              sqft: "1,100",
              tag: "New",
            },
            {
              addr: "15 Briar Hill Ave",
              city: "North York, ON",
              price: "$2,300,000",
              beds: 5,
              baths: 4,
              sqft: "4,500",
              tag: "Sold",
            },
          ].map((l) => (
            <div className="listing-card" key={l.addr}>
              <div
                className={`listing-img listing-img--${l.tag.toLowerCase()}`}
              >
                <span
                  className={`listing-tag listing-tag--${l.tag.toLowerCase()}`}
                >
                  {l.tag}
                </span>
              </div>
              <div className="listing-body">
                <p className="listing-price">{l.price}</p>
                <p className="listing-addr">{l.addr}</p>
                <p className="listing-city">{l.city}</p>
                <div className="listing-meta">
                  <span>{l.beds} bd</span>
                  <span>{l.baths} ba</span>
                  <span>{l.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="listings-cta">
          <a href="#contact" className="btn-primary">
            View All Listings
          </a>
        </div>
      </section>

      {/* ─── TESTIMONIAL ──────────────────────────────────── */}
      <section className="testimonial">
        <div className="testimonial-inner">
          <p className="testimonial-quote">
            &ldquo;TeamJFK sold our house in 4 days for $130K over asking.
            Amy&rsquo;s pricing strategy and James&rsquo;s buyer network made
            it look effortless.&rdquo;
          </p>
          <p className="testimonial-author">— The Okafor Family, North York</p>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────── */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <p className="section-eyebrow">Let&rsquo;s Talk</p>
            <h2 className="section-title">
              Ready to Make
              <br />
              Your Move?
            </h2>
            <p className="contact-body">
              Whether you&rsquo;re buying, selling, or just exploring — a
              conversation with TeamJFK costs nothing and could be the best
              decision you make this year.
            </p>
            <div className="contact-details">
              <p>
                📞 <a href="tel:+14165550100">(416) 555-0100</a>
              </p>
              <p>
                ✉️ <a href="mailto:hello@teamjfk.ca">hello@teamjfk.ca</a>
              </p>
              <p>📍 Bay Street, Toronto, ON</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────── */}
      <footer className="footer">
        <span className="nav-logo">
          TEAM<em>JFK</em>
        </span>
        <p>
          © {new Date().getFullYear()} TeamJFK Real Estate. All rights reserved.
        </p>
        <p className="footer-fine">
          Jabed Khan & Amy Farzana Islam are registered real estate
          professionals under RE/MAX Realtron Realty Inc., Brokerage.
        </p>
      </footer>

      <style>{`
        /* ── FONTS ── */
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        /* ── TOKENS ── */
        :root {
          --ink:       #0d0d0d;
          --off-white: #f5f2ed;
          --cream:     #ede9e2;
          --gold:      #b8973a;
          --gold-lt:   #d4af5a;
          --muted:     #6b6460;
          --card-bg:   #ffffff;
          --border:    rgba(0,0,0,0.09);
          --radius:    4px;
          --ff-head:   'Cormorant Garamond', Georgia, serif;
          --ff-body:   'DM Sans', sans-serif;
        }

        /* ── RESET ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        /* ── BASE ── */
        .site-root {
          font-family: var(--ff-body);
          background: var(--off-white);
          color: var(--ink);
          overflow-x: hidden;
        }

        a { color: inherit; text-decoration: none; }
        ul { list-style: none; }

        /* ── NAV ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.2rem 5vw;
          background: rgba(245,242,237,0.88);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: var(--ff-head);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .nav-logo em { font-style: italic; color: var(--gold); }
        .nav-links {
          display: flex; gap: 2rem; align-items: center;
          font-size: 0.85rem; font-weight: 500; letter-spacing: 0.06em;
        }
        .nav-links a { transition: color .2s; }
        .nav-links a:hover { color: var(--gold); }
        .nav-cta {
          border: 1px solid var(--ink);
          padding: 0.45rem 1.1rem;
          border-radius: var(--radius);
          transition: background .2s, color .2s !important;
        }
        .nav-cta:hover { background: var(--ink) !important; color: var(--off-white) !important; }

        /* ── HERO ── */
        .hero {
          min-height: 100svh;
          display: flex; align-items: center;
          padding: 8rem 5vw 5rem;
          position: relative; overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0; z-index: 0;
        }
        .hero-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.5;
        }
        .hero-glow {
          position: absolute;
          width: 60vw; height: 60vw;
          background: radial-gradient(circle, rgba(184,151,58,0.12) 0%, transparent 70%);
          top: -10%; right: -10%;
          border-radius: 50%;
        }
        .hero-content {
          position: relative; z-index: 1;
          max-width: 640px;
          animation: fadeUp .9s ease both;
        }
        .hero-eyebrow {
          font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--gold); font-weight: 500; margin-bottom: 1.2rem;
        }
        .hero-headline {
          font-family: var(--ff-head);
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 600; line-height: 1.05;
          margin-bottom: 1.5rem;
        }
        .hero-accent { color: var(--gold); font-style: italic; }
        .hero-sub {
          font-size: 1.05rem; color: var(--muted); line-height: 1.7;
          max-width: 480px; margin-bottom: 2.5rem;
        }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .hero-badge {
          position: absolute; right: 6vw; bottom: 6rem; z-index: 1;
          width: 110px; height: 110px;
          color: var(--gold);
          animation: spin 20s linear infinite;
          opacity: 0.7;
        }
        .badge-top, .badge-bot {
          font-family: var(--ff-body);
          font-size: 9px; fill: currentColor; letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .badge-main {
          font-family: var(--ff-head);
          font-size: 28px; fill: currentColor; font-weight: 700;
        }

        /* ── BUTTONS ── */
        .btn-primary {
          display: inline-block;
          background: var(--ink); color: var(--off-white);
          padding: 0.85rem 2rem;
          font-size: 0.85rem; font-weight: 500; letter-spacing: 0.06em;
          border-radius: var(--radius);
          transition: background .2s, transform .15s;
        }
        .btn-primary:hover { background: #222; transform: translateY(-1px); }
        .btn-ghost {
          display: inline-block;
          color: var(--ink);
          padding: 0.85rem 0;
          font-size: 0.85rem; font-weight: 500;
          border-bottom: 1px solid var(--gold);
          transition: color .2s;
        }
        .btn-ghost:hover { color: var(--gold); }
        .btn-full { width: 100%; text-align: center; }

        /* ── STATS ── */
        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: var(--ink);
          color: var(--off-white);
        }
        .stat-card {
          padding: 3rem 2rem;
          border-right: 1px solid rgba(255,255,255,0.07);
          text-align: center;
        }
        .stat-card:last-child { border-right: none; }
        .stat-number {
          display: block;
          font-family: var(--ff-head);
          font-size: 2.8rem; font-weight: 600;
          color: var(--gold-lt); margin-bottom: 0.4rem;
        }
        .stat-label {
          font-size: 0.75rem; letter-spacing: 0.12em;
          text-transform: uppercase; opacity: 0.55;
        }

        /* ── SECTION HEADER ── */
        .section-header { margin-bottom: 3.5rem; }
        .section-header--center { text-align: center; }
        .section-eyebrow {
          font-size: 0.72rem; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--gold);
          font-weight: 500; margin-bottom: 0.8rem;
        }
        .section-title {
          font-family: var(--ff-head);
          font-size: clamp(2rem, 4.5vw, 3.4rem);
          font-weight: 600; line-height: 1.1;
        }

        /* ── AGENTS ── */
        .agents {
          padding: 7rem 5vw;
        }
        .agents-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 2px;
        }
        .agent-card {
          background: var(--card-bg);
          padding: 3rem;
          display: flex; gap: 2rem;
          border: 1px solid var(--border);
          transition: box-shadow .3s;
        }
        .agent-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.08); }
        .agent-card--alt { background: var(--cream); }
        .agent-photo {
          flex-shrink: 0;
          width: 100px; height: 100px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          display: flex; align-items: center; justify-content: center;
        }
        .agent-photo--1 { background: linear-gradient(135deg, #c9a84c, #8a6520); }
        .agent-photo--2 { background: linear-gradient(135deg, #7a8ea0, #3a4f62); }
        .agent-initial {
          font-family: var(--ff-head);
          font-size: 2.5rem; font-weight: 700;
          color: rgba(255,255,255,0.9);
          position: relative; z-index: 1;
        }
        .agent-name {
          font-family: var(--ff-head);
          font-size: 1.5rem; font-weight: 600; margin-bottom: 0.2rem;
        }
        .agent-title {
          font-size: 0.75rem; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 1rem;
        }
        .agent-bio {
          font-size: 0.9rem; color: var(--muted);
          line-height: 1.65; margin-bottom: 1.2rem;
        }
        .agent-badges {
          display: flex; flex-wrap: wrap; gap: 0.4rem;
        }
        .agent-badges li {
          font-size: 0.7rem; letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid var(--border);
          padding: 0.25rem 0.65rem;
          border-radius: 99px; color: var(--muted);
        }

        /* ── LISTINGS ── */
        .listings {
          padding: 7rem 5vw;
          background: var(--cream);
        }
        .listings-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .listing-card {
          background: var(--card-bg);
          border-radius: calc(var(--radius) * 2);
          overflow: hidden;
          border: 1px solid var(--border);
          transition: transform .25s, box-shadow .25s;
        }
        .listing-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
        .listing-img {
          height: 200px; position: relative;
          display: flex; align-items: flex-start; padding: 1rem;
        }
        .listing-img--active { background: linear-gradient(150deg, #b0c4d8, #6a8fa8); }
        .listing-img--new    { background: linear-gradient(150deg, #c8b99a, #8a7055); }
        .listing-img--sold   { background: linear-gradient(150deg, #a0b8a0, #5a7a5a); }
        .listing-tag {
          font-size: 0.68rem; font-weight: 500; letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.3rem 0.7rem; border-radius: 99px;
        }
        .listing-tag--active { background: rgba(255,255,255,0.9); color: #1a5a8a; }
        .listing-tag--new    { background: var(--gold); color: #fff; }
        .listing-tag--sold   { background: rgba(0,0,0,0.6); color: #fff; }
        .listing-body { padding: 1.4rem; }
        .listing-price {
          font-family: var(--ff-head);
          font-size: 1.5rem; font-weight: 600; margin-bottom: 0.25rem;
        }
        .listing-addr {
          font-size: 0.9rem; font-weight: 500; margin-bottom: 0.1rem;
        }
        .listing-city {
          font-size: 0.8rem; color: var(--muted); margin-bottom: 0.8rem;
        }
        .listing-meta {
          display: flex; gap: 1rem;
          font-size: 0.75rem; color: var(--muted); letter-spacing: 0.04em;
        }
        .listings-cta { text-align: center; }

        /* ── TESTIMONIAL ── */
        .testimonial {
          background: var(--ink); color: var(--off-white);
          padding: 6rem 5vw;
          text-align: center;
        }
        .testimonial-inner { max-width: 700px; margin: 0 auto; }
        .testimonial-quote {
          font-family: var(--ff-head);
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-style: italic; line-height: 1.5;
          margin-bottom: 1.5rem;
          color: var(--gold-lt);
        }
        .testimonial-author {
          font-size: 0.8rem; letter-spacing: 0.12em;
          text-transform: uppercase; opacity: 0.5;
        }

        /* ── CONTACT ── */
        .contact { padding: 7rem 5vw; }
        .contact-inner {
          display: grid; grid-template-columns: 1fr 1.2fr; gap: 5rem;
          align-items: start;
        }
        .contact-body {
          font-size: 0.95rem; color: var(--muted);
          line-height: 1.7; margin: 1.5rem 0;
        }
        .contact-details {
          display: flex; flex-direction: column; gap: 0.6rem;
          font-size: 0.9rem;
        }
        .contact-details a { border-bottom: 1px solid transparent; transition: border-color .2s; }
        .contact-details a:hover { border-color: var(--gold); }
        .contact-form {
          display: flex; flex-direction: column; gap: 1rem;
          background: var(--card-bg);
          padding: 2.5rem;
          border: 1px solid var(--border);
          border-radius: calc(var(--radius)*2);
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          font-family: var(--ff-body); font-size: 0.9rem;
          background: var(--off-white);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          color: var(--ink);
          outline: none;
          transition: border-color .2s;
        }
        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus { border-color: var(--gold); }
        .contact-form textarea { resize: vertical; }

        /* ── FOOTER ── */
        .footer {
          background: var(--ink); color: rgba(255,255,255,0.4);
          padding: 2rem 5vw;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 1rem;
          font-size: 0.78rem;
        }
        .footer .nav-logo { color: rgba(255,255,255,0.7); }
        .footer-fine { font-size: 0.7rem; max-width: 440px; }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ── CONTACT SUCCESS ── */
        .contact-success {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: calc(var(--radius)*2);
          padding: 4rem 2.5rem;
          text-align: center;
        }
        .success-icon {
          font-size: 2.5rem; color: var(--gold); margin-bottom: 1rem;
        }
        .success-msg {
          font-family: var(--ff-head);
          font-size: 1.4rem; color: var(--ink);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .stats { grid-template-columns: repeat(2, 1fr); }
          .stat-card:nth-child(2) { border-right: none; }
          .agents-grid { grid-template-columns: 1fr; }
          .agent-card { flex-direction: column; }
          .listings-grid { grid-template-columns: 1fr; }
          .contact-inner { grid-template-columns: 1fr; gap: 3rem; }
        }
        @media (max-width: 600px) {
          .nav-links { display: none; }
          .hero-headline { font-size: 3rem; }
          .stats { grid-template-columns: 1fr 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .hero-badge { display: none; }
        }
      `}</style>
    </main>
  );
}
