// app/template.js
"use client";
import { motion, AnimatePresence } from 'framer-motion';

export default function Template({ children }) {
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
      <motion.div>{children}</motion.div>
      <motion.div
        className="fixed inset-y-0 left-0 w-1/2 bg-teal-500 z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        style={{ originX: 0 }}
      />
      <motion.div
        className="fixed inset-y-0 right-0 w-1/2 bg-teal-500 z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        style={{ originX: 1 }}
      />
    </AnimatePresence>
  </div>
  );
}