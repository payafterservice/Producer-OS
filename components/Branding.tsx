
import React from 'react';
import { motion } from 'framer-motion';

interface BrandingProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

const Branding: React.FC<BrandingProps> = ({ className = "", size = 'md' }) => {
  const sizes = {
    sm: { text: 'text-xl', gear: 'w-[0.9em] h-[0.9em]', gap: 'gap-1', spacing: 'mx-1' },
    md: { text: 'text-3xl md:text-4xl', gear: 'w-[0.95em] h-[0.95em]', gap: 'gap-1.5', spacing: 'mx-1.5' },
    lg: { text: 'text-5xl md:text-6xl', gear: 'w-[0.95em] h-[0.95em]', gap: 'gap-2', spacing: 'mx-2' },
    hero: { text: 'text-[10vw] md:text-[6.5rem] lg:text-[7.5rem]', gear: 'w-[0.92em] h-[0.92em]', gap: 'gap-3', spacing: 'mx-3' }
  };

  const s = sizes[size];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.01,
        transition: { duration: 0.3 }
      }}
      className={`inline-flex items-center font-sans font-black tracking-tighter select-none ${className} ${s.text}`}
    >
      {/* "Producer" - Clean Silver Text */}
      <span className="text-silver leading-none">Producer</span>

      {/* Spacing between Producer and OS */}
      <div className={s.spacing}></div>

      {/* "O" Gear - Programmatic & Animated */}
      <div className="relative flex items-center justify-center">
        <motion.svg 
          viewBox="0 0 100 100" 
          className={`${s.gear} fill-brand text-brand drop-shadow-[0_0_15px_rgba(67,138,254,0.4)]`}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          {/* Professional 12-tooth Industrial Gear */}
          <path d="M96 44h-8.2c-1.1-4.8-3.1-9.2-5.9-13.1l5.8-5.8c1.6-1.6 1.6-4.1 0-5.7l-5.7-5.7c-1.6-1.6-4.1-1.6-5.7 0l-5.8 5.8c-3.9-2.8-8.3-4.8-13.1-5.9V5.5c0-2.2-1.8-4-4-4h-8c-2.2 0-4 1.8-4 4v8.2c-4.8 1.1-9.2 3.1-13.1 5.9l-5.8-5.8c-1.6-1.6-4.1-1.6-5.7 0l-5.7 5.7c-1.6 1.6-1.6 4.1 0 5.7l5.8 5.8c-2.8 3.9-4.8 8.3-5.9 13.1H4c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8.2c1.1 4.8 3.1 9.2 5.9 13.1l-5.8 5.8c-1.6 1.6-1.6 4.1 0 5.7l5.7 5.7c1.6 1.6 4.1 1.6 5.7 0l5.8-5.8c3.9 2.8 8.3 4.8 13.1 5.9v8.2c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4v-8.2c4.8-1.1 9.2-3.1 13.1-5.9l5.8 5.8c1.6 1.6 4.1 1.6 5.7 0l5.7-5.7c1.6-1.6 1.6-4.1 0-5.7l-5.8-5.8c2.8-3.9 4.8-8.3 5.9-13.1H96c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zM50 70c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z" />
          {/* Inner circle hole */}
          <circle cx="50" cy="50" r="10" fill="black" />
        </motion.svg>
      </div>

      {/* "S" in Brand Blue */}
      <span className="text-brand leading-none">S</span>

      {/* "." in Brand Blue */}
      <span className="text-brand leading-none">.</span>

      {/* "Ai" in Silver */}
      <span className="text-silver leading-none">Ai</span>
    </motion.div>
  );
};

export default Branding;
