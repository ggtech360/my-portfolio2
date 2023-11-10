"use client"
import { motion } from "framer-motion"

export default function Button({children}) {
  return (
    <motion.button 
    initial={{x:-50, opacity:0}}
    animate={{x:0, opacity:1}}
    transition={{duration:0.3, delay:0.5}}
    whileHover={{scale:1.06, transition:{duration:0.2, delay:0}}}
    whileTap={{scale:0.9, transition:{duration:0.2}}}
    className="bg-sky-700 py-3 text-white font-extrabold w-40 self-center my-8 rounded-md">
        {children}
    </motion.button>
  )
}
