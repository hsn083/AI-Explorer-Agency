import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ProfileNavbar from "@/components/ProfileNavbar";
import ProfileFooter from "@/components/ProfileFooter";
import { teamMembers, getTeamMember } from "@/lib/data";

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) return {};

  return {
    title: `${member.name} - ${member.role} | AI EXPLORER AGENCY`,
  };
}

export default async function ProfilePage({ params }) {
  const { slug } = await params;
  const member = getTeamMember(slug);
  if (!member) notFound();

  return (
    <div className="profile-page">
      <ProfileNavbar />

      {/* Profile Hero Section */}
      <section className="profile-hero">
        <div className="profile-hero-container">
          <div className="profile-hero-content">
            <span className="profile-eyebrow">AI EXPLORER AGENCY • TEAM PROFILE</span>
            <h1 className="profile-name">{member.name}</h1>
            <p className="profile-role">{member.role}</p>
            <p className="profile-intro">{member.intro}</p>

            <div className="profile-meta">
              {member.meta.map((item) => (
                <div className="profile-meta-item" key={item.label}>
                  <span className="profile-meta-label">{item.label}</span>
                  <span className="profile-meta-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-hero-image">
            <div className="profile-image-wrapper">
              <Image 
                src={member.image} 
                alt={`${member.name} - ${member.role}`} 
                width={400}
                height={400}
                priority
              />
              <div className="profile-image-badge">{member.badge}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="profile-section">
        <h2 className="profile-section-title">About {member.name.split(" ")[0]}</h2>
        <div className="profile-section-content">
          {member.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="profile-section">
        <h2 className="profile-section-title">Areas of Expertise</h2>
        <div className="expertise-grid">
          {member.expertise.map((item) => (
            <div className="expertise-card" key={item.title}>
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
          {member.roleSection.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
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
        <h2 className="profile-cta-title">Let&apos;s Build Something Better</h2>
        <p className="profile-cta-text">
          Have an idea, project or business challenge? Let&apos;s talk about how AI Explorer can help.
        </p>
        <div className="profile-cta-buttons">
          <Link href="/#contact" className="profile-cta-primary">
            Start a Project →
          </Link>
          <Link href="/#team" className="profile-cta-secondary">
            Meet the Team
          </Link>
        </div>
      </section>

      <ProfileFooter />
    </div>
  );
}
