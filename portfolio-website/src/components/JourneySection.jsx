import { Sparkles, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';
import { journeyTimeline } from '../data/siteData';

export default function JourneySection() {
  return (
    <section id="journey" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <Sparkles size={13} />
            <span>Progression // Engineering Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Academic & Practical Journey
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            From foundational programming and mathematics to advanced AI engineering and scalable prototypes.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-cyan-500/30 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
          {journeyTimeline.map((item, index) => (
            <div key={item.title} className="relative group">
              {/* Glowing Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#050811] border-2 border-cyan-400 shadow-md shadow-cyan-500/50">
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping"></div>
              </div>

              {/* Timeline Card */}
              <TiltCard
                maxTilt={5}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 space-y-4 hover:border-cyan-400/40 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-cyan-300 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      // {item.phase}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar size={13} className="text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">
                    {item.institution}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {item.highlights.map((high, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900/60 border border-white/5 px-3 py-1.5 text-xs text-slate-300 font-mono"
                    >
                      <CheckCircle2 size={12} className="text-cyan-400" />
                      <span>{high}</span>
                    </span>
                  ))}
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
