
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 font-sans">
      <h1 className="text-9xl font-serif italic text-silver mb-4 opacity-10 tracking-tighter">404</h1>
      <h2 className="text-3xl md:text-4xl text-silver font-serif italic mb-6 tracking-tighter">Page Not Found</h2>
      <p className="text-muted text-lg mb-10 font-light">Oops, the page you're looking for doesn't exist...</p>
      <Link 
        to="/" 
        className="px-10 py-4 bg-brand text-white rounded-full font-black font-mono text-[10px] uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(46,65,182,0.4)]"
      >
        Bring me back home
      </Link>
    </div>
  );
};

export default NotFound;
