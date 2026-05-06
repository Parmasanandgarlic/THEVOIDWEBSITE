import { Copy, ExternalLink, Send, Menu, X } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useState, useRef } from 'react';
import './index.css';

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

const CONTRACT_ADDRESS = "COMING SOON";

const VOID_QUOTES = [
  {
    text: "\"If you gaze long into the void, the void also gazes into you.\"",
    attr: "— Nietzsche, but make it Solana"
  },
  {
    text: "\"The void doesn't judge. The void doesn't care. The void just vibes.\"",
    attr: "— Ancient Degen Proverb"
  },
  {
    text: "\"pls don't be sad. The Void thinks ur rlly cute.\"",
    attr: "— The Void itself"
  },
  {
    text: "\"If y'all need anything, I'll be chillin in the void.\"",
    attr: "— Every degen at 3 AM"
  },
  {
    text: "\"You barely stared into THE VOID today. You ok babe?\"",
    attr: "— Your concerned friend"
  },
  {
    text: "\"Thanks for always being there for me, the void.\"",
    attr: "— Wojak"
  }
];

const MEME_IMAGES = [
  { src: '/memes/void-cute.png', alt: 'pls dont be sad - The Void thinks ur rlly cute' },
  { src: '/memes/void-chillin.png', alt: 'Chillin in the void' },
  { src: '/memes/void-staring.png', alt: 'Stop staring at me - Black hole' },
  { src: '/memes/void-abyss.png', alt: 'Thank you for contacting the abyss' },
  { src: '/memes/void-babe.jpg', alt: 'You ok babe? You barely stared into the void today' },
  { src: '/memes/void-thanks.png', alt: 'Thanks for always being there for me, the void' },
];

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyToClipboard = async () => {
    if (CONTRACT_ADDRESS === "COMING SOON") return;
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.warn('Clipboard copy failed');
    }
  };

  return (
    <div>
      {/* Fixed background layers */}
      <div className="void-bg" />
      <div className="starfield" />

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-track">
          <span className="marquee-content">
            $VOID ◈ STARE INTO THE ABYSS ◈ THE VOID STARES BACK ◈ EMBRACE THE DARKNESS ◈ $VOID ON SOLANA ◈ YOU CAN'T ESCAPE THE VOID ◈ THE VOID IS INEVITABLE ◈ PUMP FUN ◈ THE VOID CONSUMES ALL ◈&nbsp;
          </span>
          <span className="marquee-content" aria-hidden="true">
            $VOID ◈ STARE INTO THE ABYSS ◈ THE VOID STARES BACK ◈ EMBRACE THE DARKNESS ◈ $VOID ON SOLANA ◈ YOU CAN'T ESCAPE THE VOID ◈ THE VOID IS INEVITABLE ◈ PUMP FUN ◈ THE VOID CONSUMES ALL ◈&nbsp;
          </span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <a href="#" className="navbar-logo">THE VOID</a>
        <ul className="navbar-links">
          <li><a href="#about">The Abyss</a></li>
          <li><a href="#memes">Memes</a></li>

          <li>
            <a href="https://x.com/thevoidonsol" target="_blank" rel="noopener noreferrer">
              <XIcon size={14} /> Twitter
            </a>
          </li>
          <li>
            <a href="https://t.me/thevoidsolana" target="_blank" rel="noopener noreferrer">
              <Send size={14} /> Telegram
            </a>
          </li>
          <li>
            <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="nav-cta">
              Buy $VOID
            </a>
          </li>
        </ul>
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>The Abyss</a>
        <a href="#memes" onClick={() => setMobileMenuOpen(false)}>Memes</a>

        <a href="https://x.com/thevoidonsol" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Twitter</a>
        <a href="https://t.me/thevoidsolana" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Telegram</a>
        <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="nav-cta" style={{ textAlign: 'center', borderRadius: '4px' }} onClick={() => setMobileMenuOpen(false)}>Buy $VOID</a>
      </div>

      <main>
        {/* ===== HERO ===== */}
        <section className="hero">
          {/* Pulsing vortex behind title */}
          <div className="hero-vortex" />
          <div className="pulse-ring" style={{ width: 300, height: 300 }} />
          <div className="pulse-ring" style={{ width: 450, height: 450, animationDelay: '1.5s' }} />
          <div className="pulse-ring" style={{ width: 600, height: 600, animationDelay: '3s' }} />

          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80, damping: 15 }}
            style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* SVG noise filter for TV static */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
              <filter id="tv-static" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="3" seed="0" stitchTiles="stitch" result="noise">
                  <animate attributeName="seed" from="0" to="80" dur="1s" repeatCount="indefinite" />
                </feTurbulence>
                <feComponentTransfer in="noise" result="crispy">
                  <feFuncR type="discrete" tableValues="0 0 0 1 1" />
                  <feFuncG type="discrete" tableValues="0 0 0 1 1" />
                  <feFuncB type="discrete" tableValues="0 0 0 1 1" />
                </feComponentTransfer>
              </filter>
            </svg>

            <div className="title-static-wrap">
              <h1 className="hero-title glitch-text" data-text="THE VOID">
                THE VOID
              </h1>
              <div className="static-overlay" />
            </div>
            <p className="hero-subtitle">
              Stare into the abyss. The abyss stares back.<br />
              <span>$VOID</span> — the darkness on Solana that consumes all.
            </p>

            <div className="ca-box">
              <span className="ca-label">Contract Address:</span>
              <span className="ca-address">{CONTRACT_ADDRESS}</span>
              <button className="ca-copy-btn" onClick={copyToClipboard}>
                <Copy size={14} />
                {copied ? 'COPIED!' : 'COPY CA'}
              </button>
            </div>

            <div className="hero-ctas">
              <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <ExternalLink size={16} /> Buy on Pump.fun
              </a>
              <a href="#about" className="btn-secondary">
                Enter The Void ↓
              </a>
            </div>
          </motion.div>
        </section>

        <div className="void-separator" />

        {/* ===== ABOUT ===== */}
        <section id="about" className="about-section">
          <AnimatedSection>
            <div className="about-content">
              <h2 className="section-title glow-text">What Is The Void?</h2>
              <p className="about-text">
                You've felt it. That endless pull into <em>nothingness</em>. The late-night scroll into oblivion.
                The existential dread that somehow feels like home. <em>The Void</em> isn't just a token — it's a state of being.
              </p>
              <p className="about-text">
                Born on Solana. Launched on <em>Pump.fun</em>. The Void doesn't promise you riches. It doesn't promise you anything.
                It simply <em>exists</em> — and it invites you to exist with it. No roadmap to the moon. Just a one-way ticket to the abyss.
              </p>

              <div className="void-quotes">
                {VOID_QUOTES.map((q, i) => (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <div className="void-quote-card">
                      <p>{q.text}</p>
                      <div className="quote-attr">{q.attr}</div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        <div className="void-separator" />

        {/* ===== MEME GALLERY ===== */}
        <section id="memes" className="meme-section">
          <AnimatedSection>
            <div className="about-content">
              <h2 className="section-title glow-text">Void Memes</h2>
              <p className="about-text">
                The Void speaks in memes. Save them. Share them. <em>Become them.</em>
              </p>
            </div>
          </AnimatedSection>

          <div className="meme-grid">
            {MEME_IMAGES.map((meme, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="meme-card">
                  <img src={meme.src} alt={meme.alt} loading="lazy" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>




        {/* ===== COMMUNITY ===== */}
        <section id="community" className="community-section">
          <AnimatedSection>
            <h2 className="section-title glow-text">Join The Void</h2>
            <p className="about-text" style={{ maxWidth: 500, margin: '0 auto 0' }}>
              The void is not a place. It's a <em>community</em>. Enter the darkness. Find your people.
            </p>

            <div className="community-links">
              <a href="https://x.com/thevoidonsol" target="_blank" rel="noopener noreferrer" className="community-card">
                <div className="card-icon"><XIcon size={28} /></div>
                <div className="card-label">Twitter / X</div>
              </a>
              <a href="https://t.me/thevoidsolana" target="_blank" rel="noopener noreferrer" className="community-card">
                <div className="card-icon"><Send size={28} /></div>
                <div className="card-label">Telegram</div>
              </a>
              <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="community-card">
                <div className="card-icon"><ExternalLink size={28} /></div>
                <div className="card-label">Pump.fun</div>
              </a>
            </div>
          </AnimatedSection>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="https://x.com/thevoidonsol" target="_blank" rel="noopener noreferrer">
            <XIcon size={14} /> Twitter
          </a>
          <a href="https://t.me/thevoidsolana" target="_blank" rel="noopener noreferrer">
            <Send size={14} /> Telegram
          </a>
          <a href="https://pump.fun" target="_blank" rel="noopener noreferrer">
            <ExternalLink size={14} /> Pump.fun
          </a>
        </div>
        <p className="footer-disclaimer">
          $VOID is a memecoin created for entertainment purposes only. It holds no intrinsic value and makes no promises of financial return.
          The void consumes all, including your expectations. Not financial advice. DYOR. Protect your capital.
        </p>
      </footer>
    </div>
  );
}
