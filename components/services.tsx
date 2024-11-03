import React, { useRef, useEffect, useState } from 'react';
import { useData } from '@/app/context/DataContext';
import CustomCard from './card';
import '../styles/App.scss';
import '../globals.css';
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { start } from 'repl';

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const { indepArray } = useData(); 
  const { accordion } = indepArray[0];
  const Lang = indepArray[0].Lang;  
  const containerCardz = useRef(null);
  const cardRefs = useRef([]);
  const imgArr =[
  {
  //  link:'/cards/web.jpg',
   alt:['Front page of Pascale Laffon website',"All services included in the category Web design"],
   title:['/cards/carte-site-front-1.jpg','/cards/carte-site-front-1EN.jpg'],
   text: ['/cards/carte-site-back1.jpg','/cards/carte-site-back1EN.jpg']
  },
  {
  //  link:'/cards/print.png',
   alt:["Papeterie de l'Hôtel Regina in Puy-en-Velay, France","All services included in the category Print design"],
   title:[ '/cards/carte-site-front-2.jpg', '/cards/carte-site-front-2EN.jpg'],
   text: [
     '/cards/carte-site-back2.jpg','/cards/carte-site-back2EN.jpg']
 
  },
  {
  //  link:'/cards/illu.png',
   alt:["Cover of Naissance d'une amitié by Emile Trubert","All services included in the category illustration"],
   title:['/cards/carte-site-front-3.jpg','/cards/carte-site-front-3.jpg'],
   text: [
     '/cards/carte-site-back-3.jpg',
     '/cards/carte-site-back-3EN.jpg']
  }]

  useGSAP(() => {
    const cards = cardRefs.current;
    const position = [50, 60, 80];
    const isMobile = window.innerWidth <= 768;
    const positionz = isMobile ? [0, 0, 0] : [-120, 1, 120];
    const positionTop = isMobile ? [0, 250, 500] : [300, 300, 300];
    const rotation = [-15, -7.5, 15];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerCardz.current.querySelector(".cards"),
        start: "top top",
        end: "end end",
        scrub: 0.5,
        id: 'spreading-timeline'
      }
    });

    // spread + inclinaison
    cards.forEach((card, index) => {
      tl.to(card, {
        left: `${position[index]}%`,
        rotation: `${rotation[index]}`,
        ease: "none",
      });
    });

    // Droit
    cards.forEach((card, index) => {
      
      tl.to(card, {
        top: `${positionTop[index]}px`,
        left: `${positionz[index]}%`,
        rotation: 0,
        ease: "power2.out",
        duration: 1,
        // delay: 6
      });
    });

    // Nouvelle timeline pour l'effet de rotation avant/arrière
    const tlRotation = gsap.timeline({
      scrollTrigger: {
        trigger: containerCardz.current.querySelector(".cards"),
        start: "top center", // Début au milieu de l'écran
        end: "bottom bottom",
        scrub: 0.5,
        id: 'rotation-timeline'
      }
    });

    cards.forEach((card, index) => {
      const backEl = card.querySelector(".flip-card-back");
      const frontEl = card.querySelector(".flip-card-front");


      tlRotation.fromTo(frontEl, {
      rotationY: 0,
      zIndex:1000,
      }, {
      rotationY: -180,
        ease: "none",
        duration: 1,
        zIndex:0,

      }, "-=1.5");
      

      tlRotation.fromTo(backEl, {
        rotationY: -180,
        zIndex: 0,
        opacity:1,
      }, {
        rotationY: 0,
        zIndex: 1000,
        ease: "none",
        duration: 1
      }, "-=1.5");
    });
  }, { scope: containerCardz });

      // tl.to(card, {
      //   xPercent: -50,
      //   yPercent: -50,
      //   rotate: rotation[index]*(1- staggerOffset),
      //   ease: "power1.out"
      // ScrollTrigger.create({
      //   trigger: containerCardz.current.querySelector(".cards"),
      //   start: "top top",
      //   end: ()=> `end end`,
      //   scrub: 1,
      //   id: `rotate-flip-${index}`,
      //   onUpdate: (self)=>{
      //     const progress = self.progress;
      //     if (progress >= startOffset && progress <= endOffset){
      //       const animationProgress = (progress - startOffset) / (1/3);
      //       const frontRotation = -180 * animationProgress;
      //       const backRotation = 180 - 180 * animationProgress;
      //       const cardRotation = rotation[index]*(1-animationProgress);
            // tl.to(frontEl, {rotateY: frontRotation, ease: "power1.out"});
            // tl.to(backEl, {rotateY: backRotation, ease: "power1.out"});
            // tl.to(card, {
            //   xPercent: -50,
            //   yPercent: -50,
            //   rotate: cardRotation,
            //   ease: "power1.out",
            // });
    //       }
    //     }
    //   });
    // });

  // const cardUp = (index, Lang) => {
  //   const updatedTexts = Array(imgArr.length).fill(null);
  //   if (Lang === 'FR') {
  //     updatedTexts[index] = imgArr[index].text[1];
  //   } else {
  //     updatedTexts[index] = imgArr[index].text[0];
  //   }
  //   setfooterTexts(updatedTexts);
  // };
  return (
    <>
      <ReactLenis root>
        <h3 style={{ color: "white", marginTop: '2rem' }}>{accordion[0]}</h3>
        <div id='Services' className='containerCard' ref={containerCardz}>
         
          <section className='cards'>
            {imgArr.map((item, index) => (
              <div className="card" key={index}>
                <CustomCard
                  ref={(el) => (cardRefs.current[index] = el)}
                  item={item}
                  index={index}
                  frontSrc={Lang==='EN' ? item.title[1] : item.title[0] }
                  backText={Lang==='EN' ? item.text[1] : item.text[0] }
                  id={`card-${index+1}`}
                />
              </div>
            ))}
          </section>
        </div>
      </ReactLenis>
    </>
  );
}

export default Services;

