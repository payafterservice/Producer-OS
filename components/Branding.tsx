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
          className={`${s.gear} fill-brand text-brand drop-shadow-[0_0_15px_rgba(67,138,254,0.4)] overflow-visible`}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          {/* Aesthetic 8-tooth Gear (Inset path to prevent clipping) */}
          <path d="M88.5,41.9c-1-0.9-2.3-1.4-3.7-1.4h-6.2c-0.8-3.4-2.1-6.6-4-9.5l4.4-4.4c1-1,1.5-2.3,1.5-3.7s-0.5-2.7-1.5-3.7l-4.4-4.4 c-2-2-5.3-2-7.3,0l-4.4,4.4c-2.9-1.9-6.1-3.2-9.5-4V12.9c0-2.8-2.3-5.2-5.2-5.2s-5.2,2.3-5.2,5.2v6.2c-3.4,0.8-6.6,2.1-9.5,4 l-4.4-4.4c-1-1-2.3-1.5-3.7-1.5s-2.7,0.5-3.7,1.5l-4.4,4.4c-2,2-2,5.3,0,7.3l4.4,4.4c-1.9,2.9-3.2,6.1-4,9.5H12.9 c-2.8,0-5.2,2.3-5.2,5.2s2.3,5.2,5.2,5.2h6.2c0.8,3.4,2.1,6.6,4,9.5l-4.4,4.4c-1,1-1.5,2.3-1.5,3.7s0.5,2.7,1.5,3.7l4.4,4.4 c2,2,5.3,2,7.3,0l4.4-4.4c2.9,1.9,6.1,3.2,9.5,4v6.2c0,2.8,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2v-6.2c3.4-0.8,6.6-2.1,9.5-4l4.4,4.4 c1,1,2.3,1.5,3.7,1.5s2.7-0.5,3.7-1.5l4.4-4.4c2-2,2-5.3,0-7.3l-4.4-4.4c1.9-2.9,3.2-6.1,4-9.5h6.2c2.8,0,5.2-2.3,5.2-5.2 S91.3,41.9,88.5,41.9z M50,67.5c-9.7,0-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S67.5,40.3,67.5,50S59.7,67.5,50,67.5z" />
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