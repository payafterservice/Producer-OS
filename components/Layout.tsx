import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Settings } from 'lucide-react';

const Logo: React.FC = () => (
  <div className="flex items-center gap-0.5 pointer-events-auto">
    {/* Pixelated P Icon */}
    <div className="flex gap-0.5 mr-2">
      <div className="grid grid-cols-2 gap-0.5">
        <div className="w-2 h-2 bg-white opacity-20"></div>
        <div className="w-2 h-2 bg-white"></div>
        <div className="w-2 h-2 bg-white opacity-50"></div>
        <div className="w-2 h-2 bg-white opacity-10"></div>
      </div>
      <span className="text-2xl font-sans font-black text-white leading-none">P</span>
    </div>
    
    <div className="flex items-center">
      <span className="text-xl font-sans font-bold text-white tracking-tight">roducer</span>
      {/* Gear O */}
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

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => {
    const isHashLink = to.startsWith('/#');
    
    const handleClick = (e: React.MouseEvent) => {
      if (onClick) onClick();
      if (isHashLink) {
        e.preventDefault();
        const id = to.replace('/#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    return (
      <a 
        href={isHashLink ? to : "/"} 
        onClick={handleClick}
        className="text-[9px] font-mono text-muted hover:text-white transition-all uppercase tracking-[0.35em] px-4 py-2 rounded-full hover:bg-white/5 font-bold"
      >
        {children}
      </a>
    );
  };

  return (
    <>
      <nav className="fixed top-8 left-0 right-0 z-50 pointer-events-none px-6">
        <div className="container mx-auto flex justify-between items-center max-w-6xl">
            {/* Logo */}
            <Link to="/" onClick={() => window.scrollTo(0,0)}>
               <Logo />
            </Link>

            {/* Floating Navigation Pill */}
            <div className="hidden md:flex pointer-events-auto bg-black/80 backdrop-blur-xl ante-border rounded-full p-1.5 items-center gap-0.5">
                <NavLink to="/#services">Services</NavLink>
                <NavLink to="/#team">Team</NavLink>
                <NavLink to="/#faq">FAQ</NavLink>
                <NavLink to="/#contact">Contact</NavLink>
            </div>

            {/* CTA */}
            <div className="hidden md:flex pointer-events-auto">
                 <Link 
                  to="/#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 px-6 py-3 bg-brand text-white text-[9px] font-bold font-mono uppercase tracking-[0.25em] rounded-full hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] active:scale-95 duration-500"
                >
                    Start Project
                </Link>
            </div>

            <button className="md:hidden pointer-events-auto text-white p-3 bg-black/90 backdrop-blur-xl rounded-full ante-border" onClick={toggleMenu}>
                {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-10 md:hidden transition-all duration-1000 ease-[0.19,1,0.22,1] ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <NavLink to="/#services" onClick={toggleMenu}>Services</NavLink>
        <NavLink to="/#team" onClick={toggleMenu}>Team</NavLink>
        <NavLink to="/#faq" onClick={toggleMenu}>FAQ</NavLink>
        <NavLink to="/#contact" onClick={toggleMenu}>Contact</NavLink>
        <Link 
          to="/#contact" 
          onClick={(e) => {
            e.preventDefault();
            toggleMenu();
            setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 600);
          }}
          className="px-14 py-4.5 bg-brand text-white font-mono font-bold rounded-full uppercase tracking-widest text-[10px] mt-10 active:scale-95 transition-transform"
        >
          Start Project
        </Link>
      </div>
    </>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-brand/20 selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-0">
        {children}
      </main>
    </div>
  );
};

export default Layout;