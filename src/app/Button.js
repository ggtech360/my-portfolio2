"use client"
import { motion } from "framer-motion"

export default function Button({children, exclass}) {
  return (
    <motion.button 
    initial={{x:-50, opacity:0}}
    animate={{x:0, opacity:1}}
    transition={{duration:0.3, delay:0.5}}
    whileHover={{scale:1.06, transition:{duration:0.2, delay:0}}}
    whileTap={{scale:0.9, transition:{duration:0.1}}}
    className={`font-medium text-sm lg:text-base rounded-md ${exclass}`}>
        {children}
    </motion.button>
  )
}
