import React, { useRef, useState } from 'react';
import { useData } from '@/app/context/DataContext';
import CustomCard from './card';
import '../styles/App.scss';
import '../globals.css';
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const containerCardz = useRef(null);
  const cardRefs = useRef([]);
  const { indepArray } = useData(); 
  const { accordion } = indepArray[0];
  const Lang = indepArray[0].Lang;  
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
  const [isFlipped, setIsFlipped] = useState(Array(imgArr.length).fill(true));


  useGSAP(() => {
    const cards = cardRefs.current;
    const position = [50, 60, 80];
    const isMobile = window.innerWidth <= 768;
    const positionz = isMobile ? [45, 45, 45] : [-85, 45, 175];
    const positionTop = isMobile ? [30, 300, 580] : [300, 300, 300];
    const rotation = [-15, -7.5, 15];
    console.log('isMobile',isMobile);

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

    // Nouvelle timeline pour l'effet de rotation avant/arrière - Rotation avec scrolltrigger
    // const tlRotation = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: containerCardz.current.querySelector(".card"),
    //     start: "top center", // Début au milieu de l'écran
    //     end: "bottom bottom",
    //     scrub: 0.5,
    //     id: 'rotation-timeline'
    //   }
    // });
    // cards.forEach((card, index) => {
    //   const backEl = card.querySelector(".flip-card-back");
    //   const frontEl = card.querySelector(".flip-card-front");

    //   tlRotation.fromTo(frontEl, {
    //   rotationY: 0,
    //   zIndex:1000,
    //   }, {
    //   rotationY: -180,
    //     ease: "none",
    //     duration: 1,
    //     zIndex:0,

    //   }, "-=1.5");
      

    //   tlRotation.fromTo(backEl, {
    //     rotationY: -180,
    //     zIndex: 0,
    //     opacity:1,
    //   }, {
    //     rotationY: 0,
    //     zIndex: 1000,
    //     ease: "none",
    //     duration: 1
    //   }, "-=1.5");
    // });
  }, { scope: containerCardz });

  // Rotation au hover
  // Animation de la face avant
  useGSAP(() => {
    cardRefs.current.forEach((card, index) => {
      const frontEl = card.querySelector(".flip-card-front");
      
      gsap.to(frontEl, {
        rotationY: isFlipped[index] ? 0 : -180,
        zIndex: isFlipped[index] ? 1 : -1,
        duration: 1,
        ease: "power1.out",
      });
    });
  }, [isFlipped]);  // Relance l'animation lorsque `isFlipped` change

  // Animation de la face arrière
  useGSAP(() => {
    cardRefs.current.forEach((card, index) => {
      const backEl = card.querySelector(".flip-card-back");
      
      gsap.to(backEl, {
        rotationY: isFlipped[index] ? -180 : 0,
        zIndex: isFlipped[index] ? -1 : 1,
        duration: 1,
        ease: "power1.out",
      });
    });
  }, [isFlipped]);  // Relance l'animation lorsque `isFlipped` change

  // Fonction de gestion de survol
  const handleMouseOver = (index) => {
    setIsFlipped((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

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
                  ref={(el) => {cardRefs.current[index]= el}}
                  item={item}
                  // index={index}
                  frontSrc={Lang==='EN' ? item.title[1] : item.title[0] }
                  backText={Lang==='EN' ? item.text[1] : item.text[0] }
                  id={`card-${index+1}`}
                  key={index}
                  onMouseEnter={() => handleMouseOver(index)}
                    // Gère le survol
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

