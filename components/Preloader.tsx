
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Branding from './Branding';

const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          <div className="relative overflow-hidden px-10">
            <motion.div
              initial={{ y: 150, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.2 }
              }}
              className="flex items-center"
            >
              <Branding size="lg" />
            </motion.div>
          </div>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ 
              width: '160px',
              transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 }
            }}
            className="h-[1px] bg-brand/40 mt-16"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { duration: 0.8, delay: 1.2 }
            }}
            className="absolute bottom-12 font-mono text-[8px] uppercase tracking-[0.4em] text-dim font-bold"
          >
            Initializing Agency OS
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
