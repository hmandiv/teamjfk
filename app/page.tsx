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
          <div className="hero-grid" />
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
              Browse Listings <span aria-hidden="true">→</span>
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
              r="57"
              stroke="currentColor"
              strokeOpacity="0.25"
              strokeWidth="1"
            />
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeDasharray="1 4"
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
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="badge-main"
            >
              1%
            </text>
            <text
              x="50%"
              y="71%"
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
        <div className="stats-inner">
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
        </div>
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
              decision you make this year
            </p>
            <div className="contact-details">
              <p>
                <span className="contact-icon" aria-hidden="true">
                  ↳
                </span>
                <a href="tel:+14165550100">(416) 555-0100</a>
              </p>
              <p>
                <span className="contact-icon" aria-hidden="true">
                  ↳
                </span>
                <a href="mailto:hello@teamjfk.ca">hello@teamjfk.ca</a>
              </p>
              <p>
                <span className="contact-icon" aria-hidden="true">
                  ↳
                </span>
                Bay Street, Toronto, ON
              </p>
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');

        /* ── TOKENS ── */
        :root {
          --ink:        #0a0a09;
          --ink-soft:   #17160f;
          --paper:      #faf9f6;
          --cream:      #f1efe8;
          --surface:    #ffffff;
          --brass:      #8f6f37;
          --brass-lt:   #b6934f;
          --slate:      #6b7784;
          --muted:      #6f6a63;
          --muted-lt:   #9a948b;

          --line:       rgba(10,10,9,0.08);
          --line-soft:  rgba(10,10,9,0.05);
          --line-strong:rgba(10,10,9,0.14);
          --line-inv:   rgba(255,255,255,0.12);
          --line-inv-soft: rgba(255,255,255,0.07);

          --r-sm:  8px;
          --r-md:  14px;
          --r-lg:  22px;
          --r-full: 999px;

          --sh-xs: 0 1px 2px rgba(10,10,9,0.04);
          --sh-sm: 0 2px 8px rgba(10,10,9,0.05), 0 1px 2px rgba(10,10,9,0.04);
          --sh-md: 0 10px 30px -8px rgba(10,10,9,0.10), 0 2px 6px rgba(10,10,9,0.04);
          --sh-lg: 0 30px 60px -16px rgba(10,10,9,0.20), 0 8px 20px -8px rgba(10,10,9,0.08);

          --ease: cubic-bezier(0.16, 1, 0.3, 1);

          --ff-head: 'Cormorant Garamond', Georgia, serif;
          --ff-body: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* ── RESET ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        /* ── BASE ── */
        .site-root {
          font-family: var(--ff-body);
          background: var(--paper);
          color: var(--ink);
          overflow-x: hidden;
          font-feature-settings: "cv11", "ss01";
          -webkit-font-smoothing: antialiased;
        }

        a { color: inherit; text-decoration: none; }
        ul { list-style: none; }
        :focus-visible {
          outline: 2px solid var(--brass-lt);
          outline-offset: 3px;
          border-radius: 4px;
        }

        /* ── NAV ── */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1.15rem clamp(1.5rem, 5vw, 4rem);
          background: rgba(250,249,246,0.72);
          backdrop-filter: blur(16px) saturate(1.4);
          -webkit-backdrop-filter: blur(16px) saturate(1.4);
          border-bottom: 1px solid var(--line);
        }
        .nav-logo {
          font-family: var(--ff-head);
          font-size: 1.4rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .nav-logo em { font-style: italic; color: var(--brass); }
        .nav-links {
          display: flex; gap: 2.25rem; align-items: center;
          font-size: 0.82rem; font-weight: 500; letter-spacing: 0.02em;
        }
        .nav-links li { position: relative; }
        .nav-links a { transition: color .25s var(--ease); }
        .nav-links li:not(:last-child) a {
          position: relative;
          padding-bottom: 2px;
        }
        .nav-links li:not(:last-child) a::after {
          content: '';
          position: absolute; left: 0; right: 100%; bottom: -1px;
          height: 1px; background: var(--brass);
          transition: right .3s var(--ease);
        }
        .nav-links li:not(:last-child) a:hover::after { right: 0; }
        .nav-links li:not(:last-child) a:hover { color: var(--ink); }
        .nav-cta {
          border: 1px solid var(--ink);
          padding: 0.5rem 1.15rem;
          border-radius: var(--r-full);
          transition: background .25s var(--ease), color .25s var(--ease), box-shadow .25s var(--ease);
        }
        .nav-cta:hover {
          background: var(--ink);
          color: var(--paper);
          box-shadow: var(--sh-sm);
        }

        /* ── HERO ── */
        .hero {
          min-height: 100svh;
          display: flex; align-items: center;
          padding: 8rem clamp(1.5rem, 5vw, 4rem) 5rem;
          position: relative; overflow: hidden;
        }
        .hero-bg { position: absolute; inset: 0; z-index: 0; }
        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(to right, var(--line-soft) 1px, transparent 1px),
            linear-gradient(to bottom, var(--line-soft) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(ellipse 70% 60% at 30% 30%, black, transparent);
          -webkit-mask-image: radial-gradient(ellipse 70% 60% at 30% 30%, black, transparent);
        }
        .hero-grain {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
        }
        .hero-glow {
          position: absolute;
          width: 50vw; height: 50vw;
          background: radial-gradient(circle, rgba(143,111,55,0.10) 0%, transparent 70%);
          top: -8%; right: -8%;
          border-radius: 50%;
        }
        .hero-content {
          position: relative; z-index: 1;
          max-width: 620px;
          animation: fadeUp .8s var(--ease) both;
        }
        .hero-eyebrow {
          font-size: 0.75rem; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--brass); font-weight: 600; margin-bottom: 1.25rem;
        }
        .hero-headline {
          font-family: var(--ff-head);
          font-size: clamp(3rem, 6.5vw, 5.75rem);
          font-weight: 600; line-height: 1.03; letter-spacing: -0.01em;
          margin-bottom: 1.5rem;
        }
        .hero-accent { color: var(--brass); font-style: italic; }
        .hero-sub {
          font-size: 1.05rem; color: var(--muted); line-height: 1.7;
          max-width: 460px; margin-bottom: 2.5rem;
        }
        .hero-actions { display: flex; gap: 1.25rem; flex-wrap: wrap; align-items: center; }
        .hero-badge {
          position: absolute; right: clamp(1.5rem, 6vw, 6rem); bottom: 6rem; z-index: 1;
          width: 108px; height: 108px;
          color: var(--brass);
          animation: spin 26s linear infinite;
          opacity: 0.85;
        }
        .badge-top, .badge-bot {
          font-family: var(--ff-body);
          font-size: 8.5px; fill: currentColor; letter-spacing: 0.14em;
          text-transform: uppercase; font-weight: 500;
        }
        .badge-main {
          font-family: var(--ff-head);
          font-size: 26px; fill: currentColor; font-weight: 600;
        }

        /* ── BUTTONS ── */
        .btn-primary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: var(--ink); color: var(--paper);
          padding: 0.9rem 1.85rem;
          font-size: 0.82rem; font-weight: 500; letter-spacing: 0.03em;
          border-radius: var(--r-full);
          box-shadow: var(--sh-sm);
          transition: transform .3s var(--ease), box-shadow .3s var(--ease), background .3s var(--ease);
        }
        .btn-primary:hover {
          background: var(--ink-soft);
          transform: translateY(-2px);
          box-shadow: var(--sh-md);
        }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: 0.4rem;
          color: var(--ink);
          padding: 0.9rem 0;
          font-size: 0.82rem; font-weight: 500;
          position: relative;
        }
        .btn-ghost::after {
          content: ''; position: absolute; left: 0; right: 0; bottom: 0.65rem;
          height: 1px; background: var(--brass);
          transform-origin: left;
        }
        .btn-ghost span {
          display: inline-block;
          transition: transform .3s var(--ease);
        }
        .btn-ghost:hover span { transform: translateX(3px); }
        .btn-ghost:hover { color: var(--brass); }
        .btn-full { width: 100%; justify-content: center; }

        /* ── STATS ── */
        .stats { background: var(--ink); color: var(--paper); }
        .stats-inner {
          max-width: 1240px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr);
        }
        .stat-card {
          padding: 3.25rem 2rem;
          border-right: 1px solid var(--line-inv-soft);
          text-align: center;
        }
        .stat-card:last-child { border-right: none; }
        .stat-number {
          display: block;
          font-family: var(--ff-head);
          font-size: 2.75rem; font-weight: 600; letter-spacing: -0.01em;
          color: var(--brass-lt); margin-bottom: 0.4rem;
        }
        .stat-label {
          font-size: 0.72rem; letter-spacing: 0.1em;
          text-transform: uppercase; opacity: 0.5; font-weight: 500;
        }

        /* ── SECTION HEADER ── */
        .section-header { max-width: 1240px; margin: 0 auto 3.5rem; }
        .section-header--center { text-align: center; }
        .section-eyebrow {
          font-size: 0.72rem; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--brass);
          font-weight: 600; margin-bottom: 0.85rem;
        }
        .section-title {
          font-family: var(--ff-head);
          font-size: clamp(2rem, 4.2vw, 3.2rem);
          font-weight: 600; line-height: 1.08; letter-spacing: -0.01em;
        }

        /* ── AGENTS ── */
        .agents { padding: 7rem clamp(1.5rem, 5vw, 4rem); }
        .agents-grid {
          max-width: 1240px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;
        }
        .agent-card {
          background: var(--surface);
          padding: 2.75rem;
          display: flex; gap: 1.75rem;
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          box-shadow: var(--sh-xs);
          transition: box-shadow .35s var(--ease), transform .35s var(--ease), border-color .35s var(--ease);
        }
        .agent-card:hover {
          box-shadow: var(--sh-md);
          transform: translateY(-3px);
          border-color: var(--line-strong);
        }
        .agent-card--alt { background: var(--cream); }
        .agent-photo {
          flex-shrink: 0;
          width: 84px; height: 84px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.14), var(--sh-sm);
        }
        .agent-photo--1 { background: linear-gradient(160deg, var(--brass-lt) 0%, var(--brass) 55%, var(--ink-soft) 130%); }
        .agent-photo--2 { background: linear-gradient(160deg, #8a96a3 0%, var(--slate) 55%, var(--ink-soft) 130%); }
        .agent-initial {
          font-family: var(--ff-head);
          font-size: 2.15rem; font-weight: 600;
          color: rgba(255,255,255,0.92);
        }
        .agent-name {
          font-family: var(--ff-head);
          font-size: 1.4rem; font-weight: 600; margin-bottom: 0.2rem; letter-spacing: -0.005em;
        }
        .agent-title {
          font-size: 0.72rem; letter-spacing: 0.09em;
          text-transform: uppercase; color: var(--brass);
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .agent-bio {
          font-size: 0.9rem; color: var(--muted);
          line-height: 1.65; margin-bottom: 1.25rem;
        }
        .agent-badges { display: flex; flex-wrap: wrap; gap: 0.45rem; }
        .agent-badges li {
          font-size: 0.68rem; letter-spacing: 0.05em;
          font-weight: 500;
          border: 1px solid var(--line);
          padding: 0.3rem 0.7rem;
          border-radius: var(--r-full); color: var(--muted);
          background: var(--paper);
        }

        /* ── LISTINGS ── */
        .listings { padding: 7rem clamp(1.5rem, 5vw, 4rem); background: var(--cream); }
        .listings-grid {
          max-width: 1240px; margin: 0 auto 3rem;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
        }
        .listing-card {
          background: var(--surface);
          border-radius: var(--r-lg);
          overflow: hidden;
          border: 1px solid var(--line);
          box-shadow: var(--sh-xs);
          transition: transform .35s var(--ease), box-shadow .35s var(--ease);
        }
        .listing-card:hover { transform: translateY(-5px); box-shadow: var(--sh-lg); }
        .listing-img {
          height: 190px; position: relative;
          display: flex; align-items: flex-start; padding: 1.1rem;
        }
        .listing-img::after {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
        }
        .listing-img--active { background: linear-gradient(155deg, #9fb0bf, var(--slate)); }
        .listing-img--new    { background: linear-gradient(155deg, var(--brass-lt), var(--brass)); }
        .listing-img--sold   { background: linear-gradient(155deg, #6b6862, var(--ink-soft)); }
        .listing-tag {
          position: relative; z-index: 1;
          font-size: 0.66rem; font-weight: 600; letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.32rem 0.75rem; border-radius: var(--r-full);
          backdrop-filter: blur(6px);
        }
        .listing-tag--active { background: rgba(255,255,255,0.92); color: #3d5468; }
        .listing-tag--new    { background: rgba(10,10,9,0.85); color: #f1e6cc; }
        .listing-tag--sold   { background: rgba(255,255,255,0.14); color: #fff; box-shadow: inset 0 0 0 1px rgba(255,255,255,0.25); }
        .listing-body { padding: 1.5rem; }
        .listing-price {
          font-family: var(--ff-head);
          font-size: 1.5rem; font-weight: 600; margin-bottom: 0.25rem; letter-spacing: -0.005em;
        }
        .listing-addr { font-size: 0.9rem; font-weight: 600; margin-bottom: 0.1rem; }
        .listing-city { font-size: 0.8rem; color: var(--muted); margin-bottom: 1rem; }
        .listing-meta {
          display: flex; gap: 1rem;
          font-size: 0.74rem; color: var(--muted); letter-spacing: 0.02em;
          padding-top: 0.85rem; border-top: 1px solid var(--line);
        }
        .listings-cta { text-align: center; }

        /* ── TESTIMONIAL ── */
        .testimonial {
          background: var(--ink); color: var(--paper);
          padding: 6.5rem clamp(1.5rem, 5vw, 4rem);
          text-align: center;
          position: relative;
        }
        .testimonial-inner { max-width: 680px; margin: 0 auto; }
        .testimonial-quote {
          font-family: var(--ff-head);
          font-size: clamp(1.4rem, 2.8vw, 1.9rem);
          font-style: italic; line-height: 1.5;
          margin-bottom: 1.5rem;
          color: var(--brass-lt);
        }
        .testimonial-author {
          font-size: 0.78rem; letter-spacing: 0.1em;
          text-transform: uppercase; opacity: 0.5; font-weight: 500;
        }

        /* ── CONTACT ── */
        .contact { padding: 7rem clamp(1.5rem, 5vw, 4rem); }
        .contact-inner {
          max-width: 1240px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1.15fr; gap: 4.5rem;
          align-items: start;
        }
        .contact-body { font-size: 0.95rem; color: var(--muted); line-height: 1.7; margin: 1.5rem 0; }
        .contact-details { display: flex; flex-direction: column; gap: 0.7rem; font-size: 0.9rem; }
        .contact-details p { display: flex; align-items: center; gap: 0.65rem; }
        .contact-icon { color: var(--brass); font-size: 0.85rem; }
        .contact-details a { border-bottom: 1px solid transparent; transition: border-color .25s var(--ease), color .25s var(--ease); }
        .contact-details a:hover { border-color: var(--brass); color: var(--brass); }
        .contact-form {
          display: flex; flex-direction: column; gap: 1rem;
          background: var(--surface);
          padding: 2.5rem;
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          box-shadow: var(--sh-sm);
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          font-family: var(--ff-body); font-size: 0.9rem;
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: var(--r-sm);
          color: var(--ink);
          outline: none;
          transition: border-color .2s var(--ease), box-shadow .2s var(--ease);
        }
        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus {
          border-color: var(--brass);
          box-shadow: 0 0 0 3px rgba(143,111,55,0.12);
        }
        .contact-form input::placeholder,
        .contact-form textarea::placeholder { color: var(--muted-lt); }
        .contact-form textarea { resize: vertical; }

        /* ── FOOTER ── */
        .footer {
          background: var(--ink); color: rgba(255,255,255,0.4);
          padding: 2rem clamp(1.5rem, 5vw, 4rem);
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 1rem;
          font-size: 0.78rem;
          border-top: 1px solid var(--line-inv-soft);
        }
        .footer .nav-logo { color: rgba(255,255,255,0.75); }
        .footer-fine { font-size: 0.7rem; max-width: 440px; opacity: 0.85; }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        @media (prefers-reduced-motion: reduce) {
          .hero-content, .hero-badge { animation: none; }
          * { transition-duration: 0.01ms !important; }
        }

        /* ── CONTACT SUCCESS ── */
        .contact-success {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: var(--r-lg);
          padding: 4rem 2.5rem;
          text-align: center;
          box-shadow: var(--sh-sm);
        }
        .success-icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 50%;
          background: var(--brass); color: #fff;
          font-size: 1.1rem; margin-bottom: 1.25rem;
        }
        .success-msg { font-family: var(--ff-head); font-size: 1.35rem; color: var(--ink); }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-card:nth-child(2) { border-right: none; }
          .agents-grid { grid-template-columns: 1fr; }
          .agent-card { flex-direction: column; }
          .listings-grid { grid-template-columns: 1fr; }
          .contact-inner { grid-template-columns: 1fr; gap: 3rem; }
        }
        @media (max-width: 600px) {
          .nav-links { display: none; }
          .hero-headline { font-size: 2.75rem; }
          .stats-inner { grid-template-columns: 1fr 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .hero-badge { display: none; }
        }
      `}</style>
    </main>
  );
}
