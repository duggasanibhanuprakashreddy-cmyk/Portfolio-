import { useState, useEffect } from 'react';
import {
  Code2,
  BriefcaseBusiness,
  FileText,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';
import { personalInfo, navItems } from '../data/siteData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of navItems) {
        const id = item.href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-3 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#080d1a]/80 px-4 py-2.5 backdrop-blur-xl shadow-lg shadow-black/40">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-sm font-bold tracking-tight text-white hover:text-cyan-300 transition group"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-400 group-hover:scale-105 transition">
            &gt;_
          </span>
          <span className="font-mono text-sm tracking-wide">
            {personalInfo.firstName}
            <span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-400/30 shadow-sm shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Social & Resume Actions */}
        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition"
          >
            <Code2 size={15} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900/60 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition"
          >
            <BriefcaseBusiness size={15} />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-cyan-500/40 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-3 py-1.5 text-xs font-medium text-cyan-200 hover:border-cyan-400 hover:text-white transition shadow-sm shadow-cyan-500/20"
          >
            <FileText size={13} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-900/60 text-slate-300 md:hidden"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-white/10 bg-[#080d1a]/95 p-4 backdrop-blur-2xl shadow-xl md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-300 transition"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-3 border-t border-white/10 pt-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-white"
            >
              <Code2 size={14} /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-white"
            >
              <BriefcaseBusiness size={14} /> LinkedIn
            </a>
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-auto flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-500/20 px-3 py-1 text-xs text-cyan-200"
            >
              <FileText size={12} /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
