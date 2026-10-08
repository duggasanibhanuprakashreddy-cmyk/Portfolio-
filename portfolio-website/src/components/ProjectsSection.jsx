import { ArrowUpRight, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';
import { projects } from '../data/siteData';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <Sparkles size={13} />
            <span>Showcase // Production Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured Flagship Projects
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            End-to-end applications demonstrating machine learning, exploratory analytics, and real-time edge telemetry architectures.
          </p>
        </div>

        {/* 3 Column Project Cards Grid with 3D Tilt */}
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <TiltCard
              key={project.id}
              maxTilt={7}
              className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-cyan-400/40 transition-colors"
            >
              <div className="space-y-5">
                {/* Project Tag Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-cyan-300 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
                    {project.tag}
                  </span>
                </div>

                {/* Project Title & Description */}
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Core Features List */}
                <div className="space-y-2 rounded-xl bg-[#060a14]/60 border border-white/5 p-4">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-cyan-400">
                    Core Capabilities
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                    {project.coreFeatures.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          size={13}
                          className="text-cyan-400 shrink-0 mt-0.5"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-slate-900/60 px-2.5 py-1 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Repository & Live Demo */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/10 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-medium text-slate-200 hover:border-cyan-400/40 hover:text-white transition"
                >
                  <Code2 size={14} />
                  <span>Repository</span>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 py-2.5 text-xs font-medium text-white shadow-md shadow-cyan-500/20 hover:brightness-110 transition"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
