// src/components/Form.tsx
import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import ContactForm from './contactForm'; // Remplacez par le chemin correct pour le composant
import '../../styles/App.scss';
import '../../globals.css';
import { useData } from '@/app/context/DataContext'; // Importer le contexte
import { useRouter} from 'next/navigation';

const Form: React.FC = () => {
  const { indepArray } = useData();
  const router = useRouter();

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
        <div className='grid-col2'>

          {/* PARTIE GAUCHE */}
          <div className='flex-col'>
            <h2>{form[0]}</h2>
            <h2>{form[1]}</h2>
            <h2 className='syne gold' style={{textTransform:'lowercase'}}>{form[2]}</h2>
            <div className='text-block' style={{ borderTop: 'black 1px solid', paddingTop: '1rem', display: display, flexDirection: 'column' }}>
              <TextTransition springConfig={presets.gentle}>
              <p className='syne gold' style={{textTransform:'lowercase'}}>{words[index % words.length]}</p>
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
              <video id='muguetvideo' width="320" height="240" autoPlay loop muted playsInline>
                <source src='/video/create_brand_identity.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
          
        </div>
      </div>
  );
};

export default Form;
