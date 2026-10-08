import { useState } from 'react';
import {
  Mail,
  BriefcaseBusiness,
  Code2,
  MapPin,
  Send,
  Copy,
  Check,
  Sparkles,
  FileText,
  ArrowUpRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import TiltCard from './TiltCard';
import { personalInfo } from '../data/siteData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#a855f7', '#34d399', '#f43f5e'],
      });
    } catch {
      // Safe fallback
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="relative py-20">
      {/* Translucent Backdrop Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden opacity-[0.025] -z-10">
        <span className="font-extrabold text-[18vw] tracking-tighter text-white">
          CONNECT
        </span>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 uppercase">
            <Sparkles size={13} />
            <span>Grand Finale // Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let’s Build Something{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Intelligent
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Open to internship opportunities, collaborative AI & data engineering projects, and technical discussions.
          </p>
        </div>

        {/* 2 Column Bento Grid: Direct Info (Left) + Interactive Form (Right) */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left Column: Direct Info Pills & Quick Resume */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with 1-Click Copy */}
            <TiltCard
              maxTilt={6}
              className="glass-panel rounded-2xl p-5 border border-white/10 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400">
                  <Mail size={16} />
                  <span>DIRECT EMAIL</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900/60 px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-sm font-semibold text-white hover:text-cyan-300 transition break-all"
              >
                {personalInfo.email}
              </a>
            </TiltCard>

            {/* LinkedIn Card */}
            <TiltCard
              maxTilt={6}
              className="glass-panel rounded-2xl p-5 border border-white/10 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400">
                  <BriefcaseBusiness size={16} />
                  <span>LINKEDIN NETWORK</span>
                </div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-1 text-xs font-mono text-cyan-300 hover:text-white hover:border-cyan-400 transition cursor-pointer"
                >
                  <span>Open</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener"
                className="block text-sm font-semibold text-white hover:text-cyan-300 transition"
              >
                linkedin.com/in/duggasanibhanuprakashreddy
              </a>
            </TiltCard>

            {/* GitHub Card */}
            <TiltCard
              maxTilt={6}
              className="glass-panel rounded-2xl p-5 border border-white/10 space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400">
                  <Code2 size={16} />
                  <span>GITHUB REPOSITORIES</span>
                </div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-1 rounded-lg border border-white/10 bg-slate-900/60 px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-400 transition cursor-pointer"
                >
                  <span>Open</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener"
                className="block text-sm font-semibold text-white hover:text-cyan-300 transition"
              >
                github.com/duggasanibhanuprakashreddy-cmyk
              </a>
            </TiltCard>

            {/* Location Card */}
            <TiltCard
              maxTilt={6}
              className="glass-panel rounded-2xl p-5 border border-white/10 space-y-2"
            >
              <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400">
                <MapPin size={16} />
                <span>LOCATION</span>
              </div>
              <p className="text-sm font-semibold text-white">
                {personalInfo.location}
              </p>
            </TiltCard>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <TiltCard
              maxTilt={4}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-[#050811] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-[#050811] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Internship Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-[#050811] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your project, internship role, or idea..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-[#050811] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition"
                  />
                </div>

                {submitted ? (
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4 text-center font-mono text-xs text-emerald-300 flex items-center justify-center gap-2">
                    <Check size={16} />
                    <span>
                      Thank you! Your message has been received. I'll get back to you soon.
                    </span>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer"
                  >
                    <Send size={15} />
                    <span>Send Message</span>
                  </button>
                )}
              </form>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
