import {
  ArrowDown,
  Code2,
  BriefcaseBusiness,
  FileText,
  Sparkles,
  Layers,
} from 'lucide-react';
import Scene3D from './Scene3D';
import TiltCard from './TiltCard';
import { personalInfo } from '../data/siteData';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center pt-8 pb-16 overflow-hidden">
      {/* Translucent Giant Watermark Typography in Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden opacity-[0.035] -z-10">
        <span className="font-extrabold text-[15vw] tracking-tighter text-white">
          BHANUPRAKASH
        </span>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Status Pill Badge */}
        <div className="mb-6 flex items-center justify-center sm:justify-start">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3.5 py-1.5 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-sm shadow-cyan-500/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            <span>B.Tech CSE (AI & Data Science) • REVA University</span>
            <span className="text-cyan-500/50 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">Open for Internships</span>
          </div>
        </div>

        {/* Hero Grid: Typography + 3D Neural Lattice Canvas */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Kinetic Typography & Bio */}
          <div className="lg:col-span-7 space-y-6 text-center sm:text-left">
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-mono tracking-widest text-cyan-400 uppercase">
                // Intelligent Systems & Analytics
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                ARCHITECTING <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                  INTELLIGENT DATA
                </span>{' '}
                <br />
                & AI SYSTEMS
              </h1>
            </div>

            <p className="max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Hi, I’m{' '}
              <span className="font-semibold text-white">
                {personalInfo.name}
              </span>
              . An AI & Data Science engineering student at REVA University, dedicated to building predictive algorithms, exploratory data pipelines, and responsive software systems.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
              <a
                href="#terminal"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Enter Developer CLI</span>
                <ArrowDown size={16} />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 hover:border-cyan-400/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <FileText size={16} className="text-cyan-400" />
                <span>Resume</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 hover:border-cyan-400/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <Code2 size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 hover:border-cyan-400/40 hover:text-white hover:bg-white/10 transition-all"
              >
                <BriefcaseBusiness size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Interactive Three.js Neural Sphere Canvas */}
          <div className="lg:col-span-5 flex justify-center">
            <TiltCard
              maxTilt={8}
              glare={true}
              scale={1.01}
              className="w-full max-w-[460px] rounded-3xl border border-white/10 bg-gradient-to-b from-[#0c1322]/80 to-[#060a14]/90 p-3 backdrop-blur-xl shadow-2xl shadow-cyan-950/30"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#040711] border border-cyan-500/20">
                <Scene3D />
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <span>Explore Developer Profile & Work</span>
            <ArrowDown size={13} className="animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
