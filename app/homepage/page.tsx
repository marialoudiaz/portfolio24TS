"use client";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useData } from '../context/DataContext';
import '../../styles/App.scss';
import '../../styles/App.scss';

// Importations dynamiques pour le lazy loading
const Header = dynamic(() => import('../../components/navbar/header'), {
  loading: () => <div>Loading Header...</div>,
});
const Main = dynamic(() => import('../../components/main'), {
  loading: () => <div>Loading Main...</div>,
});
<<<<<<< HEAD
const Prez = dynamic(() => import('../../components/prez'), {
  loading: () => <div>Loading Prez...</div>,
});
const Approche = dynamic(() => import('../../components/approche'), {
  loading: () => <div>Loading Approche...</div>,
});
=======
const Approche = dynamic(() => import('../../components/approche'), {
  loading: () => <div>Loading Approche...</div>,
});
const Prez = dynamic(() => import('../../components/prez'), {
  loading: () => <div>Loading Prez...</div>,
});
>>>>>>> new git repo
const Deroule = dynamic(() => import('../../components/deroule'), {
  loading: () => <div>Loading Deroule...</div>,
});
const Formulaire = dynamic(() => import('../../components/formulaire/formulaire'), {
  loading: () => <div>Loading Formulaire...</div>,
});
const Footer = dynamic(() => import('../../components/footer'), {
  loading: () => <div>Loading Footer...</div>
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
          <Header/>
          <Main/>
          <Approche />
          <Prez/>
          <Deroule/>
          <Formulaire/>
          <Footer />
    </div>    
  );
};

export default Homepage;
