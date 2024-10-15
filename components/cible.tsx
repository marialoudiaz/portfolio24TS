'use client'
import React, {useState} from 'react';
import '../styles/App.scss';
import '../globals.css';
import { motion, useTransform } from 'framer-motion';
import TextDisperse from './TextDisperse/index'

interface CibleProps {
  infos: {
    hp: string[],
    cta: string[]
  };
  scrollYProgress: number;
}


// Le composant - Suivant l'interface
const Cible: React.FC<CibleProps> = ({scrollYProgress, infos}) => {

  const scale = useTransform(scrollYProgress, [0,1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0,-5]);
  const [isHovered, setisHovered] = useState<boolean>(false);


  const sendChildren=()=>{
    setisHovered(true)
  }
  const handleMouseLeave =()=>{
    setisHovered(false)
  }



  return (

    <motion.div 
      style={{scale, rotate}} 
      onMouseEnter={()=> sendChildren()}  
      onMouseLeave={()=>handleMouseLeave()}
      className="h-screen  text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] bg-[#324f9e] bg-[url('/img/fond-homepage.png')]">
        <h1 style={{fontSize:'1.5em'}}>{infos.hp[0]}</h1>
        
        <TextDisperse element={infos.hp[1]} props={isHovered ? 'true' : 'false'}>
          <h2>{infos.hp[1]}</h2>
        </TextDisperse>

        <h2 style={{color:'white',fontSize:'1.5em'}}>{infos.hp[2]}</h2>
        <button  className='btn-transp'>
                <div>
                
                <svg
                  className='icon-transp'
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Arrow Icon"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>

                <p className='btn-transp-p' style={{fontFamily:'syne', fontWeight:'600', color:'white'}}
                >{infos.cta[0]}</p>
                </div>
        </button>
     </motion.div>    
  )

}
export default Cible;
