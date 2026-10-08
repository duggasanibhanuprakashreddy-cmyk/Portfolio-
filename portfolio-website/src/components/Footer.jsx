import { ArrowUp, Code2, BriefcaseBusiness, Mail } from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#03050c] py-10 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2 text-white font-mono font-bold text-sm">
            <span className="text-cyan-400">&gt;_</span>
            <span>{personalInfo.name}</span>
          </div>
          <p className="text-xs text-slate-400">
            B.Tech CSE (AI & Data Science) • REVA University, Bengaluru
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition"
          >
            <Code2 size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn Profile"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition cursor-pointer"
          >
            <BriefcaseBusiness size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send Email"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Right: Back to Top & Copyright */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <span>© 2026 Duggasani Bhanuprakash Reddy</span>
          <button
            onClick={scrollToTop}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition cursor-pointer"
            title="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
