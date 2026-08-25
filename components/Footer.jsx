import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/#home" className="footer-logo">
              <Image 
                src="/assets/logo.webp" 
                alt="AI Explorer Agency Logo" 
                width={42}
                height={42}
                className="footer-logo-img"
              />
              <span className="footer-agency-name">AI Explorer Agency</span>
            </Link>

            <p className="footer-description">
              Building modern websites, AI solutions, and digital experiences for businesses ready to move forward.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Explore</h3>
              <Link href="/#about">About</Link>
              <Link href="/#services">Services</Link>
              <Link href="/#work">Projects</Link>
              <Link href="/#team">Team</Link>
            </div>

            <div className="footer-column">
              <h3>Start</h3>
              <Link href="/#contact">Contact</Link>
              <Link href="/#work">Our Work</Link>
              <a href="mailto:hello@aiexplorer.website">Email Us</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 AI Explorer Agency. All rights reserved.</p>
          <span>Designed &amp; built with purpose.</span>
        </div>
      </div>
    </footer>
  );
}
