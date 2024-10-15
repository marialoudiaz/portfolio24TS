import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import ContactForm from '../components/contactForm'; // Remplacer par un chemin correct pour le composant
import '../styles/App.scss';
import '../globals.css'


interface FormProps {
  infos: {
    lang: string,
    cta: string[],
    form: string[],
    words: string[]
  };
}
const Form: React.FC<FormProps> = ({infos}) => {

  //Variables
  const form = infos.form;
  const display = Array.isArray(infos.form) ? infos.form[0] : infos.form;
  const words = infos.words ? infos.words : 'gogo';
  const blabla = infos.form[7];
  const [index, setIndex] = useState(0);
  const langDislay = infos.lang;

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // toutes les 3 secondes
    );
    return () => clearInterval(intervalId); // corriger en clearInterval
  }, []);

  return (
   <>
   <div className='section' id="Contact">

{/* mettre le form en sticky footer */}
      <div className='flex-wrap'>
        <p>{infos.cta[2]}</p>
        <p>{infos.cta[3]}</p>
        <button>{infos.cta[4]}</button>
      </div>
      

      <div className='grid-col2'>
        
        <div className='flex-col' id="citation-form">
          <h3 className='syne'>{form[0]}</h3>
          <h3 className='syne'>{form[1]}</h3>
          <h3 className='syne gold'>{form[2]}</h3>
          <div className='text-block' style={{ borderTop: 'black 1px solid', paddingTop: '1rem', display: display, flexDirection: 'column' }}>
            <TextTransition className='textTransition' springConfig={presets.gentle}>
              {words[index % words.length]}
            </TextTransition>
            <p>{blabla}</p>
          </div>
          {/* <button> 
            {infos.cta[2]}
          </button> */}
        </div>

        {/* PARTIE DROITE */}
        <div className='grid-col2-asym'>
          <div className='formulaire'>
            <ContactForm lang={langDislay} infos={infos} />
          </div>
          <div id="muguet">
            <video id="muguetvideo" autoPlay loop muted playsInline>
              <source src="/videos/create_brand_identity.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

      </div>
    </div>

   </>
  )
}

export default Form