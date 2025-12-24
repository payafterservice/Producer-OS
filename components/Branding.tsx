import React from 'react';
import { motion } from 'framer-motion';

interface BrandingProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

const Branding: React.FC<BrandingProps> = ({ className = "", size = 'md' }) => {
  const sizes = {
    sm: 'h-6',
    md: 'h-8 md:h-10',
    lg: 'h-12 md:h-16',
    hero: 'h-20 md:h-32 lg:h-40'
  };

  const logoHeight = sizes[size];
  // Using the most reliable direct link format for Google Drive public assets
  const logoUrl = "https://drive.google.com/uc?export=view&id=1JcgnmtP2E3Nq2ZAU6G835ruF2VhcHmJC";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`inline-block select-none ${className}`}
    >
      <img 
        src={logoUrl} 
        alt="Producer OS Logo" 
        className={`${logoHeight} w-auto object-contain drop-shadow-[0_0_20px_rgba(67,138,254,0.35)]`}
        draggable={false}
        loading="eager"
        onError={(e) => {
          // Fallback to secondary CDN if primary fails
          const target = e.target as HTMLImageElement;
          if (target.src !== "https://lh3.googleusercontent.com/d/1JcgnmtP2E3Nq2ZAU6G835ruF2VhcHmJC") {
            target.src = "https://lh3.googleusercontent.com/d/1JcgnmtP2E3Nq2ZAU6G835ruF2VhcHmJC";
          }
        }}
      />
    </motion.div>
  );
};

export default Branding;