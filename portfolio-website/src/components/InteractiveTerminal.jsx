import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { terminalCommands, personalInfo } from '../data/siteData';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    {
      type: 'command',
      cmd: 'whoami',
      output: [
        'Duggasani Bhanuprakash Reddy',
        'B.Tech CSE (AI & Data Science) • REVA University, Bengaluru',
      ],
    },
    {
      type: 'command',
      cmd: 'focus',
      output: [
        'Machine Learning • Data Analytics • Python • SQL • IoT Systems',
      ],
    },
    {
      type: 'command',
      cmd: 'status',
      output: [
        'Building data-driven pipelines & practical AI prototypes.',
      ],
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState(['whoami', 'focus', 'status']);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setCmdHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    if (cmd === 'help') {
      setHistory((prev) => [
        ...prev,
        {
          type: 'command',
          cmd: rawCmd,
          output: [
            'AVAILABLE CLI COMMANDS:',
            '  whoami    - Developer overview & background',
            '  focus     - Core specializations & domains',
            '  skills    - Programming languages, AI libraries & tools',
            '  projects  - Featured machine learning & data projects',
            '  status    - Academic & engineering status',
            '  contact   - Get email, LinkedIn, & GitHub links',
            '  matrix    - Easter egg visual effect',
            '  clear     - Clears the terminal screen',
          ],
        },
      ]);
      return;
    }

    if (cmd === 'matrix' || cmd === 'contact') {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#38bdf8', '#a855f7', '#34d399'],
        });
      } catch {
        // Safe fallback
      }
    }

    if (terminalCommands[cmd]) {
      setHistory((prev) => [
        ...prev,
        {
          type: 'command',
          cmd: rawCmd,
          output: terminalCommands[cmd].output,
        },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          type: 'command',
          cmd: rawCmd,
          output: [
            `Command not found: '${rawCmd}'.`,
            "Type 'help' or click the quick execute pills below.",
          ],
        },
      ]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(cmdHistory[nextIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(cmdHistory[nextIndex]);
      }
    }
  };

  const renderTerminalLine = (line) => {
    if (typeof line !== 'string') return line;
    if (line.includes('linkedin.com/in/duggasanibhanuprakashreddy')) {
      const parts = line.split('linkedin.com/in/duggasanibhanuprakashreddy');
      return (
        <span>
          {parts[0]}
          <a
            href="https://www.linkedin.com/in/duggasanibhanuprakashreddy/"
            target="_blank"
            rel="noopener"
            className="text-cyan-400 underline hover:text-cyan-200 font-medium cursor-pointer"
          >
            linkedin.com/in/duggasanibhanuprakashreddy
          </a>
          {parts[1]}
        </span>
      );
    }
    if (line.includes('github.com/duggasanibhanuprakashreddy-cmyk')) {
      const parts = line.split('github.com/duggasanibhanuprakashreddy-cmyk');
      return (
        <span>
          {parts[0]}
          <a
            href="https://github.com/duggasanibhanuprakashreddy-cmyk"
            target="_blank"
            rel="noopener"
            className="text-cyan-400 underline hover:text-cyan-200 cursor-pointer"
          >
            github.com/duggasanibhanuprakashreddy-cmyk
          </a>
          {parts[1]}
        </span>
      );
    }
    if (line.includes('duggasanibhanuprakashreddy@gmail.com')) {
      const parts = line.split('duggasanibhanuprakashreddy@gmail.com');
      return (
        <span>
          {parts[0]}
          <a
            href="mailto:duggasanibhanuprakashreddy@gmail.com"
            className="text-cyan-400 underline hover:text-cyan-200 cursor-pointer"
          >
            duggasanibhanuprakashreddy@gmail.com
          </a>
          {parts[1]}
        </span>
      );
    }
    return line;
  };

  const quickPills = ['whoami', 'focus', 'skills', 'projects', 'status', 'contact', 'clear'];

  return (
    <div
      id="terminal"
      className="glass-panel overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-cyan-950/20 font-mono text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#070b16] px-4 py-3 select-none">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-rose-500/80"></div>
          <div className="h-3 w-3 rounded-full bg-amber-500/80"></div>
          <div className="h-3 w-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs text-slate-400 flex items-center gap-1.5 font-sans">
            <TerminalIcon size={12} className="text-cyan-400" />
            bhanuprakash@ai-workstation: ~ (zsh)
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-cyan-400/80 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
          <Sparkles size={11} />
          <span>Interactive CLI</span>
        </div>
      </div>

      {/* Terminal Content Screen */}
      <div className="max-h-[340px] min-h-[260px] overflow-y-auto p-4 md:p-5 bg-[#050812]/90 space-y-3 scrollbar-thin">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-300">
              <span className="text-emerald-400 font-semibold">$</span>
              <span className="text-slate-100 font-medium">{item.cmd}</span>
            </div>
            <div className="text-slate-300/90 pl-4 space-y-0.5 leading-relaxed text-[13px]">
              {item.output.map((line, lIdx) => (
                <div key={lIdx} className="text-slate-300">
                  {renderTerminalLine(line)}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Input Line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
          <span className="text-emerald-400 font-semibold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'skills', 'status', or 'projects'..."
            className="flex-1 bg-transparent text-cyan-200 placeholder-slate-500 outline-none text-[13px]"
            autoComplete="off"
            spellCheck="false"
          />
          <button
            type="submit"
            className="text-slate-400 hover:text-cyan-300 p-1 transition"
            title="Execute command"
          >
            <CornerDownLeft size={14} />
          </button>
        </form>

        <div ref={bottomRef} />
      </div>

      {/* Quick Action Pill Buttons */}
      <div className="border-t border-white/10 bg-[#070b16] px-4 py-2.5 flex items-center justify-between flex-wrap gap-2 select-none">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-slate-400 font-sans mr-1">Quick execute:</span>
          {quickPills.map((pill) => (
            <button
              key={pill}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                executeCommand(pill);
              }}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono border border-white/10 bg-slate-900/80 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 hover:bg-cyan-950/30 transition cursor-pointer"
            >
              ▷ {pill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
