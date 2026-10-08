import { useEffect } from 'react';
import {
  X,
  Printer,
  ExternalLink,
  Download,
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  BriefcaseBusiness,
  Code2,
  Globe,
} from 'lucide-react';
import { personalInfo } from '../data/siteData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    // Open printable page or print current view
    const printWindow = window.open('/resume.html', '_blank');
    if (printWindow) {
      printWindow.focus();
    } else {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative flex flex-col w-full max-w-4xl max-h-[92vh] rounded-2xl border border-white/15 bg-[#090e1a] text-slate-100 shadow-2xl overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#060a14] px-5 py-3.5 select-none">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <FileText size={17} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white leading-tight">
                Duggasani Bhanuprakash Reddy — Resume
              </h3>
              <p className="text-[11px] font-mono text-cyan-400">
                B.Tech CSE (AI & Data Science) • ATS Optimized
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/15 px-3 py-1.5 text-xs font-semibold text-cyan-200 hover:bg-cyan-500/25 hover:text-white transition cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer size={13} />
              <span className="hidden sm:inline">Print / Save as PDF</span>
            </button>

            <a
              href="/resume.html"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-400/40 transition"
              title="Open Standalone Clean Resume"
            >
              <ExternalLink size={13} />
              <span className="hidden sm:inline">New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-900/60 text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
              aria-label="Close Resume"
            >
              <X size={17} />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-7 bg-[#0b1222] font-sans selection:bg-cyan-500/30 selection:text-white text-slate-200">
          {/* Header Card */}
          <div className="border-b border-white/15 pb-6 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {personalInfo.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-cyan-400">
              {personalInfo.education}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-300 font-mono">
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-cyan-400" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1 hover:text-cyan-300 underline"
              >
                <Mail size={12} className="text-cyan-400" />
                {personalInfo.email}
              </a>
              <span>•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-1 hover:text-cyan-300 underline"
              >
                <BriefcaseBusiness size={12} className="text-cyan-400" />
                LinkedIn
              </a>
              <span>•</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-1 hover:text-cyan-300 underline"
              >
                <Code2 size={12} className="text-cyan-400" />
                GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase border-b border-white/10 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Proactive and analytically oriented Computer Science & Engineering undergraduate specializing in Artificial Intelligence and Data Science at REVA University. Grounded in mathematical foundations, statistical computing, predictive algorithms, and high-performance Python development. Experienced in engineering full-stack exploratory analytics dashboards and real-time IoT hardware telemetry systems. Seeking opportunities to apply strong algorithmic problem-solving abilities and practical software engineering expertise in forward-thinking data teams.
            </p>
          </section>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase border-b border-white/10 pb-1">
              Education
            </h2>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold text-sm text-white">
                  Bachelor of Technology (B.Tech) — AI & Data Science
                </h3>
                <span className="text-xs font-mono text-cyan-300">
                  Sep 2025 – Feb 2029
                </span>
              </div>
              <p className="text-xs text-slate-400">
                REVA University, Bengaluru, Karnataka, India • Current Standing: <strong className="text-white">8.85 / 10.0 CGPA</strong>
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming (Python/C++), Linear Algebra, Probability & Statistics, Database Management Systems (SQL), Discrete Mathematics, IoT & Embedded Systems.
              </p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase border-b border-white/10 pb-1">
              Technical Proficiencies
            </h2>
            <div className="grid gap-2 sm:grid-cols-2 text-xs">
              <div className="rounded-xl border border-white/10 bg-[#060a14]/60 p-3 space-y-1">
                <span className="font-mono text-cyan-300 font-semibold block">
                  Languages & Querying
                </span>
                <span className="text-slate-300">
                  Python (Proficient, OOP, PyData), SQL (Advanced, MySQL, PostgreSQL), C++, JavaScript (ES6+)
                </span>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#060a14]/60 p-3 space-y-1">
                <span className="font-mono text-violet-300 font-semibold block">
                  AI & Data Science Stack
                </span>
                <span className="text-slate-300">
                  Pandas, NumPy, Scikit-Learn, Matplotlib, Seaborn, Exploratory Data Analysis (EDA), Statistical Modeling
                </span>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#060a14]/60 p-3 space-y-1">
                <span className="font-mono text-sky-300 font-semibold block">
                  IoT & Embedded Systems
                </span>
                <span className="text-slate-300">
                  Embedded Microcontrollers, Bluetooth Protocols, Telemetry Streams, Hardware Sensor Interfacing
                </span>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#060a14]/60 p-3 space-y-1">
                <span className="font-mono text-emerald-300 font-semibold block">
                  Web & Developer Tools
                </span>
                <span className="text-slate-300">
                  React 19, Vite, Tailwind CSS, Three.js, Git, GitHub, REST APIs, Linux CLI, Vercel
                </span>
              </div>
            </div>
          </section>

          {/* Flagship Projects */}
          <section className="space-y-4">
            <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase border-b border-white/10 pb-1">
              Key Technical Projects
            </h2>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold text-sm text-white">
                  Smart Predictive Data Analytics Dashboard
                </h3>
                <span className="text-xs font-mono text-cyan-400">
                  Python, Pandas, SQL, React
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed font-light">
                <li>Engineered an end-to-end analytical data cleansing and visualization engine processing multi-dimensional tabular datasets.</li>
                <li>Developed vector-accelerated statistical cleansing pipelines with Pandas reducing null/outlier transformation latency by 40%.</li>
                <li>Designed responsive interactive charts enabling multi-parameter correlation analysis and instant metric exports.</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold text-sm text-white">
                  IoT Sensor Telemetry & Edge Monitoring Platform
                </h3>
                <span className="text-xs font-mono text-cyan-400">
                  IoT, Python, Embedded, Bluetooth
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed font-light">
                <li>Constructed a real-time hardware telemetry pipeline streaming distributed sensor readings over Bluetooth Low Energy (BLE) protocols.</li>
                <li>Engineered algorithmic threshold surveillance triggering immediate automated alerts upon environmental anomaly detections.</li>
                <li>Structured low-overhead data ring buffers maintaining 99.8% packet delivery reliability during edge network interruptions.</li>
              </ul>
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-bold text-sm text-white">
                  Machine Learning Classification & Inference Engine
                </h3>
                <span className="text-xs font-mono text-cyan-400">
                  Python, Scikit-Learn, NumPy
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed font-light">
                <li>Designed a structured ML pipeline featuring automated cross-validation, feature scaling, and ensemble algorithm exploration (Random Forest, SVM, Gradient Boosting).</li>
                <li>Generated comprehensive ROC-AUC evaluation curves and confusion matrices to benchmark classification accuracy on skewed datasets.</li>
                <li>Serialized trained models for quick inference deployment through a clean API integration interface.</li>
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-2">
            <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase border-b border-white/10 pb-1">
              Certifications & Technical Milestones
            </h2>
            <div className="grid gap-2 sm:grid-cols-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span>Data Analysis with Python (Comprehensive Professional Track)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span>Data Visualization with Python (Statistical Dashboards Track)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span>Python 101 for Data Science (Algorithmic & PyData Foundations)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span>Ignite Full Technical Program (Engineering & Architecture)</span>
              </div>
            </div>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-white/10 bg-[#060a14] px-6 py-3 text-xs text-slate-400">
          <span>Press <kbd className="px-1.5 py-0.5 rounded border border-white/20 bg-slate-900 text-slate-300 font-mono text-[10px]">Esc</kbd> to close</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="text-cyan-400 hover:text-cyan-300 font-mono underline cursor-pointer"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="hover:text-white cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
