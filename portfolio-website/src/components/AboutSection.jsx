import {
  Brain,
  Terminal,
  Cpu,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Code2,
  BriefcaseBusiness,
  ArrowUpRight,
} from 'lucide-react';
import TiltCard from './TiltCard';
import { personalInfo, quickStats, mindsetCards } from '../data/siteData';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <Sparkles size={13} />
            <span>Profile // Engineering Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering Mindset & Ambition
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Bridging theoretical data science concepts with production-ready software implementations and real-time sensor systems.
          </p>
        </div>

        {/* Bento Grid: Mindset Narrative (Left) + Profile Status (Right) */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left Column (7 cols): Main Ambition Story & 3 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <TiltCard
              maxTilt={6}
              className="glass-panel rounded-2xl p-6 sm:p-7 space-y-5 border border-white/10"
            >
              <div className="flex items-center gap-3 text-cyan-400">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <Brain size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Data Science Student & System Builder
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I’m{' '}
                <span className="font-semibold text-white">
                  {personalInfo.name}
                </span>
                , an AI & Data Science undergraduate at{' '}
                <span className="text-cyan-300">REVA University, Bengaluru</span>. My work centers on demystifying complex data streams through predictive modeling, structured algorithms, and intuitive digital interfaces.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Currently developing proficiency across Python, SQL, exploratory data analysis, machine learning algorithms, and embedded IoT architectures. I thrive on translating business logic and raw datasets into tangible, measurable applications.
              </p>

              {/* Monospace Active Exploration Pill */}
              <div className="rounded-xl border border-cyan-500/25 bg-cyan-950/20 p-3.5 font-mono text-xs text-cyan-300 flex items-start gap-2.5">
                <Sparkles size={15} className="shrink-0 mt-0.5 text-cyan-400" />
                <span>
                  Currently exploring predictive algorithms, statistical feature engineering, IoT sensor telemetry, and modern full-stack data tools.
                </span>
              </div>
            </TiltCard>

            {/* 3 Pillars Sub-cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {mindsetCards.map((card) => {
                const IconComponent =
                  card.icon === 'Brain'
                    ? Brain
                    : card.icon === 'Terminal'
                    ? Terminal
                    : Cpu;

                return (
                  <TiltCard
                    key={card.title}
                    maxTilt={10}
                    className="glass-panel rounded-xl p-4 border border-white/10 space-y-2 hover:border-cyan-400/40 transition-colors"
                  >
                    <div className="h-8 w-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                      <IconComponent size={16} />
                    </div>
                    <h4 className="font-semibold text-sm text-white">
                      {card.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {card.description}
                    </p>
                  </TiltCard>
                );
              })}
            </div>
          </div>

          {/* Right Column (5 cols): Profile Card & Core Focus */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard
              maxTilt={6}
              className="glass-panel rounded-2xl p-6 border border-white/10 space-y-6"
            >
              {/* Header with Avatar & Status */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-600 text-xl font-bold text-slate-950 shadow-lg shadow-cyan-500/25">
                  B
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">
                    B.Tech CSE • REVA University
                  </p>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200 hover:underline mt-1 cursor-pointer"
                  >
                    <BriefcaseBusiness size={12} />
                    <span>linkedin.com/in/duggasanibhanuprakashreddy</span>
                    <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>

              {/* Core Technical Focus List */}
              <div className="space-y-2.5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Core Technical Focus
                </div>
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>Artificial Intelligence & ML Models</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>Python, SQL & Algorithmic Foundations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>Data Analysis & Exploratory Dashboards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>IoT Sensor Telemetry & Bluetooth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">→</span>
                    <span>Modern Reactive UI with React & Vite</span>
                  </div>
                </div>
              </div>

              {/* Engineering Status Pill */}
              <div className="pt-2 border-t border-white/10">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Engineering Status
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/30 px-3 py-1 text-xs font-mono text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Learning • Building • Improving</span>
                </div>
              </div>
            </TiltCard>

            {/* Education Degree Highlight Card */}
            <TiltCard
              maxTilt={8}
              className="glass-panel rounded-2xl p-5 border border-white/10 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Bachelor of Technology (CSE)
                  </h4>
                  <p className="text-xs text-slate-400">
                    AI & Data Science • REVA University
                  </p>
                </div>
              </div>
              <div className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs font-mono text-cyan-300">
                2025–2029
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Bottom Quick Stats Row */}
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
          {quickStats.map((stat) => (
            <TiltCard
              key={stat.label}
              maxTilt={8}
              className="glass-panel rounded-xl p-5 border border-white/10 text-center space-y-1 hover:border-cyan-400/40 transition-colors"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                {stat.value}
              </p>
              <p className="text-[11px] font-mono tracking-wider text-slate-400 uppercase">
                {stat.label}
              </p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
