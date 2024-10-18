'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useData } from '../../app/context/DataContext';
import '../../styles/App.scss';
import Image from 'next/image';
import logo from '../../public/logo/logo-nav.png';
import Link from "next/link";
import MobileNavbar from '../navbar/mobileHeader';

//Avec LS
// interface HeaderProps {
//   arrayRecu: string[],
//   infos: {
//     header: string[]
//   }
// }

const Header = () => {

//Variables
  const router = useRouter();
  const { indepArray } = useData();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: '#Services', label: indepArray[0].header[0], id: 'service' },
    { href: '#Source', label: indepArray[0].header[1], id: 'source' },
    { href: '#Contact', label: 'Contact', id: 'contact' }
  ];
  console.log('links',indepArray[0].header[0] )

////Fonctions
//Retour Homepage
  const handleClick = () => {
    router.push(`/homepage`);  // redirection vers la page d'accueil
  };
// Fonctions Hover
  const onHover = (link) => {
    setHoveredLink(link);
  };
  const onLeave = () => {
    setHoveredLink(null);
  };
// Fonction menu mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      {/* Navbar desktop */}
      <div className="navbar hidden md:block"> {/* Media query via Tailwind CSS or your CSS file */}
        <div className='navbar-container'>
          <div className='navbar-left' onClick={handleClick}>
            <Image src={logo} width={220} height={120} alt="logo" />
          </div>
         
          <div className='navbar-right'>
            {navLinks.map(link => (
              <Link key={link.id} href={link.href} className='button-navbar'>
                <p
                  className={hoveredLink === link.id ? 'hovered-link' : ''}
                  onMouseEnter={() => onHover(link.id)}
                  onMouseLeave={onLeave}
                >
                  {link.label}
                </p>
              </Link>
            ))}
          </div>
        

        </div>
      </div>

      {/* Navbar mobile */}
      <div className="md:hidden"> {/* Cache sur les écrans >= 768px */}
        <MobileNavbar isOpen={isOpen} infos={indepArray.header} toggleMenu={toggleMenu} />
      </div>
    </>
  );
};

export default Header;
