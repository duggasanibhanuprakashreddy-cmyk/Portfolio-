import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  BriefcaseBusiness,
  Code2,
  Download,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Pencil,
  Plus,
  Rocket,
  Search,
  Sparkles,
} from 'lucide-react';
import SectionTitle from './components/SectionTitle';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import { personalInfo, navItems, skillGroups, projects, certifications } from './data/siteData';
import './App.css';

const socials = [
  { label: 'GitHub', href: personalInfo.github, icon: Code2 },
  { label: 'LinkedIn', href: personalInfo.linkedin, icon: BriefcaseBusiness },
  { label: 'Email', href: `mailto:${personalInfo.email}`, icon: Mail },
];

const viewerCards = [
  { name: 'Someone at REVA University', badge: 'View' },
  { name: 'Someone at REVA University', badge: 'View' },
  { name: 'Someone at REVA University', badge: 'View' },
  { name: 'Someone at REVA University', badge: 'View' },
];

const peopleCards = [
  {
    name: 'Chinmanyanda Dhupad',
    role: '2nd Year AI & Data Science Student',
    accent: 'Connect',
  },
  {
    name: 'Infant Renold',
    role: 'Advisor at |24.ai',
    accent: 'Connect',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#0b111a] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b111a]/85 backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-lg font-bold tracking-tight text-white">
            {personalInfo.name.split(' ').slice(0, 2).join(' ')}
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            Contact Me
            <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main id="home" className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.7fr)_360px]">
          <div className="space-y-6">
            <section className="overflow-hidden rounded-[18px] border border-white/10 bg-[#1c222d] shadow-[0_20px_35px_rgba(2,6,23,0.35)]">
              <div className="relative h-36 overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.35),_transparent_20%),linear-gradient(110deg,#44372d_0%,#625148_25%,#7a5d55_40%,#916c5c_56%,#532e18_100%)]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.22),transparent_36%,rgba(224,212,186,0.1)_66%,transparent)]" />
                <div className="absolute right-5 top-4 flex items-center gap-2 text-slate-200/80">
                  <button className="rounded-full border border-white/10 bg-black/10 p-2">
                    <Pencil size={14} />
                  </button>
                </div>
              </div>

              <div className="relative px-5 pb-5 pt-0 md:px-6">
                <div className="-mt-16 mb-4 flex items-end justify-between gap-4">
                  <div className="flex items-end gap-4">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-[#1c222d] bg-gradient-to-br from-[#f4d8c3] via-[#d0b07a] to-[#5d3a2d] text-4xl font-bold text-slate-900 shadow-lg shadow-slate-950/40">
                      B
                    </div>
                  </div>

                  <button className="hidden rounded-full border border-white/10 bg-black/10 p-2 text-slate-200 md:block">
                    <Pencil size={14} />
                  </button>
                </div>

                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h1 className="text-3xl font-semibold tracking-tight text-white md:text-[2.2rem]">
                      {personalInfo.name}
                    </h1>
                    <p className="mt-2 text-base font-medium text-slate-300">{personalInfo.role}</p>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
                    <Sparkles size={12} />
                    Student
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                  <span>{personalInfo.location}</span>
                  <span className="text-slate-500">•</span>
                  <a href={personalInfo.linkedin} className="font-medium text-cyan-300 hover:text-cyan-200">
                    {personalInfo.linkedin.replace('https://www.linkedin.com/in/', '')}
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110">
                    Open to
                  </button>
                  <button className="rounded-full border border-sky-400/50 bg-sky-500/10 px-5 py-2.5 text-sm font-semibold text-sky-200 hover:bg-sky-500/20">
                    Add section
                  </button>
                  <button className="rounded-full border border-slate-600 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-cyan-400/50 hover:text-white">
                    More
                  </button>
                </div>
              </div>
            </section>

            <section className="rounded-[18px] border border-white/10 bg-[#1a212b] p-5 shadow-[0_20px_35px_rgba(2,6,23,0.35)] md:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-white">Analytics</h2>
                <span className="rounded-full border border-white/10 bg-slate-950/50 px-2 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                  Private to you
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div>
                  <p className="text-sm text-slate-300">20 profile views</p>
                  <p className="mt-2 text-3xl font-bold text-white">20</p>
                  <p className="mt-1 text-sm text-slate-400">Discover who’s viewed your profile.</p>
                </div>
                <div>
                  <p className="text-sm text-slate-300">178 post impressions</p>
                  <p className="mt-2 text-3xl font-bold text-white">178</p>
                  <p className="mt-1 text-sm text-slate-400">Check out who’s engaging with your posts.</p>
                </div>
                <div>
                  <p className="text-sm text-slate-300">4 search appearances</p>
                  <p className="mt-2 text-3xl font-bold text-white">4</p>
                  <p className="mt-1 text-sm text-slate-400">See how often you appear in search results.</p>
                </div>
              </div>
            </section>

            <section className="rounded-[18px] border border-white/10 bg-[#1a212b] p-5 shadow-[0_20px_35px_rgba(2,6,23,0.35)] md:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-white">About</h2>
                <button className="rounded-full border border-white/10 bg-slate-950/50 p-2 text-slate-300">
                  <Pencil size={14} />
                </button>
              </div>

              <p className="text-lg leading-8 text-slate-300">
                I’m a B.Tech student specializing in Artificial Intelligence & Data Science at REVA University, Bengaluru. I’m passionate about Python, data analysis, visualization, and machine learning fundamentals. I enjoy learning by building real-world projects and exploring how data can drive smarter solutions.
              </p>
            </section>

            <section className="rounded-[18px] border border-white/10 bg-[#1a212b] p-5 shadow-[0_20px_35px_rgba(2,6,23,0.35)] md:p-6">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-white">Featured</h2>
                <div className="flex items-center gap-2">
                  <button className="rounded-full border border-white/10 bg-slate-950/50 p-2 text-slate-300">
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {projects.slice(0, 3).map((project) => (
                  <div key={project.title} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300 ring-1 ring-cyan-400/20">
                      <Briefcase size={18} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{project.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="skills" className="mx-auto w-full pt-2">
              <SectionTitle
                eyebrow="Skills"
                title="Technical strengths and learning focus"
                description="A mix of programming fundamentals, data science workflows, and embedded system knowledge aligned with modern AI and analytics work."
              />

              <div className="grid gap-6 lg:grid-cols-3">
                {skillGroups.map((group) => (
                  <SkillCard key={group.title} title={group.title} iconName={group.icon} skills={group.skills} />
                ))}
              </div>
            </section>

            <section id="projects" className="pt-2">
              <SectionTitle
                eyebrow="Projects"
                title="Project showcase"
                description="These are placeholder projects to help structure the portfolio until real project work is added."
              />

              <div className="grid gap-6 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </section>

            <section id="certifications" className="pt-2">
              <SectionTitle
                eyebrow="Certifications"
                title="Learning milestones and course completion"
              />

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="glass-panel rounded-2xl p-5">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300 ring-1 ring-cyan-400/20">
                      <Briefcase size={18} />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">{cert.name}</h3>
                    <p className="mb-5 text-sm text-slate-300">{cert.org}</p>
                    <a href={cert.href} className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
                      View Certificate
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section id="contact" className="pt-2">
              <SectionTitle
                eyebrow="Contact"
                title="Let’s connect and build something meaningful."
              />

              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-5">
                  <div className="glass-panel rounded-2xl p-5">
                    <div className="mb-3 flex items-center gap-3 text-cyan-300">
                      <Mail size={18} />
                      <span className="font-medium">Email</span>
                    </div>
                    <a href={`mailto:${personalInfo.email}`} className="text-slate-200 transition hover:text-white">
                      {personalInfo.email}
                    </a>
                  </div>

                  <div className="glass-panel rounded-2xl p-5">
                    <div className="mb-3 flex items-center gap-3 text-cyan-300">
                      <BriefcaseBusiness size={18} />
                      <span className="font-medium">LinkedIn</span>
                    </div>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-200 transition hover:text-white">
                      linkedin.com/in/duggasanibhanuprakashreddy
                    </a>
                  </div>

                  <div className="glass-panel rounded-2xl p-5">
                    <div className="mb-3 flex items-center gap-3 text-cyan-300">
                      <Globe size={18} />
                      <span className="font-medium">GitHub</span>
                    </div>
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-200 transition hover:text-white">
                      github.com/duggasanibhanuprakashreddy-cmyk
                    </a>
                  </div>

                  <div className="glass-panel rounded-2xl p-5">
                    <div className="mb-3 flex items-center gap-3 text-cyan-300">
                      <MapPin size={18} />
                      <span className="font-medium">Location</span>
                    </div>
                    <p className="text-slate-200">{personalInfo.location}</p>
                  </div>
                </div>

                <form className="glass-panel rounded-2xl p-6" onSubmit={(event) => event.preventDefault()}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-slate-300">Name</label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-slate-300">Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-sm text-slate-300">Message</label>
                    <textarea
                      rows="6"
                      placeholder="Tell me about your project, idea, or opportunity..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
                  >
                    Send Message
                    <ArrowUpRight size={18} />
                  </button>
                </form>
              </div>
            </section>
          </div>

          <aside className="space-y-6"> 
            <div className="rounded-[18px] border border-white/10 bg-[#1a212b] p-4 shadow-[0_20px_35px_rgba(2,6,23,0.35)]">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">Profile language</h3>
                <button className="rounded-full border border-white/10 bg-slate-950/50 p-2 text-slate-300">
                  <Pencil size={14} />
                </button>
              </div>
              <p className="text-lg text-slate-200">English</p>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[#1a212b] p-4 shadow-[0_20px_35px_rgba(2,6,23,0.35)]">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">Public profile & URL</h3>
                <button className="rounded-full border border-white/10 bg-slate-950/50 p-2 text-slate-300">
                  <Pencil size={14} />
                </button>
              </div>
              <p className="text-[0.98rem] text-slate-200 break-all">
                www.linkedin.com/in/duggasanibhanuprakashreddy
              </p>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[#1a212b] p-4 shadow-[0_20px_35px_rgba(2,6,23,0.35)]">
              <h3 className="mb-4 text-2xl font-semibold text-white">Who your viewers also viewed</h3>

              <div className="space-y-4">
                {viewerCards.map((card, index) => (
                  <div key={`${card.name}-${index}`} className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-950/40 p-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-slate-300 to-slate-500 text-sm font-bold text-slate-900">
                        {card.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-white">{card.name}</p>
                      </div>
                    </div>
                    <button className="rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1.5 text-sm text-slate-200 hover:border-cyan-400/50">
                      {card.badge}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-[#1a212b] p-4 shadow-[0_20px_35px_rgba(2,6,23,0.35)]">
              <h3 className="mb-4 text-2xl font-semibold text-white">People you may know</h3>

              <div className="space-y-4">
                {peopleCards.map((person) => (
                  <div key={person.name} className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-slate-950/40 p-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 via-amber-200 to-yellow-400 text-sm font-bold text-slate-900">
                        {person.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-white">{person.name}</p>
                        <p className="text-sm text-slate-400">{person.role}</p>
                      </div>
                    </div>
                    <button className="flex items-center gap-1 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1.5 text-sm text-slate-200 hover:border-cyan-400/50">
                      <Plus size={14} />
                      {person.accent}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="mt-10 border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Duggasani Bhanuprakash Reddy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
