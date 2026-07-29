import { Cpu, Database, Layout, Cloud, CheckCircle } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend Engineering',
      icon: Database,
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      skills: [
        'Node.js & Express',
        'PostgreSQL & SQL',
        'MongoDB',
        'Prisma ORM',
        'Socket.io (WebSockets)',
        'RESTful API Design',
      ],
    },
    {
      title: 'Frontend & Web Development',
      icon: Layout,
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      skills: [
        'React.js',
        'JavaScript (ES6+)',
        'TypeScript',
        'Vite',
        'Tailwind CSS / Vanilla CSS',
        'State Management & Hooks',
        'Responsive UI/UX Design',
      ],
    },
    {
      title: 'Cloud, DevOps & Tooling',
      icon: Cloud,
      badgeColor: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
      skills: [
        'Render (Node Hosting)',
        'Vercel (Frontend CDN)',
        'Neon Cloud Postgres',
        'Cloudinary Storage API',
        'Git & GitHub Workflows',
        'Postman API Testing',
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#030908]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Core Engineering Stack & Skills
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            Full-Stack Engineer specializing in scalable backend services, database design, real-time WebSockets, and modern web applications.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-7 border border-emerald-500/20 relative"
              >
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-emerald-500/20">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${cat.badgeColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#061411] border border-emerald-500/20 text-xs font-medium text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
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
