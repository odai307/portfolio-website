import { Briefcase, Calendar, MapPin, ExternalLink, ShieldCheck, Zap, Layers, Server } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Experience() {
  const experiences = [
    {
      title: 'Full-Stack Software Engineer (Contract)',
      company: 'ThesisFlow Platform',
      period: 'Jan 2026 – Present',
      location: 'Accra, Ghana (Remote)',
      description:
        'Architected and deployed a multi-tenant academic workflow and review management platform designed for universities to streamline thesis submissions, supervisory feedback, and department coordination.',
      liveUrl: 'https://thesis-flow-self.vercel.app/',
      githubUrl: 'https://github.com/odai307/thesis-flow.git',
      highlights: [
        {
          icon: ShieldCheck,
          title: 'Role-Based Access Control (RBAC)',
          text: 'Enforced multi-tenant security logic separating Student, Supervisor, and Coordinator permissions across API endpoints.',
        },
        {
          icon: Zap,
          title: 'Real-Time Event Architecture',
          text: 'Integrated Socket.io WebSockets with channel rooms (user, thesis, submission) for instant feedback notes and notification badges.',
        },
        {
          icon: Layers,
          title: 'Cloud Storage & Document Delivery',
          text: 'Configured Cloudinary API for 25MB document uploads (.pdf/.docx) paired with Google Docs Embedded Viewer for inline rendering.',
        },
        {
          icon: Server,
          title: 'Production Deployment & Cloud Ops',
          text: 'Deployed Express REST server to Render with Neon PostgreSQL connection pooling, and React frontend to Vercel CDN.',
        },
      ],
      techStack: [
        'Node.js',
        'Express',
        'PostgreSQL',
        'Prisma ORM',
        'Socket.io',
        'React',
        'Vite',
        'Cloudinary',
        'Render',
        'Vercel',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#030908]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Professional Work Experience
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            Real-world software engineering contracts and full-stack production systems built to scale.
          </p>
        </div>

        {/* Experience Timeline Item */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-emerald-500/20 relative"
            >
              {/* Top Meta info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-500/20 pb-6 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                    {exp.company}
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono font-normal">
                      Contract
                    </span>
                  </h3>
                  <div className="text-emerald-400 font-medium text-sm mt-1">{exp.title}</div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-slate-400 text-xs font-mono">
                  <div className="flex items-center gap-1.5 bg-[#061411] px-3 py-1.5 rounded-lg border border-emerald-500/20">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#061411] px-3 py-1.5 rounded-lg border border-emerald-500/20">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">{exp.description}</p>

              {/* Technical Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {exp.highlights.map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-[#061411] border border-emerald-500/20 hover:border-emerald-500/40 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-white font-medium text-sm mb-1.5">
                        <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                        {h.title}
                      </div>
                      <p className="text-slate-400 text-xs leading-relaxed">{h.text}</p>
                    </div>
                  );
                })}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-emerald-500/20">
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#061411] text-emerald-300 font-mono text-xs border border-emerald-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {exp.githubUrl && (
                    <a
                      href={exp.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-[#091a16] border border-emerald-500/25 text-slate-300 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
                      Repository
                    </a>
                  )}
                  {exp.liveUrl && (
                    <a
                      href={exp.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-opacity hover:opacity-95 shadow-md shadow-emerald-500/20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
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
