import * as Icons from 'lucide-react';

export default function SkillCard({ title, iconName, skills }) {
  const Icon = Icons[iconName] || Icons.Code2;

  return (
    <div className="glass-panel rounded-2xl p-6 shadow-lg shadow-slate-950/25 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-xl bg-cyan-500/10 p-2 text-cyan-300 ring-1 ring-cyan-400/20">
          <Icon size={18} />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
