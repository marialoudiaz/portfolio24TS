'use client'
import React from 'react';
import {motion} from "framer-motion";
import '../styles/App.scss';
import '../globals.css'

export default function Template({children}: {children: React.ReactNode}) {
  return(
    <motion.div
      initial={{y:20, opacity: 0}}
      animate={{y:0, opacity: 1}}
      transition={{ease:'easeInOut', duration:0.75}}
      // className='slide-in'
    >
      {children}
    <motion.div
      className='slide-in'
      initial={{scaleY:0}}
      animate={{scaleY:0}}
      exit={{scaleY:1}}
      transition={{duration:2, ease: [0.22, 1, 0.36, 1]}}
    />
    <motion.div
      className='slide-out'
      initial={{scaleY:1}}
      animate={{scaleY:0}}
      exit={{scaleY:0}}
      transition={{duration:2, ease: [0.22, 1, 0.36, 1]}}
    />
    </motion.div>
  )
}