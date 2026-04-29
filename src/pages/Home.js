import { useEffect, useState } from "react";
import {
  capabilityTracks,
  experienceSidebars,
  profileFacts,
  researchInterests,
  responsibilityRoles,
  sectionLinks,
} from "../data/portfolioData";

export default function Home() {
  const [activeSection, setActiveSection] = useState(sectionLinks[0].id);

  useEffect(() => {
    const sections = sectionLinks
      .map((section) => document.getElementById(section.id))
      .filter((section) => section !== null);

    if (sections.length === 0) {
      return undefined;
    }

    const updateActiveSection = () => {
      const viewportMidpoint = window.innerHeight * 0.4;
      let nextActiveSection = sections[0].id;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportMidpoint) {
          nextActiveSection = section.id;
        }
      });

      setActiveSection(nextActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page-stack home-page">
      <header className="masthead" data-reveal="0">
        <div className="masthead-copy">
          <p className="kicker">Computer Science Portfolio</p>
          <h1>Rohith Rathod</h1>
          <p className="lead">
            I build production-grade systems that solve real problems through
            clean architecture, fast execution, and strong product ownership.
          </p>

          <div
            className="status-strip"
            aria-label="Current status and location"
          >
            <p className="status-pill">
              <span className="status-dot" aria-hidden="true" /> Open to Work
            </p>
            <p className="status-location">Based in Hyderabad, India</p>
          </div>

          <div className="action-row" aria-label="Personal details">
            <a href="tel:+916309845588">Call Me</a>
            <a href="mailto:banothrohithrathod@gmail.com">Personal Email</a>
            <a href="mailto:se23ucse034@mahindrauniversity.edu.in">
              College Email
            </a>
            <a
              href="https://linkedin.com/in/rohith-rathod-8a62541ba"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rohith0110"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <nav
        className="section-nav"
        aria-label="Section navigation"
        data-reveal="1"
      >
        <ul>
          {sectionLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? "is-active" : undefined}
                aria-current={activeSection === link.id ? "true" : undefined}
                onClick={(event) => handleSectionClick(event, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section
        id="about"
        className="section"
        data-reveal="2"
        aria-labelledby="about-title"
      >
        <div className="section-header">
          <h2 id="about-title" className="section-title">
            Research Interests
          </h2>
        </div>

        <ul className="focus-flow">
          {researchInterests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </section>
      <section
        id="experience"
        className="section"
        data-reveal="3"
        aria-labelledby="experience-title"
      >
        <div className="section-header">
          <h2 id="experience-title" className="section-title">
            Experience
          </h2>
        </div>

        <div className="experience-layout">
          <div className="experience-roles" aria-label="Positions of responsibility">
            {responsibilityRoles.map((role) => (
              <article key={`${role.title}-${role.organization}`} className="experience-role">
                <h3>{role.title}</h3>
                <p className="experience-org">{role.organization}</p>
                <p>{role.summary}</p>
              </article>
            ))}
          </div>

          <div className="experience-sidebars">
            {experienceSidebars.map((group) => (
              <section key={group.title} className="experience-block">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={`${group.title}-${item}`}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section
        id="profile"
        className="section"
        data-reveal="4"
        aria-labelledby="profile-title"
      >
        <div className="section-header">
          <h2 id="profile-title" className="section-title">
            Profile Snapshot
          </h2>
        </div>

        <div className="profile-layout">
          <div className="track-grid" aria-label="Capabilities">
            {capabilityTracks.map((track) => (
              <article key={track.title}>
                <h3>{track.title}</h3>
                <p>{track.items}</p>
              </article>
            ))}
          </div>

          <ul className="fact-list" aria-label="Education and achievements">
            {profileFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="contact"
        className="section contact-band"
        data-reveal="5"
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title" className="section-title">
          Let us build something ambitious.
        </h2>
        <p>
          Interested in backend systems, platform engineering, or AI-driven
          product execution. Open to internships, project collaborations, and
          technical roles.
        </p>
        <div className="contact-actions">
          <a href="mailto:banothrohithrathod@gmail.com">Start a conversation</a>
          <a
            href="https://github.com/rohith0110"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore code
          </a>
        </div>
      </section>
    </div>
  );
}
