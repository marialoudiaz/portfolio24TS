"use client";
import React from 'react';
import '../styles/App.scss';
import { useData } from '@/app/context/DataContext'; // Import du contexte

const Footer: React.FC = () => {
  const { indepArray } = useData();
  if (!indepArray[0] || !indepArray[0].location) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='footer'>
      <div>
        <p className="footer-p">{indepArray[0].location[0]} {indepArray[0].location[1]}</p>
      </div>
    </div>
  );
};

export default Footer;
