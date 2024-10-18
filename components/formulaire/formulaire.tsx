// src/components/Form.tsx
import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import ContactForm from './ContactForm'; // Remplacez par le chemin correct pour le composant
import '../../styles/App.scss';
import '../../globals.css';
import { useData } from '../../app/context/DataContext'; // Import du contexte

const Form: React.FC = () => {
  const { indepArray } = useData();

  const form = indepArray[0].form;
  const display = Array.isArray(indepArray[0].form) ? indepArray[0].form[0] : indepArray[0].form;
  const words = indepArray[0].words ? indepArray[0].words : ['gogo']; // Assurez-vous que c'est un tableau
  const blabla = indepArray[0].form[7];
  const [index, setIndex] = useState(0);
  const langDisplay = indepArray[0].lang;

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // toutes les 3 secondes
    );
    return () => clearInterval(intervalId); // Nettoyer l'intervalle
  }, []);

  return (
    <div className='section' id="Contact">
      <div className='flex-wrap'>
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
          </div>

          {/* PARTIE DROITE */}
          <div className='grid-col2-asym'>
            <div className='formulaire'>
              <ContactForm lang={langDisplay} infos={indepArray[0]} />
            </div>
            <div id="muguet">
              <video id="muguetvideo" autoPlay loop muted playsInline>
                <source src="/videos/create_brand_identity.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
