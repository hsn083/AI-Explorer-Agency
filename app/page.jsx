import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ServiceIcon from "@/components/ServiceIcon";
import TeamPhoto from "@/components/TeamPhoto";
import { services, projects, teamMembers } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-container">
            <div className="hero-logo">
              <Image 
                src="/assets/logo.webp" 
                alt="AI Explorer Agency" 
                width={58}
                height={58}
                className="hero-logo-img"
                priority
              />
            </div>

            <span className="hero-eyebrow">AI • Web • Digital Solutions</span>

            <h1 className="hero-title">
              Websites Built to Bring In Customers — Not Just Look Good.
            </h1>

            <p className="hero-subtitle">
              AI Explorer builds business websites and adds AI-powered tools to your existing site — so
              local businesses get found online, look professional, and turn more visitors into paying
              customers.
            </p>

            <div className="hero-cta">
              <Link href="#work" className="btn btn-primary">
                See Our Work
                <span>→</span>
              </Link>
              <Link href="#contact" className="btn btn-secondary">
                Get a Free Website Review
              </Link>
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

        {/* ABOUT */}
        <section id="about" className="about">
          <div className="section-container">
            <div className="about-grid">
              <div className="about-content">
                <span className="section-eyebrow">ABOUT AI EXPLORER</span>

                <h2 className="section-title">
                  Technology That Actually <span>Helps Your Business.</span>
                </h2>

                <p className="about-text">
                  Most agencies hand you a good-looking site and disappear. We do things differently — we
                  build websites and digital tools that are made to be used: by your customers, and by
                  you.
                </p>

                <p className="about-text">
                  We work with businesses that either need a professional website from scratch, or already
                  have one but are missing out on what AI can now do — automated responses, smarter
                  booking, faster customer support. Either way, we start by understanding how your business
                  actually runs before we design or build anything.
                </p>

                <p className="about-text">
                  The result: a site that looks professional, works the way your business needs it to, and
                  doesn&apos;t require a developer every time you want to change something.
                </p>

                <Link href="#contact" className="btn btn-secondary">
                  Let&apos;s build something meaningful
                  <span>→</span>
                </Link>
              </div>

              <div className="about-card">
                <div className="about-card-top">
                  <span className="about-card-number">PROCESS</span>
                  <span className="about-card-line"></span>
                </div>

                <h3>
                  From Idea to <span>Live Website.</span>
                </h3>

                <p>
                  Whether it&apos;s a brand-new business site or adding AI to one you already have, we
                  follow the same practical process:
                </p>

                <div className="about-points">
                  <div className="about-point">
                    <span>01</span>
                    <p>
                      Understand your business — We learn who your customers are and what your site
                      actually needs to do for you.
                    </p>
                  </div>

                  <div className="about-point">
                    <span>02</span>
                    <p>
                      Design the right experience — A clean, on-brand design built around how real visitors
                      browse and decide.
                    </p>
                  </div>

                  <div className="about-point">
                    <span>03</span>
                    <p>
                      Build with modern technology — Fast, reliable, and easy to maintain — with AI
                      features built in where they help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="divider-line"></div>

        {/* SERVICES */}
        <section id="services" className="services">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-eyebrow">WHAT WE DO</span>
              <h2 className="section-title">
                Our <span>Services</span>
              </h2>
              <p className="section-description">
                Practical digital services for businesses that want to look better, work smarter and grow
                online.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <div className="service-card" key={service.number}>
                  <div className="service-number">{service.number}</div>

                  <div className="service-icon">
                    <ServiceIcon name={service.icon} />
                  </div>

                  <h3 className="service-title">{service.title}</h3>

                  <p className="service-description">{service.description}</p>

                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider-line"></div>

        {/* PROJECTS / PORTFOLIO */}
        <section id="work" className="work">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-eyebrow">SELECTED WORK</span>
              <h2 className="section-title">
                Projects We&apos;ve
                <span>Built</span>
              </h2>
              <p className="section-description">
                A few digital experiences we&apos;ve worked on across different industries and ideas.
              </p>
            </div>

            <div className="work-grid">
              {projects.map((project) => (
                <article className="work-card" key={project.number}>
                  <div className="work-image">
                    <div className="work-image-overlay"></div>
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.category} project by AI Explorer Agency`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <span className="project-category">{project.category}</span>
                  </div>

                  <div className="work-card-content">
                    <div className="project-meta">
                      <span>{project.number}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="work-title">{project.title}</h3>

                    <p className="work-description">{project.description}</p>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      Visit Project
                      <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="divider-line"></div>

        {/* TEAM */}
        <section id="team" className="team">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-eyebrow">THE PEOPLE BEHIND THE WORK</span>
              <h2 className="section-title">
                Meet Our
                <span>Team</span>
              </h2>
              <p className="section-description">
                Our team combines strategy, AI development, web engineering, marketing and creative
                expertise to build digital solutions that drive real business results.
              </p>
            </div>

            <div className="team-grid">
              {teamMembers.map((member) => (
                <div
                  className={`team-card${member.featured ? " featured-card" : ""}`}
                  key={member.slug}
                >
                  <TeamPhoto src={member.image} alt={`${member.name} - ${member.role} at AI Explorer Agency`} />

                  <div className="team-content">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-bio">{member.cardBio}</p>

                    <Link href={`/profiles/${member.slug}`} className="btn btn-outline">
                      View Profile
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="divider-line"></div>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="section-container">
            <div className="contact-wrapper">
              <div className="contact-content">
                <span className="section-eyebrow">LET&apos;S WORK TOGETHER</span>

                <h2 className="section-title">
                  Have an Idea?
                  <span>Let&apos;s Build It.</span>
                </h2>

                <p className="contact-description">
                  Tell us a bit about your business or project — we&apos;ll take a look and figure out the
                  best way to move forward.
                </p>

                <div className="contact-details">
                  <a href="mailto:aiexplorerinfo01@gmail.com" className="contact-item">
                    <span className="contact-icon">@</span>
                    <span>
                      <small>Email</small>
                      aiexplorerinfo01@gmail.com
                    </span>
                  </a>

                  <a href="tel:+923143111118" className="contact-item">
                    <span className="contact-icon">📞</span>
                    <span>
                      <small>Phone</small>
                      +923143111118
                    </span>
                  </a>

                  <div className="contact-item">
                    <span className="contact-icon">🌍</span>
                    <span>
                      <small>Based Online</small>
                      Working with clients worldwide
                    </span>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
