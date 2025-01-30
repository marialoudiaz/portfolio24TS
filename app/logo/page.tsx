"use client"; // Marquer ce composant comme Client Component
import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation'; // Importer useRouter depuis next/navigation
import '../../styles/App.scss';
import Image
 from 'next/image';
const Logo = () => {
  const router = useRouter();
  const [opacity, setOpacity] = useState(1);

// Aller à page chargement après Animation du logo
//Faire au chargement du site
useEffect(() => {
  console.log(opacity);
  setTimeout(() => {
    setOpacity(0);
  }, 1000);
  setTimeout(() => {
    router.push(`/chargement`);
  }, 2000); 
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [router]);

  return (
    <>
    <div className='bg-color-anim'>
      <div style={{position:'relative'}}>
       <Image id='logo-bg' src='/logo/logo-ful-yt.png' alt='logo en blanc sur fond de couleur' width={380} height={210}/>
      </div>
    </div>
    </>
  );
};

export default Logo;
