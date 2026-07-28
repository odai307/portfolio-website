import { Cpu, Database, Layout, Cloud, Sparkles, CheckCircle } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend & Systems Engineering',
      icon: Database,
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      skills: [
        'Node.js & Express',
        'PostgreSQL & SQL',
        'Prisma ORM',
        'Socket.io (WebSockets)',
        'RESTful API Design',
        'Role-Based Auth (JWT)',
        'Database Schema Migrations',
        'Middleware Architecture',
      ],
    },
    {
      title: 'Frontend & Web Development',
      icon: Layout,
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      skills: [
        'React.js',
        'JavaScript (ES6+)',
        'TypeScript',
        'Vite',
        'Tailwind CSS / Vanilla CSS',
        'Single Page Applications (SPA)',
        'State Management & Hooks',
        'Responsive UI/UX Design',
      ],
    },
    {
      title: 'Cloud, DevOps & Tooling',
      icon: Cloud,
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      skills: [
        'Render (Node Hosting)',
        'Vercel (Frontend CDN)',
        'Neon Cloud Postgres',
        'Cloudinary Storage API',
        'Git & GitHub Workflows',
        'Postman API Testing',
        'CORS & Security Best Practices',
        'Environment Secret Auditing',
      ],
    },
    {
      title: 'AI-Native Development & Velocity',
      icon: Sparkles,
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      skills: [
        'Cursor Ultra & Claude Code',
        'OpenAI & Gemini API Integration',
        'AI-Assisted Code Refactoring',
        'Rapid Feature Prototyping',
        'Disciplined Code Review',
        'Technical Documentation',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Core Engineering Stack & Skills
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            A comprehensive overview of my technical toolset across backend systems, database architecture, frontend frameworks, and AI workflows.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-7 border border-white/10 relative"
              >
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${cat.badgeColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
