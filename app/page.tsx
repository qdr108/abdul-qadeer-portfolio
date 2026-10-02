import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Check,
  Smartphone,
} from "lucide-react";

const email = "aq579733@gmail.com";
const linkedin = "https://www.linkedin.com/in/abdul-qadeer-887332242/";
const github = "https://github.com/qdr108";
const interview = `mailto:${email}?subject=React%20Native%20Opportunity%20-%20Abdul%20Qadeer`;

const projects = [
  {
    id: "6712045315",
    name: "Wedstimate",
    category: "Wedding vendor marketplace",
    description:
      "A two-sided mobile marketplace connecting couples with wedding vendors.",
    contributions: [
      "Built marketplace flows with React Native and TypeScript.",
      "Integrated Stripe payments, Firebase messaging and push notifications.",
    ],
    stack: ["React Native", "TypeScript", "Stripe", "Firebase"],
    appStore:
      "https://apps.apple.com/us/app/wedstimate-wedding-vendors/id6712045315",
    playStore:
      "https://play.google.com/store/apps/details?id=com.wedstimatemobileapp&hl=en",
    tone: "rose",
  },
  {
    id: "6755741544",
    name: "Clean N Sober",
    category: "Recovery & wellness",
    description:
      "A cross-platform recovery app with subscription purchase flows and notifications.",
    contributions: [
      "Delivered mobile features with Redux Toolkit and Firebase.",
      "Integrated Apple In-App Purchases, Google Play Billing and push notifications.",
    ],
    stack: ["React Native", "Redux Toolkit", "Apple IAP", "Play Billing"],
    appStore: "https://apps.apple.com/us/app/clean-n-sober/id6755741544",
    playStore:
      "https://play.google.com/store/apps/details?id=com.CleanNSober.co",
    tone: "green",
  },
  {
    id: "6744337395",
    name: "Cruisimity",
    category: "Social navigation",
    description:
      "Location-aware experiences for a driving community, with maps and real-time interactions.",
    contributions: [
      "Delivered Google Maps, geolocation and Firebase-powered mobile features.",
      "Supported real-time interactions and iOS release workflows.",
    ],
    stack: ["React Native", "Google Maps", "Geolocation", "Firebase"],
    appStore: "https://apps.apple.com/us/app/cruisimity/id6744337395",
    tone: "yellow",
  },
  {
    id: "6781012948",
    name: "Receipts to Riches",
    category: "Receipt rewards",
    description:
      "A receipt-focused mobile product released on both iOS and Android.",
    contributions: [
      "Contributed to React Native mobile delivery and production build readiness.",
      "Supported App Store and Google Play release preparation.",
    ],
    stack: ["React Native", "TypeScript", "REST APIs", "Firebase"],
    appStore: "https://apps.apple.com/us/app/receipts-to-riches/id6781012948",
    playStore:
      "https://play.google.com/store/apps/details?id=com.receiptstoriches.app",
    tone: "yellow",
  },
  {
    id: "6769825911",
    name: "Fence Space",
    category: "Cross-platform mobile product",
    description:
      "A production mobile application delivered across iOS and Android.",
    contributions: [
      "Implemented React Native features and API integrations.",
      "Contributed to release preparation and deployment on both stores.",
    ],
    stack: ["React Native", "TypeScript", "REST APIs", "Firebase"],
    appStore: "https://apps.apple.com/us/app/fence-space/id6769825911",
    playStore:
      "https://play.google.com/store/apps/details?id=com.fencespace.app",
    tone: "green",
  },
  {
    id: "6758163806",
    name: "EYEQ APP",
    category: "AI-powered wellness",
    description:
      "A wellness product bringing authentication and camera capabilities into a mobile experience.",
    contributions: [
      "Implemented authentication, Firebase and camera/device features.",
      "Supported App Store deployment readiness.",
    ],
    stack: ["React Native", "TypeScript", "Vision Camera", "Firebase"],
    appStore: "https://apps.apple.com/us/app/eyeq-app/id6758163806",
    tone: "rose",
  },
];

