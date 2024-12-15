// app/template.js
"use client";
import { motion, AnimatePresence } from 'framer-motion';

export default function Template({ children }) {
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key="content"
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)"
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            },
            exitState: {
              clipPath: "polygon(100% 0, 100% 100%, 100% 100%, 100% 0)"
            },
          }}
        >
          {children}
        </motion.div>

        <motion.div
          key="curtain"
          className="fixed inset-0 bg-teal-500 z-50"
          initial={{ scaleX: 0 }}
          animate={{ 
            scaleX: 0,
            transition: {
              duration: 0.5,
              ease: "easeOut"
            }
          }}
          exit={{ 
            scaleX: 1,
            transition: {
              duration: 0.5,
              ease: "easeIn"
            }
          }}
          style={{ originX: 0 }}
        />
      </AnimatePresence>
    </div>
  );
}