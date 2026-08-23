import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Thank You - AI EXPLORER AGENCY',
  description: 'Your project inquiry has been received. Our team will review the details and get back to you soon.',
};

export default function ThankYouPage() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <Image
              src="/assets/logo.png"
              alt="AI Explorer Logo"
              width={40}
              height={40}
              className="logo-img"
            />
            <span className="agency-name">AI EXPLORER AGENCY</span>
          </Link>
        </div>
      </nav>

      {/* Thank You Section */}
      <main className="hero">
        <div className="hero-container">
          <div className="hero-logo">
            <Image
              src="/assets/logo.png"
              alt="AI Explorer Logo"
              width={80}
              height={80}
              className="hero-logo-img"
            />
          </div>

          <span className="hero-eyebrow">AI EXPLORER AGENCY</span>

          <h1 className="hero-title">Thank You</h1>

          <p className="hero-subtitle">
            Your project inquiry has been received.
          </p>

          <p className="hero-description">
            Our team will review the details and get back to you soon.
          </p>

          <div className="hero-cta">
            <Link href="/" className="btn btn-primary">
              Back to Home <span>→</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <Image
                src="/assets/logo.png"
                alt="AI Explorer Logo"
                width={40}
                height={40}
                className="footer-logo-img"
              />
              <span className="footer-agency-name">AI EXPLORER AGENCY</span>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Explore</h4>
                <Link href="/#about">About</Link>
                <Link href="/#services">Services</Link>
                <Link href="/#work">Projects</Link>
              </div>
              <div className="footer-column">
                <h4>Start</h4>
                <Link href="/#contact">Contact</Link>
                <Link href="/#work">Our Work</Link>
                <Link href="mailto:hello@aiexplorer.website">Email Us</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 AI Explorer Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
