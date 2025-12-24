
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Twitter, Linkedin } from 'lucide-react';
import Branding from './Branding';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-white/[0.05] pt-10 pb-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
          <div className="space-y-6">
            <Branding size="md" />
            <p className="text-muted text-sm max-w-sm leading-relaxed font-light">
              Architecting intelligent infrastructure for the next generation of industry leaders. We build the operating systems that scale multi-million dollar agencies.
            </p>
          </div>
          
          <div className="flex gap-4">
            {[Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full ante-border flex items-center justify-center text-muted hover:text-silver hover:bg-white/5 transition-all">
                <Icon size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-dim uppercase tracking-widest font-bold">
            © {currentYear} PRODUCER OS DIGITAL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-[9px] font-mono text-dim hover:text-silver uppercase tracking-widest font-bold transition-colors">Privacy</Link>
            <Link to="/terms-and-conditions" className="text-[9px] font-mono text-dim hover:text-silver uppercase tracking-widest font-bold transition-colors">Terms</Link>
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
      className="text-[9px] font-mono text-muted hover:text-silver transition-all uppercase tracking-[0.35em] px-3.5 py-2 rounded-full hover:bg-white/5 font-bold"
    >
      {children}
    </a>
  );

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 pointer-events-none px-6">
        <div className="container mx-auto flex justify-between items-center max-w-6xl">
            <Link to="/" onClick={() => window.scrollTo(0,0)} className="pointer-events-auto flex items-center">
               <Branding size="md" className="hover:opacity-80 transition-opacity" />
            </Link>

            <div className="hidden md:flex pointer-events-auto bg-black/80 backdrop-blur-xl ante-border rounded-full p-1 items-center gap-0.5">
                <NavLink to="/#home">Home</NavLink>
                <NavLink to="/#about">About</NavLink>
                <NavLink to="/#services">Services</NavLink>
                <NavLink to="/#team">Team</NavLink>
                <NavLink to="/#faq">FAQ</NavLink>
                <NavLink to="/#contact">Contact</NavLink>
            </div>

            <div className="hidden md:flex pointer-events-auto">
                 <a 
                  href="/#contact" 
                  onClick={(e) => handleNavClick(e, '/#contact')}
                  className="flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-[9px] font-black font-mono uppercase tracking-[0.25em] rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(46,65,182,0.4)] active:scale-95 duration-500"
                >
                    Start Project
                </a>
            </div>

            <button className="md:hidden pointer-events-auto text-silver p-3 bg-black/90 backdrop-blur-xl rounded-full ante-border" onClick={toggleMenu}>
                {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 md:hidden transition-all duration-1000 ease-[0.19,1,0.22,1] ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <NavLink to="/#home">Home</NavLink>
        <NavLink to="/#about">About</NavLink>
        <NavLink to="/#services">Services</NavLink>
        <NavLink to="/#team">Team</NavLink>
        <NavLink to="/#faq">FAQ</NavLink>
        <NavLink to="/#contact">Contact</NavLink>
        <a 
          href="/#contact" 
          onClick={(e) => handleNavClick(e, '/#contact')}
          className="px-12 py-4 bg-brand text-white font-mono font-black rounded-full uppercase tracking-widest text-[10px] mt-8 active:scale-95 transition-transform shadow-[0_0_20px_rgba(46,65,182,0.4)]"
        >
          Start Project
        </a>
      </div>
    </>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-silver selection:bg-brand/20 selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
