"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProfileNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className={`profile-navbar${scrolled ? " scrolled" : ""}`}>
      <div className="profile-nav-container">
        <Link href="/" className="profile-nav-logo">
          <img src="/assets/logo.png" alt="AI Explorer Logo" />
          <span className="profile-nav-name">AI EXPLORER AGENCY</span>
        </Link>

        <div className={`profile-nav-links${menuOpen ? " active" : ""}`}>
          <Link href="/#about" className="profile-nav-link" onClick={closeMenu}>
            About
          </Link>
          <Link href="/#services" className="profile-nav-link" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/#work" className="profile-nav-link" onClick={closeMenu}>
            Projects
          </Link>
          <Link href="/#team" className="profile-nav-link" onClick={closeMenu}>
            Team
          </Link>
          <Link href="/#contact" className="profile-nav-cta" onClick={closeMenu}>
            Get Started
          </Link>
        </div>

        <div
          className={`profile-mobile-menu-btn${menuOpen ? " active" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
