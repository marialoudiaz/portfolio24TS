'use client'
import React, { useRef, useEffect, useState } from 'react';
import { useData } from '@/app/context/DataContext'; // Importer le contexte
import '../styles/App.scss';
import '../globals.css';
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function Services() {
const { indepArray } = useData(); 
const {accordion } = indepArray[0];
const Lang = indepArray[0].Lang;
const containerCardz = useRef(null);
const cardRefs = useRef([]);
// const [isMobile, setIsMobile]= useState(window.innerWidth<=768);
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


// //Tailles mobiles
// useEffect(() => {
//   const handleResize = () => setIsMobile(window.innerWidth <= 768);
//   window.addEventListener('resize', handleResize);
//   return () => window.removeEventListener('resize', handleResize);
// }, []);


useGSAP(() => {
  const cards = cardRefs.current;
  const position = [15, 32, 50];
  const isMobile = window.innerWidth<=768;
  console.log('isMobile', isMobile);
  // const positionz = [-120, 1,120]; // centrer
  const positionz = isMobile ? [0, 0, 0] : [-120, 1, 120]; // Superpose les cartes si mobile
  const positionTop = isMobile ? [0, 250, 500] : [0, 0, 0] ;
  const rotation = [-15, -7.5, 15];
  
  // Initialisation de la timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerCardz.current.querySelector(".cards"),
      start: "top center",
      end: "end end", // bottom bottom
      // markers: true,
      scrub: 0.5,
      id: 'spreading-timeline' // nouveau
    }
  });
  // Animation Spreading
  cards.forEach((card, index) => {
    tl.to(card, {
      left: `${position[index]}%`,
      rotation: `${rotation[index]}`,
      ease: "none",
    })
  });
  // Animation Alignement (se déclenche automatiquement après Spreading)
  cards.forEach((card, index) => {
    tl.to(card, {
      top: `${positionTop[index]}px`,
      left: `${positionz[index]}%`,
      rotation: 0,
      ease: "power2.out",
      duration: 1, // Durée de chaque animation dans alignement
      delay: 6
    });
  });
}, { scope: containerCardz });
// Afficher infos en focntion index
 const cardUp =(index:Number, Lang:string)=> {
  // Prend l'id de la carte
  // Met a jour le footer avec explications
  const updatedTexts = Array(imgArr.length).fill(null);
  if (Lang ==='FR') {
    updatedTexts[index]= imgArr[index].text[1];
    setfooterTexts(updatedTexts);
  } else{
    updatedTexts[index]= imgArr[index].text[0];
    setfooterTexts(updatedTexts);
  }    
  // setfooterText(imgArr[index].text)
 }

return(
  <>
    <ReactLenis root>
      <h2 style={{color:"white", marginTop:'2rem'}}>{accordion[0]}</h2>
      <div id='Services' className='containerCard' ref={containerCardz}>
        <section className='cards'>
          {imgArr.map((item,index)=>(
            <div className="card">

                  <Card
                    key={index}
                    id= {`card-${index+1}`}
                    ref={(el)=> (cardRefs.current[index]= el)}
                    isFooterBlurred
                    radius="lg"
                    className="flip-card-inner flip-card-front"
                    onPress={()=>cardUp(index)}
                    onPressEnd={()=>setfooterTexts(Array(imgArr.length).fill(null))}
                  >
                    <Image
                      alt={item.alt}
                      className="object-cover"
                      width={500}
                      height={0}
                      src={item.link}
                    
                    />
                    <CardFooter id={`footer-text-${index+1}`} className=" flex flex-col gap-[2px] justify-between before:bg-white/10 border-white/20 border-1  py-1 absolute before:rounded-xl rounded-large bottom-1 w-full shadow-small ml-1 z-10">
                      <p id='footerTitle' className="text-tiny text-black/80">{Lang=='FR' ? item.title[0] : item.title[1] }</p>
                      <p>{footerTexts[index]}</p>
                      <Button 
                        className="text-tiny text-white bg-black/2 w-100" 
                        variant="flat" 
                        color="default" 
                        radius="lg" 
                        size="sm" 
                        onPress={()=>cardUp(index, Lang)}
                        onPressEnd={()=>setfooterTexts(Array(imgArr.length).fill(null))}
                        >
                        <p style={{color:'white'}}>{Lang=='FR' ? 'En apprendre davantage' : 'Learn more' }</p>
                      </Button>
                    </CardFooter>
                  </Card>
              </div>
          ))}
        </section>
      </div>
    </ReactLenis>
  </>
  )
}

export default Services