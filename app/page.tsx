"use client";

import Image from "next/image";
import { useEffect } from "react";

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    const updateScrollProgress = () => {
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty("--scroll-progress", `${Math.min(progress, 1) * 100}%`);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#09090b] text-white">
      <div className="portfolio-grid pointer-events-none absolute inset-x-0 top-0 h-[55rem]" />

      <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-[#09090b]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-[0.18em] text-white">JH<span className="text-pink-400">.</span></a>
          <div className="flex items-center gap-5 text-xs uppercase tracking-[0.16em] text-zinc-400">
            <a className="transition hover:text-pink-300" href="#about">About</a>
            <a className="transition hover:text-pink-300" href="#projects">Work</a>
            <a className="transition hover:text-pink-300" href="#education">Education</a>
            <a className="rounded-full border border-pink-500/30 px-4 py-2 text-pink-200 transition hover:border-pink-400 hover:bg-pink-500/10" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8rem] top-24 h-[28rem] w-[28rem] rounded-full bg-pink-500/15 blur-[110px]" />
        <div className="absolute right-[-10rem] top-[28rem] h-[25rem] w-[25rem] rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      {/* Hero */}
      <section id="top" className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-20">
        <div className="grid w-full items-center gap-12 md:grid-cols-[1fr_280px]">
          <Reveal>
            <p className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-pink-300">
              <span className="h-px w-10 bg-pink-400" />
              Portfolio · ICT Engineer
            </p>
            <h1 className="hero-name max-w-4xl text-[clamp(4.5rem,11vw,9rem)] font-bold leading-[0.82] text-white">
              Jenna <span className="block text-pink-400">Harle.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              Designing accessible digital experiences where technology, data and human needs meet.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#projects" className="group rounded-full bg-pink-500 px-6 py-3 font-medium text-white transition hover:bg-pink-400">
                Explore work <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#contact" className="rounded-full border border-white/15 px-6 py-3 text-zinc-200 transition hover:border-pink-400/60 hover:text-pink-200">
                Get in touch
              </a>
            </div>
          </Reveal>

          <Reveal className="relative mx-auto">
            <div className="absolute -inset-5 rounded-full border border-pink-500/10" />
            <Image
              src="/images/profile.jpg"
              alt="Jenna Harle"
              width={260}
              height={260}
              priority
              className="relative aspect-square rounded-full border border-white/10 object-cover shadow-[0_30px_100px_rgba(236,72,153,0.18)]"
            />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-pink-500/30 bg-zinc-950/90 px-4 py-2 text-xs text-pink-200 backdrop-blur-md">
              Open to graduate opportunities
            </div>
          </Reveal>
        </div>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-8 right-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-lg text-zinc-400 transition hover:border-pink-400/50 hover:text-pink-300"
        >
          <span className="animate-bounce">↓</span>
        </a>
      </section>

      {/* About */}
      <section id="about" className="reveal max-w-5xl mx-auto px-6 py-24">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-pink-300">01 / About</p>
        <h2 className="mb-8 text-5xl font-bold tracking-tight">
          About Me
        </h2>

        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.035] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-all duration-500 hover:border-pink-500/30 hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(236,72,153,0.10)] md:p-10">
          <p className="max-w-3xl text-lg leading-8 text-zinc-300">
            I am a graduating ICT Engineer with interests in software development, accessibility and data analytics. During my studies, I have worked with modern web technologies, mobile applications, databases and cloud platforms while developing practical, user-centred solutions.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Bachelor’s Thesis: Accessible Customer Service Chatbot Development",
              "10+ years of customer service experience",
              "Experience with web, mobile, cloud and data projects",
            ].map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-pink-500/20 bg-pink-500/[0.05] px-5 py-5 text-sm leading-6 text-zinc-200"
              >
                <span className="mr-2 text-pink-400" aria-hidden="true">✓</span>
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="reveal max-w-5xl mx-auto px-6 py-24">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-pink-300">02 / Expertise</p>
        <h2 className="mb-8 text-5xl font-bold tracking-tight">
          Skills
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              category: "Software & UX",
              skills: ["Next.js", "React", "TypeScript", "JavaScript", "Java", "FastAPI", "API Development", "React Native", "Expo", "REST APIs", "Node.js", "Accessibility (WCAG)", "UX Design", "Frontend Development", "Backend Development", "Testing", "Technical Documentation"],
            },
            {
              category: "Data & AI",
              skills: ["Python", "SQL", "Power BI", "Microsoft Fabric", "Data Analytics", "AI Development"],
            },
            {
              category: "AI Tools",
              skills: ["Microsoft Copilot", "GitHub Copilot", "ChatGPT", "Claude"],
            },
            {
              category: "Cloud & Platforms",
              skills: ["Azure", "Azure Administration", "Microsoft Power Platform", "Microsoft 365", "Cloud Computing"],
            },
            {
              category: "Platforms & Tools",
              skills: ["Git", "Linux", "Windows", "macOS", "Cybersecurity", "PostgreSQL", "Database Design"],
            },
            {
              category: "Professional Skills",
              skills: ["Customer Service", "Communication", "Requirements Analysis", "Problem Solving", "Documentation", "Team Collaboration", "Product Ownership", "Agile Development", "Scrum"],
            },
            {
              category: "Languages",
              skills: ["Finnish — Native", "English — Fluent", "Swedish — Intermediate"],
            },
          ].map(({ category, skills }) => (
            <div
              key={category}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-500 hover:border-pink-500/30 hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(236,72,153,0.10)]"
            >
              <h3 className="mb-4 text-xl font-semibold text-pink-300">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-pink-500/30 bg-zinc-900 px-4 py-2 text-pink-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="reveal max-w-5xl mx-auto px-6 py-24"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-pink-300">03 / Selected work</p>
        <h2 className="mb-8 text-5xl font-bold tracking-tight">
          Featured Projects
        </h2>

        <div className="group rounded-3xl border border-white/[0.08] hover:border-pink-500/40 transition-all duration-500 bg-white/[0.035] backdrop-blur-sm p-8 md:p-10 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(236,72,153,0.08)]">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-pink-400" />
            <span className="text-pink-300 font-medium uppercase text-xs tracking-[0.16em]">
              Bachelor&apos;s Thesis Project
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">2026</span>
          </div>

          <h3 className="text-3xl font-bold mb-4">
            Alli Chatbot
          </h3>

          <h4 className="text-xl font-semibold text-pink-300 mb-4">
            Accessible Customer Service Chatbot for E-commerce
          </h4>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-3">
              <Image
                src="/images/Alli-chatbot etusivu.png"
                alt="Alli Chatbot home screen"
                width={1200}
                height={900}
                className="max-h-[360px] w-full rounded-xl object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-3">
              <Image
                src="/images/Alli-chatbot asiakaspalvelu.png"
                alt="Alli Chatbot customer service conversation"
                width={1200}
                height={900}
                className="max-h-[360px] w-full rounded-xl object-contain"
              />
            </div>
          </div>

          <p className="text-zinc-300 leading-8 mb-6">
            Alli Chatbot was designed and developed as part of my bachelor&apos;s
            thesis. The project explored how accessibility principles can be
            integrated into conversational interfaces and customer service
            chatbots to create a more inclusive user experience.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-pink-300 mb-2">Project Challenge</h4>
              <p className="text-zinc-300 leading-7">
                Customer service chatbots often prioritize functionality while
                accessibility and usability are overlooked. The goal was to
                support a diverse range of users, follow accessibility best
                practices and provide practical customer service functionality.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-pink-300 mb-2">Solution</h4>
              <p className="text-zinc-300 leading-7">
                I designed and developed a prototype that guides users through
                product returns, frequently asked questions and customer
                support interactions, with accessibility, clarity and user
                guidance at its core.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-pink-300 mb-2">My Responsibilities</h4>
              <ul className="list-disc list-inside text-zinc-300 space-y-1">
                <li>Requirements gathering and analysis</li>
                <li>Accessibility-focused UX design</li>
                <li>Frontend and backend development</li>
                <li>Conversation design</li>
                <li>Functional testing and accessibility evaluation</li>
                <li>Documentation and thesis writing</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-pink-300 mb-2">Key Features</h4>
              <ul className="list-disc list-inside text-zinc-300 space-y-1">
                <li>Guided return process and FAQ functionality</li>
                <li>Customer support workflow</li>
                <li>Accessible, responsive user interface</li>
                <li>User-centred conversational design</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-pink-300 mb-2">What I Learned &amp; Project Outcome</h4>
            <p className="text-zinc-300 leading-7">
              The functional prototype provides a foundation for future
              development and demonstrates how accessibility can be built into
              customer service chatbots. The project strengthened my skills in
              inclusive software development, frontend and backend technologies,
              testing, accessibility requirements and user-centred product design.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-pink-300 mb-3">Technologies &amp; Skills Demonstrated</h4>
            <div className="flex flex-wrap gap-3">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Python",
                "FastAPI",
                "Accessibility (WCAG)",
                "UX Design",
                "Frontend Development",
                "Backend Development",
                "Testing",
                "Technical Documentation",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-pink-500/10 border border-pink-500/20 px-4 py-2 text-pink-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/[0.08] hover:border-pink-500/40 transition-all duration-500 bg-white/[0.035] backdrop-blur-sm p-8 md:p-10 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(236,72,153,0.08)]">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="h-px w-8 bg-pink-400" />
            <span className="text-pink-300 font-medium uppercase text-xs tracking-[0.16em]">
              Healthcare Analytics Project
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">2026</span>
          </div>

          <h3 className="text-3xl font-bold mb-4">
            Healthcare Customer Experience Analytics Dashboard
          </h3>

          <div className="mb-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-3">
            <Image
              src="/images/PowerBi Healthcare.png"
              alt="Power BI healthcare customer experience analytics dashboard"
              width={932}
              height={526}
              className="max-h-[520px] w-full rounded-xl object-contain"
            />
          </div>

          <p className="text-zinc-300 leading-8 mb-6">
            Developed an interactive Power BI dashboard using synthetic
            healthcare customer service data to analyse customer contact trends,
            service performance and customer satisfaction. The dashboard brings
            together KPI tracking and data visualisation to support operational
            decision-making.
          </p>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-pink-300 mb-2">Key Features</h4>
            <ul className="grid gap-x-6 gap-y-1 text-zinc-300 sm:grid-cols-2">
              <li>Customer contact volume and monthly trend analysis</li>
              <li>Net Promoter Score (NPS) monitoring</li>
              <li>Average handling time tracking</li>
              <li>Contact channel distribution analysis</li>
              <li>Regional performance comparison</li>
              <li>Issue resolution rate monitoring</li>
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-pink-300 mb-2">Project Outcome</h4>
            <p className="text-zinc-300 leading-7">
              The project demonstrates how customer service data can be
              transformed into actionable insights that support service
              improvement and performance monitoring within a healthcare
              environment.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-pink-300 mb-3">Technologies &amp; Skills Demonstrated</h4>
            <div className="flex flex-wrap gap-3">
              {[
                "Power BI",
                "Microsoft Excel",
                "Data Analytics",
                "Business Intelligence",
                "Data Visualization",
                "KPI Development",
                "Customer Experience Analytics",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-pink-500/10 border border-pink-500/20 px-4 py-2 text-pink-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/[0.08] hover:border-pink-500/40 transition-all duration-500 bg-white/[0.035] backdrop-blur-sm p-8 md:p-10 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(236,72,153,0.08)]">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="h-px w-8 bg-pink-400" />
            <span className="text-pink-300 font-medium uppercase text-xs tracking-[0.16em]">
              University Mobile Development Project
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">2025</span>
          </div>

          <h3 className="text-3xl font-bold mb-4">
            VihannesMartat Mobile App
          </h3>

          <p className="text-zinc-300 leading-8 mb-6">
            A food discovery and recipe application developed as part of a
            university mobile development project. The app encourages
            sustainable and healthy eating with seasonal vegetable information,
            nutritional data and recipe suggestions.
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-3">
              <Image
                src="/images/vihannesmartat-home.png"
                alt="VihannesMartat home screen"
                width={900}
                height={1600}
                className="mx-auto max-h-[520px] w-auto rounded-xl object-contain"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-3">
              <Image
                src="/images/vihannesmartat-search.png"
                alt="VihannesMartat recipe search screen"
                width={900}
                height={1600}
                className="mx-auto max-h-[520px] w-auto rounded-xl object-contain"
              />
            </div>
          </div>

          <p className="text-zinc-300 leading-8 mb-6">
            The project involved developing a cross-platform mobile application
            using React Native and Expo, integrating external APIs for recipe and
            nutrition information, and applying agile methodologies for project
            management and development.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-pink-300 mb-2">Key Responsibilities</h4>
              <ul className="list-disc list-inside text-zinc-300 space-y-1">
                <li>Product Owner</li>
                <li>Mobile application development</li>
                <li>Requirements planning</li>
                <li>Team collaboration</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-pink-300 mb-2">Features</h4>
              <ul className="list-disc list-inside text-zinc-300 space-y-1">
                <li>Seasonal vegetable information</li>
                <li>Nutritional values</li>
                <li>Recipe recommendations</li>
                <li>Cross-platform mobile application</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-pink-300 mb-2">What I Learned</h4>
              <ul className="list-disc list-inside text-zinc-300 space-y-1">
                <li>Mobile development with React Native and Expo</li>
                <li>Working with external APIs</li>
                <li>Agile teamwork and project management</li>
                <li>Designing around real user needs</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "React Native",
              "Expo",
              "JavaScript",
              "REST APIs",
              "EDAMAM Recipe API",
              "Nutritionix API",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-pink-500/10 border border-pink-500/20 px-4 py-2 text-pink-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/[0.08] hover:border-pink-500/40 transition-all duration-500 bg-white/[0.035] backdrop-blur-sm p-8 md:p-10 hover:-translate-y-1 hover:shadow-[0_30px_100px_rgba(236,72,153,0.08)]">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="h-px w-8 bg-pink-400" />
            <span className="text-pink-300 font-medium uppercase text-xs tracking-[0.16em]">
              University Software Development Project
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">2024</span>
          </div>

          <h3 className="text-3xl font-bold mb-4">
            Sivustakatsojat
          </h3>

          <p className="text-zinc-300 leading-8 mb-6">
            A collaborative web application developed for movie enthusiasts
            interested in book-to-film adaptations. The platform provides a
            community space for discussions, reviews and recommendations.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold text-pink-300 mb-2">Key Responsibilities</h4>
              <ul className="list-disc list-inside text-zinc-300 space-y-1">
                <li>PostgreSQL database design and implementation</li>
                <li>Project documentation (README)</li>
                <li>Database structure planning</li>
                <li>Data management</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-pink-300 mb-2">Project Features</h4>
              <ul className="list-disc list-inside text-zinc-300 space-y-1">
                <li>User accounts and authentication</li>
                <li>Movie and book discovery</li>
                <li>Community discussions</li>
                <li>Reviews and recommendations</li>
                <li>Search and filtering functionality</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-pink-300 mb-2">What I Learned</h4>
              <ul className="list-disc list-inside text-zinc-300 space-y-1">
                <li>Relational database design</li>
                <li>Backend and frontend integration</li>
                <li>Full-stack application architecture</li>
                <li>Collaborative software development</li>
                <li>Working with large datasets and APIs</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Node.js",
              "PostgreSQL",
              "JavaScript",
              "HTML",
              "CSS",
              "REST API",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-pink-500/10 border border-pink-500/20 px-4 py-2 text-pink-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="reveal max-w-5xl mx-auto px-6 py-24"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-pink-300">04 / Education</p>
        <h2 className="mb-8 text-5xl font-bold tracking-tight">
          Education
        </h2>

        <div className="grid gap-6">
          <article className="rounded-3xl border border-white/[0.08] bg-white/[0.035] p-8 transition-all duration-500 hover:border-pink-500/30 hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(236,72,153,0.10)]">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.16em] text-pink-300">December 2026 · Graduation</p>
                <h3 className="text-2xl font-bold">Bachelor of Engineering</h3>
                <p className="mt-2 text-zinc-300">Information and Communication Technology</p>
              </div>
              <p className="rounded-full border border-pink-500/20 px-4 py-2 text-sm text-pink-200">Oulu University of Applied Sciences</p>
            </div>

            <p className="mb-4 text-sm font-medium text-zinc-400">Relevant studies</p>
            <div className="flex flex-wrap gap-3">
              {[
                "Software Development",
                "Data Analytics",
                "Microsoft Fabric",
                "Power BI",
                "Azure",
                "Cybersecurity",
                "Artificial Intelligence",
              ].map((subject) => (
                <span
                  key={subject}
                  className="rounded-full border border-pink-500/20 bg-pink-500/[0.06] px-4 py-2 text-sm text-pink-200"
                >
                  {subject}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/[0.08] bg-white/[0.035] p-8 transition-all duration-500 hover:border-pink-500/30 hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(236,72,153,0.10)]">
            <p className="mb-2 text-sm uppercase tracking-[0.16em] text-pink-300">2013–2016</p>
            <h3 className="text-xl font-bold">Vocational Qualification in Business and Administration</h3>
            <p className="mt-2 text-zinc-300">Tavastia Vocational College</p>
            <p className="mb-3 mt-5 text-sm font-medium text-zinc-400">Relevant studies</p>
            <div className="flex flex-wrap gap-3">
              {["Customer Service", "Sales", "Marketing"].map((subject) => (
                <span
                  key={subject}
                  className="rounded-full border border-pink-500/20 bg-pink-500/[0.06] px-4 py-2 text-sm text-pink-200"
                >
                  {subject}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/[0.08] bg-white/[0.035] p-8 transition-all duration-500 hover:border-pink-500/30 hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(236,72,153,0.10)]">
            <p className="mb-2 text-sm uppercase tracking-[0.16em] text-pink-300">1 September 2026 · Certificate</p>
            <h3 className="text-xl font-bold">Elements of Supercomputing</h3>
            <p className="mt-2 text-zinc-300">KAMK University of Applied Sciences</p>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="reveal max-w-5xl mx-auto px-6 py-24"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-pink-300">05 / Contact</p>
        <h2 className="mb-8 text-5xl font-bold tracking-tight">
          Let’s talk.
        </h2>

        <div className="rounded-3xl border border-pink-500/20 bg-gradient-to-br from-pink-500/[0.10] to-white/[0.025] p-8 md:p-10 transition-all duration-500 hover:border-pink-500/40 hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(236,72,153,0.12)]">
          <p className="text-zinc-300 mb-4">
            Looking for opportunities in software development, data analytics, business intelligence and technology-focused roles. Feel free to get in touch.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/jennaharle/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-pink-500/25 px-4 py-2 text-pink-200 transition hover:border-pink-400 hover:bg-pink-500/10"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/JennaHarlenew"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-pink-500/25 px-4 py-2 text-pink-200 transition hover:border-pink-400 hover:bg-pink-500/10"
            >
              GitHub
            </a>
            <a
              href="mailto:harlejenna@gmail.com"
              className="rounded-full border border-pink-500/25 px-4 py-2 text-pink-200 transition hover:border-pink-400 hover:bg-pink-500/10"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}