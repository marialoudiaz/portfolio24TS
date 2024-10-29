import React, { useRef, useEffect, useState } from 'react';
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
  const { indepArray } = useData(); 
  const { accordion } = indepArray[0];
  const Lang = indepArray[0].Lang;
  const containerCardz = useRef(null);
  const cardRefs = useRef([]);
 const imgArr =[
  {
   link:'/cards/web.jpg',
   alt:'Front page of Pascale Laffon website',
   title:['Design web','Web Design'],
   text: [
     "Sites web, Applications mobile, E-commerce, Newsletters, Gestion des réseaux sociaux + Création contenu",
     "Websites, Mobile applications, E-commerce, Newsletters, Social media management + content creation"]
  },
  {
   link:'/cards/print.png',
   alt:"Papeterie de l'Hôtel Regina in Puy-en-Velay, France",
   title:['Design imprimé','Print Design'],
   text: [
     "Papeterie, Livres, Catalogues/Brochures, Covering, Affichages",
     "Stationery, Books, Catalogs/Brochures, Wrapping, Displays"]
 
  },
  {
   link:'/cards/illu.png',
   alt:"Cover of Naissance d'une amitié by Emile Trubert",
   title:['Illustration','Illustration'],
   text: [
     "Couverture de livre, Affiche, Carterie, Textile",
     "Book covers, Posters, Stationery, Textiles"]
  }]
const [footerTexts, setfooterTexts]= useState(Array(imgArr.length).fill(null));



  useGSAP(() => {
    const cards = cardRefs.current;
    const position = [15, 32, 50];
    const isMobile = window.innerWidth <= 768;
    const positionz = isMobile ? [0, 0, 0] : [-120, 1, 120];
    const positionTop = isMobile ? [0, 250, 500] : [0, 0, 0];
    const rotation = [-15, -7.5, 15];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerCardz.current.querySelector(".cards"),
        start: "top center",
        end: "end end",
        scrub: 0.5,
        id: 'spreading-timeline'
      }
    });

    cards.forEach((card, index) => {
      tl.to(card, {
        left: `${position[index]}%`,
        rotation: `${rotation[index]}`,
        ease: "none",
      });
    });

    cards.forEach((card, index) => {
      tl.to(card, {
        top: `${positionTop[index]}px`,
        left: `${positionz[index]}%`,
        rotation: 0,
        ease: "power2.out",
        duration: 1,
        delay: 6
      });
    });
  }, { scope: containerCardz });

  const cardUp = (index, Lang) => {
    const updatedTexts = Array(imgArr.length).fill(null);
    if (Lang === 'FR') {
      updatedTexts[index] = imgArr[index].text[1];
    } else {
      updatedTexts[index] = imgArr[index].text[0];
    }
    setfooterTexts(updatedTexts);
  };

  return (
    <>
      <ReactLenis root>
        <h2 style={{ color: "white", marginTop: '2rem' }}>{accordion[0]}</h2>
        <div id='Services' className='containerCard' ref={containerCardz}>
          <section className='cards'>
            {imgArr.map((item, index) => (
              <div className="card" key={index}>
                <CustomCard
                  ref={(el) => (cardRefs.current[index] = el)}
                  item={item}
                  index={index}
                  onCardUp={cardUp}
                  onCardDown={() => setfooterTexts(Array(imgArr.length).fill(null))}
                  Lang={Lang}
                  footerTexts={footerTexts}
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

