import Link from "next/link";

export const metadata = {
  title: "Thank You - AI EXPLORER AGENCY",
};

export default function ThankYouPage() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <img src="/assets/logo.png" alt="AI Explorer Logo" className="logo-img" />
            <span className="agency-name">AI EXPLORER AGENCY</span>
          </Link>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-container">
          <div className="hero-logo">
            <img src="/assets/logo.png" alt="AI Explorer Logo" className="hero-logo-img" />
          </div>

          <span className="hero-eyebrow">AI EXPLORER AGENCY</span>

          <h1 className="hero-title">Thank You</h1>

          <p className="hero-subtitle">Your project inquiry has been received.</p>

          <p className="hero-description">Our team will review the details and get back to you soon.</p>

          <div className="hero-cta">
            <Link href="/" className="btn btn-primary">
              Back to Home
              <span>→</span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/assets/logo.png" alt="AI Explorer Logo" className="footer-logo" />
              <span className="footer-name">AI EXPLORER AGENCY</span>
            </div>
            <div className="footer-links">
              <Link href="/#about" className="footer-link">
                About
              </Link>
              <Link href="/#services" className="footer-link">
                Services
              </Link>
              <Link href="/#work" className="footer-link">
                Projects
              </Link>
              <Link href="/#team" className="footer-link">
                Team
              </Link>
              <Link href="/#contact" className="footer-link">
                Contact
              </Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">© 2026 AI Explorer Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
