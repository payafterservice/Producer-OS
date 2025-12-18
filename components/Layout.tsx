
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Settings, ArrowUpRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Logo: React.FC = () => (
  <div className="flex items-center gap-0.5 pointer-events-auto group">
    <div className="flex gap-0.5 mr-2">
      <div className="grid grid-cols-2 gap-0.5">
        <div className="w-2 h-2 bg-white opacity-20 group-hover:opacity-100 transition-opacity"></div>
        <div className="w-2 h-2 bg-white"></div>
        <div className="w-2 h-2 bg-white opacity-50 group-hover:opacity-80 transition-opacity"></div>
        <div className="w-2 h-2 bg-white opacity-10 group-hover:opacity-40 transition-opacity"></div>
      </div>
      <span className="text-2xl font-sans font-black text-white leading-none">P</span>
    </div>
    
    <div className="flex items-center">
      <span className="text-xl font-sans font-bold text-white tracking-tight">roducer</span>
      <div className="relative mx-0.5">
        <Settings className="w-5 h-5 text-brand animate-spin-slow" strokeWidth={3} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
        </div>
      </div>
      <span className="text-xl font-sans font-bold text-brand tracking-tight">S.Ai</span>
    </div>
  </div>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-white/[0.05] pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <Logo />
            <p className="text-muted text-sm max-w-sm leading-relaxed font-light">
              Architecting intelligent infrastructure for the next generation of industry leaders. We build the operating systems that scale multi-million dollar agencies.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full ante-border flex items-center justify-center text-muted hover:text-white hover:bg-white/5 transition-all">
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white font-bold">Solutions</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link to="/#services" className="hover:text-brand transition-colors">Underwriting Flow</Link></li>
              <li><Link to="/#services" className="hover:text-brand transition-colors">Annuity Pipelines</Link></li>
              <li><Link to="/#services" className="hover:text-brand transition-colors">Agent Recruitment</Link></li>
              <li><Link to="/#services" className="hover:text-brand transition-colors">Carrier Bridges</Link></li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-white font-bold">Company</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><Link to="/privacy-policy" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-brand transition-colors">Terms of Service</Link></li>
              <li><Link to="/#team" className="hover:text-brand transition-colors">Our Team</Link></li>
              <li><a href="mailto:hello@produceros.com" className="hover:text-brand transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-dim uppercase tracking-widest font-bold">
            © {currentYear} PRODUCER OS DIGITAL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[9px] font-mono text-dim uppercase tracking-widest font-bold">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (e: React.MouseEvent, to: string) => {
    if (isOpen) setIsOpen(false);
    
    if (to.startsWith('/#')) {
      const id = to.replace('/#', '');
      if (location.pathname !== '/') {
        e.preventDefault();
        navigate('/');
        // Wait for navigation before scrolling
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  };

  const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
    <a 
      href={to} 
      onClick={(e) => handleNavClick(e, to)}
      className="text-[9px] font-mono text-muted hover:text-white transition-all uppercase tracking-[0.35em] px-4 py-2 rounded-full hover:bg-white/5 font-bold"
    >
      {children}
    </a>
  );

  return (
    <>
      <nav className="fixed top-8 left-0 right-0 z-50 pointer-events-none px-6">
        <div className="container mx-auto flex justify-between items-center max-w-6xl">
            <Link to="/" onClick={() => window.scrollTo(0,0)} className="pointer-events-auto">
               <Logo />
            </Link>

            <div className="hidden md:flex pointer-events-auto bg-black/80 backdrop-blur-xl ante-border rounded-full p-1.5 items-center gap-0.5">
                <NavLink to="/#services">Services</NavLink>
                <NavLink to="/#team">Team</NavLink>
                <NavLink to="/#faq">FAQ</NavLink>
                <NavLink to="/#contact">Contact</NavLink>
            </div>

            <div className="hidden md:flex pointer-events-auto">
                 <a 
                  href="/#contact" 
                  onClick={(e) => handleNavClick(e, '/#contact')}
                  className="flex items-center gap-2 px-6 py-3 bg-brand text-white text-[9px] font-bold font-mono uppercase tracking-[0.25em] rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] active:scale-95 duration-500"
                >
                    Start Project
                </a>
            </div>

            <button className="md:hidden pointer-events-auto text-white p-3 bg-black/90 backdrop-blur-xl rounded-full ante-border" onClick={toggleMenu}>
                {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-10 md:hidden transition-all duration-1000 ease-[0.19,1,0.22,1] ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <NavLink to="/#services">Services</NavLink>
        <NavLink to="/#team">Team</NavLink>
        <NavLink to="/#faq">FAQ</NavLink>
        <NavLink to="/#contact">Contact</NavLink>
        <a 
          href="/#contact" 
          onClick={(e) => handleNavClick(e, '/#contact')}
          className="px-14 py-4.5 bg-brand text-white font-mono font-bold rounded-full uppercase tracking-widest text-[10px] mt-10 active:scale-95 transition-transform"
        >
          Start Project
        </a>
      </div>
    </>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-brand/20 selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
