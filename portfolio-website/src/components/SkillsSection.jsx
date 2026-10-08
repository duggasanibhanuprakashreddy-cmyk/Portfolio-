import { Code2, Brain, Cpu, Globe, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';
import { skillGroups } from '../data/siteData';

export default function SkillsSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return Code2;
      case 'Brain':
        return Brain;
      case 'Cpu':
        return Cpu;
      case 'Globe':
        return Globe;
      default:
        return Code2;
    }
  };

  return (
    <section id="skills" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <Sparkles size={13} />
            <span>Capabilities // Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Technical Strengths & Learning Focus
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Curated technical proficiencies across software development, predictive machine learning, and embedded hardware workflows.
          </p>
        </div>

        {/* 2x2 Grid of Bento Skill Cards with 3D Tilt */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => {
            const IconComponent = getIcon(group.icon);

            return (
              <TiltCard
                key={group.id}
                maxTilt={6}
                className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 space-y-6 hover:border-cyan-400/40 transition-colors"
              >
                {/* Header with Priority Tag & Icon */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {group.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-sans">
                        {group.description}
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 font-mono text-[11px] text-cyan-300">
                    {group.tag}
                  </span>
                </div>

                {/* Skill Bars */}
                <div className="space-y-4 pt-2">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-900/80 border border-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
