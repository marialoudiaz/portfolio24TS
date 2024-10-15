import React from 'react'
import detail from '../public/icons/approche/detail.png';
import authenticity from '../public/icons/approche/authenticity.png';
import harmony from '../public/icons/approche/harmony.png';
import nature from '../public/icons/approche/nature.png';
import color from '../public/icons/approche/color.png';
import minimalism from '../public/icons/approche/minimalism.png';
import Image from 'next/image';
import Carousel from '../components/carousel';
import Typewriter from 'typewriter-effect';
import '../styles/App.scss'


interface ApprocheProps {
  infos: {
    approche: string[];
  };
}
const Approche: React.FC<ApprocheProps> = ({infos}) => {

      //le portrait
      const portrait = infos.approche[14].src;
      console.log('portrait', portrait);
      // Les éléments de la section
      const approchez = infos.approche[0];
      const citation = infos.approche[1];
       // Les élements du carousel
       const dataArray = [
        {
          index: 0,
          image: authenticity,
          alt: "cercle avec un trait noir au centre à l'encre de chine",
          titre: `${infos.approche[2]}`,
          text: `${infos.approche[3]}`,
        },
        {
          index: 1,
          image: detail,
          alt: "oeil à l'encre de chine",
          titre: `${infos.approche[4]}`,
          text: `${infos.approche[5]}`,
        },
        {
          index: 2,
          image: harmony,
          alt: "symbole symétrique à l'encre de chine",
          titre: `${infos.approche[6]}`,
          text: `${infos.approche[7]}`,
        },
        {
          index: 3,
          image: nature,
          alt: "plante minimaliste à l'encre de chine",
          titre: `${infos.approche[8]}`,
          text: `${infos.approche[9]}`,
        },
        {
          index: 4,
          image: minimalism,
          alt: "trombone stylisé à l'encre de chine",
          titre: `${infos.approche[10]}`,
          text: `${infos.approche[11]}`,
        },
        {
          index: 5,
          image: color,
          alt: "trait doré à l'encre de chine",
          titre: `${infos.approche[12]}`,
          text: `${infos.approche[13]}`,
        },
      ];


  return (
    <>
      <div style={{marginTop:'15rem'}}>
        <div className='grid-col2'>
          <img className='grid-col2-img' src={portrait} alt='autoportrait souriant en noir et blanc'/>
          <div className='flex-col' style={{justifyContent:'center'}}>
            <div className='flex-col-center'>
              <Image
                src="/logo/medaillon.png"
                alt="le logo sous forme de médaillon"
                width={96}
                height={100}
              />
              <h2>{approchez}</h2>
              <h3 className='syne'>

              <Typewriter
                  options={{
                  strings: [`${citation}`],
                  autoStart: true,
                  loop: true,
                  }}
              />

              </h3>
              <Carousel dataArray={dataArray} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Approche