const skills = [
  "React Native",
  "TypeScript",
  "Redux Toolkit",
  "Firebase",
  "REST APIs",
  "Stripe",
  "Apple In-App Purchases",
  "Google Play Billing",
  "Authentication",
  "Push Notifications",
  "Google Maps",
  "Geolocation",
  "App Store Connect",
  "TestFlight",
  "Google Play Console",
  "Production Deployments",
];

const leadershipPoints = [
  "Lead a team of 3 React Native developers at Opus Geeks and keep daily execution aligned with product priorities.",
  "Break down delivery into clear tasks, assign ownership, and keep releases moving across iOS and Android.",
  "Review code before merge, maintain quality standards, and mentor developers on architecture and implementation choices.",
  "Own operational delivery through App Store Connect, TestFlight, Google Play Console, release coordination, and production deployments.",
];

const projects = [
  {
    name: "Clean N Sober",
    description:
      "Recovery and wellness mobile application focused on dependable cross-platform delivery and production-grade purchase flows.",
    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Firebase",
      "Push Notifications",
      "Apple IAP",
      "Google Play Billing",
    ],
    appStore:
      "https://apps.apple.com/us/app/clean-n-sober/id6755741544",
    playStore:
      "https://play.google.com/store/apps/details?id=com.CleanNSober.co",
  },
  {
    name: "Wedstimate",
    description:
      "Wedding vendor marketplace app with payments, messaging, and responsive user flows for a two-sided marketplace experience.",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Stripe",
      "Real-Time Messaging",
      "Push Notifications",
    ],
    appStore:
      "https://apps.apple.com/us/app/wedstimate-wedding-vendors/id6712045315",
    playStore:
      "https://play.google.com/store/apps/details?id=com.wedstimatemobileapp&hl=en",
  },
  {
    name: "EYEQ APP",
    description:
      "AI-powered wellness app combining mobile product delivery, device capabilities, and deployment readiness for the App Store.",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Vision Camera",
      "Authentication",
      "App Store Deployment",
    ],
    appStore: "https://apps.apple.com/us/app/eyeq-app/id6758163806",
  },
  {
    name: "Cruisimity",
    description:
      "Social navigation and driving community app built around location-aware experiences, maps, and real-time mobile interactions.",
    technologies: [
      "React Native",
      "TypeScript",
      "Google Maps",
      "Geolocation",
      "Firebase",
      "Real-Time Features",
    ],
    appStore: "https://apps.apple.com/us/app/cruisimity/id6744337395",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-72 h-[26rem] w-[26rem] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0),_rgba(2,6,23,0.92)_55%,_rgba(2,6,23,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9),transparent)]" />
      </div>

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-20 pt-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
          <div>
            <p className="font-display text-lg tracking-tight text-white">
              Abdul Qadeer
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
              Team Lead React Native Engineer
            </p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#leadership" className="transition hover:text-white">
              Leadership
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-16 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <section className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Available for Remote React Native Opportunities Worldwide
            </div>
            <div className="space-y-6">
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-slate-400">
                Karachi, Pakistan
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Building production-ready mobile products and leading teams that
                ship with confidence.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                I am a Team Lead React Native Engineer with 4+ years of
                experience building scalable cross-platform applications for iOS
                and Android. I work across architecture, execution, payments,
                integrations, release management, and team delivery for
                international products.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                href="#contact"
              >
                Let&apos;s Talk
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
                href="mailto:aq579733@gmail.com"
              >
                Email Me
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
                href="https://www.linkedin.com/in/abdul-qadeer-887332242/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
                href="https://github.com/qdr108"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </section>

          <aside className="grid gap-5">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-7 shadow-2xl shadow-slate-950/40 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                Core Focus
              </p>
              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-3xl font-semibold text-white">4+ years</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Delivering cross-platform mobile apps across iOS and Android
                    with React Native and TypeScript.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                    <p className="text-sm text-slate-400">Leadership</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Team of 3 developers
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                    <p className="text-sm text-slate-400">Deployment</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      App Store + Play Store
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-7 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                High-Impact Stack
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "React Native",
                  "TypeScript",
                  "Redux Toolkit",
                  "Firebase",
                  "Stripe",
                  "Push Notifications",
                  "Maps & Geolocation",
                  "IAP & Billing",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="About Me"
            title="Recruiter-friendly technical leadership with hands-on mobile delivery."
            description="I lead mobile engineering with a strong execution mindset: clear ownership, reliable architecture, disciplined reviews, and shipping to production without drama."
          />
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
            <p className="text-base leading-8 text-slate-300">
              My work centers on scalable React Native applications, modern
              TypeScript codebases, and dependable integrations including
              Firebase, REST APIs, payments, authentication, maps, and push
              notifications. I contribute beyond implementation by coordinating
              releases, improving code quality, mentoring engineers, and making
              sure apps are production-ready for international users and remote
              teams.
            </p>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
      >
        <SectionHeading
          eyebrow="Technical Skills"
          title="A delivery stack built for shipping complex mobile products."
          description="These are the technologies and operational areas I work with most across product development, team execution, and release ownership."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section
        id="leadership"
        className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
      >
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Leadership Experience"
            title="Current role at Opus Geeks."
            description="I currently lead a team of 3 developers and stay directly involved in both delivery quality and release execution."
          />
          <div className="grid gap-4">
            {leadershipPoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <p className="text-base leading-7 text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
      >
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected mobile applications shipped to real users."
          description="A sample of product work spanning wellness, marketplaces, AI-assisted experiences, and real-time social navigation."
        />
        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group rounded-[2rem] border border-white/10 bg-slate-900/75 p-7 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                  href={project.appStore}
                  target="_blank"
                  rel="noreferrer"
                >
                  App Store
                </a>
                {project.playStore ? (
                  <a
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
                    href={project.playStore}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Play Store
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
      >
        <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-100/80">
                Contact
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Available for Remote React Native Opportunities Worldwide
              </h2>
              <p className="max-w-2xl text-base leading-8 text-cyan-50/85 sm:text-lg">
                I am open to remote roles where I can lead React Native
                delivery, mentor engineers, and help teams ship reliable mobile
                products for global users.
              </p>
            </div>

            <div className="grid gap-3 text-sm text-white">
              <a
                className="rounded-2xl border border-white/15 bg-slate-950/40 px-5 py-4 transition hover:bg-slate-950/60"
                href="mailto:aq579733@gmail.com"
              >
                aq579733@gmail.com
              </a>
              <a
                className="rounded-2xl border border-white/15 bg-slate-950/40 px-5 py-4 transition hover:bg-slate-950/60"
                href="tel:+923131104203"
              >
                +92 313-1104203
              </a>
              <a
                className="rounded-2xl border border-white/15 bg-slate-950/40 px-5 py-4 transition hover:bg-slate-950/60"
                href="https://www.linkedin.com/in/abdul-qadeer-887332242/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
              <a
                className="rounded-2xl border border-white/15 bg-slate-950/40 px-5 py-4 transition hover:bg-slate-950/60"
                href="https://github.com/qdr108"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
