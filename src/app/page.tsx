'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      const navbarHeight = navbar?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            <Image
              src="/assets/logo.png"
              alt="AI Explorer Agency Logo"
              width={40}
              height={40}
              className="logo-img"
            />
            <span className="agency-name">AI EXPLORER AGENCY</span>
          </a>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#about" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#about')}>
              About
            </a>
            <a href="#services" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#services')}>
              Services
            </a>
            <a href="#work" className="nav-link" onClick={(e) => handleSmoothScroll(e, '#work')}>
              Projects
            </a>
            <a href="#contact" className="nav-cta" onClick={(e) => handleSmoothScroll(e, '#contact')}>
              Get Started
            </a>
          </div>
          <button
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-container">
            <div className="hero-logo">
              <Image
                src="/assets/logo.png"
                alt="AI Explorer Agency"
                width={80}
                height={80}
                className="hero-logo-img"
              />
            </div>
            <span className="hero-eyebrow">AI • WEB • DIGITAL SOLUTIONS</span>
            <h1 className="hero-title">
              Websites Built to Bring In Customers — <span>Not Just Look Good.</span>
            </h1>
            <p className="hero-subtitle">
              AI Explorer builds business websites and adds AI-powered tools to your existing site — so local businesses get found online, look professional, and turn more visitors into paying customers.
            </p>
            <div className="hero-cta">
              <a href="#work" className="btn btn-primary" onClick={(e) => handleSmoothScroll(e, '#work')}>
                See Our Work <span>→</span>
              </a>
              <a href="#contact" className="btn btn-secondary" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                Get a Free Website Review
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6</span>
                <span className="stat-label">Specialists on Every Project</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Custom-Built, No Templates</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="section-container">
            <div className="about-grid">
              <div className="about-content">
                <span className="section-eyebrow">ABOUT AI EXPLORER</span>
                <h2 className="section-title">
                  Technology That Actually <span>Helps Your Business.</span>
                </h2>
                <p className="about-text">
                  Most agencies hand you a good-looking site and disappear. We do things differently — we build websites and digital tools that are made to be used: by your customers, and by you.
                </p>
                <p className="about-text">
                  We work with businesses that either need a professional website from scratch, or already have one but are missing out on what AI can now do — automated responses, smarter booking, faster customer support. Either way, we start by understanding how your business actually runs before we design or build anything.
                </p>
                <p className="about-text">
                  The result: a site that looks professional, works the way your business needs it to, and doesn't require a developer every time you want to change something.
                </p>
                <a href="#contact" className="text-link" onClick={(e) => handleSmoothScroll(e, '#contact')}>
                  Let's build something meaningful <span>→</span>
                </a>
              </div>
              <div className="about-card">
                <div className="about-card-top">
                  <span className="about-card-number">01</span>
                  <span className="about-card-line"></span>
                </div>
                <h3>
                  From Idea to <span>Live Website.</span>
                </h3>
                <p>
                  Whether it's a brand-new business site or adding AI to one you already have, we follow the same practical process:
                </p>
                <div className="about-points">
                  <div className="about-point">
                    <span>01</span>
                    <p>Understand your business — We learn who your customers are and what your site actually needs to do for you.</p>
                  </div>
                  <div className="about-point">
                    <span>02</span>
                    <p>Design the right experience — A clean, on-brand design built around how real visitors browse and decide.</p>
                  </div>
                  <div className="about-point">
                    <span>03</span>
                    <p>Build with modern technology — Fast, reliable, and easy to maintain — with AI features built in where they help.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider-line"></div>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-eyebrow">WHAT WE DO</span>
              <h2 className="section-title">
                Our <span>Services</span>
              </h2>
              <p className="section-description">
                Practical digital services for businesses that want to look better, work smarter and grow online.
              </p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-number">01</div>
                <div className="service-icon">
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="service-title">Business Websites</h3>
                <p className="service-description">
                  A professional, mobile-friendly website built from scratch — designed to represent your business clearly and turn visitors into customers.
                </p>
                <div className="service-tags">
                  <span>New Builds</span>
                  <span>Branding</span>
                  <span>Mobile-First</span>
                </div>
              </div>
              <div className="service-card">
                <div className="service-number">02</div>
                <div className="service-icon">
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="9" y2="9"/>
                  </svg>
                </div>
                <h3 className="service-title">AI Website Upgrades</h3>
                <p className="service-description">
                  Already have a website? We add AI-powered tools to it — smart chat support, automated booking, review responses, and more — without a full rebuild.
                </p>
                <div className="service-tags">
                  <span>Chatbots</span>
                  <span>Automation</span>
                  <span>Integrations</span>
                </div>
              </div>
              <div className="service-card">
                <div className="service-number">03</div>
                <div className="service-icon">
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M12 3v3"/>
                    <path d="M12 18v3"/>
                    <path d="M3 12h3"/>
                    <path d="M18 12h3"/>
                    <path d="M5.6 5.6l2.1 2.1"/>
                    <path d="M16.3 16.3l2.1 2.1"/>
                    <path d="M18.4 5.6l-2.1 2.1"/>
                    <path d="M7.7 16.3l-2.1 2.1"/>
                    <circle cx="12" cy="12" r="4"/>
                  </svg>
                </div>
                <h3 className="service-title">Web Applications</h3>
                <p className="service-description">
                  Custom web platforms, SaaS products, and internal tools for businesses that need more than a standard website — built on modern, scalable technology.
                </p>
                <div className="service-tags">
                  <span>Custom Builds</span>
                  <span>SaaS Products</span>
                  <span>Scalable</span>
                </div>
              </div>
              <div className="service-card">
                <div className="service-number">04</div>
                <div className="service-icon">
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M3 3v18h18"/>
                    <path d="M7 16l4-5 3 3 5-7"/>
                  </svg>
                </div>
                <h3 className="service-title">Digital Growth</h3>
                <p className="service-description">
                  Ongoing support to help your site perform better over time — SEO, content, and small improvements that add up.
                </p>
                <div className="service-tags">
                  <span>SEO</span>
                  <span>Content</span>
                  <span>Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider-line"></div>

        {/* Work Section */}
        <section id="work" className="work">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-eyebrow">SELECTED WORK</span>
              <h2 className="section-title">
                Projects We've <span>Built</span>
              </h2>
              <p className="section-description">
                A few digital experiences we've worked on across different industries and ideas.
              </p>
            </div>
            <div className="work-grid">
              <article className="work-card">
                <div className="work-image">
                  <div className="work-image-overlay"></div>
                  <Image
                    src="/assets/diarayao.png"
                    alt="Diarayao - Modern web application project by AI Explorer Agency"
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                  <span className="project-category">Web Application</span>
                </div>
                <div className="work-card-content">
                  <div className="project-meta">
                    <span>01</span>
                    <span>2026</span>
                  </div>
                  <h3 className="work-title">Diarayao</h3>
                  <p className="work-description">
                    A modern, custom-built web platform designed around a clean, easy-to-use experience for its users.
                  </p>
                  <a href="https://www.diarayao.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    Visit Project <span>↗</span>
                  </a>
                </div>
              </article>
              <article className="work-card">
                <div className="work-image">
                  <div className="work-image-overlay"></div>
                  <Image
                    src="/assets/aiexplorer.png"
                    alt="AI Explorer - AI platform project showcasing practical AI tools and integrations"
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                  <span className="project-category">AI Platform</span>
                </div>
                <div className="work-card-content">
                  <div className="project-meta">
                    <span>02</span>
                    <span>2026</span>
                  </div>
                  <h3 className="work-title">AI Explorer</h3>
                  <p className="work-description">
                    Our own AI-focused platform, built to explore and showcase practical AI tools and integrations for real business use cases.
                  </p>
                  <a href="https://www.aiexplorer.website/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    Visit Project <span>↗</span>
                  </a>
                </div>
              </article>
              <article className="work-card">
                <div className="work-image">
                  <div className="work-image-overlay"></div>
                  <Image
                    src="/assets/matco.png"
                    alt="MatCo - Professional construction and architectural company website project"
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                  <span className="project-category">Business Website</span>
                </div>
                <div className="work-card-content">
                  <div className="project-meta">
                    <span>03</span>
                    <span>2026</span>
                  </div>
                  <h3 className="work-title">MatCo</h3>
                  <p className="work-description">
                    A professional website for a construction and architectural company — built to establish credibility and clearly present their projects and services to potential clients.
                  </p>
                  <a href="https://matco-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    Visit Project <span>↗</span>
                  </a>
                </div>
              </article>
              <article className="work-card">
                <div className="work-image">
                  <div className="work-image-overlay"></div>
                  <Image
                    src="/assets/alhamdcollection.png"
                    alt="Alhamd Collection - E-commerce storefront project with smooth browsing experience"
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                  <span className="project-category">E-Commerce</span>
                </div>
                <div className="work-card-content">
                  <div className="project-meta">
                    <span>04</span>
                    <span>2026</span>
                  </div>
                  <h3 className="work-title">Alhamd Collection</h3>
                  <p className="work-description">
                    An e-commerce storefront designed to present products cleanly, with a smooth, easy browsing and buying experience.
                  </p>
                  <a href="https://alhamd-collection.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    Visit Project <span>↗</span>
                  </a>
                </div>
              </article>
              <article className="work-card">
                <div className="work-image">
                  <div className="work-image-overlay"></div>
                  <Image
                    src="/assets/hireiq.png"
                    alt="HireIQ - AI-powered hiring platform with specialized agents for recruitment"
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                  <span className="project-category">AI Platform</span>
                </div>
                <div className="work-card-content">
                  <div className="project-meta">
                    <span>05</span>
                    <span>2026</span>
                  </div>
                  <h3 className="work-title">HireIQ</h3>
                  <p className="work-description">
                    An AI-powered hiring platform built with five specialized agents that parse resumes, match candidates to roles, score applicants, and streamline the process from application to interview.
                  </p>
                  <a href="https://hire-iq-sigma.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    Visit Project <span>↗</span>
                  </a>
                </div>
              </article>
              <article className="work-card">
                <div className="work-image">
                  <div className="work-image-overlay"></div>
                  <Image
                    src="/assets/gptcalculator.png"
                    alt="GPA Calculator - AI tool that reads university transcripts and calculates GPA instantly"
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                  <span className="project-category">AI Tool</span>
                </div>
                <div className="work-card-content">
                  <div className="project-meta">
                    <span>06</span>
                    <span>2026</span>
                  </div>
                  <h3 className="work-title">GPA Calculator</h3>
                  <p className="work-description">
                    An AI agent that reads university transcript photos and instantly calculates GPA — built with custom prompt engineering trained to accurately handle different grading formats across universities.
                  </p>
                  <a href="https://gpacheck.online/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    Visit Project <span>↗</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <div className="divider-line"></div>

        {/* Team Section */}
        <section id="team" className="team">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-eyebrow">THE PEOPLE BEHIND THE WORK</span>
              <h2 className="section-title">
                Meet Our <span>Team</span>
              </h2>
              <p className="section-description">
                Our team combines strategy, AI development, web engineering, marketing and creative expertise to build digital solutions that drive real business results.
              </p>
            </div>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-avatar team-photo">
                  <Image
                    src="/assets/members/zafar.png"
                    alt="Zafar - Founder of AI Explorer Agency"
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                </div>
                <div className="team-content">
                  <h3 className="team-name">Zafar</h3>
                  <p className="team-role">Founder</p>
                  <p className="team-bio">
                    Leading the vision behind AI Explorer Agency and shaping the direction of our work.
                  </p>
                  <a href="/profiles/zafar" className="btn btn-outline">
                    View Profile <span>→</span>
                  </a>
                </div>
              </div>
              <div className="team-card featured-card">
                <div className="team-avatar team-photo">
                  <Image
                    src="/assets/members/ubaid.png"
                    alt="Ubaid - CEO and AI Engineer at AI Explorer Agency"
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                </div>
                <div className="team-content">
                  <h3 className="team-name">Ubaid</h3>
                  <p className="team-role">CEO &amp; AI Engineer</p>
                  <p className="team-bio">
                    Full-stack developer specializing in AI-powered systems — building the automation, integrations, and technical backbone behind every project we deliver.
                  </p>
                  <a href="/profiles/ubaid" className="btn btn-outline">
                    View Profile <span>→</span>
                  </a>
                </div>
              </div>
              <div className="team-card">
                <div className="team-avatar team-photo">
                  <Image
                    src="/assets/members/hassan.png"
                    alt="Hassan - MERN Stack Developer and Next.js expert at AI Explorer Agency"
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                </div>
                <div className="team-content">
                  <h3 className="team-name">Hassan</h3>
                  <p className="team-role">MERN Stack Developer | Next.js | SaaS Products</p>
                  <p className="team-bio">
                    Building responsive, reliable web experiences with a focus on clean interfaces and smooth performance.
                  </p>
                  <a href="/profiles/hassan" className="btn btn-outline">
                    View Profile <span>→</span>
                  </a>
                </div>
              </div>
              <div className="team-card">
                <div className="team-avatar team-photo">
                  <Image
                    src="/assets/members/amna.png"
                    alt="Amna - Marketing and SEO Specialist at AI Explorer Agency"
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                </div>
                <div className="team-content">
                  <h3 className="team-name">Amna</h3>
                  <p className="team-role">Marketing &amp; SEO Specialist</p>
                  <p className="team-bio">
                    Helping businesses improve their online visibility through thoughtful marketing and search-focused strategy.
                  </p>
                  <a href="/profiles/amna" className="btn btn-outline">
                    View Profile <span>→</span>
                  </a>
                </div>
              </div>
              <div className="team-card">
                <div className="team-avatar team-photo">
                  <Image
                    src="/assets/members/Chidi%20Okonkwo.png"
                    alt="Chidi Okonkwo - Content Strategist at AI Explorer Agency"
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                </div>
                <div className="team-content">
                  <h3 className="team-name">Chidi Okonkwo</h3>
                  <p className="team-role">Content Strategist</p>
                  <p className="team-bio">
                    Turning complex ideas into clear, engaging content that gives brands a stronger voice.
                  </p>
                  <a href="/profiles/chidi-okonkwo" className="btn btn-outline">
                    View Profile <span>→</span>
                  </a>
                </div>
              </div>
              <div className="team-card">
                <div className="team-avatar team-photo">
                  <Image
                    src="/assets/members/michael.png"
                    alt="Michael Thompson - Project Manager at AI Explorer Agency"
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                </div>
                <div className="team-content">
                  <h3 className="team-name">Michael Thompson</h3>
                  <p className="team-role">Project Manager</p>
                  <p className="team-bio">
                    Keeping projects organized, communication clear, and delivery on track from start to finish.
                  </p>
                  <a href="/profiles/michael" className="btn btn-outline">
                    View Profile <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider-line"></div>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="section-container">
            <div className="contact-wrapper">
              <div className="contact-content">
                <span className="section-eyebrow">LET'S WORK TOGETHER</span>
                <h2 className="section-title">
                  Have an Idea? <span>Let's Build It.</span>
                </h2>
                <p className="contact-description">
                  Tell us a bit about your business or project — we'll take a look and figure out the best way to move forward.
                </p>
                <div className="contact-details">
                  <a href="mailto:aiexplorerinfo01@gmail.com" className="contact-item">
                    <span className="contact-icon">@</span>
                    <span>
                      <small>Email</small>
                      aiexplorerinfo01@gmail.com
                    </span>
                  </a>
                  <a href="tel:+923229404392" className="contact-item">
                    <span className="contact-icon">📞</span>
                    <span>
                      <small>Phone</small>
                      +92 322 9404392
                    </span>
                  </a>
                  <div className="contact-item">
                    <span className="contact-icon">↗</span>
                    <span>
                      <small>Based Online</small>
                      Working with clients worldwide
                    </span>
                  </div>
                </div>
              </div>
              <form
                className="contact-form"
                action="https://formsubmit.co/ac8de5ca45edccbec64350a6d835d3b4"
                method="POST"
              >
                <input type="hidden" name="_subject" value="New Project Inquiry - AI Explorer Agency" />
                <input type="hidden" name="_next" value="https://www.aiexplorer.agency/thank-you" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="project">What do you need?</label>
                  <select id="project" name="project">
                    <option value="">Select a service</option>
                    <option value="business-website">Business Website</option>
                    <option value="saas-product">SaaS Product</option>
                    <option value="custom-website">Custom Website</option>
                    <option value="ai-upgrades">AI Website Upgrades</option>
                    <option value="digital-growth">Digital Growth</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Tell us about your project</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell us about your idea, business or project..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  Send Project Inquiry <span>→</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#home" className="footer-logo" onClick={(e) => handleSmoothScroll(e, '#home')}>
                <Image
                  src="/assets/logo.png"
                  alt="AI Explorer Agency Logo"
                  width={40}
                  height={40}
                  className="footer-logo-img"
                />
                <span className="footer-agency-name">AI EXPLORER AGENCY</span>
              </a>
              <p className="footer-description">
                Building modern websites, AI solutions, and digital experiences for businesses ready to move forward.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Explore</h4>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a>
                <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a>
                <a href="#work" onClick={(e) => handleSmoothScroll(e, '#work')}>Projects</a>
              </div>
              <div className="footer-column">
                <h4>Start</h4>
                <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
                <a href="#work" onClick={(e) => handleSmoothScroll(e, '#work')}>Our Work</a>
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
    </>
  );
}
