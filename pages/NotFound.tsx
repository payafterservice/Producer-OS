import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 font-sans">
      <h1 className="text-9xl font-serif italic text-white mb-4 opacity-10 tracking-tighter">404</h1>
      <h2 className="text-3xl md:text-4xl text-white font-serif italic mb-6 tracking-tighter">Page Not Found</h2>
      <p className="text-muted text-lg mb-10 font-light">Oops, the page you're looking for doesn't exist...</p>
      <Link 
        to="/" 
        className="px-10 py-4 bg-white text-black rounded-full font-bold font-mono text-[10px] uppercase tracking-widest transition-transform hover:scale-105 active:scale-95"
      >
        Bring me back home
      </Link>
    </div>
  );
};

export default NotFound;