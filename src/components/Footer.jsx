import { Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-[#020605] border-t border-emerald-500/20 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#061411] border border-emerald-500/25 flex items-center justify-center font-mono font-bold text-emerald-400">
            G
          </div>
          <div>
            <div className="text-white font-bold text-sm">Gabriel Afotey</div>
            <div className="text-slate-500 text-[11px]">Full-Stack Software Engineer • Accra, Ghana</div>
          </div>
        </div>

        {/* Center Text */}
        <div className="flex items-center gap-1 text-slate-500">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
          <span>using React, Vite & Tailwind CSS</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/odai307"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-[#091a16] border border-emerald-500/25 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-colors"
          >
            <GithubIcon className="w-4 h-4 text-emerald-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-afotey/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-[#091a16] border border-emerald-500/25 text-slate-300 hover:text-white hover:border-emerald-500/50 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4 text-amber-400" />
          </a>
        </div>

      </div>
    </footer>
  );
}
