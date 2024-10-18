"use client";
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import '../globals.css';
import { useScroll } from 'framer-motion';
import Lenis from 'lenis';
import { useData } from '@/app/context/DataContext'; // Import du contexte

const Cible = dynamic(() => import('../components/cible'), { ssr: false });
const VideoReveal = dynamic(() => import('../components/videoreveal'), { ssr: false });

const Main = () => {

  const { indepArray } = useData();
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  if (!indepArray) {
    return <div>Loading...</div>; // Si les données ne sont pas encore disponibles
  }

  return (
    <div ref={container}>
      <Cible infos={indepArray} scrollYProgress={scrollYProgress} />
      <VideoReveal scrollYProgress={scrollYProgress} infos={indepArray} />
    </div>
  );
};

export default Main;
