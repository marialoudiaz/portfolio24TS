"use client";
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import '../globals.css';
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';

const Cible = dynamic(() => import('../components/cible'), { ssr: false });
const VideoReveal = dynamic(() => import('../components/videoreveal'), { ssr: false });

// Le composant - Suivant l'interface
const Main = ({infos}) => {

  const container = useRef();
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })

  useEffect( () => {
    const lenis = new Lenis()
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    }, [])
 
  return (
    <div ref={container}>
      <Cible infos={infos} scrollYProgress={scrollYProgress}/>
      <VideoReveal scrollYProgress={scrollYProgress} infos={infos} />
    </div>
  )
}

export default Main

