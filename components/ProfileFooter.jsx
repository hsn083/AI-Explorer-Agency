import Link from "next/link";
import Image from "next/image";

export default function ProfileFooter() {
  return (
    <footer className="profile-footer">
      <div className="profile-footer-container">
        <div className="profile-footer-brand">
          <Image 
            src="/assets/logo.webp" 
            alt="AI Explorer Logo" 
            width={42}
            height={42}
            quality={75}
          />
          <span className="profile-footer-name">AI EXPLORER AGENCY</span>
        </div>
        <div className="profile-footer-links">
          <Link href="/#about" className="profile-footer-link">
            About
          </Link>
          <Link href="/#services" className="profile-footer-link">
            Services
          </Link>
          <Link href="/#work" className="profile-footer-link">
            Projects
          </Link>
          <Link href="/#team" className="profile-footer-link">
            Team
          </Link>
          <Link href="/#contact" className="profile-footer-link">
            Contact
          </Link>
        </div>
      </div>
      <p className="profile-footer-copyright">© 2026 AI Explorer Agency. All rights reserved.</p>
    </footer>
  );
}
