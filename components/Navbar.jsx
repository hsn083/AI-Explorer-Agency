"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-container">
        <Link href="/#home" className="nav-logo" onClick={closeMenu}>
          <Image 
            src="/assets/logo.webp" 
            alt="AI Explorer Agency Logo" 
            width={42}
            height={42}
            className="logo-img"
            priority
            loading="eager"
            fetchPriority="high"
            quality={80}
          />
          <span className="agency-name">AI Explorer Agency</span>
        </Link>

        <div className={`nav-links${menuOpen ? " active" : ""}`}>
          <Link href="/#about" className="nav-link" onClick={closeMenu}>
            About
          </Link>
          <Link href="/#services" className="nav-link" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/#work" className="nav-link" onClick={closeMenu}>
            Projects
          </Link>
          <Link href="/#team" className="nav-link" onClick={closeMenu}>
            Team
          </Link>
          <Link href="/#contact" className="nav-cta" onClick={closeMenu}>
            Get Started
          </Link>
        </div>

        <button
          className={`mobile-menu-btn${menuOpen ? " active" : ""}`}
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
