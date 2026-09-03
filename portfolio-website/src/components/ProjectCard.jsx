import { ArrowUpRight, Code2 } from 'lucide-react';

export default function ProjectCard({ title, description, technologies, github, demo }) {
  return (
    <article className="glass-panel rounded-2xl p-5 shadow-lg shadow-slate-950/25 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30">
      <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-slate-800 p-4 ring-1 ring-white/10">
        <div className="flex h-full items-end justify-between">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-200">
            Placeholder Project
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Demo</span>
        </div>
      </div>

      <h3 className="mb-3 text-2xl font-semibold text-white">{title}</h3>
      <p className="mb-5 text-sm leading-6 text-slate-300">{description}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-xs text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/50 hover:text-white"
        >
          <Code2 size={16} />
          GitHub
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:opacity-95"
        >
          Live Demo
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}