const expertise = [
  {
    title: "Mobile engineering",
    items: "React Native, TypeScript, Redux Toolkit, iOS & Android",
    detail:
      "Cross-platform implementation and maintainable mobile architecture.",
  },
  {
    title: "Payments & subscriptions",
    items: "Stripe, Apple In-App Purchases, Google Play Billing",
    detail: "Marketplace payments and platform-native purchase integrations.",
  },
  {
    title: "Connected experiences",
    items: "Firebase, REST APIs, Authentication, Push Notifications",
    detail: "Messaging, authenticated flows and real-time mobile interactions.",
  },
  {
    title: "Device features & releases",
    items: "Google Maps, Geolocation, Vision Camera, TestFlight",
    detail:
      "Device integrations and delivery through App Store Connect and Google Play Console.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#main" aria-label="Abdul Qadeer home">
            <span className="monogram">
              AQ<span>.</span>
            </span>
            <span>Abdul Qadeer</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#projects">Work</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
          </nav>
          <a className="header-contact" href="#contact">
            Let&apos;s talk <ArrowUpRight size={16} />
          </a>
        </div>
      </header>
      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <p className="availability">
            <span /> Open to remote opportunities worldwide
          </p>
          <h1 id="hero-title">
            Abdul Qadeer
            <span>
              React Native Engineer
              <br />
              &amp; Team Lead.
            </span>
          </h1>
          <p className="hero-description">
            I build and ship iOS &amp; Android apps, integrate complex mobile
            features, and lead teams from implementation to store release.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={interview}>
              <Mail size={18} /> Discuss a role <ArrowUpRight size={17} />
            </a>
            <a
              className="button secondary"
              href="/resume.pdf"
              download="Abdul-Qadeer-Resume.pdf"
            >
              <Download size={18} /> Download resume
            </a>
            <a className="text-link" href="#projects">
              Explore my work <ArrowDown size={16} />
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <MapPin size={15} /> Karachi, Pakistan
            </span>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={15} /> LinkedIn <ArrowUpRight size={13} />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github size={15} /> GitHub <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="proof-strip">
            <div>
              <strong>5+</strong>
              <span>Years in mobile engineering</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Selected mobile projects</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Developers led at Opus Geeks</span>
            </div>
            <div>
              <Smartphone size={28} />
              <span>App Store &amp; Google Play releases</span>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="work-section section"
          aria-labelledby="work-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">01 / Selected work</p>
                <h2 id="work-title">Built for real users.</h2>
              </div>
              <p>
                Mobile products I&apos;ve contributed to.
                <br />
                Explore the apps and my role in each.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <article className="project" key={project.id}>
                  <a
                    className={`project-visual ${project.tone}`}
                    href={project.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} on the App Store`}
                  >
                    <div className="visual-label">
                      <span>
                        {String(index + 1).padStart(2, "0")} /{" "}
                        {project.category}
                      </span>
                      <ArrowUpRight size={20} />
                    </div>
                    <Image
                      className="app-screenshot"
                      src={`/projects/${project.id}-screen.jpg`}
                      alt={`${project.name} official App Store preview`}
                      width={320}
                      height={480}
                      sizes="(max-width: 600px) 180px, 220px"
                    />
                    <span className="visual-caption">{project.name}</span>
                  </a>
                  <div className="project-body">
                    <div className="project-title">
                      <Image
                        src={`/projects/${project.id}-icon.jpg`}
                        alt=""
                        width={42}
                        height={42}
                      />
                      <div>
                        <h3>{project.name}</h3>
                        <p>{project.playStore ? "iOS & Android" : "iOS"}</p>
                      </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <h4>My contribution</h4>
                    <ul className="contributions">
                      {project.contributions.map((point) => (
                        <li key={point}>
                          <Check size={15} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="stack" aria-label="Technologies">
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div className="store-links">
                      <a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        App Store <ArrowUpRight size={15} />
                      </a>
                      {project.playStore && (
                        <a
                          href={project.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Google Play <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="work-note">
              Product previews are from the official App Store listings.
              Contributions describe my work within the product teams.
            </p>
          </div>
        </section>
        <section
          id="experience"
          className="section experience-section"
          aria-labelledby="experience-title"
        >
          <div className="container experience-layout">
            <div>
              <p className="eyebrow">02 / Experience &amp; leadership</p>
              <h2 id="experience-title">
                Hands-on engineer.
                <br />
                Accountable team lead.
              </h2>
              <p className="section-copy">
                I stay close to the code while helping developers turn product
                priorities into coordinated mobile releases.
              </p>
              <a
                className="text-link"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View full resume <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="experience-detail">
              <p className="current-role">Current role</p>
              <h3>Team Lead React Native Engineer</h3>
              <p className="company">
                Opus Geeks <span>Team of 3 developers</span>
              </p>
              <div className="responsibility">
                <span>01</span>
                <div>
                  <h4>Lead delivery</h4>
                  <p>
                    Break down product priorities, assign ownership and
                    coordinate execution across iOS and Android.
                  </p>
                </div>
              </div>
              <div className="responsibility">
                <span>02</span>
                <div>
                  <h4>Review &amp; mentor</h4>
                  <p>
                    Review code before merge, guide architecture and
                    implementation, and mentor developers on code quality.
                  </p>
                </div>
              </div>
              <div className="responsibility">
                <span>03</span>
                <div>
                  <h4>Own release coordination</h4>
                  <p>
                    Handle TestFlight, App Store Connect, Google Play Console
                    and production deployment workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="skills"
          className="section skills-section"
          aria-labelledby="skills-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">03 / Technical expertise</p>
                <h2 id="skills-title">The stack behind the work.</h2>
              </div>
              <p>
                From mobile features to payments,
                <br />
                device integrations and release operations.
              </p>
            </div>
            <div className="expertise-grid">
              {expertise.map((area, index) => (
                <div className="expertise" key={area.title}>
                  <span className="expertise-number">0{index + 1}</span>
                  <h3>{area.title}</h3>
                  <p className="expertise-items">{area.items}</p>
                  <p>{area.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="section contact-section"
          aria-labelledby="contact-title"
        >
          <div className="container contact-layout">
            <div>
              <p className="eyebrow">04 / Let&apos;s connect</p>
              <h2 id="contact-title">Your next mobile engineer.</h2>
              <p>
                Open to remote React Native engineering and team lead roles with
                international teams. Let&apos;s talk about your product, team
                and the role.
              </p>
              <a className="button primary" href={interview}>
                <Mail size={18} /> Start a conversation{" "}
                <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="contact-details">
              <a href={`mailto:${email}`}>
                <Mail size={19} />
                <span>
                  <small>Email</small>
                  {email}
                </span>
                <ArrowUpRight size={18} />
              </a>
              <a href="tel:+923131104203">
                <Phone size={19} />
                <span>
                  <small>Phone</small>+92 313-1104203
                </span>
                <ArrowUpRight size={18} />
              </a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={19} />
                <span>
                  <small>LinkedIn</small>Connect with Abdul Qadeer
                </span>
                <ArrowUpRight size={18} />
              </a>
              <a href="/resume.pdf" download="Abdul-Qadeer-Resume.pdf">
                <Download size={19} />
                <span>
                  <small>Resume</small>Abdul Qadeer / PDF
                </span>
                <ArrowDown size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <span>
          Abdul Qadeer <span className="footer-dot">/</span> React Native
          Engineer
        </span>
        <a href="#main">
          Back to top <ArrowUpRight size={15} />
        </a>
      </footer>
    </>
  );
}
