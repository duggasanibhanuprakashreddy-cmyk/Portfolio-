import { Award, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';
import { certifications } from '../data/siteData';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <Sparkles size={13} />
            <span>Credentials // Verified Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Certifications & Technical Milestones
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Structured course tracks and comprehensive technical curricula completed across data analytics, algorithms, and Python.
          </p>
        </div>

        {/* 4 Cards Grid with 3D Tilt */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <TiltCard
              key={cert.title}
              maxTilt={8}
              className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-cyan-400/40 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Award size={20} />
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 size={10} />
                    <span>VERIFIED</span>
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-base text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-cyan-300">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{cert.date}</span>
                <span className="text-cyan-400 flex items-center gap-1">
                  Verified Track
                  <ArrowUpRight size={12} />
                </span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
