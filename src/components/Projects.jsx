import { FolderGit2, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const projects = [
    {
      title: 'FantasyDuel GH',
      category: 'Full-Stack FPL Wagering & Gaming SaaS',
      status: 'Live Production',
      statusColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      description:
        'A high-concurrency Fantasy Premier League (FPL) peer-to-peer wagering platform featuring real Mobile Money payments, 1v1 head-to-head duels, multi-manager pools, and live Gameweek score sync.',
      features: [
        'Paystack Payment Integration for Ghanaian MoMo (MTN, Telecel, AT) & Card checkout',
        'ACID-compliant PostgreSQL wallet ledger with balance validation & instant duel cancellation refunds',
        'Official FPL Premier League API sync for live Gameweek scoring, squad lineups, & deadlines',
      ],
      tech: ['React (Vite)', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'Paystack API', 'FPL API', 'TailwindCSS'],
      githubUrl: 'https://github.com/odai307/fantasy-duel',
      liveUrl: 'https://fantasy-duel-gh.vercel.app',
      isFeatured: true,
    },
    {
      title: 'TutorConnect',
      category: 'Full-Stack Tutoring & Peer Mentorship Platform',
      status: 'Live Production',
      statusColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      description:
        'A full-stack educational marketplace connecting students with verified academic tutors for subject-based session scheduling, persistent direct messaging, and subject rating reviews.',
      features: [
        'Dual Role Dashboards & Workflows (Student & Tutor session management & approvals)',
        'MongoDB & Mongoose schemas for subjects, bookings, persistent direct messaging, & ratings',
        'JWT Auth, Express-Validator request sanitization, & dark glassmorphism UI',
      ],
      tech: ['React (Vite)', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'TailwindCSS', 'JWT Auth', 'Vercel', 'Render'],
      githubUrl: 'https://github.com/odai307/tutor-connect',
      liveUrl: 'https://tutor-connect-iota.vercel.app',
      isFeatured: true,
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#030908]">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-glow-indigo rounded-full pointer-events-none blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Software Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Featured Full-Stack Projects
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            Highlighting systems with complex business logic, real-time concurrency, and clean architectural design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="glass-panel glass-panel-hover rounded-2xl p-7 border border-emerald-500/20 flex flex-col justify-between relative group"
            >
              <div>
                {/* Category & Status */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                    {proj.category}
                  </span>
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-mono font-medium ${proj.statusColor}`}>
                    {proj.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors flex items-center gap-2">
                  {proj.title}
                  {proj.isFeatured && <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400/20" />}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5">{proj.description}</p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {proj.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech & Links */}
              <div className="pt-5 border-t border-emerald-500/20">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#061411] text-emerald-300 font-mono text-[11px] border border-emerald-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 rounded-xl bg-[#091a16] border border-emerald-500/25 text-slate-200 hover:text-white hover:border-emerald-500/50 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4 text-emerald-400" />
                      View Code Base
                    </a>
                  )}
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-opacity hover:opacity-95 shadow-md shadow-emerald-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live App
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
