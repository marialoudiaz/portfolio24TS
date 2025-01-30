import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const scrollContainerRef = useRef(null); // Conteneur principal
  const serviceRefs = useRef([]); // Références pour chaque section
  const titleRef = useRef([]); // Références pour chaque section
  const services = [
    {
      id: 1,
      title: ['Web development', 'Développement web'],
      img: '/projets/services/pl-img.jpg',
      alt: 'Site Web Design',
    },
    {
      id: 2,
      title: ['Print design', 'Design imprimé'],
      img: '/projets/services/vb-img.jpg',
      alt: 'Design Print',
    },
    {
      id: 3,
      title: ['Illustration', 'Illustration'],
      img: '/projets/services/nda-2.jpg',
      alt: 'Illustration Artistique',
    },
  ];

  useEffect(() => {
    const sections = serviceRefs.current; // Accéder aux sections
    const container = scrollContainerRef.current; // Conteneur principal
    const title = titleRef.current;

    if (container && sections.length) {
      // Créer une timeline GSAP
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top", // Déclenchement au début
          end: () => `+=${container.scrollWidth}`, // La timeline dure toute la largeur
          scrub: true, // Synchronisation fluide avec le défilement
          pin: true, // Pinner le conteneur
          anticipatePin: 1,
        },
      });

      sections.forEach((section) => {
        // Déplace le conteneur jusqu'à la section
        timeline
        // Étape 1 : Anime le titre
        .fromTo(title,
          { y: -300 }, // Position de départ
          { y: 10, duration: 1 }
        )
        // Étape 2 : Anime le conteneur pour scroller
        .to(container, {
          scrollTo: { x: section.offsetLeft }, // Scroll horizontal vers la section
          duration: 1,
        });
       
      });
    }
    // Nettoyage des triggers à la fin
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <motion.div
      ref={scrollContainerRef} // Référence du conteneur principal
      className="scroll-container"
      style={{
        display: "flex",
        overflowX: "hidden", // Caché car le scroll est géré par GSAP
        scrollSnapType: "none", // Désactivé car GSAP gère le snapping
      }}
    >
      {services.map((item, index) => (
        <motion.div
          key={item.id}
          ref={(el) => {
            if (el) serviceRefs.current[index] = el;
          }}
          className="scroll-item"
          style={{
            position: "relative",
            minWidth: "100vw",
            height: "100vh",
            background: `url(${item.img}) no-repeat center/cover`,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "1rem",
          }}
        >
          <h1 
            className="serv-tit"
            ref={(el) => {
              if (el) titleRef.current[index] = el;
            }}
          >
            {item.title[0]}
          </h1>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Services;
