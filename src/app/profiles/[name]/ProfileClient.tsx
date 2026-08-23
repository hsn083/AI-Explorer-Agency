'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TeamMember } from '@/lib/team-data';

export default function ProfileClient({ member }: { member: TeamMember }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Profile Navbar */}
      <nav className={`profile-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="profile-nav-container">
          <Link href="/" className="profile-nav-logo">
            <Image
              src="/assets/logo.png"
              alt="AI Explorer Logo"
              width={40}
              height={40}
            />
            <span className="profile-nav-name">AI EXPLORER AGENCY</span>
          </Link>
          <div className={`profile-nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link href="/#about" className="profile-nav-link">About</Link>
            <Link href="/#services" className="profile-nav-link">Services</Link>
            <Link href="/#work" className="profile-nav-link">Projects</Link>
            <Link href="/#contact" className="profile-nav-cta">Get Started</Link>
          </div>
          <div
            className={`profile-mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Profile Hero Section */}
      <section className="profile-hero">
        <div className="profile-hero-container">
          <div className="profile-hero-content">
            <span className="profile-eyebrow">AI EXPLORER AGENCY • TEAM PROFILE</span>
            <h1 className="profile-name">{member.name}</h1>
            <p className="profile-role">{member.role}</p>
            <p className="profile-intro">{member.intro}</p>
            
            <div className="profile-meta">
              <div className="profile-meta-item">
                <span className="profile-meta-label">Role</span>
                <span className="profile-meta-value">{member.meta.role}</span>
              </div>
              <div className="profile-meta-item">
                <span className="profile-meta-label">Focus</span>
                <span className="profile-meta-value">{member.meta.focus}</span>
              </div>
              <div className="profile-meta-item">
                <span className="profile-meta-label">Based in</span>
                <span className="profile-meta-value">{member.meta.location}</span>
              </div>
              <div className="profile-meta-item">
                <span className="profile-meta-label">Core Stack</span>
                <span className="profile-meta-value">{member.meta.stack}</span>
              </div>
            </div>
          </div>
          
          <div className="profile-hero-image">
            <div className="profile-image-wrapper">
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                width={300}
                height={300}
              />
              <div className="profile-image-badge">{member.badge}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="profile-section">
        <h2 className="profile-section-title">About {member.name}</h2>
        <div className="profile-section-content">
          {member.about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="profile-section">
        <h2 className="profile-section-title">Areas of Expertise</h2>
        <div className="expertise-grid">
          {member.expertise.map((item, index) => (
            <div key={index} className="expertise-card">
              <div className="expertise-card-icon">{item.icon}</div>
              <div className="expertise-card-title">{item.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Role Section */}
      <section className="profile-section">
        <h2 className="profile-section-title">Role at AI Explorer</h2>
        <div className="profile-section-content">
          {member.roleAtAgency.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Work Philosophy Section */}
      <section className="profile-section">
        <h2 className="profile-section-title">How I Work</h2>
        <div className="philosophy-card">
          <p className="philosophy-text">{member.philosophy}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="profile-cta">
        <h2 className="profile-cta-title">Let's Build Something Better</h2>
        <p className="profile-cta-text">Have an idea, project or business challenge? Let's talk about how AI Explorer can help.</p>
        <div className="profile-cta-buttons">
          <Link href="/#contact" className="profile-cta-primary">Start a Project →</Link>
        </div>
      </section>

      {/* Profile Footer */}
      <footer className="profile-footer">
        <div className="profile-footer-container">
          <div className="profile-footer-brand">
            <Image
              src="/assets/logo.png"
              alt="AI Explorer Logo"
              width={40}
              height={40}
            />
            <span className="profile-footer-name">AI EXPLORER AGENCY</span>
          </div>
          <div className="profile-footer-links">
            <Link href="/#about" className="profile-footer-link">About</Link>
            <Link href="/#services" className="profile-footer-link">Services</Link>
            <Link href="/#work" className="profile-footer-link">Projects</Link>
            <Link href="/#contact" className="profile-footer-link">Contact</Link>
          </div>
        </div>
        <p className="profile-footer-copyright">© 2026 AI Explorer Agency. All rights reserved.</p>
      </footer>
    </>
  );
}
