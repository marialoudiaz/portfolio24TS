import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

function Services() {
  const services = [
    {
      id: 1,
      title: ['Web development', 'Développement web'],
      img: '/projets/services/pl-img.jpg',
      alt: 'Site Web Design',
      txt:'Design et development of websites',
    },
    {
      id: 2,
      title: ['Print design', 'Design imprimé'],
      img: '/projets/services/vb-img.jpg',
      alt:'print',
      txt: 'Print design and packaging. Ideal for artisans, farmers, chefs, conscious producers, food brands, and hospitality spaces',
    },
    {
      id: 3,
      title: ['Illustration', 'Illustration'],
      img: '/projets/services/nda-2.jpg',
      alt: 'Illustration Artistique',
      txt:'Illustrations for brand identity and book covers',
    },
  ];


  return (

    <div className='grid-col3'>
      {services.map((item) => (
        <div key={item.id}>
          <h1 className="serv-tit">{item.title[0]}</h1>
          <Image
            src={item.img}
            alt={item.alt}
            width={300}
            height={300}
          />
          <p>{item.txt}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
