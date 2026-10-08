import { marqueeItems } from '../data/siteData';

export default function MarqueeTicker() {
  const repeated = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full overflow-hidden border-b border-white/10 bg-[#04060d]/90 py-2.5 backdrop-blur-md select-none z-40">
      <div className="animate-marquee flex items-center gap-8 text-[11px] font-mono tracking-widest text-slate-400">
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 shrink-0">
            <span className="hover:text-cyan-300 transition-colors uppercase">{item}</span>
            <span className="text-cyan-400 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
