import { useState, useEffect } from 'react';
import { Terminal, Code2, Briefcase, Cpu, Mail, FileText, Menu, X, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: Code2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Terminal },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c14]/80 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
              <span className="font-mono font-bold text-lg text-white">G</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              Gabriel Afotey
            </span>
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              Full-Stack Software Engineer
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
              >
                <Icon className="w-4 h-4 text-indigo-400" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Links */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`${import.meta.env.BASE_URL}Gabriel_Afotey_CV.pdf`}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 font-medium text-xs flex items-center gap-1.5 transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            <span>View Resume</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium text-xs hover:opacity-95 transition-opacity shadow-lg shadow-indigo-500/25 flex items-center gap-2"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-4 py-6 mt-3 space-y-3 animate-fade-in">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/5 rounded-xl"
              >
                <Icon className="w-5 h-5 text-indigo-400" />
                {link.name}
              </a>
            );
          })}
          <div className="pt-2 space-y-2">
            <a
              href={`${import.meta.env.BASE_URL}Gabriel_Afotey_CV.pdf`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-medium text-center flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>View Resume</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium text-center block shadow-lg shadow-indigo-500/25"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
