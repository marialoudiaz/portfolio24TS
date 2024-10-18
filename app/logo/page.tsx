"use client"; // Marquer ce composant comme Client Component
import React, {useEffect, useState} from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // Importer useRouter depuis next/navigation
import '../../styles/App.scss';
import Image
 from 'next/image';
const Logo = () => {
  const router = useRouter();
  const [opacity, setOpacity] = useState(1);

// Aller à page chargement après Animation du logo
//Faire au chargement du site
useEffect(() => {
  setTimeout(() => {
    setOpacity(0);
  }, 1800);
  setTimeout(() => {
    router.push(`/chargement`);
  }, 3000); 
}, [router]);

  return (
    <>
    <div className='bg-color-anim'>
      <Image src='/logo/logo-ful-yt.png' alt='logo en blanc sur fond de couleur' width={400} height={210} style={{ opacity: opacity, transition: 'opacity 1s ease' }}/>
      <div id='anim-logo1'><Image src='/logo/logo-ful-yt.png' alt='logo en blanc sur fond de couleur' width={400} height={210}/></div>
      <div id='anim-logo2'><Image src='/logo/logo-ful-yt.png' alt='logo en blanc sur fond de couleur' width={400} height={210}/></div>
      <div id='anim-logo3'><Image src='/logo/logo-ful-yt.png' alt='logo en blanc sur fond de couleur' width={400} height={210}/></div>
    </div>
    </>
  );
};

export default Logo;
