"use client";
import { motion } from "framer-motion";

// Netflix-style page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    scale: 1.2,
    y: -50,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8,
};

const PageTransition = ({ children, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
