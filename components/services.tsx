'use client'
import React, { useRef, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import '../styles/App.scss';
import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import Cardz from '../components/card';
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function Services() {
const imgArr =[
 {
  link:'/cards/web.jpg',
  alt:'Front page of Pascale Laffon website',
  title:'Design web'
 },
 {
  link:'/cards/print.png',
  alt:"Papeterie de l'Hôtel Regina in Puy-en-Velay, France",
  title:'Design imprimé'
 },
 {
  link:'/cards/illu.png',
  alt:"Cover of Naissance d'une amitié by Emile Trubert",
  title:'Illustration'
 }]
 const containerCardz = useRef(null);
 const cardRefs = useRef([]);

 useGSAP(()=> {
  const cards = cardRefs.current;
  // const totalScrollHeight = window.innerHeight/3;
  const position = [25,48,72,95];
  const rotation = [-15,-7.5, 7.5, 15]

  ScrollTrigger.create({
    trigger: containerCardz.current.querySelector(".cards"),
    start: "top top",
    end: ()=> `end end`,
    // pin: true,
    // pinSpacing: true
  });
    //Spreading
    cards.forEach((card,index)=>{
      gsap.to(card, {
        left: `${position[index]}%`,
        rotation: `${rotation[index]}`,
        ease:"none",
        scrollTrigger:{
          trigger: containerCardz.current.querySelector(".cards"),
          start: "top top",
          end: "middle end",
          scrub:0.5,
          id: `spread-${index}`,
        }
      })
    })

    // //Flip cards + reset rotation &stragger
    // cards.forEach((card,index)=>{
    //   const frontEl = card.querySelector(".flip-card-front");
    //   const backEl = card.querySelector(".flip-card-back");
    // // Chaque carte commence en décalé
    //   const staggerOffset = index * 0.05;
    // // Debut et fin des animations de retournement
    //   const startOffset = 1/3 + staggerOffset;
    //   const endOffset = 2/3 + staggerOffset;

    //   ScrollTrigger.create({
    //     trigger: containerCardz.current.querySelector(".cards"),
    //     start: "top top",
    //     end: ()=> `end end`,
    // // Animation synchronisée avec le defilement (scroll)
    //     scrub:1,
    // // Un id pour le ScrollTrigger de chaque carte selon son index
    //     id: `rotate-flip-${index}`,

    // // Calcul la progression (self.progress) de l'animation en fonction de la position actuelle du défilement
    //     onUpdate: (self)=>{
    //       const progress = self.progress;
    // // Si progression se situe entre startOffset et EndOffset - Rotation avant/arriere selon faces
    //       // if (progress >= startOffset && progress <= endOffset){
    //         const animationProgress = (progress - startOffset) / (1/3);
    //         const frontRotation = -180 * animationProgress;
    //         const backRotation = 180 - 180 * animationProgress;
    //         const cardRotation = rotation[index]*(1- animationProgress);

    // // Face avant - rotation en Y
    //         gsap.to(frontEl, {rotateY: frontRotation, ease: "power1.out"});
    // // Face Arrière - Rotation en Y
    //         gsap.to(backEl, {rotateY: backRotation, ease: "power1.out"});
    // // Anime position + rotation carte entière
    //         gsap.to(card, {
    //           xPercent: -50,
    //           yPercent: - 50,
    //           rotate: cardRotation,
    //           ease: "power1.out"
    //         })
    //       }
    //     // }
    //   })
    // })
 }, {scope: containerCardz});

 useEffect(()=>{
  return()=>{
    ScrollTrigger.getAll().forEach((trigger)=>trigger.kill());
  }
 }, []);

return(
  <>
    <ReactLenis root>
      <h2 style={{color:'white'}}>Découvrir mes services </h2>
      <div id='Services' className='containerCard' ref={containerCardz}>
        <section className='cards'>
          
        <div className="card">
          {imgArr.map((item,index)=>(
            
            <div className="card-wrapper">

              <div className="flip-card-inner">
                <div className="flip-card-front">
                <Card
                  key={index}
                  id= {`card-${index+1}`}
                  ref={(el)=> (cardRefs.current[index]= el)}
                  isFooterBlurred
                  radius="lg"
                >
                  <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    width={500}
                    height={500}
                    src={item.link}
                  />
                  <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-tiny text-black/80">{item.title}</p>
                    <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                      Notify me
                    </Button>
                  </CardFooter>
                </Card>
                </div>

              </div>
            </div>
        
          ))}
           </div>
        </section>
      </div>
    </ReactLenis>
  </>
  )
}

export default Services