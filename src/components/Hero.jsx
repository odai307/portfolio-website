import { MapPin, ArrowRight, Mail, Code2, Database, Zap, Cpu, FileText, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Glow Orbs background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-indigo rounded-full pointer-events-none blur-3xl opacity-60"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-glow-cyan rounded-full pointer-events-none blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061411] border border-emerald-500/25 text-slate-300 text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Accra, Ghana</span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-semibold">Full-Stack Software Engineer</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Hi, I'm <span className="gradient-text-accent">Gabriel Afotey</span>. Building Production Full-Stack Systems.
            </h1>

            {/* Subtitle */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Full-Stack Software Engineer specializing in Node.js backend architecture, React frontend development, PostgreSQL and MongoDB databases, and real-time WebSocket systems. Proven track record architecting and deploying production web platforms.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-medium">
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                PostgreSQL & MongoDB
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-medium">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Real-Time WebSockets
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/25 text-teal-300 text-xs font-medium">
                <Cpu className="w-3.5 h-3.5 text-teal-400" />
                Paystack Payment Gateway
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#experience"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm hover:opacity-95 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 group"
              >
                View Experience & Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`${import.meta.env.BASE_URL}Gabriel_Afotey_CV.pdf`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#091a16] border border-emerald-500/25 text-slate-200 font-semibold text-sm hover:bg-[#0c241e] hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>View Resume</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Connect:</span>
              <a
                href="https://github.com/odai307"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#091a16] border border-emerald-500/25 hover:text-white hover:border-emerald-500/50 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/gabriel-afotey/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#091a16] border border-emerald-500/25 hover:text-white hover:border-emerald-500/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:gabrielafotey@gmail.com"
                className="p-2 rounded-lg bg-[#091a16] border border-emerald-500/25 hover:text-white hover:border-emerald-500/50 transition-colors"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Interactive Code Terminal Preview */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/20 relative group">
              
              {/* Terminal Window Header */}
              <div className="bg-[#071714] px-4 py-3 border-b border-emerald-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  engineer.config.ts
                </div>
                <div className="w-12"></div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs leading-relaxed space-y-3 bg-[#030d0a]/95 text-slate-300">
                <div className="text-slate-500">// Candidate Profile Overview</div>
                <div>
                  <span className="text-teal-400">const</span> <span className="text-amber-300">engineer</span> = {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-emerald-300">name</span>: <span className="text-emerald-400">'Gabriel Afotey'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-emerald-300">role</span>: <span className="text-emerald-400">'Full-Stack Software Engineer'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-emerald-300">location</span>: <span className="text-emerald-400">'Accra, Ghana'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-emerald-300">coreStack</span>: [
                </div>
                <div className="pl-8 text-amber-300">
                  'Node.js', 'Express', 'PostgreSQL', 'MongoDB',
                </div>
                <div className="pl-8 text-amber-300">
                  'Prisma ORM', 'Socket.io', 'React', 'Paystack'
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-emerald-300">status</span>: <span className="text-amber-400">'Ready for Impact 🚀'</span>
                </div>
                <div>{'}'};</div>

                <div className="pt-2 border-t border-emerald-500/20 text-slate-400 flex items-center justify-between text-[11px]">
                  <span className="text-emerald-400">✓ System Status: All Services Operational</span>
                  <span className="text-slate-500">v2.4.0</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
