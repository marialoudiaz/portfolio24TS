import React from 'react'
import authenticity from '../public/icons/approche/authenticity.png';
import nature from '../public/icons/approche/nature.png';
import minimalism from '../public/icons/approche/minimalism.png';
import Image from 'next/image';
import Carousel from '../components/carousel';
// import Typewriter from 'typewriter-effect';
import '../styles/App.scss'
import { useData } from '@/app/context/DataContext';

// Approche avec LS
// interface ApprocheProps {
//   infos: {
//     approche: string[];
//   };
// }
const Approche: React.FC = () => {

      //Array recue
      const {indepArray}=useData();
      //Si données pas encore dispos
      if (!indepArray[0] || !indepArray[0].approche){
        return <div>Loading...</div>
      }
      //le portrait
      const portrait = indepArray[0].approche[14].src;
      // Les éléments de la section
      const approchez = indepArray[0].approche[0];
      const citation = indepArray[0].approche[1];
       // Les élements du carousel
       const dataArray = [
        {
          index: 0,
          image: authenticity,
          alt: "cercle avec un trait noir au centre à l'encre de chine",
          titre: `${indepArray[0].values[0]}`,
          text: `${indepArray[0].values[1]}`,
        },
        // {
        //   index: 1,
        //   image: detail,
        //   alt: "oeil à l'encre de chine",
        //   titre: `${indepArray[0].approche[4]}`,
        //   text: `${indepArray[0].approche[5]}`,
        // },
        // {
        //   index: 2,
        //   image: harmony,
        //   alt: "symbole symétrique à l'encre de chine",
        //   titre: `${indepArray[0].approche[6]}`,
        //   text: `${indepArray[0].approche[7]}`,
        // },
        // {
        //   index: 3,
        //   image: nature,
        //   alt: "plante minimaliste à l'encre de chine",
        //   titre: `${indepArray[0].approche[8]}`,
        //   text: `${indepArray[0].approche[9]}`,
        // },
        {
          index: 1,
          image: minimalism,
          alt: "trombone stylisé à l'encre de chine",
          titre: `${indepArray[0].values[3]}`,
          text: `${indepArray[0].values[4]}`,
        },
         {
          index: 2,
          image: nature,
          alt: "plante a lencre de chine",
          titre: `${indepArray[0].values[5]}`,
          text: `${indepArray[0].values[6]}`,
        },
        // {
        //   index: 5,
        //   image: color,
        //   alt: "trait doré à l'encre de chine",
        //   titre: `${indepArray[0].approche[12]}`,
        //   text: `${indepArray[0].approche[13]}`,
        // },
      ];


  return (
    <>
      <div>
        <div className='prez'>
          <div className='flex-wrap'>
              <Image
                src="/logo/medaillon.png"
                alt="le logo sous forme de médaillon"
                width={96}
                height={100}
              />
              {/* <span className='syne'>
               <Typewriter
                  options={{
                  strings: [`${citation}`],
                  autoStart: true,
                  loop: true,
                  }}
              </span> */}
              <Carousel dataArray={dataArray} />
            </div>
        </div>
        {/* <div className='grid-col2'>
          <Image 
            className='grid-col2-img' 
            src={portrait} 
            width={1000}
            height={0}
            alt='autoportrait souriant en noir et blanc'
          />
          <div className='flex-col' style={{justifyContent:'center', marginTop:'1rem'}}>
            <div className='flex-wrap'>
              <Image
                src="/logo/medaillon.png"
                alt="le logo sous forme de médaillon"
                width={96}
                height={100}
              />
              <h2>{approchez}</h2>
              <span className='syne'>
              <Typewriter
              
                  options={{
                  strings: [`${citation}`],
                  autoStart: true,
                  loop: true,
                  }}
              />
              </span>
              <Carousel dataArray={dataArray} />
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Approche