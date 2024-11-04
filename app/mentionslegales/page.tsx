'use client' 
import React, { useEffect } from 'react';
import { useData } from '../context/DataContext'; // Importer le contexte
import { useRouter} from 'next/navigation';
import Image from 'next/image';
import '../../styles/App.scss';
import '../../globals.css';
import Header from '../../components/navbar/header';


const Ml = () => {
  // retour homepage - usecontext
  const { indepArray } = useData();
  const router = useRouter();
    // Redir si pas datas
  useEffect(()=>{
      if (!indepArray){
        router.push('/');
      }
    }, [indepArray, router])
    if (!indepArray){
      return <div>Loading...</div>
    }
  //variables

  
  return (
    <>
     
      <div className='section-ml'>  
      <Header/>
        <div id='ml'>
          <h1>{indepArray[0].ml[0]}</h1>
          <p>{indepArray[0].ml[1]}</p>

          <h2>{indepArray[0].ml[2]}</h2>
          <p>{indepArray[0].ml[3]}</p>
          
          <h2>{indepArray[0].ml[4]}</h2>
          <p>{indepArray[0].ml[5]}</p>

          <h2>{indepArray[0].ml[6]}</h2>
          <p>{indepArray[0].ml[7]}</p>

          <h2>{indepArray[0].ml[8]}</h2>
          <p>{indepArray[0].ml[9]}</p>
        </div>
      </div>
    </>
   
  )
  
};

export default Ml;