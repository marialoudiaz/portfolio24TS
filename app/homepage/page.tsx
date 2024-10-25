"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useData } from '../context/DataContext';
import '../../styles/App.scss';
import transition from '../transition';
import '../../styles/App.scss';


// Importations dynamiques pour le lazy loading
const Header = dynamic(() => import('../../components/navbar/header'), {
  loading: () => <p>Loading Header...</p>,
});
const Main = dynamic(() => import('../../components/main'), {
  loading: () => <p>Loading Main...</p>,
});
const Prez = dynamic(() => import('../../components/prez'), {
  loading: () => <p>Loading Prez...</p>,
});
const Approche = dynamic(() => import('../../components/approche'), {
  loading: () => <p>Loading Approche...</p>,
});
const Deroule = dynamic(() => import('../../components/deroule'), {
  loading: () => <p>Loading Deroule...</p>,
});
const Formulaire = dynamic(() => import('../../components/formulaire/formulaire'), {
  loading: () => <p>Loading Formulaire...</p>,
});
const Footer = dynamic(() => import('../../components/footer'), {
  loading: () => <p>Loading Footer...</p>
});

const Homepage = () => {

  //l'array updatée dans chargement
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
    // LOGIQUE AVEC LS
    // useEffect(()=>{
      //Récupère les données stockées dans localStorage
    //   const storedData = JSON.parse(localStorage.getItem('data'));
    //   if (storedData){
    //     setData(storedData);
    //   }
    // },[])
    // Les infos dans les arrays a recuperer du local storage
    // if (data){
    //   try{
    //     infos = data.arrayRecue[0]; //recup arrays dans localStorage
    //   } catch (error) {
    //     console.error('Erreur lors de la récupération des données:', error);
    //   }
    // }
    // if (infos.length === 0){
    //   return <div>Pas d'informations disponibles.</div>
    // }

  return (
    <div className='scrollable-container'>
          <Header infos={indepArray}/>
          <Main infos={indepArray} />
          <Prez infos={indepArray} />
          <Approche infos={indepArray} />
          <Deroule infos={indepArray} />
          <Formulaire infos={indepArray} />
          <Footer infos={indepArray}/>
    </div>    
  );
};

export default Homepage;
