import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { disperse } from './animation';
import '../../styles/App.scss';
import '../../globals.css';

interface TextDisperseProps {
  element: string;
  props: string;
  children?: React.ReactNode;
}

const TextDisperse: React.FC<TextDisperseProps> = ({ element, props }) => {

    const [isAnimated, setIsAnimated] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    // const [textClasses, setTextClasses] = useState('text-nothovered');

  //Lancer l'animation
    useEffect(() => {
      if(props==='true'){setIsAnimated(true);} else {setIsAnimated(false);}
    }, [props]);
  //passer le children ('sur-mesure') en props
    const getChars = (word) => {
      console.log(isHovered);
      return word.split("").map((char, i) => (
        <motion.h2
          custom={i}
          variants={disperse}
          animate={isAnimated ? 'open' : 'closed'}
          key={char + i}
          className='text-hovered'
        >
          {char}
        </motion.h2>
      ));
    };
    const manageMouseEnter = () => {
      setIsHovered(true)
    }
    const manageMouseLeave = () => {
      setIsHovered(false)
    }

    return (
      <div 
        style={{cursor:'pointer',display:'flex', flexDirection:'row', alignItems:'center'}}
        onMouseEnter={manageMouseEnter} 
        onMouseLeave={manageMouseLeave} 
      >
        {props === 'true' ? getChars(element) : <h2 style={{color:'white', fontSize:'4.8rem'}}>{element}</h2>}
      </div>
    )
  }

  export default TextDisperse