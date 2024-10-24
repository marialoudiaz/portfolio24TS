// components/Deroule.tsx
import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useData } from '@/app/context/DataContext'; // Import du contexte
import Image from 'next/image';
import Link from 'next/link';
import '../styles/App.scss';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Deroule: React.FC = () => {
  const { indepArray} = useData(); // Récupérer les données du contexte

  const { citation, cta, deroule } = indepArray[0];
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

  return (
    <>
      <section className='section' style={{ display: `${deroule}` }}>
        <div className='flex-wrap-deroule'>
          <div className='flex-wrap-deroule'>
            <h2>{deroule[1]}</h2>
            <p>{deroule[2]}</p>
          </div>

          <div className='flex-wrap-deroule' id='deroule-item' ref={el1}>
            <Image
              src='/icons/projets/projet.png'
              alt="icone à l'encre d'un couple de deux personnes"
              width={300}
              height={300}
            />
            <div className='flex-wrap-deroule'>
              <h3 style={{ fontWeight: '600' }}>{deroule[3]}</h3>
              <p>{deroule[4]}</p>
            </div>
          </div>

          <div className='tiret-container' style={{ display: 'flex' }}>
            <div className='tiret'></div><div className='tiret2'></div>
          </div>

          <div className='flex-wrap-deroule' id='deroule-item' ref={el2}>
            <Image
              src='/icons/projets/devis.png'
              alt="icone à l'encre d'une enveloppe avec un coeur"
              width={300}
              height={300}
            />
            <div className='flex-wrap-deroule'>
              <h3 style={{ fontWeight: '600' }}>{deroule[5]}</h3>
              <p>{deroule[6]}</p>
            </div>
          </div>

          <div className='tiret-container' style={{ display: 'flex' }}>
            <div className='tiret'></div><div className='tiret2'></div>
          </div>

          <div className='flex-wrap-deroule' id='deroule-item' ref={el3}>
            <Image
              src='/icons/projets/livrable.png'
              alt="icone à l'encre d'un cadeau"
              width={300}
              height={300}
            />
            <div className='flex-wrap-deroule'>
              <h3 style={{ fontWeight: '600' }}>{deroule[7]}</h3>
              <p>{deroule[8]}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        {/* <div className='inline-flex'>
          <div
            className='btn-transp-dark'
            // onClick={() => goToCalendar()}
          >
            <div>
              <svg
                className="icon-transp"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
                aria-label='Arrow Icon'
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-white group-hover:fill-white"
                ></path>
              </svg>
              {cta[4]}
            </div>

          </div>
          <div
            className='btn-transp-dark'
          >
            <div>
            <Link href="#Contact">
              <svg
                className="icon-transp"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
                aria-label='Arrow Icon'
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-white group-hover:fill-white"
                ></path>
              </svg>
              {cta[5]}
            </Link>
            </div>
          </div>
        </div> */}

      </section>
    </>
  );
};

export default Deroule;
