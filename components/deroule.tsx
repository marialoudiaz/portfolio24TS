// components/Deroule.tsx
import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useData } from '@/app/context/DataContext'; // Import du contexte
import Image from 'next/image';
import '../styles/App.scss';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Deroule: React.FC = () => {
  const { indepArray} = useData(); // Récupérer les données du contexte

  const { deroule } = indepArray[0];
  const el1 = useRef(null);
  const el2 = useRef(null);
  const el3 = useRef(null);

  useEffect(() => {
    const elements = [el1.current, el2.current, el3.current];
    elements.forEach((el, index) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 }, // bas vers haut
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%", // déclenchement quand l'élément est 90% visible
            toggleActions: "play none none none"
          }
        }
      );
    });
  }, []);
  // useEffect(() => {
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   }
  // }, []);

  return (
    <>
      <section className='section' style={{ display: `${deroule}` }}>
        <div className='flex-wrap' id='deroule'>
          <div className='flex-wrap'>
            <h2>{deroule[1]}</h2>
            <p>{deroule[2]}</p>
          </div>

          <div className='flex-wrap' id='deroule-item' ref={el1}>
            <Image
              src='/icons/projets/projet.png'
              alt="icone à l'encre d'un couple de deux personnes"
              width={300}
              height={300}
            />
            <div className='flex-wrap'>
              <h4>{deroule[3]}</h4>
              <p>{deroule[4]}</p>
            </div>
          </div>

          <div className='tiret-container' style={{ display: 'flex' }}>
            <div className='tiret'></div><div className='tiret2'></div>
          </div>

          <div className='flex-wrap' id='deroule-item' ref={el2}>
            <Image
              src='/icons/projets/devis.png'
              alt="icone à l'encre d'une enveloppe avec un coeur"
              width={300}
              height={300}
            />
            <div className='flex-wrap'>
              <h4>{deroule[5]}</h4>
              <p>{deroule[6]}</p>
            </div>
          </div>

          <div className='tiret-container' style={{ display: 'flex' }}>
            <div className='tiret'></div><div className='tiret2'></div>
          </div>

          <div className='flex-wrap' id='deroule-item' ref={el3}>
            <Image
              src='/icons/projets/livrable.png'
              alt="icone à l'encre d'un cadeau"
              width={300}
              height={300}
            />
            <div className='flex-wrap'>
              <h4>{deroule[7]}</h4>
              <p>{deroule[8]}</p>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Deroule;
