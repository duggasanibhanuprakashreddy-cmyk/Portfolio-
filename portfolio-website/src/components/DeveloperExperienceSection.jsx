import { Sparkles, Terminal as TerminalIcon, Cpu, Activity, Laptop } from 'lucide-react';
import InteractiveTerminal from './InteractiveTerminal';
import TiltCard from './TiltCard';
import { quickStats } from '../data/siteData';

export default function DeveloperExperienceSection() {
  return (
    <section id="terminal" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <Sparkles size={13} />
            <span>Developer Experience // Interactive Console</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Developer CLI & System Telemetry
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Execute real-time commands in the terminal shell below or explore developer telemetry cards.
          </p>
        </div>

        {/* 2-Column Grid: Telemetry Cards (Left) + Interactive CLI (Right) */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* Left Column (5 cols): Telemetry Cards */}
          <div className="lg:col-span-5 space-y-4">
            <TiltCard
              maxTilt={6}
              className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4"
            >
              <div className="flex items-center gap-3 text-cyan-400">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                  <Activity size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    Live System Status
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Node: REVA-AI-STATION // Active
                  </p>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Host OS</span>
                  <span className="text-slate-200">Linux / Arch / zsh</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Core Runtime</span>
                  <span className="text-cyan-400">Python 3.12 • Node v22</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-slate-400">Primary Domain</span>
                  <span className="text-violet-400">AI, Data & ML</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Status</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Open to Opportunities
                  </span>
                </div>
              </div>
            </TiltCard>

            <TiltCard
              maxTilt={6}
              className="glass-panel rounded-2xl p-5 border border-white/10 flex items-center gap-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                <Laptop size={20} />
              </div>
              <div className="space-y-0.5">
                <h4 className="text-sm font-semibold text-white">
                  Interactive CLI Terminal
                </h4>
                <p className="text-xs text-slate-400 font-sans">
                  Try typing <code className="text-cyan-300 font-mono">skills</code>, <code className="text-cyan-300 font-mono">projects</code>, or <code className="text-cyan-300 font-mono">whoami</code> on the right.
                </p>
              </div>
            </TiltCard>
          </div>

          {/* Right Column (7 cols): Interactive Terminal */}
          <div className="lg:col-span-7">
            <InteractiveTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}
