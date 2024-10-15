"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
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
const Services = dynamic(() => import('../../components/services'), {
  loading: () => <p>Loading Services...</p>,
});
const Approche = dynamic(() => import('../../components/approche'), {
  loading: () => <p>Loading Approche...</p>,
});
// const Projets = dynamic(() => import('../../components/projets'), {
//   loading: () => <p>Loading Projets...</p>,
// });
// const Deroule = dynamic(() => import('../../components/deroule'), {
//   loading: () => <p>Loading Deroule...</p>,
// });
const Formulaire = dynamic(() => import('../../components/formulaire'), {
  loading: () => <p>Loading Formulaire...</p>,
});
const Footer = dynamic(() => import('../../components/footer'), {
  loading: () => <p>Loading Footer...</p>
});

const Homepage = () => {
  const [data, setData] = useState(null);
  // const searchParams = useSearchParams();
  // const lang = searchParams.get('lang');
  let infos = [];

  useEffect(()=>{
    //Récupère les données stockées dans localStorage
    const storedData = JSON.parse(localStorage.getItem('data'));
    if (storedData){
      setData(storedData);
    }
  },[])
  // Les infos dans les arrays a recuperer du local storage
  if (data){
    try{
      infos = data.arrayRecue[0]; //recup arrays dans localStorage
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  }
  if (infos.length === 0){
    return <div>Pas d'informations disponibles.</div>
  }

  return (
    <div className='scrollable-container'>
        <Header infos={infos}/>
        <Main infos={infos} />
        <Prez infos={infos}/>
        <Services infos={infos} />
        <Approche infos={infos} />
        <Formulaire infos={infos} />
        <Footer infos={infos}/>
    </div>    
  );
};

export default Homepage;
