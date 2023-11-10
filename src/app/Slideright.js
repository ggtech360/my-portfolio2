"use client"
import { AnimatePresence, motion } from "framer-motion";

export default function Slideright({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.47 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
